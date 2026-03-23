import { TitleSlide } from '../../components/templates/TitleSlide';
import { TakeawaySlide } from '../../components/templates/TakeawaySlide';
import { SectionNav } from '../../components/navigation/SectionNav';
import { ShieldAlert } from 'lucide-react';

const chapters = [
  { id: 's4-oracle',     label: 'The Oracle Problem' },
  { id: 's4-challenges', label: 'Challenges & Limitations' },
  { id: 's4-technical',  label: 'Technical Challenges' },
  { id: 's4-takeaways',  label: 'Takeaways' },
];

function Stub({ id, label }: { id: string; label: string }) {
  return (
    <div id={id} className="h-full flex items-center justify-center p-8">
      <div className="text-center text-muted-foreground">
        <div className="text-4xl mb-4">⚠️</div>
        <p className="text-lg font-medium">{label} — coming soon</p>
      </div>
    </div>
  );
}

export function SC_Section4() {
  return (
    <div className="h-full w-full flex overflow-hidden">
      <div className="w-44 shrink-0 h-full hidden lg:block border-r border-border">
        <SectionNav chapters={chapters} />
      </div>
      <div id="section-scroll" className="flex-1 overflow-y-auto snap-y snap-mandatory">
        <div className="slide-flow">

        <div className="h-full">
          <TitleSlide
            sectionNumber="SECTION 04"
            title="Dehype Smart Contracts"
            subtitle="An honest look at the oracle problem, real limitations, and where smart contracts fall short"
            icon={<ShieldAlert className="size-20 text-[#6366f1]" />}
            gradient="from-[#ED1C24] to-[#6366f1]"
          />
        </div>

        {/* ═══════ THE ORACLE PROBLEM ═══════ */}
        <div id="s4-oracle" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-5">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">The Oracle Problem</h2>
            <p className="text-muted-foreground text-sm mt-1">Smart contracts are deterministic and closed — they cannot reach outside the blockchain on their own.</p>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-2 gap-5">

            {/* Left: problem → solution → risk */}
            <div className="flex flex-col gap-3">
              {[
                {
                  color: '#ED1C24', emoji: '🔒', label: 'The Problem',
                  content: 'Blockchains are closed, deterministic systems. A smart contract cannot fetch stock prices, check the weather, verify a sports score, or confirm a package delivery. Any external call would produce different results on different nodes — breaking consensus.',
                  sub: 'The blockchain knows nothing about the world outside itself.',
                },
                {
                  color: '#6366f1', emoji: '🌉', label: 'The Solution: Oracles',
                  content: 'Oracles are off-chain services that fetch real-world data and submit it on-chain as a signed transaction. The smart contract reads oracle-provided data just like any other on-chain value. Chainlink is the dominant oracle network.',
                  sub: 'Oracle = a trusted data bridge between the real world and the blockchain.',
                },
                {
                  color: '#f59e0b', emoji: '⚠️', label: 'The Risk: New Centralization',
                  content: 'By introducing an oracle, you reintroduce trust. If the oracle is controlled by one entity, it becomes a centralized point of failure — and the single source of manipulation. A corrupt or hacked oracle can drain millions from dependent contracts.',
                  sub: '"A smart contract is only as decentralized as its weakest data source."',
                },
              ].map(p => (
                <div key={p.label} className="flex-1 p-4 bg-card border border-border rounded-xl flex gap-3" style={{ borderColor: p.color + '30' }}>
                  <div className="size-9 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ backgroundColor: p.color + '18' }}>{p.emoji}</div>
                  <div>
                    <div className="font-black text-sm mb-1" style={{ color: p.color }}>{p.label}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-1.5">{p.content}</p>
                    <p className="text-xs italic text-muted-foreground border-l-2 pl-2" style={{ borderColor: p.color + '50' }}>{p.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: real example + oracle landscape */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Real-world example</div>

              <div className="p-5 bg-gradient-to-br from-[#6366f1]/12 to-transparent border border-[#6366f1]/30 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🌾</span>
                  <div>
                    <div className="font-black text-sm text-foreground">Crop Insurance Smart Contract</div>
                    <div className="text-xs text-[#6366f1]">parametric insurance — no claims adjuster needed</div>
                  </div>
                </div>
                <div className="space-y-2 mb-3">
                  {[
                    { step: '1', desc: 'Farmer pays premium into smart contract' },
                    { step: '2', desc: 'Contract stores: if rainfall < X mm in region Y by date Z → pay out $5,000' },
                    { step: '3', desc: 'Oracle (Chainlink + NOAA weather data) submits daily rainfall figures on-chain' },
                    { step: '4', desc: 'Contract reads oracle data → condition met → payout released automatically' },
                  ].map(s => (
                    <div key={s.step} className="flex gap-2 text-xs text-muted-foreground">
                      <span className="size-4 rounded-full bg-[#6366f1]/20 flex items-center justify-center font-bold text-[#6366f1] shrink-0">{s.step}</span>
                      {s.desc}
                    </div>
                  ))}
                </div>
                <div className="p-2 bg-[#ED1C24]/10 border border-[#ED1C24]/20 rounded-lg text-xs text-muted-foreground">
                  <span className="font-bold text-[#ED1C24]">Risk:</span> if the weather oracle is compromised or goes offline, the contract can't execute. The oracle is now the single point of trust.
                </div>
              </div>

              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Oracle solutions in practice</div>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Chainlink', color: '#375BD2', desc: 'Decentralised oracle network — aggregates from many independent nodes, reducing manipulation risk' },
                  { name: 'Pyth Network', color: '#E6DAFE', darkColor: '#8b5cf6', desc: 'High-frequency financial data from institutional providers (exchanges, market makers) — 400ms latency' },
                  { name: 'API3', color: '#6366f1', desc: 'First-party oracles — data providers run their own oracle nodes, removing the middleman layer entirely' },
                  { name: 'UMA Optimistic', color: '#f59e0b', desc: 'Assume data is correct unless disputed within a window — cheaper but slower for edge cases' },
                ].map(o => (
                  <div key={o.name} className="flex items-start gap-2 p-2.5 bg-card border border-border rounded-lg">
                    <div className="px-2 py-0.5 rounded font-bold text-xs shrink-0 text-white" style={{ backgroundColor: o.darkColor ?? o.color }}>{o.name}</div>
                    <div className="text-xs text-muted-foreground">{o.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ═══════ CHALLENGES & LIMITATIONS ═══════ */}
        <div id="s4-challenges" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-5">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Challenges & Limitations</h2>
            <p className="text-muted-foreground text-sm mt-1">Smart contracts inherit the constraints of their underlying blockchain — and those constraints are significant.</p>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-2 gap-5">

            {/* Left: throughput + latency */}
            <div className="flex flex-col gap-4">
              {/* Throughput */}
              <div className="flex-1 p-4 bg-card border border-[#ED1C24]/30 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🚦</span>
                  <div>
                    <div className="font-black text-sm text-foreground">Throughput</div>
                    <div className="text-xs text-[#ED1C24]">Blockchain can't match Web2 transaction volume</div>
                  </div>
                </div>
                <div className="space-y-2 mb-3">
                  {[
                    { label: 'Bitcoin', tps: 7, max: 24000, color: '#f59e0b' },
                    { label: 'Ethereum', tps: 15, max: 24000, color: '#627EEA' },
                    { label: 'Solana', tps: 5000, max: 24000, color: '#9945FF' },
                    { label: 'Visa', tps: 24000, max: 24000, color: '#39B54A' },
                  ].map(c => (
                    <div key={c.label} className="flex items-center gap-2">
                      <div className="w-20 text-xs font-medium text-muted-foreground shrink-0">{c.label}</div>
                      <div className="flex-1 h-5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full flex items-center justify-end pr-1.5 transition-all"
                          style={{ width: `${Math.max(2, (c.tps / c.max) * 100)}%`, backgroundColor: c.color }}
                        >
                          {c.tps >= 1000 && <span className="text-[9px] font-bold text-white">{c.tps.toLocaleString()}</span>}
                        </div>
                      </div>
                      <div className="text-xs font-bold w-16 text-right shrink-0" style={{ color: c.color }}>{c.tps.toLocaleString()} TPS</div>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground p-2 bg-muted rounded-lg">
                  Bitcoin and Ethereum L1 are 1,600–3,400× slower than Visa. L2s narrow this gap significantly but don't fully close it.
                </div>
              </div>

              {/* Latency */}
              <div className="flex-1 p-4 bg-card border border-[#f59e0b]/30 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">⏱️</span>
                  <div>
                    <div className="font-black text-sm text-foreground">Latency</div>
                    <div className="text-xs text-[#f59e0b]">Block times vs. millisecond web responses</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Ethereum block time', value: '12 seconds', sub: 'Per block — finality takes 2–3 blocks', color: '#627EEA' },
                    { label: 'Bitcoin block time', value: '~10 minutes', sub: '6 confirmations for high-value tx = 1 hour', color: '#f59e0b' },
                    { label: 'Web2 API response', value: '<100ms', sub: 'REST APIs, CDN-backed — imperceptible to user', color: '#39B54A' },
                    { label: 'L2 (Arbitrum)', value: '~250ms', sub: 'Near-instant UX, final on L1 in ~7 days', color: '#6366f1' },
                  ].map(l => (
                    <div key={l.label} className="p-2 bg-muted rounded-lg">
                      <div className="font-bold text-sm" style={{ color: l.color }}>{l.value}</div>
                      <div className="text-[10px] font-semibold text-foreground">{l.label}</div>
                      <div className="text-[10px] text-muted-foreground">{l.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: storage + computation */}
            <div className="flex flex-col gap-4">
              {/* Storage */}
              <div className="flex-1 p-4 bg-card border border-[#8b5cf6]/30 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">💾</span>
                  <div>
                    <div className="font-black text-sm text-foreground">Storage Costs</div>
                    <div className="text-xs text-[#8b5cf6]">On-chain storage is extraordinarily expensive</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="p-3 bg-[#ED1C24]/10 border border-[#ED1C24]/20 rounded-xl text-center">
                    <div className="text-2xl font-black text-[#ED1C24]">~$1,000</div>
                    <div className="text-xs text-muted-foreground mt-0.5">per MB on-chain (Ethereum)</div>
                  </div>
                  <div className="p-3 bg-[#39B54A]/10 border border-[#39B54A]/20 rounded-xl text-center">
                    <div className="text-2xl font-black text-[#39B54A]">~$0.02</div>
                    <div className="text-xs text-muted-foreground mt-0.5">per MB on AWS S3</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground p-2 bg-muted rounded-lg">
                  <span className="font-semibold text-foreground">50,000× more expensive.</span> This is why NFT metadata is stored on IPFS, not on-chain. Smart contracts only store the minimum required state — everything else lives off-chain.
                </div>
              </div>

              {/* Computation */}
              <div className="flex-1 p-4 bg-card border border-[#6366f1]/30 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">⚙️</span>
                  <div>
                    <div className="font-black text-sm text-foreground">Computation Limits</div>
                    <div className="text-xs text-[#6366f1]">Gas limits cap what contracts can calculate</div>
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground mb-3">
                  {[
                    'Every block has a gas limit (~30M gas on Ethereum) — no transaction can exceed this',
                    'Complex machine learning inference, large sorting algorithms, or image processing: impossible on-chain',
                    'Deep recursive loops will either hit gas limits and revert, or drain user wallets',
                    'On-chain computation is ~1,000,000× more expensive than off-chain for equivalent work',
                  ].map(l => (
                    <li key={l} className="flex gap-2"><span className="text-[#6366f1] shrink-0 mt-0.5">›</span>{l}</li>
                  ))}
                </ul>
                <div className="p-2 bg-[#6366f1]/10 rounded-lg text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Pattern:</span> move heavy computation off-chain, submit only the result + proof on-chain. Zero-knowledge proofs (ZK-SNARKs) make this verifiable.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ═══════ TECHNICAL CHALLENGES ═══════ */}
        <div id="s4-technical" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-5">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Technical Challenges & Limitations</h2>
            <p className="text-muted-foreground text-sm mt-1">Four structural problems that define the frontier of blockchain engineering.</p>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-2 gap-5">

            {/* MEV */}
            <div className="p-5 bg-card border border-[#ED1C24]/30 rounded-xl flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl bg-[#ED1C24]/15 flex items-center justify-center text-xl shrink-0">🤖</div>
                <div>
                  <div className="font-black text-sm text-foreground">MEV — Maximal Extractable Value</div>
                  <div className="text-xs font-semibold text-[#ED1C24]">Validators (and anyone) can reorder transactions for profit</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Block producers choose which transactions to include and in what order. This gives them the power to front-run users — seeing a profitable trade in the mempool and inserting their own transaction first to capture the price difference.
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {[
                  'Front-running: validator sees your DEX trade → inserts same trade before yours → sells into your transaction',
                  'Sandwich attacks: buy before you, sell after you — you get a worse price, they profit',
                  '$1.3B+ extracted from Ethereum users since 2020 (Flashbots data)',
                ].map(l => (
                  <li key={l} className="flex gap-1.5"><span className="text-[#ED1C24] shrink-0">›</span>{l}</li>
                ))}
              </ul>
              <div className="mt-auto p-2 bg-[#ED1C24]/08 rounded-lg text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Mitigation:</span> Flashbots SUAVE, private mempools, commit-reveal schemes, and MEV-aware DEX designs (e.g. CoW Protocol).
              </div>
            </div>

            {/* Upgradability */}
            <div className="p-5 bg-card border border-[#f59e0b]/30 rounded-xl flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl bg-[#f59e0b]/15 flex items-center justify-center text-xl shrink-0">🔧</div>
                <div>
                  <div className="font-black text-sm text-foreground">Upgradability</div>
                  <div className="text-xs font-semibold text-[#f59e0b]">Immutable code makes fixing bugs extremely difficult</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Once deployed, a smart contract's code cannot be changed. A bug discovered post-deployment — even a critical one — cannot be patched directly. Adding upgrade patterns reintroduces centralisation and complexity.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-[#ED1C24]/08 border border-[#ED1C24]/20 rounded-lg">
                  <div className="font-bold text-[#ED1C24] mb-1">Immutable risk</div>
                  <div className="text-muted-foreground">Bug = permanent. The DAO hack: $60M lost, required Ethereum hard fork to recover.</div>
                </div>
                <div className="p-2 bg-[#f59e0b]/08 border border-[#f59e0b]/20 rounded-lg">
                  <div className="font-bold text-[#f59e0b] mb-1">Proxy pattern risk</div>
                  <div className="text-muted-foreground">Upgradeable contracts require an admin key — making the protocol only as decentralised as that key holder.</div>
                </div>
              </div>
              <div className="mt-auto p-2 bg-[#f59e0b]/08 rounded-lg text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Best practice:</span> immutable core logic + audits before deployment. Upgrade patterns only where strictly necessary, with timelocks and multisig governance.
              </div>
            </div>

            {/* Blockchain Trilemma */}
            <div className="p-5 bg-card border border-[#6366f1]/30 rounded-xl flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl bg-[#6366f1]/15 flex items-center justify-center text-xl shrink-0">🔺</div>
                <div>
                  <div className="font-black text-sm text-foreground">The Blockchain Trilemma</div>
                  <div className="text-xs font-semibold text-[#6366f1]">Cannot optimise security, scalability, and decentralisation simultaneously</div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-48 h-36">
                  {/* Triangle */}
                  <svg viewBox="0 0 200 160" className="w-full h-full">
                    <polygon points="100,10 190,150 10,150" fill="none" stroke="#6366f180" strokeWidth="2" />
                    <circle cx="100" cy="10" r="5" fill="#ED1C24" />
                    <circle cx="190" cy="150" r="5" fill="#39B54A" />
                    <circle cx="10" cy="150" r="5" fill="#f59e0b" />
                    <text x="100" y="6" textAnchor="middle" className="text-[10px]" fill="#ED1C24" fontSize="10">Security</text>
                    <text x="196" y="148" textAnchor="start" fill="#39B54A" fontSize="9">Scalability</text>
                    <text x="4" y="148" textAnchor="end" fill="#f59e0b" fontSize="9">Decentralisation</text>
                    <text x="100" y="95" textAnchor="middle" fill="#6366f180" fontSize="9">pick 2</text>
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center">
                {[
                  { name: 'Bitcoin', pick: 'Security + Decentralisation', sacrifice: 'Scalability (7 TPS)', color: '#f59e0b' },
                  { name: 'Ethereum L1', pick: 'Security + Decentralisation', sacrifice: 'Scalability → L2s solve this', color: '#627EEA' },
                  { name: 'Solana', pick: 'Security + Scalability', sacrifice: 'Decentralisation (fewer validators)', color: '#9945FF' },
                ].map(t => (
                  <div key={t.name} className="p-1.5 bg-muted rounded-lg">
                    <div className="font-bold" style={{ color: t.color }}>{t.name}</div>
                    <div className="text-muted-foreground leading-tight">{t.sacrifice}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* State Growth */}
            <div className="p-5 bg-card border border-[#39B54A]/30 rounded-xl flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl bg-[#39B54A]/15 flex items-center justify-center text-xl shrink-0">📈</div>
                <div>
                  <div className="font-black text-sm text-foreground">State Growth</div>
                  <div className="text-xs font-semibold text-[#39B54A]">Blockchain size grows 50 GB+ annually — forever</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Every transaction ever executed is stored permanently on every full node. The blockchain is append-only — nothing is ever deleted. As adoption grows, so does the burden of running a full node.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { label: 'Bitcoin full chain', value: '~600 GB', color: '#f59e0b', note: 'Growing ~50 GB/year' },
                  { label: 'Ethereum full chain', value: '~1.2 TB', color: '#627EEA', note: 'Archive node: 15+ TB' },
                  { label: 'Pruned node', value: '~10 GB', color: '#39B54A', note: 'Stores only recent state' },
                  { label: 'State growth risk', value: 'Centralisation', color: '#ED1C24', note: 'Only datacenters can run full nodes' },
                ].map(s => (
                  <div key={s.label} className="p-2 bg-muted rounded-lg">
                    <div className="font-black text-sm" style={{ color: s.color }}>{s.value}</div>
                    <div className="font-semibold text-[10px] text-foreground">{s.label}</div>
                    <div className="text-[10px] text-muted-foreground">{s.note}</div>
                  </div>
                ))}
              </div>
              <div className="mt-auto p-2 bg-[#39B54A]/08 rounded-lg text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Mitigation:</span> EIP-4444 (Ethereum history expiry), stateless clients, and Verkle trees aim to decouple state storage from full node requirements.
              </div>
            </div>

          </div>
        </div>

        <div id="s4-takeaways" className="h-full">
          <TakeawaySlide
            title="Section 04 — Key Takeaways"
            takeaways={[
              'The oracle problem: smart contracts cannot access external data trustlessly — bridges introduce new attack surfaces',
              'Immutability is a double-edged sword — bugs are permanent unless upgrade patterns are used',
              '"Code is law" means users have no recourse when code behaves correctly but harmfully',
              'Gas costs make complex on-chain logic economically impractical for many use cases',
              'Smart contracts are not always the answer — a database is faster, cheaper, and easier in many contexts',
              'Security audits are not optional — $6B+ lost since 2016; Shayan Eskandari has audited dozens of real contracts',
            ]}
          />
        </div>

        </div>
      </div>
    </div>
  );
}
