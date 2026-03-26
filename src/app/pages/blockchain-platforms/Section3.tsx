import { useState } from 'react';
import { motion } from 'motion/react';
import { TitleSlide } from '../../components/templates/TitleSlide';
import { TakeawaySlide } from '../../components/templates/TakeawaySlide';
import { SectionNav } from '../../components/navigation/SectionNav';
import { ComparisonSlide } from '../../components/templates/ComparisonSlide';
import { ConceptSlide } from '../../components/templates/ConceptSlide';
import { Building2 } from 'lucide-react';

const chapters = [
  { id: 's3-why', label: 'Why Permissioned?' },
  { id: 's3-supplychains', label: 'Supply Chains' },
  { id: 's3-overview', label: 'Fabric Overview' },
  { id: 's3-fabricx', label: 'Fabric Deep Dive' },
  { id: 's3-consensus-evo', label: 'Consensus Evolution' },
  { id: 's3-consensus', label: 'Pluggable Consensus' },
  { id: 's3-raft', label: 'Raft Mechanics' },
  { id: 's3-bft', label: 'BFT' },
  { id: 's3-channels', label: 'Channels' },
  { id: 's3-txflow', label: 'Transaction Flow' },
  { id: 's3-exercise-supply', label: 'Exercise: Supply Chain' },
  { id: 's3-exercise-health', label: 'Exercise: Health Data' },
  { id: 's3-comparison', label: 'ETH vs Fabric' },
  { id: 's3-takeaways', label: 'Takeaways' },
];

// ─── s3-why ───────────────────────────────────────────────────────────────────

function WhyPermissionedSlide() {
  return (
    <div className="h-full flex flex-col p-6 lg:p-10">
      <div className="shrink-0 mb-5">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Why Permissioned Blockchains?</h2>
        <p className="text-sm text-muted-foreground mt-1">Public chains fall short for enterprise — here is why permissioned networks exist.</p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left — problems */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-bold text-foreground shrink-0">When public chains fall short</h3>
          {[
            {
              emoji: '🔒',
              label: 'Privacy',
              desc: 'Transaction data is visible to all competitors on public networks',
              color: '#ED1C24',
            },
            {
              emoji: '📋',
              label: 'Compliance',
              desc: 'GDPR, HIPAA, KYC/AML regulations require controlled data access',
              color: '#f59e0b',
            },
            {
              emoji: '⚡',
              label: 'Performance',
              desc: '7–15 TPS on public chains cannot handle enterprise transaction volumes',
              color: '#f59e0b',
            },
            {
              emoji: '🪪',
              label: 'Identity',
              desc: 'Anonymous addresses are not legal entities — accountability is impossible',
              color: '#ED1C24',
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.35 }}
              className="flex items-start gap-3 p-3 rounded-xl border"
              style={{
                borderColor: item.color + '50',
                backgroundColor: item.color + '0d',
              }}
            >
              <span className="text-xl shrink-0">{item.emoji}</span>
              <div>
                <div className="font-bold text-sm text-foreground">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right — solutions */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-bold text-foreground shrink-0">The enterprise case</h3>
          {[
            {
              label: 'Known participants',
              desc: 'All members are verified with legal accountability — no anonymity',
            },
            {
              label: 'Configurable privacy',
              desc: 'Channels isolate sensitive data so only relevant parties can see it',
            },
            {
              label: 'High throughput',
              desc: 'No mining required — 3,000+ TPS is achievable with Raft consensus',
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.35 }}
              className="flex items-start gap-3 p-3 rounded-xl border border-[#39B54A]/40 bg-[#39B54A]/08"
              style={{ backgroundColor: '#39B54A0d' }}
            >
              <div className="size-5 rounded-full bg-[#39B54A] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="size-3 text-white" fill="none" viewBox="0 0 12 12">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            </motion.div>
          ))}

          {/* Real-world adopters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-auto p-3 rounded-xl border border-border bg-card"
          >
            <div className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wider">Real-world adopters</div>
            <div className="flex flex-wrap gap-2">
              {['Walmart', 'Maersk', 'HSBC', 'IBM Food Trust', 'TradeLens'].map(name => (
                <span
                  key={name}
                  className="px-2 py-0.5 rounded-full text-xs font-medium border border-[#39B54A]/40 text-[#39B54A]"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── s3-supplychains ──────────────────────────────────────────────────────────

const SUPPLY_STEPS = [
  { label: 'Farmer', icon: '🌾' },
  { label: 'Processor', icon: '🏭' },
  { label: 'Distributor', icon: '🚛' },
  { label: 'Retailer', icon: '🏪' },
  { label: 'Consumer', icon: '👤' },
];

const SUPPLY_PAIN = [
  'Paper documents',
  '3-week recalls',
  'No traceability',
  'Siloed data',
];

const SUPPLY_RESULTS = [
  { metric: '7 days → 2.2 sec', label: 'Mango recall time (Walmart)' },
  { metric: '100%', label: 'Traceability across all partners' },
  { metric: '~$30B', label: 'Food fraud prevented annually' },
];

function SupplyChainsSlide() {
  return (
    <div className="h-full flex flex-col p-6 lg:p-10">
      <div className="shrink-0 mb-5">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Supply Chains: The Perfect Use Case</h2>
        <p className="text-sm text-muted-foreground mt-1">Multi-party data sharing with no single point of trust — exactly what blockchain solves.</p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left — traditional problem */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">The problem — traditional supply chain</h3>
          <div className="flex-1 flex flex-col gap-1">
            {SUPPLY_STEPS.map((step, i) => (
              <div key={step.label} className="flex flex-col items-start flex-1">
                <div
                  className="w-full h-full flex items-center gap-3 p-3 rounded-xl border border-[#ED1C24]/30"
                  style={{ backgroundColor: '#ED1C240d' }}
                >
                  <span className="text-lg">{step.icon}</span>
                  <span className="font-semibold text-sm text-foreground">{step.label}</span>
                </div>
                {i < SUPPLY_STEPS.length - 1 && (
                  <div className="ml-5 flex items-center gap-2 py-0.5">
                    <div className="w-0.5 h-4 bg-[#ED1C24]/30" />
                    {i < SUPPLY_PAIN.length && (
                      <span className="text-xs text-[#ED1C24]">{SUPPLY_PAIN[i]}</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Fabric solution */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Fabric solution — shared ledger</h3>
          <div className="flex flex-col gap-1">
            {SUPPLY_STEPS.map((step, i) => (
              <div key={step.label} className="flex flex-col items-start">
                <div
                  className="w-full flex items-center gap-3 p-3 rounded-xl border border-[#39B54A]/40"
                  style={{ backgroundColor: '#39B54A0d' }}
                >
                  <span className="text-lg">{step.icon}</span>
                  <span className="font-semibold text-sm text-foreground">{step.label}</span>
                  <span className="ml-auto text-xs text-[#39B54A] font-medium">records on ledger</span>
                </div>
                {i < SUPPLY_STEPS.length - 1 && (
                  <div className="ml-5 py-0.5">
                    <div className="w-0.5 h-3 bg-[#39B54A]/40" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Result cards */}
          <div className="grid grid-cols-3 gap-2 mt-auto">
            {SUPPLY_RESULTS.map(r => (
              <div key={r.label} className="p-2 rounded-lg border border-[#39B54A]/40 text-center" style={{ backgroundColor: '#39B54A0d' }}>
                <div className="font-bold text-sm text-[#39B54A]">{r.metric}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── s3-overview ─────────────────────────────────────────────────────────────

const fabricOverviewCards = [
  {
    emoji: '🏛️',
    title: 'Linux Foundation',
    desc: 'Open source, governed by a consortium: IBM, Intel, SAP and many more.',
  },
  {
    emoji: '🔧',
    title: 'Modular Architecture',
    desc: 'Swap consensus, membership services, and storage independently.',
  },
  {
    emoji: '🔐',
    title: 'Identity-First',
    desc: 'Every participant holds a verified certificate issued by an MSP/CA.',
  },
  {
    emoji: '⚡',
    title: 'High Performance',
    desc: 'Execute-order-validate enables parallel execution — 3,000+ TPS.',
  },
];

const fabricOverviewVisual = (
  <div className="grid grid-cols-2 gap-3 w-full">
    {fabricOverviewCards.map(card => (
      <div
        key={card.title}
        className="p-3 rounded-xl border border-[#39B54A]/40 flex flex-col gap-1"
        style={{ backgroundColor: '#39B54A0d' }}
      >
        <span className="text-xl">{card.emoji}</span>
        <div className="font-bold text-sm text-foreground">{card.title}</div>
        <div className="text-xs text-muted-foreground">{card.desc}</div>
      </div>
    ))}
  </div>
);

// ─── s3-fabricx ──────────────────────────────────────────────────────────────

const FABRIC_COMPONENTS = [
  {
    emoji: '👥',
    label: 'Organizations',
    desc: 'Member companies — each with their own peers and MSP.',
    color: '#6366f1',
  },
  {
    emoji: '🖥️',
    label: 'Peer Nodes',
    desc: 'Hold ledger copies, execute chaincode, and endorse transactions.',
    color: '#39B54A',
  },
  {
    emoji: '📮',
    label: 'Orderer',
    desc: 'Creates block order via Raft/BFT — the consensus service.',
    color: '#f59e0b',
  },
  {
    emoji: '🔑',
    label: 'MSP / CA',
    desc: 'Certificate Authority — issues identities, proves who you are.',
    color: '#ED1C24',
  },
  {
    emoji: '📁',
    label: 'Ledger',
    desc: 'World State DB + blockchain log — the persistent record.',
    color: '#22d3ee',
  },
];

function FabricDeepDiveSlide() {
  return (
    <div className="h-full flex flex-col p-6 lg:p-10">
      <div className="shrink-0 mb-5">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Fabric Architecture Deep Dive</h2>
        <p className="text-sm text-muted-foreground mt-1">Understanding the key actors and how they connect.</p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left — components list */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1 shrink-0">Key Components</h3>
          {FABRIC_COMPONENTS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="flex items-center gap-3 p-3 rounded-xl border flex-1"
              style={{ borderColor: c.color + '40', backgroundColor: c.color + '0d' }}
            >
              <span className="text-2xl shrink-0">{c.emoji}</span>
              <div>
                <div className="font-bold text-sm text-foreground">{c.label}</div>
                <div className="text-xs text-muted-foreground">{c.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right — network diagram + chaincode note */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Network Diagram</h3>

          {/* SVG-style diagram using divs */}
          <div className="flex-1 relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-border bg-card/50">
            {/* Orderer at top */}
            <div className="px-4 py-2 rounded-lg border-2 border-[#f59e0b] bg-[#f59e0b]/10 text-sm font-bold text-foreground text-center">
              📮 Orderer
            </div>

            {/* Connecting line down */}
            <div className="w-0.5 h-4 bg-border" />

            {/* 3 orgs */}
            <div className="flex gap-4 w-full justify-center">
              {['Org A', 'Org B', 'Org C'].map((org, i) => (
                <div key={org} className="flex flex-col items-center gap-1">
                  <div
                    className="px-3 py-1.5 rounded-lg border-2 text-xs font-bold text-center"
                    style={{
                      borderColor: ['#6366f1', '#39B54A', '#ED1C24'][i] + '80',
                      backgroundColor: ['#6366f1', '#39B54A', '#ED1C24'][i] + '15',
                      color: ['#6366f1', '#39B54A', '#ED1C24'][i],
                    }}
                  >
                    {org}
                  </div>
                  <div className="flex gap-1">
                    {[1, 2].map(p => (
                      <div
                        key={p}
                        className="px-2 py-0.5 rounded border text-xs text-muted-foreground"
                        style={{ borderColor: ['#6366f1', '#39B54A', '#ED1C24'][i] + '40' }}
                      >
                        Peer {p}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Channel label */}
            <div className="text-xs text-muted-foreground border border-dashed border-border px-3 py-1 rounded-full mt-1">
              — channel —
            </div>
          </div>

          {/* Chaincode note */}
          <div className="p-3 rounded-xl border border-[#39B54A]/40" style={{ backgroundColor: '#39B54A0d' }}>
            <div className="font-bold text-sm text-foreground mb-1">Chaincode (Smart Contracts)</div>
            <div className="text-xs text-muted-foreground">
              Runs on peers, defines business logic, and is invoked via transactions. Written in Go, JavaScript, or Java. Chaincode executes during endorsement and its results are captured before ordering.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── s3-consensus ─────────────────────────────────────────────────────────────

const CONSENSUS_TABLE = [
  { prop: 'Fault type tolerated', raft: 'Crashes', bft: 'Byzantine (malicious)' },
  { prop: 'Minimum nodes', raft: '3', bft: '4' },
  { prop: 'Performance', raft: 'High', bft: 'Medium' },
  { prop: 'Trust assumption', raft: 'No malicious nodes', bft: 'Up to 1/3 malicious' },
  { prop: 'Use case', raft: 'Consortium (known parties)', bft: 'High-security enterprise' },
];

function PluggableConsensusSlide() {
  return (
    <div className="h-full flex flex-col p-6 lg:p-10">
      <div className="shrink-0 mb-5">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Pluggable Consensus</h2>
        <p className="text-sm text-muted-foreground mt-1">Different enterprise environments need different trust models — Fabric adapts.</p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left — why pluggable */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Why pluggable?</h3>
          <p className="text-sm text-muted-foreground">
            A bank consortium with fully trusted members has very different needs from a supply chain with competing companies. Fabric's pluggable orderer means you pick the right tool.
          </p>
          {[
            {
              label: 'Raft',
              badge: 'Default · CFT',
              desc: 'Crash Fault Tolerant. Simple leader-follower model — ideal for trusted, known environments.',
              color: '#39B54A',
            },
            {
              label: 'SmartBFT',
              badge: 'Optional · BFT',
              desc: 'Byzantine Fault Tolerant. Handles malicious nodes — heavier but necessary in hostile networks.',
              color: '#f59e0b',
            },
            {
              label: 'Custom',
              badge: 'Pluggable',
              desc: 'An open interface allows future consensus algorithms to be plugged in without rebuilding.',
              color: '#6366f1',
            },
          ].map((opt, i) => (
            <motion.div
              key={opt.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="p-3 rounded-xl border"
              style={{ borderColor: opt.color + '40', backgroundColor: opt.color + '0d' }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm text-foreground">{opt.label}</span>
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full font-medium"
                  style={{ backgroundColor: opt.color + '20', color: opt.color }}
                >
                  {opt.badge}
                </span>
              </div>
              <div className="text-xs text-muted-foreground">{opt.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Right — comparison table */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Raft vs SmartBFT</h3>

          {/* Header */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-lg bg-muted text-xs font-bold text-foreground">Property</div>
            <div className="p-2 rounded-lg text-xs font-bold text-white text-center" style={{ backgroundColor: '#39B54A' }}>Raft</div>
            <div className="p-2 rounded-lg text-xs font-bold text-white text-center" style={{ backgroundColor: '#f59e0b' }}>SmartBFT</div>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-1.5 flex-1">
            {CONSENSUS_TABLE.map((row, i) => (
              <motion.div
                key={row.prop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.07 }}
                className="grid grid-cols-3 gap-2 flex-1"
              >
                <div className="p-2 rounded-lg border border-border bg-card text-xs font-semibold text-foreground flex items-center">{row.prop}</div>
                <div className="p-2 rounded-lg border border-[#39B54A]/30 text-xs text-muted-foreground flex items-center justify-center text-center" style={{ backgroundColor: '#39B54A08' }}>{row.raft}</div>
                <div className="p-2 rounded-lg border border-[#f59e0b]/30 text-xs text-muted-foreground flex items-center justify-center text-center" style={{ backgroundColor: '#f59e0b08' }}>{row.bft}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── s3-bft ───────────────────────────────────────────────────────────────────

const BFT_TABLE = [
  { faulty: 1, needed: 4 },
  { faulty: 2, needed: 7 },
  { faulty: 10, needed: 31 },
];

function BFTSlide() {
  return (
    <div className="h-full flex flex-col p-6 lg:p-10">
      <div className="shrink-0 mb-5">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Byzantine Fault Tolerance in Fabric</h2>
        <p className="text-sm text-muted-foreground mt-1">How distributed systems survive malicious participants.</p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left — BFT explained */}
        <div className="flex flex-col gap-4">
          <div className="p-4 rounded-xl border border-[#f59e0b]/40" style={{ backgroundColor: '#f59e0b0d' }}>
            <div className="text-2xl mb-2">🛡️</div>
            <p className="text-sm text-foreground font-medium mb-1">What is BFT?</p>
            <p className="text-xs text-muted-foreground">
              A system is Byzantine Fault Tolerant if it continues to work correctly even when some nodes behave maliciously — sending false data, colluding, or going silent at strategic moments.
            </p>
          </div>

          {/* Formula */}
          <div className="p-4 rounded-xl border border-border bg-card text-center">
            <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">The formula</div>
            <div className="text-xl font-bold text-foreground font-mono">N ≥ 3F + 1</div>
            <div className="text-xs text-muted-foreground mt-1">Need at least 3F+1 nodes to tolerate F malicious ones</div>
          </div>

          {/* Table */}
          <div className="flex flex-col gap-1.5">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-lg bg-muted text-xs font-bold text-foreground text-center">Faulty nodes (F)</div>
              <div className="p-2 rounded-lg bg-muted text-xs font-bold text-foreground text-center">Nodes needed (N)</div>
            </div>
            {BFT_TABLE.map(row => (
              <div key={row.faulty} className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-lg border border-[#ED1C24]/30 text-sm font-bold text-[#ED1C24] text-center" style={{ backgroundColor: '#ED1C240d' }}>{row.faulty}</div>
                <div className="p-2 rounded-lg border border-[#39B54A]/30 text-sm font-bold text-[#39B54A] text-center" style={{ backgroundColor: '#39B54A0d' }}>{row.needed}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — why it matters */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Why it matters for enterprise</h3>
          {[
            {
              emoji: '🏢',
              label: 'Competitor on the network',
              desc: 'A competitor sharing your blockchain could submit false transaction data to gain advantage.',
              color: '#ED1C24',
            },
            {
              emoji: '💻',
              label: 'Hacked peer',
              desc: 'A compromised node might send conflicting information to different parts of the network.',
              color: '#f59e0b',
            },
            {
              emoji: '📋',
              label: 'Regulatory requirement',
              desc: 'Some industries (finance, defense) mandate BFT guarantees by compliance rules.',
              color: '#6366f1',
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-xl border"
              style={{ borderColor: item.color + '40', backgroundColor: item.color + '0d' }}
            >
              <span className="text-xl shrink-0">{item.emoji}</span>
              <div>
                <div className="font-bold text-sm text-foreground">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            </motion.div>
          ))}

          {/* Warning note */}
          <div className="mt-auto p-3 rounded-xl border border-[#f59e0b]/50" style={{ backgroundColor: '#f59e0b0d' }}>
            <div className="text-xs font-bold text-[#f59e0b] mb-1">⚠ Default Raft is CFT only</div>
            <div className="text-xs text-muted-foreground">
              Fabric's default Raft consensus only tolerates crashes, not malicious behavior. SmartBFT is required for hostile or adversarial environments.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── s3-channels ─────────────────────────────────────────────────────────────

const CHANNEL_ORGS = [
  { id: 'pharmaA', label: 'PharmaA', icon: '🔵', color: '#6366f1' },
  { id: 'pharmaB', label: 'PharmaB', icon: '🟢', color: '#39B54A' },
  { id: 'hospital', label: 'City Hospital', icon: '🏥', color: '#ED1C24' },
  { id: 'regulator', label: 'Regulator', icon: '⚖️', color: '#f59e0b' },
];

const CHANNELS_DEF = [
  {
    id: 'ch1',
    label: 'Joint R&D',
    color: '#6366f1',
    members: ['pharmaA', 'pharmaB'],
    data: 'Shared drug research, trial data, patents',
    why: 'Competitors collaborate on R&D but keep results hidden from hospitals and regulators until ready.',
  },
  {
    id: 'ch2',
    label: 'Drug Supply',
    color: '#ED1C24',
    members: ['pharmaA', 'hospital'],
    data: 'Orders, shipments, cold-chain logs, invoices',
    why: 'Supply chain between one pharma and one hospital — PharmaB should not see their competitor\'s sales volumes.',
  },
  {
    id: 'ch3',
    label: 'Compliance',
    color: '#f59e0b',
    members: ['pharmaA', 'pharmaB', 'hospital', 'regulator'],
    data: 'Audit logs, regulatory filings, adverse event reports',
    why: 'Regulator needs visibility into safety and compliance across the whole network.',
  },
];

function ChannelsSlide() {
  const [activeChannel, setActiveChannel] = useState<string | null>(null);
  const active = CHANNELS_DEF.find(c => c.id === activeChannel);

  return (
    <div className="h-full flex flex-col p-6 lg:p-10">
      <div className="shrink-0 mb-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Channels: Selective Data Sharing</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Four companies on one Fabric network — three channels, each with different membership and data. Click a channel to see who can read it.
        </p>
      </div>

      <div className="flex-1 min-h-0 flex flex-col gap-4">
        {/* Companies row */}
        <div className="shrink-0 flex gap-3 justify-center">
          {CHANNEL_ORGS.map(org => (
            <div
              key={org.id}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 font-bold text-sm"
              style={{ borderColor: org.color, backgroundColor: org.color + '15', color: org.color }}
            >
              <span>{org.icon}</span> {org.label}
            </div>
          ))}
        </div>

        {/* Channels + detail */}
        <div className="flex-1 min-h-0 flex gap-4">
          {/* Channels column */}
          <div className="flex flex-col gap-3 w-56 shrink-0">
            {CHANNELS_DEF.map(ch => (
              <button
                key={ch.id}
                onClick={() => setActiveChannel(activeChannel === ch.id ? null : ch.id)}
                className="flex-1 flex flex-col gap-2 p-4 rounded-xl border-2 border-dashed text-left cursor-pointer transition-all"
                style={{
                  borderColor: activeChannel === ch.id ? ch.color : ch.color + '50',
                  backgroundColor: activeChannel === ch.id ? ch.color + '14' : ch.color + '06',
                }}
              >
                <div className="font-bold text-sm" style={{ color: ch.color }}>{ch.label}</div>
                <div className="flex flex-wrap gap-1">
                  {CHANNEL_ORGS.map(org => (
                    <span
                      key={org.id}
                      className="px-2 py-0.5 rounded-full text-xs border font-medium transition-all"
                      style={
                        ch.members.includes(org.id)
                          ? { borderColor: org.color + '80', color: org.color, backgroundColor: org.color + '12' }
                          : { borderColor: 'var(--border)', color: 'var(--muted-foreground)', opacity: 0.35 }
                      }
                    >
                      {org.label}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground">{ch.data}</div>
              </button>
            ))}
          </div>

          {/* Detail / visual panel */}
          <div className="flex-1 min-w-0 rounded-xl border border-border bg-card/50 p-5 flex flex-col">
            {active ? (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-4 h-full"
              >
                <div className="font-bold text-lg" style={{ color: active.color }}>
                  Channel: {active.label}
                </div>

                {/* Who sees what visual */}
                <div className="flex-1 flex flex-col gap-3">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Visibility per organisation</div>
                  <div className="flex flex-col gap-2">
                    {CHANNEL_ORGS.map(org => {
                      const canSee = active.members.includes(org.id);
                      return (
                        <div
                          key={org.id}
                          className="flex items-center gap-3 p-3 rounded-xl border"
                          style={{
                            borderColor: canSee ? org.color + '60' : 'var(--border)',
                            backgroundColor: canSee ? org.color + '0a' : 'transparent',
                          }}
                        >
                          <span className="text-lg">{org.icon}</span>
                          <span className="font-semibold text-sm text-foreground flex-1">{org.label}</span>
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded-full"
                            style={
                              canSee
                                ? { backgroundColor: org.color + '20', color: org.color }
                                : { backgroundColor: 'var(--muted)', color: 'var(--muted-foreground)' }
                            }
                          >
                            {canSee ? '✓ Can read & write' : '✗ No access'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className="mt-auto p-3 rounded-xl border text-xs text-muted-foreground"
                    style={{ borderColor: active.color + '40', backgroundColor: active.color + '08' }}
                  >
                    <span className="font-semibold" style={{ color: active.color }}>Why this channel? </span>
                    {active.why}
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground text-sm">
                ← Click a channel to see who has access
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── s3-txflow ────────────────────────────────────────────────────────────────

const TX_STEPS = [
  {
    num: 1,
    emoji: '📝',
    label: 'Propose',
    desc: 'Client sends a transaction proposal to the designated endorsing peers.',
    color: '#6366f1',
  },
  {
    num: 2,
    emoji: '✅',
    label: 'Endorse',
    desc: 'Peers simulate chaincode execution and return a signed endorsement. No ledger write yet.',
    color: '#39B54A',
  },
  {
    num: 3,
    emoji: '📦',
    label: 'Order',
    desc: 'Client submits the endorsed transaction to the Orderer. Orderer batches transactions into a block.',
    color: '#f59e0b',
  },
  {
    num: 4,
    emoji: '🔗',
    label: 'Validate & Commit',
    desc: 'All peers validate endorsement signatures and commit the block to their ledger copy.',
    color: '#ED1C24',
  },
  {
    num: 5,
    emoji: '📢',
    label: 'Notify',
    desc: 'Events are emitted to the client confirming the transaction has been committed.',
    color: '#22d3ee',
  },
];

function TxFlowSlide() {
  return (
    <div className="h-full flex flex-col p-6 lg:p-10">
      <div className="shrink-0 mb-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Transaction Flow in Fabric</h2>
        <p className="text-sm text-muted-foreground mt-1">Five stages from proposal to confirmation — execute-order-validate model.</p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Steps — takes 2 cols */}
        <div className="lg:col-span-2 flex flex-col justify-center gap-1">
          {TX_STEPS.map((step, i) => (
            <div key={step.num} className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.35 }}
                className="flex items-start gap-3 p-3 rounded-xl border"
                style={{ borderColor: step.color + '40', backgroundColor: step.color + '0d' }}
              >
                {/* Number badge */}
                <div
                  className="size-7 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 mt-0.5"
                  style={{ backgroundColor: step.color }}
                >
                  {step.num}
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-lg">{step.emoji}</span>
                  <div>
                    <div className="font-bold text-sm text-foreground">{step.label}</div>
                    <div className="text-xs text-muted-foreground">{step.desc}</div>
                  </div>
                </div>
              </motion.div>
              {/* Connector */}
              {i < TX_STEPS.length - 1 && (
                <div className="ml-[22px] flex items-center">
                  <div className="w-0.5 h-3 bg-border" />
                  <svg className="size-2 -ml-0.5 text-muted-foreground" viewBox="0 0 8 8" fill="currentColor">
                    <path d="M4 8L0 0h8z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Side note */}
        <div className="flex flex-col gap-4 justify-center">
          <div className="p-4 rounded-xl border border-[#39B54A]/40" style={{ backgroundColor: '#39B54A0d' }}>
            <div className="font-bold text-sm text-foreground mb-2">Execute-Order-Validate</div>
            <div className="text-xs text-muted-foreground leading-relaxed">
              Fabric runs chaincode <strong>before</strong> ordering. This means multiple transactions can be simulated in parallel by different peers simultaneously — unlocking high throughput.
            </div>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="font-bold text-sm text-foreground mb-2">vs. Order-Execute</div>
            <div className="text-xs text-muted-foreground leading-relaxed">
              Traditional blockchains (Ethereum) order first, then all nodes execute sequentially. This creates a bottleneck. Fabric's approach avoids this entirely.
            </div>
          </div>

          <div className="p-3 rounded-xl border border-[#6366f1]/40" style={{ backgroundColor: '#6366f10d' }}>
            <div className="text-xs text-muted-foreground">
              <span className="font-bold text-foreground">Result: </span>
              3,000+ TPS achievable without sacrificing Byzantine resilience when SmartBFT is enabled.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── s3-consensus-evo ─────────────────────────────────────────────────────────

const CONSENSUS_VERSIONS = [
  {
    version: 'v1.x',
    year: '2017',
    name: 'Apache Kafka',
    color: '#ED1C24',
    status: 'Deprecated',
    desc: 'External Kafka cluster handled ordering. Reliable but operationally heavy — required Zookeeper, separate ops infrastructure, and introduced a non-blockchain external dependency.',
    limit: 'Not BFT. Kafka itself was a central point of failure and complexity.',
    solved: '—',
  },
  {
    version: 'v2.x',
    year: '2019',
    name: 'Raft (CFT)',
    color: '#f59e0b',
    status: 'Current default',
    desc: 'Built-in Crash Fault Tolerant consensus. Orderer nodes elect a leader and replicate an append-only log to followers. Simple, fast, and requires no external infrastructure.',
    limit: 'Assumes no malicious nodes — only tolerates crashes, not Byzantine faults.',
    solved: 'Eliminated Kafka dependency, dramatically simplified deployment.',
  },
  {
    version: 'v3.x',
    year: '2023',
    name: 'SmartBFT',
    color: '#39B54A',
    status: 'Available',
    desc: 'Byzantine Fault Tolerant consensus. Handles both crashes and malicious orderer nodes. Designed for adversarial enterprise environments where full trust is impossible.',
    limit: 'Heavier than Raft — requires at least 4 orderer nodes (N ≥ 3F+1).',
    solved: 'Enables hostile environments: finance, defense, competing-consortium use cases.',
  },
];

function ConsensusEvolutionSlide() {
  return (
    <div className="h-full flex flex-col p-6 lg:p-10">
      <div className="shrink-0 mb-5">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Consensus Evolution in Fabric</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Hyperledger Fabric's consensus layer evolved in three major steps — each solving the previous version's limitations.
        </p>
      </div>

      <div className="flex-1 min-h-0 flex flex-col gap-4">
        {/* Timeline bar */}
        <div className="shrink-0 flex items-center gap-0 px-2">
          {CONSENSUS_VERSIONS.map((v, i) => (
            <div key={v.version} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className="size-10 rounded-full border-2 flex items-center justify-center font-bold text-xs shrink-0"
                  style={{ borderColor: v.color, backgroundColor: v.color + '20', color: v.color }}
                >
                  {v.version}
                </div>
                <span className="text-xs text-muted-foreground mt-1">{v.year}</span>
              </div>
              {i < CONSENSUS_VERSIONS.length - 1 && (
                <div className="flex-1 h-0.5 bg-border mx-2 mt-[-12px]" />
              )}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {CONSENSUS_VERSIONS.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.35 }}
              className="flex flex-col gap-2 p-4 rounded-xl border"
              style={{ borderColor: v.color + '50', backgroundColor: v.color + '08' }}
            >
              <div className="flex items-center justify-between shrink-0">
                <div className="font-bold text-base text-foreground">{v.name}</div>
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-medium border"
                  style={{ borderColor: v.color + '60', color: v.color }}
                >
                  {v.status}
                </span>
              </div>
              <p className="text-xs text-muted-foreground flex-1">{v.desc}</p>
              <div className="shrink-0 space-y-1">
                <div
                  className="p-2 rounded-lg text-xs"
                  style={{ backgroundColor: '#ED1C240d', borderLeft: `3px solid #ED1C24` }}
                >
                  <span className="font-semibold text-[#ED1C24]">Limit: </span>
                  <span className="text-muted-foreground">{v.limit}</span>
                </div>
                {v.solved !== '—' && (
                  <div
                    className="p-2 rounded-lg text-xs"
                    style={{ backgroundColor: '#39B54A0d', borderLeft: `3px solid #39B54A` }}
                  >
                    <span className="font-semibold text-[#39B54A]">Solved: </span>
                    <span className="text-muted-foreground">{v.solved}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── s3-raft ──────────────────────────────────────────────────────────────────

const RAFT_PHASES = [
  {
    id: 'election',
    label: 'Leader Election',
    color: '#6366f1',
    icon: '🗳️',
    desc: 'On startup or after a leader crash, nodes become Candidates and request votes. The first to reach a majority becomes the new Leader.',
    details: [
      'Each node starts as a Follower',
      'If no heartbeat from leader → becomes Candidate',
      'Candidate sends RequestVote to all peers',
      'First to get ⌊N/2⌋+1 votes wins the election',
      'Term counter increments with every election',
    ],
  },
  {
    id: 'replication',
    label: 'Log Replication',
    color: '#39B54A',
    icon: '📋',
    desc: 'The Leader receives all client requests and appends them to its log. It then replicates this entry to all Followers before acknowledging the client.',
    details: [
      'Client sends transaction to Leader only',
      'Leader appends entry to its own log',
      'Leader sends AppendEntries RPC to all Followers',
      'Followers append to their own logs and reply',
      'Leader waits for majority acknowledgement',
    ],
  },
  {
    id: 'commit',
    label: 'Commit',
    color: '#f59e0b',
    icon: '✅',
    desc: 'Once a majority of followers have written the entry, the Leader marks it as committed and notifies all followers. The entry is now permanent.',
    details: [
      'Majority ACK received by Leader',
      'Leader commits the entry in its state machine',
      'Leader broadcasts commit in next AppendEntries',
      'Followers also commit their copy',
      'Client receives confirmation',
    ],
  },
];

function RaftMechanicsSlide() {
  const [activePhase, setActivePhase] = useState(0);
  const phase = RAFT_PHASES[activePhase];

  return (
    <div className="h-full flex flex-col p-6 lg:p-10">
      <div className="shrink-0 mb-5">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Raft: How It Works</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Raft breaks consensus into three phases — click each to explore.
        </p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left — phase selector + node visual */}
        <div className="flex flex-col gap-4">
          {/* Phase tabs */}
          <div className="flex gap-2 shrink-0">
            {RAFT_PHASES.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActivePhase(i)}
                className="flex-1 py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer"
                style={{
                  borderColor: activePhase === i ? p.color : 'var(--border)',
                  backgroundColor: activePhase === i ? p.color + '18' : 'transparent',
                  color: activePhase === i ? p.color : 'var(--muted-foreground)',
                }}
              >
                {p.icon} {p.label}
              </button>
            ))}
          </div>

          {/* Node diagram */}
          <div className="flex-1 rounded-xl border border-border bg-card/50 p-4 flex flex-col gap-3">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider shrink-0">5-node Raft cluster</div>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex gap-4 items-center flex-wrap justify-center">
                {[
                  { role: 'Leader', color: phase.color, animate: activePhase === 0 || activePhase === 1 || activePhase === 2 },
                  { role: 'Follower', color: '#6366f1', animate: activePhase === 1 || activePhase === 2 },
                  { role: 'Follower', color: '#6366f1', animate: activePhase === 1 || activePhase === 2 },
                  { role: activePhase === 0 ? 'Candidate' : 'Follower', color: activePhase === 0 ? '#f59e0b' : '#6366f1', animate: activePhase === 0 },
                  { role: 'Follower', color: '#6366f1', animate: false },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    animate={node.animate ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                    transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.5 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <div
                      className="size-12 rounded-full border-2 flex items-center justify-center text-lg"
                      style={{ borderColor: node.color, backgroundColor: node.color + '18' }}
                    >
                      {node.role === 'Leader' ? '👑' : node.role === 'Candidate' ? '✋' : '🖥️'}
                    </div>
                    <span className="text-xs font-medium" style={{ color: node.color }}>{node.role}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground shrink-0 text-center">{phase.desc}</p>
          </div>
        </div>

        {/* Right — step list */}
        <div className="flex flex-col gap-3">
          <div className="font-bold text-base text-foreground shrink-0">{phase.icon} {phase.label} — steps</div>
          {phase.details.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07, duration: 0.28 }}
              className="flex items-start gap-3 p-3 rounded-xl border"
              style={{ borderColor: phase.color + '40', backgroundColor: phase.color + '0a' }}
            >
              <div
                className="size-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                style={{ backgroundColor: phase.color, color: '#fff' }}
              >
                {i + 1}
              </div>
              <span className="text-sm text-foreground">{step}</span>
            </motion.div>
          ))}

          {/* Quorum formula */}
          <div className="mt-auto p-3 rounded-xl border border-[#39B54A]/40" style={{ backgroundColor: '#39B54A0d' }}>
            <div className="text-xs font-bold text-[#39B54A] mb-1">Quorum rule</div>
            <div className="font-mono text-sm text-foreground">majority = ⌊N/2⌋ + 1</div>
            <div className="text-xs text-muted-foreground mt-1">
              5 nodes → needs 3 votes · 3 nodes → needs 2 votes · Tolerates ⌊(N−1)/2⌋ failures
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── s3-exercise-supply ───────────────────────────────────────────────────────

const SUPPLY_EVENTS = [
  {
    id: 1,
    label: 'Batch ID assigned at harvest',
    context: 'A farm assigns a unique batch number to a crate of lettuce before it leaves the field.',
    answer: true,
    reason: 'Immutable origin record — enables full provenance traceability from field to store. This is the anchor for the entire chain.',
  },
  {
    id: 2,
    label: 'Farmer negotiates price with processor',
    context: 'The farm owner and the processing plant agree on a price per kilogram over email.',
    answer: false,
    reason: 'Commercial negotiation is private and off-chain. Pricing data is competitive information and does not require multi-party immutability.',
  },
  {
    id: 3,
    label: 'Temperature logged during refrigerated transport',
    context: 'IoT sensors record temperature every 30 minutes inside the refrigerated truck.',
    answer: true,
    reason: 'Cold-chain integrity evidence is critical for food safety and liability. Any tampering with this data could conceal contamination.',
  },
  {
    id: 4,
    label: 'Processing plant quality inspection passed',
    context: 'A third-party inspector certifies the batch meets food safety standards.',
    answer: true,
    reason: 'Certification of compliance must be tamper-proof and instantly auditable by retailers and regulators — a perfect blockchain use case.',
  },
  {
    id: 5,
    label: 'Retail price set by supermarket',
    context: 'The supermarket updates its POS system with the sale price for the product.',
    answer: false,
    reason: 'Pricing is a unilateral commercial decision. Competitors on the same supply network should not see each other\'s retail margins.',
  },
  {
    id: 6,
    label: 'Product recalled due to contamination alert',
    context: 'A contamination is detected. A recall notice needs to reach all supply chain partners immediately.',
    answer: true,
    reason: 'Recall events must be immutable, timestamped, and instantly visible across all participants — blockchain enables 2.2-second full-chain alerts (Walmart case).',
  },
  {
    id: 7,
    label: 'Distributor updates internal ERP system',
    context: 'The distributor enters the delivery into their own SAP system after the truck arrives.',
    answer: false,
    reason: 'Internal ERP updates are siloed operations. They do not require multi-party verification and may contain sensitive business data.',
  },
  {
    id: 8,
    label: 'Consumer scans QR code to verify product origin',
    context: 'A shopper at the store scans the product QR code on their phone.',
    answer: true,
    reason: 'Reading from the ledger is always valid. The blockchain provides a public-facing provenance window while writing remains controlled.',
  },
];

function SupplyChainExercise() {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const allAnswered = SUPPLY_EVENTS.every(e => answers[e.id] !== undefined);

  function toggle(id: number, val: boolean) {
    if (revealed[id]) return;
    setAnswers(prev => ({ ...prev, [id]: val }));
  }

  function reveal(id: number) {
    setRevealed(prev => ({ ...prev, [id]: true }));
  }

  const score = allAnswered
    ? SUPPLY_EVENTS.filter(e => answers[e.id] === e.answer).length
    : null;

  return (
    <div className="h-full flex flex-col p-6 lg:p-10">
      <div className="shrink-0 mb-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Exercise: What Goes On Chain?</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Walmart wants to trace lettuce from farm to store on Hyperledger Fabric. For each event, decide: should it be recorded on the blockchain?
        </p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-3 content-start">
        {SUPPLY_EVENTS.map(ev => {
          const chosen = answers[ev.id];
          const isRevealed = revealed[ev.id];
          const correct = ev.answer;
          const isRight = chosen === correct;

          return (
            <div
              key={ev.id}
              className="flex flex-col gap-2 p-3 rounded-xl border transition-all"
              style={{
                borderColor: isRevealed
                  ? (isRight ? '#39B54A60' : '#ED1C2460')
                  : 'var(--border)',
                backgroundColor: isRevealed
                  ? (isRight ? '#39B54A0a' : '#ED1C240a')
                  : 'var(--card)',
              }}
            >
              <div className="text-sm font-semibold text-foreground">{ev.label}</div>
              <div className="text-xs text-muted-foreground">{ev.context}</div>
              <div className="flex gap-2 items-center">
                {[true, false].map(val => (
                  <button
                    key={String(val)}
                    onClick={() => toggle(ev.id, val)}
                    className="flex-1 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer"
                    style={{
                      borderColor: chosen === val ? (val ? '#39B54A' : '#ED1C24') : 'var(--border)',
                      backgroundColor: chosen === val ? (val ? '#39B54A18' : '#ED1C2418') : 'transparent',
                      color: chosen === val ? (val ? '#39B54A' : '#ED1C24') : 'var(--muted-foreground)',
                    }}
                  >
                    {val ? '✅ On chain' : '❌ Off chain'}
                  </button>
                ))}
                {chosen !== undefined && !isRevealed && (
                  <button
                    onClick={() => reveal(ev.id)}
                    className="px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-muted-foreground hover:bg-card transition-all cursor-pointer"
                  >
                    Why?
                  </button>
                )}
              </div>
              {isRevealed && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-xs rounded-lg p-2 font-medium"
                  style={{
                    backgroundColor: isRight ? '#39B54A0d' : '#ED1C240d',
                    color: isRight ? '#39B54A' : '#ED1C24',
                  }}
                >
                  {isRight ? '✓ Correct — ' : '✗ Incorrect — '}{ev.reason}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {allAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="shrink-0 mt-3 p-3 rounded-xl border border-[#39B54A]/40 text-center"
          style={{ backgroundColor: '#39B54A0d' }}
        >
          <span className="font-bold text-[#39B54A]">
            Score: {score}/{SUPPLY_EVENTS.length}
            {score === SUPPLY_EVENTS.length ? ' — Perfect! 🎉' : score! >= 6 ? ' — Great work!' : ' — Review the explanations above.'}
          </span>
        </motion.div>
      )}
    </div>
  );
}

// ─── s3-exercise-health ───────────────────────────────────────────────────────

const HEALTH_CHANNELS = [
  {
    id: 'clinical',
    label: 'Clinical Channel',
    icon: '🏥',
    color: '#6366f1',
    members: 'Hospital A · Hospital B · Doctors',
    desc: 'Sensitive patient data. Strictly need-to-know.',
  },
  {
    id: 'billing',
    label: 'Billing Channel',
    icon: '💳',
    color: '#39B54A',
    members: 'Hospitals · Insurance Companies',
    desc: 'Financial claims and reimbursements. No clinical detail.',
  },
  {
    id: 'compliance',
    label: 'Compliance Channel',
    icon: '📋',
    color: '#f59e0b',
    members: 'All parties + Regulator (HIPAA)',
    desc: 'Audit logs and regulatory reporting only.',
  },
];

const HEALTH_ITEMS = [
  { id: 1, label: 'Diagnosis & treatment records', correct: 'clinical', icon: '🩺' },
  { id: 2, label: 'Insurance claim submission', correct: 'billing', icon: '📄' },
  { id: 3, label: 'Drug prescription history', correct: 'clinical', icon: '💊' },
  { id: 4, label: 'HIPAA compliance audit log', correct: 'compliance', icon: '🔍' },
  { id: 5, label: 'Hospital billing codes (DRG)', correct: 'billing', icon: '💰' },
  { id: 6, label: 'Regulatory inspection result', correct: 'compliance', icon: '📊' },
];

function HealthDataExercise() {
  const [selected, setSelected] = useState<number | null>(null);
  const [placed, setPlaced] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const allPlaced = HEALTH_ITEMS.every(it => placed[it.id]);

  function handleItemClick(id: number) {
    if (checked) return;
    setSelected(prev => (prev === id ? null : id));
  }

  function handleChannelClick(channelId: string) {
    if (checked || selected === null) return;
    setPlaced(prev => ({ ...prev, [selected]: channelId }));
    setSelected(null);
  }

  const score = checked
    ? HEALTH_ITEMS.filter(it => placed[it.id] === it.correct).length
    : null;

  return (
    <div className="h-full flex flex-col p-6 lg:p-10">
      <div className="shrink-0 mb-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Exercise: Design the Channel Structure</h2>
        <p className="text-sm text-muted-foreground mt-1">
          A hospital network is deploying Hyperledger Fabric for private health data. Assign each data type to the correct channel.
          <span className="ml-2 font-medium text-foreground">Select a card, then click a channel.</span>
        </p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left — data items */}
        <div className="flex flex-col gap-2">
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider shrink-0">Data types to assign</div>
          <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-y-auto">
            {HEALTH_ITEMS.map(item => {
              const ch = HEALTH_CHANNELS.find(c => c.id === placed[item.id]);
              const isRight = checked && placed[item.id] === item.correct;
              const isWrong = checked && placed[item.id] !== undefined && placed[item.id] !== item.correct;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer"
                  style={{
                    borderColor: selected === item.id
                      ? '#6366f1'
                      : isRight
                        ? '#39B54A60'
                        : isWrong
                          ? '#ED1C2460'
                          : ch
                            ? ch.color + '60'
                            : 'var(--border)',
                    backgroundColor: selected === item.id
                      ? '#6366f118'
                      : isRight
                        ? '#39B54A0a'
                        : isWrong
                          ? '#ED1C240a'
                          : ch
                            ? ch.color + '0a'
                            : 'var(--card)',
                  }}
                >
                  <span className="text-lg shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground">{item.label}</div>
                    {ch && !checked && (
                      <div className="text-xs mt-0.5" style={{ color: ch.color }}>→ {ch.label}</div>
                    )}
                    {checked && (
                      <div
                        className="text-xs mt-0.5 font-semibold"
                        style={{ color: isRight ? '#39B54A' : '#ED1C24' }}
                      >
                        {isRight ? '✓ Correct' : `✗ Should be: ${HEALTH_CHANNELS.find(c => c.id === item.correct)?.label}`}
                      </div>
                    )}
                  </div>
                  {selected === item.id && (
                    <span className="text-xs text-[#6366f1] font-bold shrink-0">Selected</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right — channels */}
        <div className="flex flex-col gap-3">
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider shrink-0">Channels</div>
          {HEALTH_CHANNELS.map(ch => {
            const itemsHere = HEALTH_ITEMS.filter(it => placed[it.id] === ch.id);
            return (
              <button
                key={ch.id}
                onClick={() => handleChannelClick(ch.id)}
                className="flex-1 flex flex-col gap-2 p-3 rounded-xl border-2 border-dashed text-left transition-all cursor-pointer"
                style={{
                  borderColor: selected !== null ? ch.color : ch.color + '60',
                  backgroundColor: selected !== null ? ch.color + '0d' : ch.color + '05',
                }}
              >
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-lg">{ch.icon}</span>
                  <div>
                    <div className="font-bold text-sm" style={{ color: ch.color }}>{ch.label}</div>
                    <div className="text-xs text-muted-foreground">{ch.members}</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">{ch.desc}</div>
                {itemsHere.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {itemsHere.map(it => (
                      <span
                        key={it.id}
                        className="px-2 py-0.5 rounded-full text-xs border font-medium"
                        style={{ borderColor: ch.color + '60', color: ch.color, backgroundColor: ch.color + '10' }}
                      >
                        {it.icon} {it.label}
                      </span>
                    ))}
                  </div>
                )}
                {selected !== null && itemsHere.length === 0 && (
                  <div className="text-xs text-muted-foreground italic">Drop here</div>
                )}
              </button>
            );
          })}

          {allPlaced && !checked && (
            <button
              onClick={() => setChecked(true)}
              className="shrink-0 py-2 px-4 rounded-xl border-2 font-bold text-sm cursor-pointer transition-all"
              style={{ borderColor: '#39B54A', backgroundColor: '#39B54A18', color: '#39B54A' }}
            >
              Check answers
            </button>
          )}
          {checked && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="shrink-0 p-3 rounded-xl border border-[#39B54A]/40 text-center"
              style={{ backgroundColor: '#39B54A0d' }}
            >
              <span className="font-bold text-[#39B54A]">
                Score: {score}/{HEALTH_ITEMS.length}
                {score === HEALTH_ITEMS.length ? ' — Perfect! 🎉' : score! >= 4 ? ' — Great work!' : ' — Check the correct channels above.'}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── BP_Section3 ──────────────────────────────────────────────────────────────

export function BP_Section3() {
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
            sectionNumber="SECTION 03"
            title="Permissioned Blockchains: Hyperledger Fabric"
            subtitle="Enterprise blockchain design, supply chains, channels, and transaction flow"
            icon={<Building2 className="size-20 text-[#39B54A]" />}
            gradient="from-[#39B54A] to-[#22d3ee]"
          />
        </div>

        {/* ═══════ WHY PERMISSIONED ═══════ */}
        <div id="s3-why" className="h-full">
          <WhyPermissionedSlide />
        </div>

        {/* ═══════ SUPPLY CHAINS ═══════ */}
        <div id="s3-supplychains" className="h-full">
          <SupplyChainsSlide />
        </div>

        {/* ═══════ FABRIC OVERVIEW ═══════ */}
        <div id="s3-overview" className="h-full flex items-start">
          <ConceptSlide
            title="Hyperledger Fabric"
            description="An enterprise-grade permissioned blockchain framework by the Linux Foundation. Modular, private, and designed for business networks."
            visual={fabricOverviewVisual}
            keyPoints={[
              'No mining — consensus by designated orderer nodes',
              'Chaincode (smart contracts) written in Go, JavaScript, or Java',
              'Channels create private sub-networks within the same Fabric network',
              'Used by IBM Food Trust, TradeLens, HSBC, Maersk, Walmart',
            ]}
          />
        </div>

        {/* ═══════ FABRIC DEEP DIVE ═══════ */}
        <div id="s3-fabricx" className="h-full">
          <FabricDeepDiveSlide />
        </div>

        {/* ═══════ CONSENSUS EVOLUTION ═══════ */}
        <div id="s3-consensus-evo" className="h-full">
          <ConsensusEvolutionSlide />
        </div>

        {/* ═══════ PLUGGABLE CONSENSUS ═══════ */}
        <div id="s3-consensus" className="h-full">
          <PluggableConsensusSlide />
        </div>

        {/* ═══════ RAFT MECHANICS ═══════ */}
        <div id="s3-raft" className="h-full">
          <RaftMechanicsSlide />
        </div>

        {/* ═══════ BFT ═══════ */}
        <div id="s3-bft" className="h-full">
          <BFTSlide />
        </div>

        {/* ═══════ CHANNELS ═══════ */}
        <div id="s3-channels" className="h-full">
          <ChannelsSlide />
        </div>

        {/* ═══════ TX FLOW ═══════ */}
        <div id="s3-txflow" className="h-full">
          <TxFlowSlide />
        </div>

        {/* ═══════ EXERCISE: SUPPLY CHAIN ═══════ */}
        <div id="s3-exercise-supply" className="h-full">
          <SupplyChainExercise />
        </div>

        {/* ═══════ EXERCISE: HEALTH DATA ═══════ */}
        <div id="s3-exercise-health" className="h-full">
          <HealthDataExercise />
        </div>

        {/* ═══════ COMPARISON ═══════ */}
        <div id="s3-comparison" className="h-full">
          <ComparisonSlide
            title="Ethereum vs Hyperledger Fabric"
            featureLabel="Property"
            option1Label="Ethereum"
            option2Label="Hyperledger Fabric"
            items={[
              { feature: 'Permission model', option1: 'Public permissionless', option2: 'Private permissioned' },
              { feature: 'Participants', option1: 'Anonymous', option2: 'Known & verified' },
              { feature: 'Consensus', option1: 'Proof of Stake', option2: 'Raft / SmartBFT' },
              { feature: 'Smart contract language', option1: 'Solidity / Vyper', option2: 'Go / JavaScript / Java' },
              { feature: 'TPS', option1: '~15 (L1)', option2: '3,000+' },
              { feature: 'Data privacy', option1: 'All data public', option2: 'Channels for private data' },
              { feature: 'Token required', option1: 'Yes — ETH for gas', option2: 'No native token' },
              { feature: 'Governance', option1: 'Decentralized (EIP process)', option2: 'Consortium members' },
              { feature: 'Best for', option1: 'DeFi, NFTs, public dApps', option2: 'Enterprise B2B, supply chain, finance' },
            ]}
          />
        </div>

        {/* ═══════ TAKEAWAYS ═══════ */}
        <div id="s3-takeaways" className="h-full">
          <TakeawaySlide
            title="Section 03 — Key Takeaways"
            takeaways={[
              'Permissioned blockchains exist for regulated, multi-party environments where participants are known',
              'Hyperledger Fabric is the leading enterprise blockchain — modular, flexible, and production-proven',
              'Channels allow different subsets of participants to share private data on the same network',
              'Smart contracts (chaincode) in Fabric automate business logic across supply chain partners',
              'Pluggable consensus means Fabric can swap its ordering mechanism without rebuilding the network',
              'BFT consensus tolerates Byzantine (malicious) failures — essential in adversarial environments',
            ]}
          />
        </div>

        </div>
      </div>
    </div>
  );
}
