import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TitleSlide } from '../../components/templates/TitleSlide';
import { TakeawaySlide } from '../../components/templates/TakeawaySlide';
import { SectionNav } from '../../components/navigation/SectionNav';
import { Bitcoin } from 'lucide-react';

const chapters = [
  { id: 's1-objectives', label: 'Objectives' },
  { id: 's1-architecture', label: 'Architecture' },
  { id: 's1-transaction', label: 'Transaction' },
  { id: 's1-utxo-exercise', label: 'UTXO Exercise' },
  { id: 's1-pow', label: 'Proof of Work' },
  { id: 's1-trilemma', label: 'Trilemma' },
  { id: 's1-takeaways', label: 'Takeaways' },
  { id: 's1-summary', label: 'Summary' },
];

// ─── Data ────────────────────────────────────────────────────────────────────

const LAYERS = [
  {
    id: 'app',
    label: 'Application Layer',
    sublabel: 'Wallets · Exchanges · Block explorers',
    color: '#6366f1',
    icon: '💼',
    description: 'The user-facing layer. Wallets (MetaMask, Ledger), exchanges, and explorers translate raw blockchain data into readable interfaces. They communicate with the network via RPC calls to nodes.',
    examples: ['Bitcoin Core wallet', 'Electrum', 'Mempool.space'],
  },
  {
    id: 'p2p',
    label: 'Network Layer (P2P)',
    sublabel: 'Gossip protocol · Node discovery · Mempool',
    color: '#39B54A',
    icon: '🌐',
    description: 'Nodes find each other using DNS seeds and a gossip protocol. Every unconfirmed transaction is broadcast peer-to-peer and held in each node\'s mempool until mined into a block.',
    examples: ['~50,000 reachable nodes', 'TCP port 8333', 'INV / GETDATA messages'],
  },
  {
    id: 'consensus',
    label: 'Consensus Layer',
    sublabel: 'Proof of Work · Difficulty adjustment · Longest chain',
    color: '#f59e0b',
    icon: '⛏️',
    description: 'Miners compete to find a nonce that makes the block hash start with enough leading zeros. Difficulty adjusts every 2,016 blocks (~2 weeks) to keep block time at ~10 minutes. The chain with the most accumulated work wins.',
    examples: ['SHA-256 hashing', 'Target difficulty', 'Nakamoto consensus'],
  },
  {
    id: 'data',
    label: 'Data Layer',
    sublabel: 'Blocks · UTXO set · Merkle trees',
    color: '#ED1C24',
    icon: '🗄️',
    description: 'Blocks chain together via hash pointers. Each block contains a Merkle root of its transactions, enabling lightweight SPV proofs. The UTXO set is the minimal state needed to validate new transactions.',
    examples: ['~600 GB full chain', 'Merkle proof in O(log n)', 'UTXO set ~6 GB'],
  },
];

function BitcoinArchitectureSlide() {
  const [active, setActive] = useState<string | null>(null);
  const activeLayer = LAYERS.find(l => l.id === active);

  return (
    <div className="h-full flex flex-col p-6 lg:p-10">
      <div className="shrink-0 mb-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Bitcoin Architecture</h2>
        <p className="text-muted-foreground text-sm mt-1">Four layers power the Bitcoin network — click any layer to explore it in detail.</p>
      </div>

      <div className="flex-1 min-h-0 flex flex-col gap-4">

        {/* ── 4 large layer cards ── */}
        <div className="grid grid-cols-4 gap-3 shrink-0">
          {LAYERS.map((layer, i) => (
            <motion.button
              key={layer.id}
              onClick={() => setActive(active === layer.id ? null : layer.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center gap-2 p-5 rounded-2xl border-2 cursor-pointer transition-all text-center"
              style={{
                borderColor: active === layer.id ? layer.color : layer.color + '40',
                backgroundColor: active === layer.id ? layer.color + '18' : layer.color + '08',
              }}
            >
              <span className="text-4xl">{layer.icon}</span>
              <div className="font-bold text-sm lg:text-base text-foreground">{layer.label}</div>
              <div className="text-xs text-muted-foreground leading-snug">{layer.sublabel}</div>
              <motion.div
                className="w-12 h-1 rounded-full mt-1"
                style={{ backgroundColor: layer.color }}
                animate={{ scaleX: active === layer.id ? 2 : 1, opacity: active === layer.id ? 1 : 0.4 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}
        </div>

        {/* ── Detail panel ── */}
        <div className="flex-1 min-h-0 relative">
          <AnimatePresence mode="wait">
            {activeLayer ? (
              <motion.div
                key={activeLayer.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="h-full rounded-2xl border-2 p-6 flex gap-8"
                style={{ borderColor: activeLayer.color + '50', background: `linear-gradient(135deg, ${activeLayer.color}10, transparent)` }}
              >
                {/* Left: description + facts */}
                <div className="flex flex-col gap-4 w-72 shrink-0">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{activeLayer.icon}</span>
                    <div>
                      <h3 className="text-xl font-black text-foreground">{activeLayer.label}</h3>
                      <p className="text-xs text-muted-foreground">{activeLayer.sublabel}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{activeLayer.description}</p>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Facts</p>
                    <div className="flex flex-col gap-1.5">
                      {activeLayer.examples.map(ex => (
                        <motion.span
                          key={ex}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-3 py-1.5 rounded-lg text-sm font-medium border"
                          style={{ color: activeLayer.color, borderColor: activeLayer.color + '40', backgroundColor: activeLayer.color + '10' }}
                        >
                          {ex}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: layer-specific visual */}
                <div className="flex-1 min-w-0 flex flex-col justify-center gap-3">
                  {activeLayer.id === 'data' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="flex flex-col gap-3">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Block chain — hash linking</p>
                      <div className="flex items-stretch gap-2">
                        {['#839,998', '#839,999', '#840,000', '#840,001'].map((num, idx) => (
                          <div key={num} className="flex items-center gap-2 flex-1">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 + idx * 0.12 }}
                              className="flex-1 rounded-xl border-2 p-3 text-center"
                              style={{ borderColor: '#ED1C2460', backgroundColor: '#ED1C2410' }}
                            >
                              <div className="text-xs font-black text-[#ED1C24]">BLOCK</div>
                              <div className="text-sm font-bold text-foreground mt-1">{num}</div>
                              <div className="text-[10px] text-muted-foreground mt-2 font-mono">prev: 0xa3f…</div>
                              <div className="text-[10px] text-muted-foreground font-mono">root: 0x7b2…</div>
                            </motion.div>
                            {idx < 3 && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 + idx * 0.12 }}
                                className="text-[#ED1C24] font-bold text-lg shrink-0"
                              >→</motion.div>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">Each block header references the previous hash — altering any block breaks all subsequent blocks.</p>
                    </motion.div>
                  )}
                  {activeLayer.id === 'p2p' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="flex flex-col gap-4">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Transaction propagation</p>
                      <div className="flex items-center gap-2">
                        {[
                          { label: 'Alice', emoji: '👩', desc: 'Signs & broadcasts tx to 8 peers' },
                          { label: 'Peers', emoji: '🔁', desc: 'Each relays to their own peers' },
                          { label: 'Network', emoji: '🌐', desc: 'Reaches ~50k nodes in <1 sec' },
                          { label: 'Miner', emoji: '⛏️', desc: 'Picks from mempool & mines block' },
                        ].map((step, idx) => (
                          <div key={step.label} className="flex items-center gap-2 flex-1">
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + idx * 0.15 }}
                              className="flex-1 flex flex-col items-center gap-2 p-3 rounded-xl border border-border bg-card text-center"
                            >
                              <span className="text-3xl">{step.emoji}</span>
                              <div className="text-xs font-bold text-foreground">{step.label}</div>
                              <div className="text-xs text-muted-foreground leading-tight">{step.desc}</div>
                            </motion.div>
                            {idx < 3 && <span className="text-muted-foreground font-bold shrink-0">→</span>}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  {activeLayer.id === 'consensus' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="flex flex-col gap-3">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Mining: find the nonce</p>
                      <div className="font-mono text-sm p-4 rounded-xl border border-border bg-card">
                        <div className="text-muted-foreground">SHA256( block_header + <span className="text-[#f59e0b] font-bold">nonce</span> )</div>
                        <div className="text-[#f59e0b] mt-2 font-bold">= 0000000000000000000abc… ✓</div>
                        <div className="text-muted-foreground text-xs mt-2">Must start with enough leading zeros to meet current target difficulty</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {['Adjusts every 2,016 blocks', '~2 weeks per adjustment', '10 min block target'].map(fact => (
                          <div key={fact} className="p-2 rounded-lg border border-[#f59e0b]/40 text-center text-xs font-medium" style={{ backgroundColor: '#f59e0b0d', color: '#f59e0b' }}>{fact}</div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  {activeLayer.id === 'app' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="flex flex-col gap-3">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Applications on Bitcoin</p>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { icon: '💼', name: 'Wallets', ex: 'Electrum, Ledger, Bitcoin Core' },
                          { icon: '🔍', name: 'Explorers', ex: 'mempool.space, blockstream.info' },
                          { icon: '🔄', name: 'Exchanges', ex: 'Coinbase, Kraken, Binance' },
                        ].map(app => (
                          <div key={app.name} className="p-3 rounded-xl border border-border bg-card text-center">
                            <div className="text-2xl mb-1">{app.icon}</div>
                            <div className="font-bold text-sm text-foreground">{app.name}</div>
                            <div className="text-xs text-muted-foreground mt-1">{app.ex}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">Apps communicate with the network via RPC calls to Bitcoin Core nodes (port 8332).</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full rounded-2xl border-2 border-dashed border-border flex items-center justify-center"
              >
                <p className="text-muted-foreground text-sm">↑ Click a layer above to explore it</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

// ─── UTXO Exercise ────────────────────────────────────────────────────────────

const UTXO_SCENARIOS = [
  {
    id: 1,
    title: 'Simple payment',
    context: 'Alice wants to send 0.4 BTC to Bob. Fee: 0.01 BTC. Which UTXOs should she use?',
    target: 0.4,
    fee: 0.01,
    utxos: [
      { id: 'u1', amount: 0.3, label: 'UTXO A — 0.3 BTC', from: 'Mining reward (2023)' },
      { id: 'u2', amount: 0.5, label: 'UTXO B — 0.5 BTC', from: 'Payment received (2024)' },
      { id: 'u3', amount: 0.1, label: 'UTXO C — 0.1 BTC', from: 'Change output (2024)' },
    ],
    bestInputs: ['u2'],
    explanation: 'UTXO B (0.5 BTC) alone covers 0.4 + 0.01 BTC. Change = 0.5 − 0.4 − 0.01 = 0.09 BTC back to Alice. Using only 1 input keeps fees low.',
  },
  {
    id: 2,
    title: 'Combining small UTXOs',
    context: 'Alice wants to send 0.6 BTC to Carol. Fee: 0.01 BTC. No single UTXO covers it.',
    target: 0.6,
    fee: 0.01,
    utxos: [
      { id: 'u1', amount: 0.35, label: 'UTXO A — 0.35 BTC', from: 'Previous sale (2024)' },
      { id: 'u2', amount: 0.4, label: 'UTXO B — 0.40 BTC', from: 'Mining reward (2024)' },
      { id: 'u3', amount: 0.15, label: 'UTXO C — 0.15 BTC', from: 'Tip received (2023)' },
    ],
    bestInputs: ['u1', 'u2'],
    explanation: 'UTXO A + B = 0.75 BTC. Covers 0.6 + 0.01 BTC. Change = 0.75 − 0.6 − 0.01 = 0.14 BTC back to Alice. UTXO C is not needed.',
  },
];

function UTXOExercise() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);

  const scenario = UTXO_SCENARIOS[scenarioIdx];
  const total = selected.reduce((acc, id) => {
    const u = scenario.utxos.find(x => x.id === id);
    return acc + (u ? u.amount : 0);
  }, 0);
  const needed = scenario.target + scenario.fee;
  const sufficient = total >= needed;
  const change = sufficient ? Math.round((total - scenario.target - scenario.fee) * 1000) / 1000 : 0;

  function toggleUTXO(id: string) {
    if (revealed) return;
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }

  function nextScenario() {
    setScenarioIdx(i => (i + 1) % UTXO_SCENARIOS.length);
    setSelected([]);
    setRevealed(false);
  }

  return (
    <div className="h-full flex flex-col p-6 lg:p-10">
      <div className="shrink-0 mb-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Exercise: Build a Bitcoin Transaction</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Select UTXOs to cover the payment + fee. The wallet must spend entire UTXOs — excess becomes change.
        </p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Left — scenario + UTXO picker */}
        <div className="flex flex-col gap-4">
          {/* Scenario header */}
          <div className="shrink-0 p-4 rounded-xl border-2 border-[#f59e0b]/40" style={{ backgroundColor: '#f59e0b08' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f59e0b]">Scenario {scenario.id} of {UTXO_SCENARIOS.length}</span>
              <button
                onClick={nextScenario}
                className="text-xs px-2 py-1 rounded-lg border border-border text-muted-foreground hover:bg-card cursor-pointer transition-all"
              >
                Next →
              </button>
            </div>
            <div className="font-bold text-base text-foreground mb-1">{scenario.title}</div>
            <div className="text-sm text-muted-foreground">{scenario.context}</div>
            <div className="flex gap-4 mt-3 text-sm">
              <div><span className="text-muted-foreground">Send: </span><span className="font-bold text-foreground">{scenario.target} BTC</span></div>
              <div><span className="text-muted-foreground">Fee: </span><span className="font-bold text-foreground">{scenario.fee} BTC</span></div>
              <div><span className="text-muted-foreground">Need: </span><span className="font-bold text-[#f59e0b]">{needed} BTC total</span></div>
            </div>
          </div>

          {/* UTXO cards */}
          <div className="flex flex-col gap-2 flex-1">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Alice's UTXOs — click to select</div>
            {scenario.utxos.map(u => {
              const isSelected = selected.includes(u.id);
              return (
                <button
                  key={u.id}
                  onClick={() => toggleUTXO(u.id)}
                  className="flex items-center gap-3 p-4 rounded-xl border-2 text-left cursor-pointer transition-all flex-1"
                  style={{
                    borderColor: isSelected ? '#f59e0b' : 'var(--border)',
                    backgroundColor: isSelected ? '#f59e0b14' : 'var(--card)',
                  }}
                >
                  <div
                    className="size-5 rounded border-2 shrink-0 flex items-center justify-center"
                    style={{ borderColor: isSelected ? '#f59e0b' : 'var(--border)', backgroundColor: isSelected ? '#f59e0b' : 'transparent' }}
                  >
                    {isSelected && <span className="text-white text-xs font-bold">✓</span>}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-base text-foreground">{u.label}</div>
                    <div className="text-xs text-muted-foreground">{u.from}</div>
                  </div>
                  <span className="font-mono font-bold text-sm" style={{ color: isSelected ? '#f59e0b' : 'var(--muted-foreground)' }}>
                    {u.amount} BTC
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right — transaction summary */}
        <div className="flex flex-col gap-4">
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider shrink-0">Transaction preview</div>

          {/* Inputs */}
          <div className="p-4 rounded-xl border border-border bg-card flex-1">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Inputs</div>
            {selected.length === 0 ? (
              <div className="text-sm text-muted-foreground italic">No UTXOs selected yet</div>
            ) : (
              <div className="flex flex-col gap-2">
                {selected.map(id => {
                  const u = scenario.utxos.find(x => x.id === id)!;
                  return (
                    <div key={id} className="flex items-center justify-between p-2 rounded-lg" style={{ backgroundColor: '#f59e0b0a', border: '1px solid #f59e0b30' }}>
                      <span className="text-sm text-foreground">{u.label}</span>
                      <span className="font-mono text-sm font-bold text-[#f59e0b]">+{u.amount} BTC</span>
                    </div>
                  );
                })}
                <div className="flex justify-between pt-2 border-t border-border">
                  <span className="text-xs font-bold text-muted-foreground">Total inputs</span>
                  <span className="font-mono font-bold text-sm text-foreground">{Math.round(total * 1000) / 1000} BTC</span>
                </div>
              </div>
            )}

            {/* Outputs */}
            {selected.length > 0 && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Outputs</div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between p-2 rounded-lg" style={{ backgroundColor: '#39B54A0a', border: '1px solid #39B54A30' }}>
                    <span className="text-sm text-foreground">→ Recipient</span>
                    <span className="font-mono text-sm font-bold text-[#39B54A]">{scenario.target} BTC</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg" style={{ backgroundColor: '#6366f10a', border: '1px solid #6366f130' }}>
                    <span className="text-sm text-foreground">← Change to Alice</span>
                    <span className="font-mono text-sm font-bold text-[#6366f1]">
                      {sufficient ? `${change} BTC` : '—'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg" style={{ backgroundColor: '#ED1C240a', border: '1px solid #ED1C2430' }}>
                    <span className="text-sm text-foreground">⛏️ Miner fee</span>
                    <span className="font-mono text-sm font-bold text-[#ED1C24]">{scenario.fee} BTC</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Status + reveal */}
          {selected.length > 0 && (
            <div className="shrink-0 flex flex-col gap-2">
              <div
                className="p-3 rounded-xl border text-sm font-semibold text-center"
                style={{
                  borderColor: sufficient ? '#39B54A60' : '#ED1C2460',
                  backgroundColor: sufficient ? '#39B54A0d' : '#ED1C240d',
                  color: sufficient ? '#39B54A' : '#ED1C24',
                }}
              >
                {sufficient
                  ? `✓ Valid — inputs cover ${needed} BTC needed`
                  : `✗ Insufficient — need ${needed} BTC, have ${Math.round(total * 1000) / 1000} BTC`
                }
              </div>
              {sufficient && !revealed && (
                <button
                  onClick={() => setRevealed(true)}
                  className="py-2 px-4 rounded-xl border-2 font-bold text-sm cursor-pointer transition-all"
                  style={{ borderColor: '#39B54A', backgroundColor: '#39B54A18', color: '#39B54A' }}
                >
                  Check optimal solution
                </button>
              )}
              {revealed && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl border border-[#6366f1]/40"
                  style={{ backgroundColor: '#6366f10d' }}
                >
                  <div className="text-xs font-bold text-[#6366f1] mb-1">Optimal answer</div>
                  <div className="text-xs text-muted-foreground">{scenario.explanation}</div>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function BP_Section1() {
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
            title="Bitcoin: The First Permissionless Blockchain"
            subtitle="Architecture, transactions, Proof of Work, and the Blockchain Trilemma"
            icon={<Bitcoin className="size-20 text-[#f59e0b]" />}
            gradient="from-[#f59e0b] to-[#ED1C24]"
          />
        </div>

        {/* ═══════ OBJECTIVES ═══════ */}
        <div id="s1-objectives" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b]">Learning Objectives</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-1">What You Will Learn</h2>
            <p className="text-sm text-muted-foreground mt-1">By the end of this section, you will be able to:</p>
          </div>
          <div className="flex-1 min-h-0 grid grid-cols-2 gap-4">
            {[
              { num: '01', label: "Map Bitcoin's architecture", desc: 'Describe the four layers: Application, P2P Network, Consensus, and Data Layer' },
              { num: '02', label: 'Explain the UTXO model', desc: 'Trace how inputs, outputs, change, and fees work in a Bitcoin transaction' },
              { num: '03', label: 'Understand Proof of Work', desc: 'Explain SHA-256 hash puzzles, nonce finding, difficulty adjustment, and halvings' },
              { num: '04', label: 'Analyze the Trilemma', desc: "Explain why Bitcoin prioritizes security and decentralization over scalability, and Bitcoin's trade-off strategy" },
            ].map((obj, i) => (
              <motion.div
                key={obj.num}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.35 }}
                className="flex gap-4 p-5 rounded-2xl border"
                style={{ borderColor: '#f59e0b40', backgroundColor: '#f59e0b08' }}
              >
                <div className="text-3xl font-black shrink-0 text-[#f59e0b]/40">{obj.num}</div>
                <div>
                  <div className="font-bold text-sm text-foreground">{obj.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{obj.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════ ARCHITECTURE ═══════ */}
        <div id="s1-architecture" className="h-full">
          <BitcoinArchitectureSlide />
        </div>

        {/* ═══════ TRANSACTION ═══════ */}
        <div id="s1-transaction" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-5">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Bitcoin Transaction &amp; UTXO Model</h2>
            <p className="text-muted-foreground text-sm mt-1">Unspent Transaction Outputs — the accounting primitive behind every bitcoin transfer.</p>
          </div>

          <div className="flex-1 min-h-0 flex gap-6">

            {/* ── Left: UTXO concept ── */}
            <div className="flex-1 min-w-0 flex flex-col gap-4">
              <div className="rounded-xl border-2 p-4" style={{ borderColor: '#f59e0b40', backgroundColor: '#f59e0b08' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f59e0b' }}>What is a UTXO?</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A <span className="font-semibold text-foreground">UTXO (Unspent Transaction Output)</span> is a discrete chunk of bitcoin that has been received but not yet spent. There are no "account balances" — your wallet software sums up all UTXOs locked to your address.
                </p>
              </div>

              <div className="rounded-xl border p-4 bg-card">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">How inputs &amp; outputs work</p>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded shrink-0 mt-0.5" style={{ backgroundColor: '#f59e0b20', border: '1px solid #f59e0b60' }} />
                    <span><span className="font-semibold text-foreground">Inputs</span> reference a previous UTXO by its transaction ID and output index (vout), and provide a scriptSig to prove ownership.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded shrink-0 mt-0.5" style={{ backgroundColor: '#39B54A20', border: '1px solid #39B54A60' }} />
                    <span><span className="font-semibold text-foreground">Outputs</span> create new UTXOs — each locked to a recipient's public key hash. Once spent, a UTXO is consumed in full.</span>
                  </div>
                </div>
              </div>

              {/* UTXO visual */}
              <div className="rounded-xl border p-4 bg-card flex-1 min-h-0 flex flex-col justify-center">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Visual: combining UTXOs</p>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  {/* Inputs */}
                  <div className="flex flex-col gap-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="rounded-lg px-4 py-2 text-center text-sm font-bold"
                      style={{ backgroundColor: '#f59e0b20', border: '2px solid #f59e0b60', color: '#f59e0b' }}
                    >
                      0.3 BTC
                      <div className="text-xs font-normal text-muted-foreground">UTXO #1</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="rounded-lg px-4 py-2 text-center text-sm font-bold"
                      style={{ backgroundColor: '#f59e0b20', border: '2px solid #f59e0b60', color: '#f59e0b' }}
                    >
                      0.5 BTC
                      <div className="text-xs font-normal text-muted-foreground">UTXO #2</div>
                    </motion.div>
                  </div>

                  {/* Arrow & tx box */}
                  <div className="flex flex-col items-center gap-1">
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ delay: 0.35 }}
                      className="flex items-center gap-1"
                    >
                      <div className="h-px w-6" style={{ backgroundColor: '#f59e0b' }} />
                      <div className="rounded-md px-2 py-1 text-xs font-bold text-white" style={{ backgroundColor: '#f59e0b' }}>TX</div>
                      <div className="h-px w-6" style={{ backgroundColor: '#f59e0b' }} />
                    </motion.div>
                    <div className="text-xs text-muted-foreground">fee: 0.1 BTC</div>
                  </div>

                  {/* Outputs */}
                  <div className="flex flex-col gap-2">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 }}
                      className="rounded-lg px-4 py-2 text-center text-sm font-bold"
                      style={{ backgroundColor: '#39B54A20', border: '2px solid #39B54A60', color: '#39B54A' }}
                    >
                      0.6 BTC
                      <div className="text-xs font-normal text-muted-foreground">Bob (new UTXO)</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 }}
                      className="rounded-lg px-4 py-2 text-center text-sm font-bold"
                      style={{ backgroundColor: '#6366f120', border: '2px solid #6366f160', color: '#6366f1' }}
                    >
                      0.1 BTC
                      <div className="text-xs font-normal text-muted-foreground">Alice (change)</div>
                    </motion.div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-3">Inputs (0.8 BTC) = Outputs (0.7 BTC) + Fee (0.1 BTC)</p>
              </div>
            </div>

            {/* ── Right: Anatomy & Why UTXO ── */}
            <div className="flex-1 min-w-0 flex flex-col gap-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Anatomy of a Bitcoin Transaction</p>

              {[
                {
                  field: 'Version',
                  color: '#6366f1',
                  value: '2',
                  desc: 'Protocol version — determines which rules apply (e.g. SegWit support).',
                },
                {
                  field: 'Inputs [ ]',
                  color: '#f59e0b',
                  value: '{ txid, vout, scriptSig, sequence }',
                  desc: 'Array of references to previous UTXOs being consumed. scriptSig (or witness) proves ownership.',
                },
                {
                  field: 'Outputs [ ]',
                  color: '#39B54A',
                  value: '{ value (satoshis), scriptPubKey }',
                  desc: 'Array of new UTXOs created. scriptPubKey locks the coins to the recipient\'s address.',
                },
                {
                  field: 'Locktime',
                  color: '#ED1C24',
                  value: '0 (or block/timestamp)',
                  desc: 'Earliest time/block the transaction can be mined. 0 means no delay.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.field}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="rounded-xl border-l-4 p-3 bg-card"
                  style={{ borderLeftColor: item.color }}
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-bold text-foreground">{item.field}</span>
                    <code className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: item.color + '18', color: item.color }}>{item.value}</code>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}

              {/* Why UTXO callout */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="mt-auto rounded-xl p-4"
                style={{ background: 'linear-gradient(135deg, #f59e0b18, #f59e0b08)', border: '2px solid #f59e0b50' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">💡</span>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f59e0b' }}>Why UTXO?</span>
                </div>
                <div className="flex gap-4 flex-wrap">
                  {[
                    { label: 'No global balance', desc: 'No single mutable account state — reduces contention' },
                    { label: 'Stateless validation', desc: 'Each UTXO can be verified independently' },
                    { label: 'Parallel processing', desc: 'Non-overlapping UTXOs can be validated concurrently' },
                  ].map(b => (
                    <div key={b.label} className="flex-1 min-w-24">
                      <div className="text-xs font-semibold text-foreground">{b.label}</div>
                      <div className="text-xs text-muted-foreground">{b.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* ═══════ UTXO EXERCISE ═══════ */}
        <div id="s1-utxo-exercise" className="h-full">
          <UTXOExercise />
        </div>

        {/* ═══════ PROOF OF WORK ═══════ */}
        <div id="s1-pow" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-5">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Proof of Work</h2>
            <p className="text-muted-foreground text-sm mt-1">The cryptographic puzzle that makes Bitcoin's consensus tamper-proof.</p>
          </div>

          <div className="flex-1 min-h-0 flex gap-6">

            {/* ── Left: Hash Puzzle ── */}
            <div className="flex-1 min-w-0 flex flex-col gap-4">
              <div className="rounded-xl border-2 p-4" style={{ borderColor: '#f59e0b40', backgroundColor: '#f59e0b08' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f59e0b' }}>The Hash Puzzle</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bitcoin uses <span className="font-semibold text-foreground">SHA-256</span> (applied twice) to produce a 256-bit digest. Miners must find a <span className="font-semibold text-foreground">nonce</span> such that the resulting block hash is below the current target — meaning it starts with enough leading zeros. This requires brute-force trial and error.
                </p>
              </div>

              {/* Mock block header */}
              <div className="rounded-xl border p-4 bg-card flex-1 min-h-0 flex flex-col">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Block Header Fields</p>
                <div className="flex flex-col gap-2 font-mono text-xs flex-1 justify-center">
                  {[
                    { field: 'version', value: '0x20000000', color: '#6366f1' },
                    { field: 'prevHash', value: '00000000000000000002a7c4...', color: '#f59e0b' },
                    { field: 'merkleRoot', value: '4a5e1e4baab89f3a32518a88...', color: '#39B54A' },
                    { field: 'timestamp', value: '1714608932', color: '#6366f1' },
                    { field: 'bits', value: '0x17053894  (target)', color: '#ED1C24' },
                    { field: 'nonce', value: '3,829,714,012', color: '#f59e0b' },
                  ].map((row, i) => (
                    <motion.div
                      key={row.field}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.08 }}
                      className="flex items-baseline gap-3 rounded px-2 py-1"
                      style={{ backgroundColor: row.color + '0c' }}
                    >
                      <span className="w-24 shrink-0 font-bold" style={{ color: row.color }}>{row.field}</span>
                      <span className="text-muted-foreground truncate">{row.value}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-3 rounded-lg px-3 py-2" style={{ backgroundColor: '#f59e0b12', border: '1px solid #f59e0b40' }}>
                  <p className="font-mono text-xs" style={{ color: '#f59e0b' }}>SHA256(SHA256(header)) =</p>
                  <p className="font-mono text-xs text-foreground break-all">00000000000000000002<span className="text-muted-foreground">a7c4c1f8b9d3e6...</span></p>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">Difficulty adjusts every <span className="font-semibold text-foreground">2,016 blocks (~2 weeks)</span> to maintain ~10 min block time.</p>
              </div>
            </div>

            {/* ── Right: 4 cards ── */}
            <div className="flex-1 min-w-0 flex flex-col gap-3">
              {[
                {
                  icon: '⛏️',
                  title: 'Mining Hardware Evolution',
                  color: '#f59e0b',
                  content: (
                    <div className="flex items-center gap-2 flex-wrap mt-1">
                      {['CPU', 'GPU', 'FPGA', 'ASIC'].map((hw, i, arr) => (
                        <span key={hw} className="flex items-center gap-1">
                          <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: '#f59e0b20', color: '#f59e0b' }}>{hw}</span>
                          {i < arr.length - 1 && <span className="text-muted-foreground text-xs">→</span>}
                        </span>
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">Each generation ~1000× more efficient. ASICs now dominate.</span>
                    </div>
                  ),
                },
                {
                  icon: '₿',
                  title: 'Block Reward & Halvings',
                  color: '#f59e0b',
                  content: (
                    <div className="mt-1">
                      <div className="flex items-end gap-1 flex-wrap">
                        {[
                          { era: '2009', reward: '50' },
                          { era: '2012', reward: '25' },
                          { era: '2016', reward: '12.5' },
                          { era: '2020', reward: '6.25' },
                          { era: '2024', reward: '3.125' },
                          { era: '~2028', reward: '1.5625', dim: true },
                        ].map(h => (
                          <div key={h.era} className="flex flex-col items-center gap-0.5" style={{ opacity: h.dim ? 0.5 : 1 }}>
                            <span className="text-xs font-bold" style={{ color: '#f59e0b' }}>{h.reward}</span>
                            <div className="w-8 rounded-t" style={{ height: `${(parseFloat(h.reward) / 50) * 36 + 4}px`, backgroundColor: '#f59e0b' + (h.dim ? '40' : '80') }} />
                            <span className="text-[9px] text-muted-foreground">{h.era}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Halving every 210,000 blocks. Supply hard-capped at 21 million BTC.</p>
                    </div>
                  ),
                },
                {
                  icon: '🌍',
                  title: 'The Energy Debate',
                  color: '#ED1C24',
                  content: (
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      PoW converts electricity into security — attacking is expensive in the real world. Critics note Bitcoin's energy use (~150 TWh/yr). Ethereum addressed this by moving to <span className="font-semibold text-foreground">Proof of Stake</span>, reducing energy consumption by <span className="font-semibold" style={{ color: '#ED1C24' }}>~99.95%</span>.
                    </p>
                  ),
                },
                {
                  icon: '🔒',
                  title: 'Why It Works: 51% Attack Cost',
                  color: '#ED1C24',
                  content: (
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      To rewrite history an attacker needs &gt;50% of global hashrate. At current difficulty that would cost billions in ASIC hardware + electricity, and any successful attack would destroy the value of the coins being stolen — making honesty the dominant strategy.
                    </p>
                  ),
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="rounded-xl border-l-4 p-3 bg-card flex-1 min-h-0"
                  style={{ borderLeftColor: card.color }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{card.icon}</span>
                    <span className="text-sm font-bold text-foreground">{card.title}</span>
                  </div>
                  {card.content}
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* ═══════ TRILEMMA ═══════ */}
        <div id="s1-trilemma" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">The Blockchain Trilemma</h2>
            <p className="text-muted-foreground text-sm mt-1">Security, Scalability, Decentralization — you can only optimise for two at a time.</p>
          </div>

          {/* ── Triangle ── */}
          <div className="shrink-0 flex justify-center mb-4">
            <div className="relative" style={{ width: 320, height: 200 }}>
              <svg width="320" height="200" viewBox="0 0 320 200" className="absolute inset-0">
                {/* Triangle fill */}
                <polygon
                  points="160,16 20,184 300,184"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  strokeOpacity="0.5"
                />
                {/* Vertex dots */}
                <circle cx="160" cy="16" r="5" fill="#f59e0b" />
                <circle cx="20" cy="184" r="5" fill="#39B54A" />
                <circle cx="300" cy="184" r="5" fill="#ED1C24" />
                {/* Subtle inner shading */}
                <polygon points="160,16 20,184 300,184" fill="#f59e0b08" />
              </svg>

              {/* Top vertex — Security */}
              <div className="absolute" style={{ top: -8, left: '50%', transform: 'translateX(-50%)' }}>
                <div className="text-center">
                  <div className="text-xs font-black px-2 py-0.5 rounded-full" style={{ backgroundColor: '#f59e0b20', color: '#f59e0b', border: '1px solid #f59e0b60' }}>🔒 Security</div>
                </div>
              </div>

              {/* Bottom-left — Decentralization */}
              <div className="absolute" style={{ bottom: -8, left: -8 }}>
                <div className="text-xs font-black px-2 py-0.5 rounded-full" style={{ backgroundColor: '#39B54A20', color: '#39B54A', border: '1px solid #39B54A60' }}>🌐 Decentral.</div>
              </div>

              {/* Bottom-right — Scalability */}
              <div className="absolute" style={{ bottom: -8, right: -8 }}>
                <div className="text-xs font-black px-2 py-0.5 rounded-full" style={{ backgroundColor: '#ED1C2420', color: '#ED1C24', border: '1px solid #ED1C2460' }}>⚡ Scalability</div>
              </div>

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: 20 }}>
                <div className="text-center">
                  <div className="text-xs font-bold text-muted-foreground">pick 2</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Platform comparison cards ── */}
          <div className="flex-1 min-h-0 flex flex-col gap-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest shrink-0">How major platforms position themselves</p>
            <div className="flex gap-4 flex-1 min-h-0">
              {[
                {
                  name: 'Bitcoin',
                  emoji: '₿',
                  strengths: ['Security', 'Decentralization'],
                  sacrifice: 'Scalability',
                  sacrificeColor: '#ED1C24',
                  color: '#f59e0b',
                  detail: '~7 TPS on-chain. Every full node validates every transaction. 50,000+ reachable nodes worldwide.',
                  answer: { label: 'Layer 2 answer', value: 'Lightning Network — payment channels enable near-instant, low-fee micropayments off-chain.' },
                },
                {
                  name: 'Ethereum + L2',
                  emoji: '🔷',
                  strengths: ['Security', 'Scalability (via rollups)'],
                  sacrifice: 'Some L1 throughput',
                  sacrificeColor: '#f59e0b',
                  color: '#6366f1',
                  detail: 'L1 ~15 TPS, but rollups (Arbitrum, Optimism, zkSync) push effective throughput to thousands of TPS while inheriting L1 security.',
                  answer: { label: 'The approach', value: 'Rollups batch thousands of L2 transactions into a single L1 proof, keeping security while boosting scalability.' },
                },
                {
                  name: 'Solana',
                  emoji: '◎',
                  strengths: ['Security', 'Scalability'],
                  sacrifice: 'Decentralization',
                  sacrificeColor: '#39B54A',
                  color: '#ED1C24',
                  detail: '~65,000 theoretical TPS. Fewer validators (~2,000) due to high hardware requirements. Higher centralisation risk.',
                  answer: { label: 'Trade-off', value: 'High-performance nodes concentrate power — network has suffered multiple outages, raising reliability questions.' },
                },
              ].map((platform, i) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.12 }}
                  className="flex-1 min-w-0 rounded-xl border-2 p-4 bg-card flex flex-col gap-2"
                  style={{ borderColor: platform.color + '50' }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{platform.emoji}</span>
                    <span className="font-black text-sm text-foreground">{platform.name}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {platform.strengths.map(s => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: platform.color + '20', color: platform.color }}>✓ {s}</span>
                    ))}
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: platform.sacrificeColor + '15', color: platform.sacrificeColor }}>↓ {platform.sacrifice}</span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">{platform.detail}</p>

                  <div className="mt-auto rounded-lg p-2" style={{ backgroundColor: platform.color + '10', border: `1px solid ${platform.color}30` }}>
                    <div className="text-xs font-bold mb-0.5" style={{ color: platform.color }}>{platform.answer.label}</div>
                    <div className="text-xs text-muted-foreground">{platform.answer.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════ TAKEAWAYS ═══════ */}
        <div id="s1-takeaways" className="h-full">
          <TakeawaySlide
            title="Section 01 — Key Takeaways"
            takeaways={[
              'Bitcoin is a permissionless, public blockchain — anyone can participate',
              'Its architecture combines UTXO transactions, Merkle trees, and linked block headers',
              'Proof of Work makes attacks prohibitively expensive — security through real-world energy cost',
              'The Blockchain Trilemma: decentralization, security, and scalability cannot all be maximised simultaneously',
              'Bitcoin prioritises security and decentralization — scalability is handled by Layer 2 (Lightning)',
            ]}
          />
        </div>

        {/* ═══════ SUMMARY ═══════ */}
        <div id="s1-summary" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-5">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Section Summary</h2>
            <p className="text-sm text-muted-foreground mt-1">Everything covered in this section — at a glance</p>
          </div>
          <div className="flex-1 min-h-0 grid grid-cols-3 gap-4 content-start">
            {[
              { icon: '💼', title: 'Application Layer', summary: 'Wallets, exchanges, block explorers — communicate with the network via RPC calls to full nodes on port 8332' },
              { icon: '🌐', title: 'P2P Network', summary: '~50k reachable nodes · Gossip protocol · Mempool holds unconfirmed txs · TCP port 8333' },
              { icon: '⛏️', title: 'Proof of Work', summary: 'SHA-256 hash puzzle · 2016-block difficulty adjustment · 10-minute block target · First to find nonce wins' },
              { icon: '🗄️', title: 'UTXO Model', summary: 'Inputs reference past UTXOs · Outputs create new UTXOs · No global balance · Change is a new output' },
              { icon: '📊', title: 'Halving Schedule', summary: '50 → 25 → 12.5 → 6.25 BTC per block · Max supply 21M · Next halving ~2028 · Last coin mined ~2140' },
              { icon: '⚖️', title: 'Trilemma Trade-off', summary: 'Bitcoin: Security + Decentralization · Scalability handled by Lightning Network (Layer 2) off-chain payments' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="flex flex-col gap-2 p-4 rounded-2xl border bg-card"
                style={{ borderColor: '#f59e0b30' }}
              >
                <div className="text-3xl">{card.icon}</div>
                <div className="font-bold text-sm text-foreground">{card.title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{card.summary}</div>
              </motion.div>
            ))}
          </div>
          <div className="shrink-0 mt-4 p-3 rounded-xl border border-border bg-card/50 text-center">
            <span className="text-xs text-muted-foreground">Proceed to Section 2 to explore Ethereum and programmable blockchains →</span>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
