import { useState } from 'react';
import { motion } from 'motion/react';
import { ConceptSlide } from '../../components/templates/ConceptSlide';
import { TitleSlide } from '../../components/templates/TitleSlide';
import { TakeawaySlide } from '../../components/templates/TakeawaySlide';
import { SectionNav } from '../../components/navigation/SectionNav';
import { QuizSlide } from '../../components/templates/QuizSlide';
import { Network } from 'lucide-react';

const chapters = [
  { id: 's4-interop',  label: 'Interoperability' },
  { id: 's4-bridges',  label: 'Bridge Security' },
  { id: 's4-cosmos',   label: 'Cosmos' },
  { id: 's4-layer0', label: 'Layer 0' },
  { id: 's4-starknet', label: 'Starknet' },
  { id: 's4-layer2',   label: 'Layer 2: Optimistic vs ZK' },
  { id: 's4-quiz',     label: 'Quiz' },
  { id: 's4-takeaways', label: 'Takeaways' },
];

export function BP_Section4() {
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
            sectionNumber="SECTION 04"
            title="Interoperability & New Trends"
            subtitle="Connecting blockchains — Cosmos, Layer 0, and Starknet"
            icon={<Network className="size-20 text-[#22d3ee]" />}
            gradient="from-[#22d3ee] to-[#6366f1]"
          />
        </div>

        {/* ═══════ S4-INTEROP ═══════ */}
        <div id="s4-interop" className="h-full flex flex-col p-6 lg:p-10">
          <div className="mb-4 lg:mb-6">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-1 lg:mb-2">
              The Interoperability Problem
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground">
              Bitcoin, Ethereum, Solana, and Hyperledger Fabric each operate as isolated networks — they cannot natively communicate with each other.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 min-h-0">
            {/* Left — Blockchain Islands */}
            <div className="flex flex-col gap-3 min-h-0">
              <div className="flex items-center gap-2 mb-1">
                <div className="size-2 rounded-full bg-[#22d3ee]" />
                <h3 className="text-base lg:text-lg font-semibold text-foreground">Blockchain Islands</h3>
              </div>
              <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                Each major blockchain — Bitcoin, Ethereum, Solana, Hyperledger Fabric — is a sovereign network with its own consensus, tokens, and state. They do not speak to each other natively. The result is fragmented ecosystems that cannot collaborate without external infrastructure.
              </p>

              {/* Problem cards */}
              {[
                {
                  emoji: '🏝️',
                  title: 'Asset Silos',
                  desc: 'BTC is locked on the Bitcoin network. It cannot be used natively in Ethereum DeFi protocols — you need a wrapped token (WBTC) which introduces custodial risk.',
                },
                {
                  emoji: '🌉',
                  title: 'Bridge Hacks',
                  desc: 'Cross-chain bridges are high-value attack vectors. Over $2B+ stolen: Ronin $625M, Wormhole $320M, Nomad $190M. Bridges are the weakest link in interoperability.',
                },
                {
                  emoji: '🔄',
                  title: 'Fragmented Liquidity',
                  desc: 'Each chain has its own DEXs, liquidity pools, and markets. Capital cannot flow freely — a trader on Ethereum cannot access a better price on Solana without friction.',
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-3 p-3 lg:p-4 bg-card rounded-xl border border-[#22d3ee]/20 hover:border-[#22d3ee]/60 transition-colors"
                >
                  <span className="text-xl lg:text-2xl flex-shrink-0">{card.emoji}</span>
                  <div>
                    <p className="text-sm lg:text-base font-semibold text-foreground">{card.title}</p>
                    <p className="text-xs lg:text-sm text-muted-foreground mt-0.5 leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right — Why it matters */}
            <div className="flex flex-col gap-3 min-h-0">
              <div className="flex items-center gap-2 mb-1">
                <div className="size-2 rounded-full bg-[#6366f1]" />
                <h3 className="text-base lg:text-lg font-semibold text-foreground">Why It Matters</h3>
              </div>

              <div className="p-3 lg:p-4 bg-card/50 rounded-xl border border-border">
                <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed mb-3">
                  True interoperability unlocks a multi-chain world where assets and messages flow freely:
                </p>
                <ul className="space-y-2">
                  {[
                    'Pay with BTC inside an Ethereum DeFi protocol — trustlessly',
                    'Transfer an NFT from Ethereum to Solana while keeping provenance',
                    'An enterprise Hyperledger Fabric network settling final state on Ethereum',
                    'A single user interface accessing liquidity across 10 chains simultaneously',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs lg:text-sm text-foreground">
                      <span className="text-[#22d3ee] flex-shrink-0 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Solutions Emerging</p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Bridges', sub: 'Risky but widely used', color: '#f59e0b' },
                    { label: 'Cosmos IBC', sub: 'Native protocol standard', color: '#22d3ee' },
                    { label: 'Layer 0', sub: 'Polkadot · Avalanche', color: '#6366f1' },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="p-2 lg:p-3 bg-card rounded-lg border text-center"
                      style={{ borderColor: `${s.color}40` }}
                    >
                      <p className="text-xs lg:text-sm font-semibold" style={{ color: s.color }}>{s.label}</p>
                      <p className="text-[10px] lg:text-xs text-muted-foreground mt-0.5">{s.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ BRIDGE SECURITY ═══════ */}
        <div id="s4-bridges" className="h-full flex flex-col p-5 lg:p-8">
          <div className="shrink-0 mb-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#ef4444]">Section 04</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-1 mb-1">Cross-Chain Bridge Security</h2>
            <p className="text-sm text-muted-foreground">Bridges are the most exploited category in blockchain. Over <span className="font-semibold text-foreground">$2.5B</span> was stolen from bridges in 2022 alone — more than all other DeFi hacks combined.</p>
          </div>
          <div className="flex-1 min-h-0 grid grid-cols-3 gap-4">

            {/* Hall of shame */}
            <div className="flex flex-col gap-2 min-h-0">
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground shrink-0">Largest Bridge Hacks</div>
              <div className="flex-1 min-h-0 grid auto-rows-fr gap-2">
                {[
                  { name: 'Ronin Bridge', amount: '$625M', year: '2022', chain: 'Axie Infinity ↔ Ethereum', method: 'Attacker compromised 5 of 9 validator private keys — met the 5/9 multisig threshold and drained the entire lock-up contract.', color: '#ef4444' },
                  { name: 'Wormhole Bridge', amount: '$320M', year: '2022', chain: 'Solana ↔ Ethereum', method: 'Signature verification bypass — attacker forged a guardian signature to mint 120,000 wETH on Solana without locking real ETH.', color: '#f97316' },
                  { name: 'Nomad Bridge', amount: '$190M', year: '2022', chain: 'Multi-chain', method: 'Initialization bug — a root hash was set to 0x0, which is truthy in the verify function. Anyone could replay any message. Hundreds of copycats drained it simultaneously.', color: '#eab308' },
                  { name: 'Harmony Horizon', amount: '$100M', year: '2022', chain: 'Harmony ↔ Ethereum', method: '2-of-5 multisig with only 4 active signers — attacker compromised 2 keys, meeting the threshold with minimal effort.', color: '#6366f1' },
                ].map(h => (
                  <div key={h.name} className="min-h-0 p-3 bg-card border rounded-xl flex flex-col gap-1" style={{ borderColor: h.color + '40' }}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-foreground">{h.name}</span>
                      <span className="font-black text-sm" style={{ color: h.color }}>{h.amount}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{h.year} · {h.chain}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{h.method}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why bridges are risky */}
            <div className="flex flex-col gap-2 min-h-0">
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground shrink-0">Why Bridges Are Structurally Dangerous</div>
              <div className="flex-1 min-h-0 grid auto-rows-fr gap-2">
                {[
                  { icon: '🍯', title: 'Honeypot Architecture', desc: 'To bridge 1 ETH from Ethereum to another chain, you lock 1 ETH in a smart contract and mint wrapped ETH on the destination. Every user adds to the same pot — creating a target that grows with adoption. A bridge with $500M TVL is a $500M bug bounty.' },
                  { icon: '🔑', title: 'Centralized Trust Assumptions', desc: 'Most bridges rely on a multisig of validators to confirm cross-chain events. This is inherently centralized. If the validator key set is small (2-of-5) or the keys are stored insecurely, the entire TVL is at risk from a single coordinated key compromise.' },
                  { icon: '⚠️', title: 'Cross-Chain Complexity', desc: 'Bridges must reason about the state of two different blockchains simultaneously. Message passing, signature verification, and finality assumptions differ per chain. This surface area is enormous — and bugs in any layer can be fatal.' },
                  { icon: '⏱️', title: 'Finality Mismatch', desc: 'Optimistic bridges release funds before finality is confirmed on the source chain. If a transaction is later reorganized (reorged), the bridge may have already minted assets on the destination with no backing.' },
                ].map(r => (
                  <div key={r.title} className="min-h-0 p-3 bg-card border border-border rounded-xl flex gap-2.5 items-start">
                    <span className="text-xl shrink-0 leading-none">{r.icon}</span>
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-foreground mb-0.5">{r.title}</div>
                      <div className="text-xs text-muted-foreground leading-snug">{r.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safer alternatives + best practices */}
            <div className="flex flex-col gap-2 min-h-0">
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground shrink-0">Safer Design Patterns</div>
              <div className="flex-1 min-h-0 grid auto-rows-fr gap-2">
                {[
                  { title: 'Native IBC (Cosmos)', color: '#39B54A', desc: 'Inter-Blockchain Communication is baked into the protocol — no external multisig, no lock-up contract. Light client verification on both sides. Zero bridge hacks via IBC to date.' },
                  { title: 'Canonical Bridges', color: '#6366f1', desc: "Ethereum's official rollup bridges (Arbitrum, Optimism, Base) use the rollup's own fraud/validity proof system — inherited L1 security, not a separate trust set." },
                  { title: 'Large Multisig Thresholds', color: '#f97316', desc: '5-of-9 is the minimum acceptable. Ronin used 5-of-9 but had only 4 real signers. Hardware security modules (HSMs) for key storage are mandatory.' },
                  { title: 'Formal Verification', color: '#eab308', desc: 'Message passing logic and signature verification code should be formally verified — not just audited. Wormhole\'s bug passed manual audit.' },
                  { title: 'Rate Limits & Circuit Breakers', color: '#ef4444', desc: 'Cap how much can be withdrawn per hour. Nomad\'s $190M was drained by hundreds of copycats within minutes — a rate limiter would have saved $180M.' },
                ].map(p => (
                  <div key={p.title} className="min-h-0 flex gap-2.5 p-3 bg-card border rounded-xl items-start" style={{ borderColor: p.color + '30' }}>
                    <div className="w-1 self-stretch rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                    <div className="min-w-0">
                      <div className="font-bold text-xs mb-0.5" style={{ color: p.color }}>{p.title}</div>
                      <div className="text-xs text-muted-foreground leading-snug">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ S4-COSMOS ═══════ */}
        <div id="s4-cosmos" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Cosmos: The Internet of Blockchains
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              A network of sovereign, interoperable chains connected by the IBC protocol — each one optimised for its specific use case.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-0">

            {/* Left — Architecture visual */}
            <div className="flex flex-col gap-2 min-h-0">
              <div className="flex items-center gap-2 shrink-0">
                <div className="size-2 rounded-full bg-[#22d3ee]" />
                <h3 className="text-base lg:text-lg font-semibold text-foreground">Hub & Zone Architecture</h3>
                <span className="ml-auto text-[10px] text-muted-foreground italic">Zones can also IBC each other directly (mesh)</span>
              </div>

              {/* Hub visual */}
              <div className="relative flex-1 min-h-[260px] flex items-center justify-center bg-card/50 rounded-xl border border-border p-4">
                {/* IBC mesh lines (drawn behind everything) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  {/* Hub-to-zone (solid-ish) */}
                  {[-90, -30, 30, 90, 150, -150].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const r = 38;
                    const ex = 50 + Math.cos(rad) * r;
                    const ey = 50 + Math.sin(rad) * r;
                    return (
                      <line
                        key={`spoke-${i}`}
                        x1="50%" y1="50%"
                        x2={`${ex}%`} y2={`${ey}%`}
                        stroke="#22d3ee"
                        strokeWidth="1.2"
                        strokeDasharray="4 3"
                        opacity="0.5"
                      />
                    );
                  })}
                  {/* A few zone-to-zone arcs to suggest the mesh */}
                  {[
                    { a: -90, b: -30 },
                    { a: -30, b: 90 },
                    { a: 90, b: 150 },
                    { a: 150, b: -150 },
                  ].map(({ a, b }, i) => {
                    const ra = (a * Math.PI) / 180;
                    const rb = (b * Math.PI) / 180;
                    const r = 38;
                    return (
                      <line
                        key={`mesh-${i}`}
                        x1={`${50 + Math.cos(ra) * r}%`} y1={`${50 + Math.sin(ra) * r}%`}
                        x2={`${50 + Math.cos(rb) * r}%`} y2={`${50 + Math.sin(rb) * r}%`}
                        stroke="#22d3ee"
                        strokeWidth="0.8"
                        strokeDasharray="2 4"
                        opacity="0.25"
                      />
                    );
                  })}
                </svg>

                {/* Central hub */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="size-16 lg:size-20 rounded-full bg-[#22d3ee]/15 border-2 border-[#22d3ee] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                    <span className="text-[11px] lg:text-xs font-black text-[#22d3ee] leading-tight">Cosmos</span>
                    <span className="text-[11px] lg:text-xs font-black text-[#22d3ee] leading-tight">Hub</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1 font-medium">ATOM</p>
                </div>

                {/* Zone satellites */}
                {[
                  { label: 'Osmosis',   purpose: 'DEX',           angle: -90,  color: '#f59e0b' },
                  { label: 'dYdX',      purpose: 'perps DEX',     angle: -30,  color: '#6366f1' },
                  { label: 'Injective', purpose: 'finance L1',    angle: 30,   color: '#8b5cf6' },
                  { label: 'Celestia',  purpose: 'data avail.',   angle: 90,   color: '#ec4899' },
                  { label: 'Akash',     purpose: 'GPU compute',   angle: 150,  color: '#ef4444' },
                  { label: 'Stride',    purpose: 'liquid staking', angle: -150, color: '#10b981' },
                ].map(({ label, purpose, angle, color }) => {
                  const rad = (angle * Math.PI) / 180;
                  const rPct = 38;
                  return (
                    <div
                      key={label}
                      className="absolute flex flex-col items-center gap-0.5 z-10"
                      style={{
                        left: `calc(50% + ${Math.cos(rad) * rPct}%)`,
                        top: `calc(50% + ${Math.sin(rad) * rPct}%)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <div
                        className="size-11 lg:size-12 rounded-full flex items-center justify-center text-[9px] lg:text-[10px] font-black text-center px-1 leading-none"
                        style={{ backgroundColor: `${color}20`, border: `1.5px solid ${color}`, color }}
                      >
                        {label}
                      </div>
                      <span className="text-[9px] text-muted-foreground whitespace-nowrap font-medium">{purpose}</span>
                    </div>
                  );
                })}
              </div>

              {/* Metric strip */}
              <div className="grid grid-cols-3 gap-2 shrink-0">
                {[
                  { metric: '110+',     label: 'IBC-enabled chains' },
                  { metric: '~1 s',     label: 'finality (CometBFT)' },
                  { metric: '$XB+ / yr',label: 'IBC volume transferred' },
                ].map(s => (
                  <div key={s.label} className="px-2 py-1.5 rounded-lg border border-[#22d3ee]/30 bg-[#22d3ee]/5 text-center">
                    <div className="text-xs font-black text-[#22d3ee] leading-none">{s.metric}</div>
                    <div className="text-[9px] text-muted-foreground mt-0.5 uppercase tracking-wider leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Properties + token role + IBC reach */}
            <div className="flex flex-col gap-2 min-h-0">
              <div className="flex items-center gap-2 shrink-0">
                <div className="size-2 rounded-full bg-[#6366f1]" />
                <h3 className="text-base lg:text-lg font-semibold text-foreground">Core Properties</h3>
              </div>

              <div className="flex-1 min-h-0 grid auto-rows-fr gap-2">
                {[
                  {
                    emoji: '🌐',
                    title: 'IBC Protocol',
                    desc: 'Inter-Blockchain Communication — TCP/IP for blockchains. Light-client verification on each side; trustless messaging and asset transfer between any IBC-enabled chain.',
                  },
                  {
                    emoji: '🔧',
                    title: 'Cosmos SDK',
                    desc: 'Go framework to build app-specific chains in weeks, not years. Modular (staking, governance, IBC, auth, bank…) — battle-tested by Osmosis, dYdX v4, Celestia, and 100+ chains.',
                  },
                  {
                    emoji: '⚛️',
                    title: 'CometBFT (ex-Tendermint)',
                    desc: 'BFT engine renamed in 2023. Instant finality, ~1-second blocks, no forks. Known validator set per zone — secure as long as < 1/3 are Byzantine.',
                  },
                  {
                    emoji: '⚡',
                    title: 'App-Specific Sovereignty',
                    desc: 'Each chain tunes gas, governance, and upgrades to its own use case — no shared block space competition, no need to fit inside someone else\'s VM.',
                  },
                ].map((card) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-3 p-2.5 bg-card rounded-lg border border-[#22d3ee]/25 hover:border-[#22d3ee]/55 transition-colors min-h-0"
                  >
                    <span className="text-lg lg:text-xl flex-shrink-0 leading-none mt-0.5">{card.emoji}</span>
                    <div className="min-w-0">
                      <p className="text-xs lg:text-sm font-semibold text-foreground">{card.title}</p>
                      <p className="text-[10px] lg:text-xs text-muted-foreground mt-0.5 leading-relaxed">{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Two side-by-side panels: ATOM economics + IBC reach */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 shrink-0">
                <div className="p-2.5 bg-[#22d3ee]/5 rounded-lg border border-[#22d3ee]/30">
                  <p className="text-[11px] font-bold text-[#22d3ee] mb-1 flex items-center gap-1.5">
                    <span>💎</span> ATOM economics
                  </p>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    Hub security via staking · governance votes · Interchain Security lets opt-in chains rent the Hub validator set instead of bootstrapping their own.
                  </p>
                </div>
                <div className="p-2.5 bg-[#6366f1]/5 rounded-lg border border-[#6366f1]/30">
                  <p className="text-[11px] font-bold text-[#6366f1] mb-1 flex items-center gap-1.5">
                    <span>🔗</span> Beyond Cosmos
                  </p>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    IBC <span className="font-semibold text-foreground">Eureka</span> (2024+) extends IBC to Ethereum and other non-Cosmos chains — trust-minimised messaging, no centralised bridge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ S4-LAYER0 ═══════ */}
        <div id="s4-layer0" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-3">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Layer 0: Infrastructure for Blockchains
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              The substrate beneath Layer 1 chains — a shared validator set, security, and messaging fabric that multiple L1s plug into.
            </p>
          </div>

          {/* One-line definition with analogy */}
          <div className="shrink-0 mb-4 rounded-xl border p-3" style={{ borderColor: '#22d3ee55', backgroundColor: '#22d3ee0d' }}>
            <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: '#22d3ee' }}>In one line</p>
            <p className="text-sm text-foreground mt-0.5 leading-snug">
              A Layer 0 leases <span className="font-semibold">validators, security, and messaging</span> to many L1s at once — so a new chain doesn't need to bootstrap its own validator set from scratch.
            </p>
            <p className="text-[11px] text-muted-foreground italic mt-1.5">
              Think of it as the internet backbone: many ISPs (L1s) plug into shared cables (L0) instead of each laying their own.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-0">

            {/* Left — Concept: stack + capabilities */}
            <div className="flex flex-col gap-3 min-h-0">
              {/* Stack visual — foundation-up */}
              <div className="shrink-0 p-3 bg-card/50 rounded-xl border border-border">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">The stack — read bottom-up</p>
                <div className="flex flex-col-reverse gap-1.5">
                  {[
                    { num: '0', label: 'Layer 0',  sub: 'Relay / Primary Network · shared validators',  border: '#22d3ee' },
                    { num: '1', label: 'Layer 1',  sub: 'App-specific chains plugged into L0',          border: '#6366f1' },
                    { num: '2', label: 'Layer 2',  sub: 'Rollups built on top of an L1',                border: '#8b5cf6' },
                  ].map(layer => (
                    <div
                      key={layer.label}
                      className="p-2 lg:p-2.5 rounded-lg flex items-center gap-3"
                      style={{ backgroundColor: layer.border + '20', border: `1px solid ${layer.border}` }}
                    >
                      <div
                        className="size-7 rounded-md flex items-center justify-center text-sm font-black shrink-0"
                        style={{ backgroundColor: layer.border + '30', color: layer.border }}
                      >L{layer.num}</div>
                      <div className="min-w-0">
                        <p className="text-xs lg:text-sm font-semibold leading-tight" style={{ color: layer.border }}>{layer.label}</p>
                        <p className="text-[10px] lg:text-xs text-muted-foreground leading-tight">{layer.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What L0 provides — 3 capability cards */}
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider shrink-0">What Layer 0 provides</p>
              <div className="flex-1 min-h-0 grid auto-rows-fr gap-2">
                {[
                  { icon: '🔐', title: 'Shared security',          desc: 'A pooled validator set secures every L1 connected to it. New chains inherit security on day 1 — no need to find their own validators.' },
                  { icon: '📨', title: 'Native cross-chain messaging', desc: 'L0 defines the message format and trust model for inter-L1 communication (XCM, Warp) — no third-party bridge needed.' },
                  { icon: '⚙️', title: 'Shared infrastructure',     desc: 'Block production, finality, governance and upgrades live at L0. L1s focus only on application logic and tokenomics.' },
                ].map(c => (
                  <div key={c.title} className="rounded-xl border border-[#22d3ee]/30 bg-card p-2.5 flex items-start gap-2.5 min-h-0">
                    <span className="text-lg shrink-0 leading-none mt-0.5">{c.icon}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-foreground">{c.title}</p>
                      <p className="text-[10px] lg:text-xs text-muted-foreground leading-relaxed mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Implementations + trade-off */}
            <div className="flex flex-col gap-3 min-h-0">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider shrink-0">Implementations in production</p>

              <div className="flex-1 min-h-0 grid auto-rows-fr gap-2.5">
                {/* Polkadot */}
                <div className="rounded-xl p-3 min-h-0 flex flex-col gap-1.5" style={{ borderWidth: '1px', borderColor: '#e6007a55', backgroundColor: '#e6007a08' }}>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-base">🔴</span>
                    <p className="text-sm font-bold text-foreground">Polkadot</p>
                    <span className="text-[10px] px-1.5 py-0.5 rounded font-mono" style={{ backgroundColor: '#e6007a18', color: '#e6007a', border: '1px solid #e6007a35' }}>DOT</span>
                    <span className="ml-auto text-[10px] text-muted-foreground">BABE + GRANDPA</span>
                  </div>
                  <ul className="space-y-0.5 text-[11px] text-muted-foreground leading-snug">
                    <li>· <span className="text-foreground font-medium">Relay Chain</span> — pooled validator set securing every connected chain</li>
                    <li>· <span className="text-foreground font-medium">Parachains</span> — L1s that buy <span className="text-foreground font-medium">Coretime</span> (replaced slot auctions in 2024) on the relay</li>
                    <li>· <span className="text-foreground font-medium">XCM v3</span> — Cross-Consensus Messaging for native inter-parachain calls</li>
                  </ul>
                </div>

                {/* Avalanche */}
                <div className="rounded-xl p-3 min-h-0 flex flex-col gap-1.5" style={{ borderWidth: '1px', borderColor: '#e8414255', backgroundColor: '#e8414208' }}>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-base">🔺</span>
                    <p className="text-sm font-bold text-foreground">Avalanche</p>
                    <span className="text-[10px] px-1.5 py-0.5 rounded font-mono" style={{ backgroundColor: '#e8414218', color: '#e84142', border: '1px solid #e8414235' }}>AVAX</span>
                    <span className="ml-auto text-[10px] text-muted-foreground">Snowman (sub-1s)</span>
                  </div>
                  <ul className="space-y-0.5 text-[11px] text-muted-foreground leading-snug">
                    <li>· <span className="text-foreground font-medium">Primary Network</span> — X-Chain (assets), P-Chain (validators), C-Chain (EVM)</li>
                    <li>· <span className="text-foreground font-medium">Avalanche L1s</span> — ex-Subnets, renamed via ACP-13/77 in 2024 — sovereign chains using their own validator subset</li>
                    <li>· <span className="text-foreground font-medium">Avalanche Warp</span> — native L1↔L1 messaging signed by the source validator set</li>
                  </ul>
                </div>
              </div>

              {/* Trade-off vs Cosmos */}
              <div className="shrink-0 rounded-xl p-3" style={{ borderWidth: '1px', borderColor: '#6366f155', backgroundColor: '#6366f10d' }}>
                <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: '#6366f1' }}>The design trade-off</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-bold text-foreground mb-1">Layer 0 model</p>
                    <p className="text-[11px] text-muted-foreground leading-snug">
                      <span className="text-[#10b981]">↑</span> shared security on day 1<br/>
                      <span className="text-[#10b981]">↑</span> native cross-chain messaging<br/>
                      <span className="text-[#ef4444]">↓</span> chains must follow L0 rules
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground mb-1">Cosmos model</p>
                    <p className="text-[11px] text-muted-foreground leading-snug">
                      <span className="text-[#10b981]">↑</span> full sovereignty per chain<br/>
                      <span className="text-[#10b981]">↑</span> any consensus, any VM, any rules<br/>
                      <span className="text-[#ef4444]">↓</span> each chain bootstraps own validators
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ S4-STARKNET ═══════ */}
        <div id="s4-starknet" className="h-full flex flex-col p-6 lg:p-10">
          <div className="mb-4 lg:mb-6">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-1 lg:mb-2">
              Starknet: ZK-Rollup on Ethereum
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground">
              Starknet is a Layer 2 ZK-Rollup on Ethereum. It batches thousands of transactions off-chain, generates a cryptographic STARK proof, and submits only that proof to Ethereum L1.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 min-h-0">
            {/* Left — What is Starknet + 4 cards */}
            <div className="flex flex-col gap-3 min-h-0">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-[#8b5cf6]" />
                <h3 className="text-base lg:text-lg font-semibold text-foreground">Core Properties</h3>
              </div>

              {[
                {
                  emoji: '⚡',
                  title: 'Speed',
                  desc: '500–1,000 TPS vs ~15 TPS on Ethereum L1. Transactions settle off-chain and are proven in batches.',
                },
                {
                  emoji: '💸',
                  title: 'Cost',
                  desc: '10–100× cheaper than Ethereum L1. The STARK proof amortises the L1 cost over thousands of transactions.',
                },
                {
                  emoji: '🔒',
                  title: 'Security',
                  desc: 'Inherits Ethereum L1 security via validity proofs — no fraud window, no trust assumptions on the operator.',
                },
                {
                  emoji: '🛡️',
                  title: 'Cairo Language',
                  desc: 'Native smart contract language designed for ZK circuits — more efficient than Solidity for generating STARK proofs. Compiled to Sierra IR.',
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-3 p-2.5 lg:p-3 bg-card rounded-lg border border-[#8b5cf6]/20 hover:border-[#8b5cf6]/50 transition-colors"
                >
                  <span className="text-lg lg:text-xl flex-shrink-0">{card.emoji}</span>
                  <div>
                    <p className="text-xs lg:text-sm font-semibold text-foreground">{card.title}</p>
                    <p className="text-[10px] lg:text-xs text-muted-foreground mt-0.5 leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right — ZK vs Optimistic + 2024 news */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-[#8b5cf6]" />
                <h3 className="text-base lg:text-lg font-semibold text-foreground">ZK-Rollup vs Optimistic Rollup</h3>
              </div>

              {/* Comparison */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-2 divide-x divide-border">
                  <div className="p-3 lg:p-4">
                    <p className="text-xs lg:text-sm font-semibold text-[#8b5cf6] mb-2">ZK-Rollup</p>
                    <p className="text-[10px] text-muted-foreground mb-1.5">Starknet · zkSync · Polygon zkEVM</p>
                    <ul className="space-y-1.5">
                      {[
                        'Validity proof submitted immediately',
                        'Instant withdrawal (no waiting)',
                        'Heavier off-chain computation',
                        'No fraud window needed',
                        'Mathematically proven correctness',
                      ].map((p) => (
                        <li key={p} className="flex items-start gap-1.5 text-[10px] lg:text-xs text-foreground">
                          <span className="text-[#8b5cf6] flex-shrink-0">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-3 lg:p-4">
                    <p className="text-xs lg:text-sm font-semibold text-[#f59e0b] mb-2">Optimistic Rollup</p>
                    <p className="text-[10px] text-muted-foreground mb-1.5">Arbitrum · Optimism · Base</p>
                    <ul className="space-y-1.5">
                      {[
                        'Assume valid by default',
                        '7-day fraud window for withdrawals',
                        'Lighter off-chain computation',
                        'Anyone can challenge with fraud proof',
                        'Simpler to build EVM-compatible',
                      ].map((p) => (
                        <li key={p} className="flex items-start gap-1.5 text-[10px] lg:text-xs text-foreground">
                          <span className="text-[#f59e0b] flex-shrink-0">→</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Starknet 2024-2025 */}
              <div className="p-3 lg:p-4 bg-[#8b5cf6]/5 rounded-xl border border-[#8b5cf6]/20">
                <p className="text-xs font-semibold text-[#8b5cf6] mb-2">Starknet in 2024–2025</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'STRK Token', sub: 'Token launch & community airdrop' },
                    { label: 'v0.13+', sub: '1,000+ TPS throughput milestone' },
                    { label: 'AI Agents', sub: 'On-chain AI agent integration experiments' },
                    { label: 'Onchain Gaming', sub: 'Dojo engine — fully on-chain games' },
                  ].map((item) => (
                    <div key={item.label} className="p-2 bg-card rounded-lg border border-border">
                      <p className="text-xs font-semibold text-foreground">{item.label}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ LAYER 2: OPTIMISTIC VS ZK ═══════ */}
        <div id="s4-layer2" className="h-full flex flex-col p-5 lg:p-8">
          <div className="shrink-0 mb-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#39B54A]">Section 04</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-1 mb-1">Layer 2 Scaling: Optimistic vs ZK Rollups</h2>
            <p className="text-sm text-muted-foreground">Both rollup types execute transactions off-chain and post results to Ethereum L1 — but they differ fundamentally in <em>how they prove correctness</em>.</p>
          </div>
          <div className="flex-1 min-h-0 flex flex-col gap-4">
            {/* Head-to-head cards */}
            <div className="flex gap-4 flex-1 min-h-0">
              {/* Optimistic */}
              <div className="flex-1 flex flex-col rounded-xl border-2 border-[#f97316]/40 bg-card overflow-hidden">
                <div className="h-1.5 bg-[#f97316] shrink-0" />
                <div className="flex flex-col flex-1 p-4 gap-3 min-h-0">
                  <div className="shrink-0">
                    <div className="font-black text-lg text-[#f97316]">Optimistic Rollups</div>
                    <div className="text-xs text-muted-foreground font-medium">Assume valid until proven otherwise</div>
                  </div>
                  <div className="text-xs text-muted-foreground shrink-0">Transactions are posted to L1 with an <span className="font-semibold text-foreground">optimistic assumption</span> that they are valid. A 7-day challenge window allows anyone to submit a <span className="font-semibold text-[#f97316]">fraud proof</span> if they detect an invalid state transition.</div>
                  {[
                    { label: 'Proof type', value: 'Fraud proof (submitted if fraud detected)', color: '#f97316' },
                    { label: 'Finality', value: '~7-day withdrawal delay (challenge window)', color: '#ef4444' },
                    { label: 'Compute cost', value: 'Low — no proof generation overhead', color: '#39B54A' },
                    { label: 'EVM compatibility', value: '✅ Full EVM equivalence — deploy existing Solidity', color: '#39B54A' },
                    { label: 'Trust model', value: 'At least 1 honest verifier must watch the chain', color: '#f97316' },
                    { label: 'Main chains', value: 'Arbitrum One, Optimism, Base', color: '#f97316' },
                    { label: 'Best for', value: 'General DeFi, DApps needing EVM compatibility', color: '#6366f1' },
                  ].map(r => (
                    <div key={r.label} className="flex gap-2 text-xs shrink-0">
                      <span className="text-muted-foreground w-28 shrink-0">{r.label}</span>
                      <span style={{ color: r.color }} className="font-medium">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ZK */}
              <div className="flex-1 flex flex-col rounded-xl border-2 border-[#6366f1]/40 bg-card overflow-hidden">
                <div className="h-1.5 bg-[#6366f1] shrink-0" />
                <div className="flex flex-col flex-1 p-4 gap-3 min-h-0">
                  <div className="shrink-0">
                    <div className="font-black text-lg text-[#6366f1]">ZK Rollups</div>
                    <div className="text-xs text-muted-foreground font-medium">Cryptographic validity proof — no trust required</div>
                  </div>
                  <div className="text-xs text-muted-foreground shrink-0">Each batch of transactions is accompanied by a <span className="font-semibold text-foreground">zero-knowledge validity proof</span> (SNARK or STARK) that mathematically proves correctness. L1 verifies the proof — no challenge window needed.</div>
                  {[
                    { label: 'Proof type', value: 'Validity proof (ZK-SNARK or ZK-STARK)', color: '#6366f1' },
                    { label: 'Finality', value: '⚡ Minutes — as soon as L1 verifies the proof', color: '#39B54A' },
                    { label: 'Compute cost', value: 'High — proof generation is computationally intensive', color: '#ef4444' },
                    { label: 'EVM compatibility', value: '⚠️ Partial — zkEVM still maturing (Type 1–4 spectrum)', color: '#f97316' },
                    { label: 'Trust model', value: 'Trustless — math proves correctness, not watchers', color: '#39B54A' },
                    { label: 'Main chains', value: 'zkSync Era, Starknet, Polygon zkEVM, Scroll', color: '#6366f1' },
                    { label: 'Best for', value: 'Payments, exchanges, privacy apps, high-security finance', color: '#6366f1' },
                  ].map(r => (
                    <div key={r.label} className="flex gap-2 text-xs shrink-0">
                      <span className="text-muted-foreground w-28 shrink-0">{r.label}</span>
                      <span style={{ color: r.color }} className="font-medium">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Shared mechanics + decision rule */}
            <div className="grid grid-cols-2 gap-4 shrink-0">
              <div className="p-4 bg-card border border-border rounded-xl">
                <div className="font-bold text-sm text-foreground mb-2">What both share</div>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex gap-2"><span className="text-[#39B54A]">•</span>Execute transactions off-chain, post compressed data to Ethereum L1</li>
                  <li className="flex gap-2"><span className="text-[#39B54A]">•</span>Inherit Ethereum's security — L1 is the final arbiter</li>
                  <li className="flex gap-2"><span className="text-[#39B54A]">•</span>10–100× cheaper than L1 for end users</li>
                  <li className="flex gap-2"><span className="text-[#39B54A]">•</span>Native bridges back to L1 (with different withdrawal times)</li>
                  <li className="flex gap-2"><span className="text-[#39B54A]">•</span>ERC-20 tokens and ETH work on both</li>
                </ul>
              </div>
              <div className="p-4 bg-[#6366f1]/8 border border-[#6366f1]/30 rounded-xl">
                <div className="font-bold text-sm text-[#6366f1] mb-2">How to choose</div>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex gap-2"><span className="text-[#f97316]">→</span><span><span className="font-semibold text-foreground">Need EVM compatibility today?</span> Use Arbitrum or Optimism — fastest path to deploy existing Solidity.</span></li>
                  <li className="flex gap-2"><span className="text-[#6366f1]">→</span><span><span className="font-semibold text-foreground">Need instant finality for payments/exchange?</span> Use a ZK rollup — users don't want to wait 7 days to withdraw.</span></li>
                  <li className="flex gap-2"><span className="text-[#6366f1]">→</span><span><span className="font-semibold text-foreground">Building privacy features?</span> ZK proofs are foundational — only ZK rollups enable transaction privacy by design.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ QUIZ ═══════ */}
        <div id="s4-quiz" className="h-full">
          <QuizSlide
            question="Cross-chain bridges have been responsible for the largest hacks in crypto history — Ronin ($625M), Wormhole ($320M), Nomad ($190M). What architectural property makes bridges such high-value targets?"
            options={[
              { text: 'Bridges use proof-of-authority consensus controlled by a single company, making them easy to corrupt.', correct: false },
              { text: 'Bridges require KYC verification, creating a centralized identity database attackers can exploit.', correct: false },
              { text: 'Bridges concentrate large amounts of locked assets in a single smart contract on one chain while issuing representations on another — creating a honeypot with a single point of failure.', correct: true },
              { text: 'Bridges are slower than direct transactions, giving attackers more time to execute front-running attacks during the transfer window.', correct: false },
            ]}
            explanation="To bridge 1 ETH from Ethereum to another chain, you lock the ETH in a smart contract on Ethereum and mint a wrapped version on the destination chain. Every user who bridges concentrates their locked assets in that one contract — making it an increasingly valuable target. The Ronin bridge held $625M in locked ETH and USDC before attackers compromised 5 of 9 validator keys and drained it. The fundamental tension is that bridges require centralization (trusted validators or multisig) to operate efficiently, which directly conflicts with blockchain's trust minimization principle. Native interoperability protocols like IBC avoid this by design."
          />
        </div>

        {/* ═══════ TAKEAWAYS ═══════ */}
        <div id="s4-takeaways" className="h-full">
          <TakeawaySlide
            title="Section 04 — Key Takeaways"
            takeaways={[
              'Blockchain interoperability allows assets and data to move across separate chains',
              'Cosmos uses IBC (Inter-Blockchain Communication) to connect sovereign application-specific blockchains',
              'Layer 0 protocols provide shared security and communication infrastructure for multiple chains',
              'Starknet uses ZK-Rollups and the Cairo VM to scale Ethereum with cryptographic proofs',
              'The future of blockchain is a network of networks — not a single chain to rule them all',
            ]}
          />
        </div>

        </div>
      </div>
    </div>
  );
}
