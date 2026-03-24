import { TitleSlide } from '../../components/templates/TitleSlide';
import { TakeawaySlide } from '../../components/templates/TakeawaySlide';
import { TimelineSlide } from '../../components/templates/TimelineSlide';
import { SectionNav } from '../../components/navigation/SectionNav';
import { FileCode2 } from 'lucide-react';

const chapters = [
  { id: 's1-what',     label: 'What is a Smart Contract?' },
  { id: 's1-szabo',    label: 'Nick Szabo\'s Vending Machine' },
  { id: 's1-history',  label: 'Historical Evolution' },
  { id: 's1-takeaways', label: 'Takeaways' },
];


export function SC_Section1() {
  return (
    <div className="h-full w-full flex overflow-hidden">
      <div className="w-44 shrink-0 h-full hidden lg:block border-r border-border">
        <SectionNav chapters={chapters} />
      </div>
      <div id="section-scroll" className="flex-1 overflow-y-auto snap-y snap-mandatory">
        <div className="slide-flow">

        {/* ═══════ TITLE ═══════ */}
        <div className="h-full">
          <TitleSlide
            sectionNumber="SECTION 01"
            title="Introduction to Smart Contracts"
            subtitle="Fundamentals, history, and the essential blockchain knowledge you need"
            icon={<FileCode2 className="size-20 text-[#6366f1]" />}
            gradient="from-[#6366f1] to-[#8b5cf6]"
          />
        </div>

        {/* ═══════ 1. WHAT IS A SMART CONTRACT ═══════ */}
        <div id="s1-what" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">What is a Smart Contract?</h2>
            <p className="text-muted-foreground text-sm mt-1">A program that lives on a blockchain — and runs exactly as written, every time.</p>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-2 gap-5">

            {/* Left: definition + analogy */}
            <div className="flex flex-col gap-4">
              <div className="p-5 bg-gradient-to-br from-[#6366f1]/15 to-transparent border border-[#6366f1]/40 rounded-xl">
                <div className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-2">Definition</div>
                <p className="text-base text-foreground font-medium leading-relaxed">
                  A <span className="font-black text-[#6366f1]">smart contract</span> is a self-executing program stored on a blockchain whose terms are written directly in code — not in natural language.
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  When predefined conditions are met, the contract executes automatically. No intermediary. No manual trigger. No possibility of censorship or tampering.
                </p>
              </div>

              <div className="p-4 bg-card border border-border rounded-xl">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Traditional contract vs Smart contract</div>
                <div className="space-y-2">
                  {[
                    { trad: 'Written in legal language', smart: 'Written in code (Solidity, Rust…)' },
                    { trad: 'Enforced by courts & lawyers', smart: 'Enforced by the blockchain protocol' },
                    { trad: 'Requires trust between parties', smart: 'Trustless — math enforces terms' },
                    { trad: 'Can be misinterpreted', smart: 'Deterministic — one execution path' },
                    { trad: 'Paper trail, slow disputes', smart: 'On-chain, instant, irreversible' },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-2 gap-2 text-xs">
                      <div className="px-2 py-1.5 rounded bg-[#ED1C24]/10 text-muted-foreground border border-[#ED1C24]/20">❌ {row.trad}</div>
                      <div className="px-2 py-1.5 rounded bg-[#39B54A]/10 text-muted-foreground border border-[#39B54A]/20">✅ {row.smart}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: key properties */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Key properties</div>
              {[
                { color: '#6366f1', emoji: '⚙️', title: 'Autonomous', desc: 'Executes automatically when conditions are satisfied. No human needs to trigger or approve anything after deployment.' },
                { color: '#8b5cf6', emoji: '🔒', title: 'Immutable', desc: 'Once deployed to the blockchain, the code cannot be changed. What you deploy is what runs — forever.' },
                { color: '#39B54A', emoji: '🌐', title: 'Transparent', desc: 'Anyone can read the contract code on-chain. There are no hidden clauses — the logic is fully public and auditable.' },
                { color: '#f59e0b', emoji: '📐', title: 'Deterministic', desc: 'Given the same inputs, a smart contract always produces the same output. Every node on the network agrees on the result.' },
                { color: '#ED1C24', emoji: '🛡️', title: 'Trustless', desc: 'Parties do not need to trust each other — they only need to trust the code. The protocol enforces every term.' },
              ].map(p => (
                <div key={p.title} className="flex items-start gap-3 p-3 bg-card border border-border rounded-xl flex-1" style={{ borderColor: p.color + '30' }}>
                  <div className="text-xl shrink-0">{p.emoji}</div>
                  <div>
                    <div className="font-bold text-sm mb-0.5" style={{ color: p.color }}>{p.title}</div>
                    <div className="text-xs text-muted-foreground">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ═══════ 2. NICK SZABO'S VENDING MACHINE ═══════ */}
        <div id="s1-szabo" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-5">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Nick Szabo's Vending Machine</h2>
            <p className="text-muted-foreground text-sm mt-1">The original analogy — and the mind behind the concept, 30 years before DeFi.</p>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">

            {/* Left: Szabo bio + quote */}
            <div className="flex flex-col gap-4">
              <div className="p-5 bg-gradient-to-br from-[#6366f1]/15 to-transparent border border-[#6366f1]/40 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-white font-black shrink-0">NS</div>
                  <div>
                    <div className="font-black text-foreground">Nick Szabo</div>
                    <div className="text-xs text-muted-foreground">Computer Scientist · Legal Scholar · Cryptographer</div>
                  </div>
                </div>
                <blockquote className="border-l-2 border-[#6366f1] pl-4 italic text-sm text-muted-foreground">
                  "A smart contract is a set of promises, specified in digital form, including protocols within which the parties perform on these promises."
                </blockquote>
                <div className="mt-2 text-right text-xs text-muted-foreground">— Nick Szabo, 1994</div>
              </div>

              <div className="p-4 bg-card border border-border rounded-xl flex-1">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Why it matters</div>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-[#6366f1] shrink-0">•</span>Szabo coined "smart contract" in <span className="text-foreground font-semibold">1994</span> — 15 years before Bitcoin</li>
                  <li className="flex gap-2"><span className="text-[#6366f1] shrink-0">•</span>He understood that contracts are fundamentally <span className="text-foreground font-semibold">algorithms</span></li>
                  <li className="flex gap-2"><span className="text-[#6366f1] shrink-0">•</span>The missing piece was a <span className="text-foreground font-semibold">trusted execution environment</span> — which blockchain finally provides</li>
                  <li className="flex gap-2"><span className="text-[#6366f1] shrink-0">•</span>Szabo also created <span className="text-foreground font-semibold">Bit Gold</span> (1998) — a direct precursor to Bitcoin's design</li>
                </ul>
              </div>
            </div>

            {/* Right: Vending machine diagram */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">The vending machine model</div>

              <div className="flex-1 flex flex-col items-center justify-center gap-0">
                {/* Steps */}
                {[
                  { step: '1', actor: '👤 Customer', action: 'Inserts coins + selects item', color: '#6366f1', arrow: true },
                  { step: '2', actor: '🤖 Machine (Contract)', action: 'Checks: enough coins? Item available?', color: '#8b5cf6', arrow: true },
                  { step: '3a', actor: '✅ Condition Met', action: 'Dispenses item · Returns change', color: '#39B54A', arrow: false },
                  { step: '3b', actor: '❌ Condition Not Met', action: 'Returns coins · No item dispensed', color: '#ED1C24', arrow: false },
                ].map((s, i) => (
                  <div key={s.step} className="w-full flex flex-col items-center">
                    <div
                      className="w-full max-w-sm p-3 rounded-xl border-2 text-center"
                      style={{ borderColor: s.color + '50', backgroundColor: s.color + '10' }}
                    >
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: s.color }}>Step {s.step}</div>
                      <div className="font-bold text-sm text-foreground">{s.actor}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{s.action}</div>
                    </div>
                    {s.arrow && (
                      <div className="text-muted-foreground text-lg my-0.5">↓</div>
                    )}
                    {i === 1 && (
                      <div className="flex gap-6 mt-0.5">
                        <div className="text-xs text-[#39B54A] font-bold">YES →</div>
                        <div className="text-xs text-[#ED1C24] font-bold">NO →</div>
                      </div>
                    )}
                  </div>
                ))}

                <div className="mt-4 p-3 bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl w-full max-w-sm text-center">
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Key insight:</span> the machine doesn't care who you are. No trust, no negotiation, no middleman. The code <em>is</em> the contract.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ═══════ 3. HISTORICAL EVOLUTION ═══════ */}
        <div id="s1-history" className="h-full">
          <TimelineSlide
            title="Historical Evolution of Smart Contracts"
            events={[
              {
                year: '1998',
                title: 'Szabo designs Bit Gold',
                description: 'The closest precursor to Bitcoin: proof-of-work chains of ownership. Still lacks a decentralized execution environment to run contracts.',
              },
              {
                year: '2009',
                title: 'Bitcoin launches — limited scripting',
                description: 'Bitcoin Script enables basic conditional logic (multisig, timelocks) but is intentionally non-Turing-complete. Smart contracts remain constrained.',
              },
              {
                year: '2015',
                title: 'Ethereum mainnet — Solidity launches',
                description: 'The first general-purpose smart contract platform goes live. Developers can now write arbitrary business logic on a global, trustless computer.',
              },
              {
                year: '2016',
                title: 'The DAO hack — $60M drained',
                description: 'A reentrancy bug is exploited repeatedly before anyone can react. Ethereum hard-forks to recover funds. "Code is law" meets its first major stress test.',
              },
              {
                year: '2017',
                title: 'ICO boom — ERC-20 tokens',
                description: 'ERC-20 lets anyone issue a token and raise capital via smart contract in minutes. Billions raised; most projects fail. Regulation follows.',
              },
              {
                year: '2020',
                title: 'DeFi Summer — protocols replace banks',
                description: 'Uniswap, Compound, Aave lock $1B+ in smart contracts. Permissionless lending, trading, and yield — no banks, no accounts, no KYC.',
              },
              {
                year: '2021',
                title: 'NFT explosion — ERC-721 goes mainstream',
                description: '$41B NFT market. On-chain ownership of art, collectibles, and gaming assets. Smart contracts enforce royalties automatically on every resale.',
              },
              {
                year: 'Today',
                title: '$100B+ locked — multi-chain ecosystem',
                description: 'Ethereum, Solana, BNB Chain, Avalanche, and L2s host thousands of live contracts. Security is now the primary battleground — $6B+ lost to exploits since 2016.',
              },
            ]}
          />
        </div>

        {/* ═══════ TAKEAWAYS ═══════ */}
        <div id="s1-takeaways" className="h-full">
          <TakeawaySlide
            title="Section 01 — Key Takeaways"
            takeaways={[
              'A smart contract is self-executing code on a blockchain — no intermediary can stop or alter it',
              'Nick Szabo described the concept in 1994; Bitcoin (2009) and Ethereum (2015) made it real',
              'Key properties: autonomous, immutable, transparent, deterministic, trustless',
              'The vending machine model: conditions → automatic execution, no human judgment needed',
              'DeFi, NFTs, and DAOs are all smart contracts at different scales',
              '$6B+ lost to exploits — the power of smart contracts comes with serious security responsibility',
            ]}
          />
        </div>

        </div>
      </div>
    </div>
  );
}
