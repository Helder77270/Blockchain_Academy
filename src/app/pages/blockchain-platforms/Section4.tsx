import { useState } from 'react';
import { motion } from 'motion/react';
import { ConceptSlide } from '../../components/templates/ConceptSlide';
import { TitleSlide } from '../../components/templates/TitleSlide';
import { TakeawaySlide } from '../../components/templates/TakeawaySlide';
import { SectionNav } from '../../components/navigation/SectionNav';
import { Network } from 'lucide-react';

const chapters = [
  { id: 's4-interop', label: 'Interoperability' },
  { id: 's4-cosmos', label: 'Cosmos' },
  { id: 's4-layer0', label: 'Layer 0' },
  { id: 's4-starknet', label: 'Starknet' },
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

        {/* ═══════ S4-COSMOS ═══════ */}
        <div id="s4-cosmos" className="h-full flex flex-col p-6 lg:p-10">
          <div className="mb-4 lg:mb-6">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-1 lg:mb-2">
              Cosmos: The Internet of Blockchains
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground">
              Cosmos is a network of sovereign, interoperable blockchains connected by the IBC protocol — each chain optimised for its specific use case.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 min-h-0">
            {/* Left — Architecture visual */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="size-2 rounded-full bg-[#22d3ee]" />
                <h3 className="text-base lg:text-lg font-semibold text-foreground">Hub & Zone Architecture</h3>
              </div>

              {/* Hub visual */}
              <div className="relative flex-1 flex items-center justify-center bg-card/50 rounded-xl border border-border p-4 min-h-[180px] lg:min-h-[220px]">
                {/* Central hub */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="size-14 lg:size-16 rounded-full bg-[#22d3ee]/10 border-2 border-[#22d3ee] flex items-center justify-center">
                    <span className="text-xs lg:text-sm font-bold text-[#22d3ee]">Cosmos<br/>Hub</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">ATOM staking</p>
                </div>

                {/* Zone satellites */}
                {[
                  { label: 'Osmosis', angle: -90, color: '#f59e0b' },
                  { label: 'dYdX', angle: -10, color: '#6366f1' },
                  { label: 'Celestia', angle: 170, color: '#22d3ee' },
                  { label: 'Injective', angle: 100, color: '#8b5cf6' },
                ].map(({ label, angle, color }) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 80;
                  const x = Math.cos(rad) * r;
                  const y = Math.sin(rad) * r;
                  return (
                    <div
                      key={label}
                      className="absolute flex flex-col items-center"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        top: '50%',
                        left: '50%',
                      }}
                    >
                      {/* connector line */}
                      <svg
                        className="absolute"
                        style={{
                          width: Math.abs(x) + 10,
                          height: Math.abs(y) + 10,
                          left: x < 0 ? x - 5 : -5,
                          top: y < 0 ? y - 5 : -5,
                          pointerEvents: 'none',
                          zIndex: 0,
                        }}
                      />
                      <div
                        className="size-10 lg:size-12 rounded-full flex items-center justify-center text-[9px] lg:text-[10px] font-bold text-white z-10"
                        style={{ backgroundColor: `${color}30`, border: `1.5px solid ${color}`, color }}
                      >
                        {label}
                      </div>
                    </div>
                  );
                })}

                {/* IBC lines — rendered as absolute positioned thin lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  {[
                    { angle: -90 }, { angle: -10 }, { angle: 170 }, { angle: 100 },
                  ].map(({ angle }, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const r = 80;
                    const cx = 50;
                    const cy = 50;
                    const ex = cx + (Math.cos(rad) * r * 100) / 200;
                    const ey = cy + (Math.sin(rad) * r * 100) / 200;
                    return (
                      <line
                        key={i}
                        x1={`${cx}%`} y1={`${cy}%`}
                        x2={`${ex}%`} y2={`${ey}%`}
                        stroke="#22d3ee"
                        strokeWidth="1"
                        strokeDasharray="4 3"
                        opacity="0.4"
                      />
                    );
                  })}
                </svg>
              </div>

              <div className="flex gap-2 text-[10px] lg:text-xs text-muted-foreground">
                <span className="px-2 py-1 bg-card rounded border border-border">Tendermint BFT under each chain</span>
                <span className="px-2 py-1 bg-card rounded border border-[#22d3ee]/30 text-[#22d3ee]">IBC = connection standard</span>
              </div>
            </div>

            {/* Right — 4 property cards + ATOM */}
            <div className="flex flex-col gap-2 lg:gap-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="size-2 rounded-full bg-[#6366f1]" />
                <h3 className="text-base lg:text-lg font-semibold text-foreground">Core Properties</h3>
              </div>

              {[
                {
                  emoji: '🌐',
                  title: 'IBC Protocol',
                  desc: 'Inter-Blockchain Communication — like TCP/IP for blockchains. Native, trustless messaging and asset transfer between any IBC-enabled chain.',
                },
                {
                  emoji: '🔧',
                  title: 'Cosmos SDK',
                  desc: 'A Go framework for building app-specific blockchains in days, not years. Modular, customisable, battle-tested by Osmosis, dYdX, and dozens more.',
                },
                {
                  emoji: '⚛️',
                  title: 'Tendermint BFT',
                  desc: 'Instant finality, ~1 second block time, no forks. Each zone runs Tendermint independently — Byzantine fault-tolerant with a known validator set.',
                },
                {
                  emoji: '⚡',
                  title: 'App-Specific Chains',
                  desc: 'Each dApp gets its own chain tuned for its needs — no gas competition, custom tokenomics, and full sovereignty over governance and upgrades.',
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-3 p-2 lg:p-3 bg-card rounded-lg border border-[#22d3ee]/20 hover:border-[#22d3ee]/50 transition-colors"
                >
                  <span className="text-lg lg:text-xl flex-shrink-0">{card.emoji}</span>
                  <div>
                    <p className="text-xs lg:text-sm font-semibold text-foreground">{card.title}</p>
                    <p className="text-[10px] lg:text-xs text-muted-foreground mt-0.5 leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* ATOM token role */}
              <div className="mt-auto p-2 lg:p-3 bg-[#22d3ee]/5 rounded-lg border border-[#22d3ee]/30">
                <p className="text-xs font-semibold text-[#22d3ee] mb-1">ATOM Token Role</p>
                <p className="text-[10px] lg:text-xs text-muted-foreground">
                  Staked on the Cosmos Hub to secure the network · Used for governance votes · Powers shared security (Interchain Security) for new chains that opt in.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ S4-LAYER0 ═══════ */}
        <div id="s4-layer0" className="h-full flex flex-col p-6 lg:p-10">
          <div className="mb-4 lg:mb-6">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-1 lg:mb-2">
              Layer 0: Infrastructure for Blockchains
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground">
              Layer 0 sits below Layer 1 blockchains — providing shared security, cross-chain messaging, and validator infrastructure that multiple chains inherit.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 min-h-0">
            {/* Left */}
            <div className="flex flex-col gap-3 min-h-0 overflow-y-auto">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-[#6366f1]" />
                <h3 className="text-base lg:text-lg font-semibold text-foreground">What is Layer 0?</h3>
              </div>

              {/* Layer stack visual */}
              <div className="flex flex-col gap-1.5 p-3 bg-card/50 rounded-xl border border-border">
                {[
                  { label: 'Layer 2 (Rollups)', sub: 'Scaling on top of L1', bg: '#8b5cf620', border: '#8b5cf6' },
                  { label: 'Layer 1 (Parachains / Subnets)', sub: 'App-specific blockchains', bg: '#6366f120', border: '#6366f1' },
                  { label: 'Layer 0 (Relay Chain / Primary Network)', sub: 'Shared security & messaging', bg: '#22d3ee20', border: '#22d3ee' },
                ].map((layer) => (
                  <div
                    key={layer.label}
                    className="p-2 lg:p-2.5 rounded-lg text-center"
                    style={{ backgroundColor: layer.bg, border: `1px solid ${layer.border}` }}
                  >
                    <p className="text-xs lg:text-sm font-semibold" style={{ color: layer.border }}>{layer.label}</p>
                    <p className="text-[10px] lg:text-xs text-muted-foreground">{layer.sub}</p>
                  </div>
                ))}
              </div>

              {/* Polkadot */}
              <div className="p-3 bg-card rounded-xl border border-[#e6007a]/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">🔴</span>
                  <p className="text-sm lg:text-base font-semibold text-foreground">Polkadot</p>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#e6007a]/10 text-[#e6007a] border border-[#e6007a]/20">DOT</span>
                </div>
                <ul className="space-y-1 text-[10px] lg:text-xs text-muted-foreground">
                  <li><span className="text-foreground font-medium">Relay Chain</span> — provides shared security pooled from all validators</li>
                  <li><span className="text-foreground font-medium">Parachains</span> — app-specific chains that lease slots via auction (100 slots); inherit Relay Chain security</li>
                  <li><span className="text-foreground font-medium">XCM</span> — Cross-Consensus Messaging: native message format for inter-parachain communication</li>
                  <li><span className="text-foreground font-medium">Consensus</span> — BABE (block production) + GRANDPA (finality)</li>
                </ul>
              </div>

              {/* Avalanche */}
              <div className="p-3 bg-card rounded-xl border border-[#e84142]/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">🔺</span>
                  <p className="text-sm lg:text-base font-semibold text-foreground">Avalanche</p>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#e84142]/10 text-[#e84142] border border-[#e84142]/20">AVAX</span>
                </div>
                <ul className="space-y-1 text-[10px] lg:text-xs text-muted-foreground">
                  <li><span className="text-foreground font-medium">Primary Network</span> — three built-in chains: X-Chain, C-Chain (EVM), P-Chain</li>
                  <li><span className="text-foreground font-medium">Subnets</span> — custom networks for DeFi (Avalanche C-Chain), gaming (DFK), enterprise; no slot auctions</li>
                  <li><span className="text-foreground font-medium">VM Support</span> — EVM-compatible or fully custom VMs per subnet</li>
                  <li><span className="text-foreground font-medium">Consensus</span> — Snowman (probabilistic, sub-second finality)</li>
                </ul>
              </div>
            </div>

            {/* Right — Comparison table */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-[#6366f1]" />
                <h3 className="text-base lg:text-lg font-semibold text-foreground">Platform Comparison</h3>
              </div>

              <div className="flex-1 bg-card rounded-xl border border-border overflow-hidden">
                <table className="w-full text-xs lg:text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left p-2 lg:p-3 text-muted-foreground font-medium">Property</th>
                      <th className="text-center p-2 lg:p-3 font-semibold" style={{ color: '#e6007a' }}>Polkadot</th>
                      <th className="text-center p-2 lg:p-3 font-semibold" style={{ color: '#e84142' }}>Avalanche</th>
                      <th className="text-center p-2 lg:p-3 font-semibold" style={{ color: '#22d3ee' }}>Cosmos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Shared Security', '✅ Yes', '⚠️ Partial', '❌ No'],
                      ['App Chains', 'Parachains', 'Subnets', 'Zones'],
                      ['Consensus', 'BABE+GRANDPA', 'Snowman', 'Tendermint'],
                      ['Token', 'DOT', 'AVAX', 'ATOM'],
                      ['Slot Auctions', '✅ Yes', '❌ No', '❌ No'],
                      ['EVM Support', '⚠️ Via Moonbeam', '✅ Native C-Chain', '⚠️ Via Evmos'],
                      ['Cross-chain Msg', 'XCM', 'Warp Messages', 'IBC'],
                    ].map(([prop, pol, ava, cos]) => (
                      <tr key={prop} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="p-2 lg:p-3 text-muted-foreground">{prop}</td>
                        <td className="p-2 lg:p-3 text-center text-foreground">{pol}</td>
                        <td className="p-2 lg:p-3 text-center text-foreground">{ava}</td>
                        <td className="p-2 lg:p-3 text-center text-foreground">{cos}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-[#6366f1]/5 rounded-xl border border-[#6366f1]/20">
                <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                  <span className="text-[#6366f1] font-semibold">Key insight:</span> Layer 0 trades some sovereignty for shared security. Cosmos gives full sovereignty but each chain must bootstrap its own validators. The right choice depends on the use case.
                </p>
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
