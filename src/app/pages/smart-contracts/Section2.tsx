import { TitleSlide } from '../../components/templates/TitleSlide';
import { TakeawaySlide } from '../../components/templates/TakeawaySlide';
import { SectionNav } from '../../components/navigation/SectionNav';
import { Cog } from 'lucide-react';

const chapters = [
  { id: 's2-workflow',      label: 'Workflow' },
  { id: 's2-components',   label: 'Core Components' },
  { id: 's2-execution',    label: 'Execution Environment' },
  { id: 's2-web3',         label: 'The Web3 Landscape' },
  { id: 's2-dapp',         label: 'dApp & Smart Contracts' },
  { id: 's2-vs',           label: 'Web3 vs Traditional' },
  { id: 's2-capabilities', label: 'New Capabilities' },
  { id: 's2-why',          label: 'Why Build with SC?' },
  { id: 's2-gas',          label: 'Gas & Tx Economics' },
  { id: 's2-takeaways',    label: 'Takeaways' },
];

function Stub({ id, label }: { id: string; label: string }) {
  return (
    <div id={id} className="h-full flex items-center justify-center p-8">
      <div className="text-center text-muted-foreground">
        <div className="text-4xl mb-4">🔧</div>
        <p className="text-lg font-medium">{label} — coming soon</p>
      </div>
    </div>
  );
}

export function SC_Section2() {
  return (
    <div className="h-full w-full flex overflow-hidden">
      <div className="w-44 shrink-0 h-full hidden lg:block border-r border-border">
        <SectionNav chapters={chapters} />
      </div>
      <div id="section-scroll" className="flex-1 overflow-y-auto snap-y snap-mandatory">
        <div className="slide-flow">

        <div className="h-full">
          <TitleSlide
            sectionNumber="SECTION 02"
            title="How Smart Contracts Work"
            subtitle="Workflow, EVM, Web3 landscape, gas economics, and why you should build with them"
            icon={<Cog className="size-20 text-[#6366f1]" />}
            gradient="from-[#6366f1] to-[#8b5cf6]"
          />
        </div>

        {/* ═══════ WORKFLOW ═══════ */}
        <div id="s2-workflow" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">How Smart Contracts Work</h2>
            <p className="text-muted-foreground text-sm mt-1">Five steps from deployment to notification — all on-chain, all automatic.</p>
          </div>

          <div className="flex-1 min-h-0 flex items-center justify-center">
            <div className="w-full max-w-4xl">
              {/* Steps row */}
              <div className="flex items-stretch gap-0 mb-6">
                {[
                  { step: '01', label: 'Deploy',   emoji: '📤', color: '#6366f1', desc: 'Contract code is compiled and uploaded to the blockchain. It gets a permanent address — immutable from this point on.' },
                  { step: '02', label: 'Trigger',  emoji: '⚡', color: '#8b5cf6', desc: 'A user or system sends a transaction to the contract address, calling a function with the required inputs.' },
                  { step: '03', label: 'Execute',  emoji: '⚙️', color: '#39B54A', desc: 'The EVM (or equivalent VM) runs the contract code on every node in the network simultaneously.' },
                  { step: '04', label: 'Update',   emoji: '🔗', color: '#f59e0b', desc: 'State changes are recorded on the blockchain — permanent, transparent, and agreed upon by consensus.' },
                  { step: '05', label: 'Emit',     emoji: '📡', color: '#ED1C24', desc: 'Events are emitted and logged on-chain, notifying off-chain systems (front-ends, indexers, oracles).' },
                ].map((s, i) => (
                  <div key={s.step} className="flex items-stretch flex-1">
                    <div
                      className="flex-1 p-4 rounded-xl border-2 flex flex-col gap-2"
                      style={{ borderColor: s.color + '50', backgroundColor: s.color + '0d' }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{s.emoji}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: s.color }}>{s.step}</span>
                      </div>
                      <div className="font-black text-base text-foreground">{s.label}</div>
                      <p className="text-xs text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                    </div>
                    {i < 4 && (
                      <div className="flex items-center px-1 text-muted-foreground text-lg shrink-0">→</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Code illustration */}
              <div className="p-4 bg-card border border-border rounded-xl font-mono text-xs">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-[#ED1C24]" />
                    <div className="size-2.5 rounded-full bg-[#f59e0b]" />
                    <div className="size-2.5 rounded-full bg-[#39B54A]" />
                  </div>
                  <span className="text-muted-foreground text-[10px]">SimpleEscrow.sol</span>
                </div>
                <div className="space-y-0.5 text-[11px]">
                  <div><span className="text-[#8b5cf6]">contract</span> <span className="text-[#6366f1]">SimpleEscrow</span> {'{'}</div>
                  <div className="pl-4"><span className="text-[#f59e0b]">address</span> <span className="text-muted-foreground">public</span> buyer, seller;</div>
                  <div className="pl-4"><span className="text-[#f59e0b]">uint</span> <span className="text-muted-foreground">public</span> amount;</div>
                  <div className="pl-4 text-muted-foreground">{'// ← State variables'}</div>
                  <div className="mt-1 pl-4"><span className="text-[#39B54A]">event</span> <span className="text-[#6366f1]">Released</span>(address to, uint value); <span className="text-muted-foreground">{'// ← Emit'}</span></div>
                  <div className="mt-1 pl-4"><span className="text-[#8b5cf6]">function</span> <span className="text-[#6366f1]">release</span>() <span className="text-muted-foreground">external</span> {'{'}</div>
                  <div className="pl-8 text-muted-foreground">{'// ← Execute: only buyer can release'}</div>
                  <div className="pl-8"><span className="text-[#ED1C24]">require</span>(msg.sender == buyer);</div>
                  <div className="pl-8">seller.transfer(amount); <span className="text-muted-foreground">{'// ← Update state'}</span></div>
                  <div className="pl-8"><span className="text-[#ED1C24]">emit</span> Released(seller, amount);</div>
                  <div className="pl-4">{'}'}</div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ ANATOMY ═══════ */}
        <div id="s2-components" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Anatomy of a Smart Contract</h2>
            <p className="text-muted-foreground text-sm mt-1">Every smart contract is made of five building blocks — understanding them is understanding the language of Web3.</p>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-2 gap-5">

            {/* Left: component cards */}
            <div className="flex flex-col gap-3">
              {[
                { color: '#6366f1', emoji: '📋', title: 'Code',               desc: 'The business logic and conditional statements. Written in Solidity (Ethereum), Rust (Solana), or Vyper. Once deployed, the code is immutable.' },
                { color: '#8b5cf6', emoji: '💾', title: 'State',              desc: 'Stored data that the contract maintains and modifies over time. Examples: token balances, ownership records, vote counts. Persisted on-chain.' },
                { color: '#39B54A', emoji: '⚙️', title: 'Functions',          desc: 'Specific operations callable by external parties or other contracts. Can be read-only (free) or state-changing (costs gas).' },
                { color: '#f59e0b', emoji: '📡', title: 'Events',             desc: 'Logs that record important contract activities. Emitted when key actions occur — cheaply stored and readable by off-chain systems.' },
                { color: '#ED1C24', emoji: '🌐', title: 'Blockchain Platform', desc: 'The execution environment. Ethereum, Polygon, Solana, BNB Chain… Each has different performance, cost, and tooling trade-offs.' },
              ].map(c => (
                <div key={c.title} className="flex items-start gap-3 p-3 bg-card border border-border rounded-xl flex-1" style={{ borderColor: c.color + '30' }}>
                  <div className="size-8 rounded-lg flex items-center justify-center shrink-0 text-base" style={{ backgroundColor: c.color + '20' }}>{c.emoji}</div>
                  <div>
                    <div className="font-bold text-sm mb-0.5" style={{ color: c.color }}>{c.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: annotated code */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Annotated contract</div>
              <div className="flex-1 p-4 bg-card border border-border rounded-xl font-mono text-[11px] leading-relaxed">
                <div className="space-y-1">
                  <div className="text-muted-foreground">{'// SPDX-License-Identifier: MIT'}</div>
                  <div><span className="text-[#8b5cf6]">pragma solidity</span> ^0.8.0;</div>
                  <div className="mt-2"><span className="text-[#8b5cf6]">contract</span> <span className="text-[#6366f1]">Voting</span> {'{'}</div>

                  <div className="mt-2 pl-4 flex items-start gap-2">
                    <div className="flex-1">
                      <div className="text-muted-foreground">{'// ─── State ───────────────────────'}</div>
                      <div><span className="text-[#8b5cf6]">mapping</span>(<span className="text-[#f59e0b]">address</span> =&gt; <span className="text-[#f59e0b]">bool</span>) <span className="text-muted-foreground">public</span> hasVoted;</div>
                      <div><span className="text-[#f59e0b]">uint</span> <span className="text-muted-foreground">public</span> yesCount;</div>
                    </div>
                    <div className="shrink-0 text-[10px] px-2 py-0.5 rounded bg-[#8b5cf6]/20 text-[#8b5cf6] font-bold whitespace-nowrap self-start">💾 State</div>
                  </div>

                  <div className="mt-2 pl-4 flex items-start gap-2">
                    <div className="flex-1">
                      <div className="text-muted-foreground">{'// ─── Event ───────────────────────'}</div>
                      <div><span className="text-[#39B54A]">event</span> <span className="text-[#6366f1]">Voted</span>(<span className="text-[#f59e0b]">address</span> voter, <span className="text-[#f59e0b]">bool</span> vote);</div>
                    </div>
                    <div className="shrink-0 text-[10px] px-2 py-0.5 rounded bg-[#f59e0b]/20 text-[#f59e0b] font-bold whitespace-nowrap self-start">📡 Event</div>
                  </div>

                  <div className="mt-2 pl-4 flex items-start gap-2">
                    <div className="flex-1">
                      <div className="text-muted-foreground">{'// ─── Function ────────────────────'}</div>
                      <div><span className="text-[#8b5cf6]">function</span> <span className="text-[#6366f1]">vote</span>(<span className="text-[#f59e0b]">bool</span> inFavor) <span className="text-muted-foreground">external</span> {'{'}</div>
                      <div className="pl-4"><span className="text-[#ED1C24]">require</span>(!hasVoted[msg.sender]);</div>
                      <div className="pl-4">hasVoted[msg.sender] = <span className="text-[#39B54A]">true</span>;</div>
                      <div className="pl-4"><span className="text-[#8b5cf6]">if</span> (inFavor) yesCount++;</div>
                      <div className="pl-4"><span className="text-[#ED1C24]">emit</span> Voted(msg.sender, inFavor);</div>
                      <div>{'}'}</div>
                    </div>
                    <div className="shrink-0 text-[10px] px-2 py-0.5 rounded bg-[#39B54A]/20 text-[#39B54A] font-bold whitespace-nowrap self-start">⚙️ Function</div>
                  </div>

                  <div>{'}'}</div>
                </div>
              </div>

              <div className="p-3 bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Platform matters:</span> this Solidity contract deploys to Ethereum, Polygon, Arbitrum, Base, and any EVM-compatible chain with zero code changes.
              </div>
            </div>

          </div>
        </div>

        {/* ═══════ EXECUTION ENVIRONMENT ═══════ */}
        <div id="s2-execution" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Execution Environment</h2>
            <p className="text-muted-foreground text-sm mt-1">Why smart contracts run the same way, everywhere, every time.</p>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-2 gap-5">

            {/* Left: four properties */}
            <div className="flex flex-col gap-3">
              {[
                {
                  color: '#6366f1', emoji: '🖥️', title: 'Virtual Machines',
                  subtitle: 'Isolated execution environments',
                  desc: 'The EVM (Ethereum), SVM (Solana), WASM (Polkadot, Near)… Each VM is a sandboxed environment that cannot access the host machine\'s filesystem, network, or memory. Code runs in isolation — securely and predictably.',
                  examples: ['EVM — Ethereum, Polygon, Arbitrum', 'SVM — Solana', 'MoveVM — Aptos, Sui', 'WASM — Polkadot, Near'],
                },
                {
                  color: '#39B54A', emoji: '🌐', title: 'Distributed Execution',
                  subtitle: 'Same code runs on thousands of nodes',
                  desc: 'When a transaction triggers a smart contract, every full node in the network runs the same code independently. There is no single server — execution is replicated across the globe.',
                  examples: ['Ethereum: ~7,000 full nodes', 'Redundancy eliminates single points of failure', 'No one can selectively block execution'],
                },
                {
                  color: '#f59e0b', emoji: '📐', title: 'Deterministic Results',
                  subtitle: 'Identical inputs always produce identical outputs',
                  desc: 'Smart contracts cannot use randomness, real-time clocks, or external data without special tools. This constraint is what makes distributed consensus possible — every node must agree on the result.',
                  examples: ['No Math.random()', 'No Date.now()', 'External data requires oracles (Chainlink)', 'Randomness requires commit-reveal or VRF'],
                },
                {
                  color: '#ED1C24', emoji: '🤝', title: 'Consensus Requirement',
                  subtitle: 'Majority agreement required for state changes',
                  desc: 'After execution, nodes compare results. Only if a supermajority agrees on the output does the state change get written to the blockchain. A single malicious node cannot affect the outcome.',
                  examples: ['PoS: validators attest to execution results', 'Invalid transactions are rejected network-wide', 'Double-spend or invalid state = rejected'],
                },
              ].map(p => (
                <div key={p.title} className="flex-1 p-4 bg-card border border-border rounded-xl flex gap-3" style={{ borderColor: p.color + '30' }}>
                  <div className="size-10 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ backgroundColor: p.color + '15' }}>{p.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-sm text-foreground">{p.title}</div>
                    <div className="text-xs font-semibold mb-1" style={{ color: p.color }}>{p.subtitle}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: EVM landscape diagram */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">EVM-compatible ecosystem</div>

              <div className="flex-1 flex flex-col gap-2 p-4 bg-card border border-border rounded-xl">
                {/* Core EVM */}
                <div className="text-center p-3 rounded-xl bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/10 border-2 border-[#6366f1]/50">
                  <div className="text-xs font-bold text-[#6366f1] uppercase tracking-widest mb-1">Ethereum Virtual Machine (EVM)</div>
                  <div className="text-xs text-muted-foreground">The original standard — runs Solidity & Vyper bytecode</div>
                </div>

                <div className="text-center text-muted-foreground text-sm">↓ compatible with ↓</div>

                {/* L1 EVM chains */}
                <div>
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">EVM-compatible L1 chains</div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {['BNB Chain', 'Avalanche C-Chain', 'Fantom', 'Cronos', 'Celo', 'Gnosis'].map(c => (
                      <div key={c} className="text-center py-1.5 px-2 bg-[#6366f1]/08 border border-[#6366f1]/20 rounded-lg text-[11px] text-muted-foreground">{c}</div>
                    ))}
                  </div>
                </div>

                {/* L2 */}
                <div>
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">Ethereum L2s (EVM-compatible)</div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {['Arbitrum', 'Optimism', 'Base', 'Polygon', 'zkSync', 'Scroll'].map(c => (
                      <div key={c} className="text-center py-1.5 px-2 bg-[#39B54A]/08 border border-[#39B54A]/20 rounded-lg text-[11px] text-muted-foreground">{c}</div>
                    ))}
                  </div>
                </div>

                {/* Non-EVM */}
                <div>
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">Non-EVM VMs</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { name: 'SVM', chain: 'Solana', color: '#9945FF' },
                      { name: 'MoveVM', chain: 'Aptos / Sui', color: '#00D4AA' },
                      { name: 'CosmWasm', chain: 'Cosmos chains', color: '#6366f1' },
                      { name: 'Ink! / WASM', chain: 'Polkadot', color: '#E6007A' },
                    ].map(v => (
                      <div key={v.name} className="py-1.5 px-2 bg-muted border border-border rounded-lg flex items-center gap-1.5">
                        <div className="size-2 rounded-full shrink-0" style={{ backgroundColor: v.color }} />
                        <span className="text-[11px] font-bold text-foreground">{v.name}</span>
                        <span className="text-[10px] text-muted-foreground ml-auto">{v.chain}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto p-2 bg-[#6366f1]/08 border border-[#6366f1]/20 rounded-lg text-xs text-muted-foreground text-center">
                  <span className="font-semibold text-foreground">Deploy once, run anywhere:</span> EVM-compatible chains share the same bytecode standard — one Solidity contract works across 30+ chains.
                </div>
              </div>
            </div>

          </div>
        </div>
        <Stub id="s2-web3"         label="The Web3 Landscape" />
        <Stub id="s2-dapp"         label="dApp & Smart Contracts" />
        <Stub id="s2-vs"           label="Web3 vs Traditional Apps" />
        <Stub id="s2-capabilities" label="New Capabilities" />
        <Stub id="s2-why"          label="Why Build with Smart Contracts?" />
        <Stub id="s2-gas"          label="Gas & Transaction Economics" />

        <div id="s2-takeaways" className="h-full">
          <TakeawaySlide
            title="Section 02 — Key Takeaways"
            takeaways={[
              'Smart contracts run inside a deterministic virtual machine (EVM) — every node gets the same result',
              'Core components: state variables, functions, events, modifiers, and ABI',
              'Web3 dApps combine a front-end with a wallet and on-chain smart contract logic',
              'Gas is the cost of computation — every operation has a price in ETH',
              'Smart contracts enable programmable money, automated settlement, and trustless governance',
            ]}
          />
        </div>

        </div>
      </div>
    </div>
  );
}
