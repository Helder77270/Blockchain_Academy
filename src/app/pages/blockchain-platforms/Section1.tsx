import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TitleSlide } from '../../components/templates/TitleSlide';
import { TakeawaySlide } from '../../components/templates/TakeawaySlide';
import { SectionNav } from '../../components/navigation/SectionNav';
import { Bitcoin } from 'lucide-react';

const chapters = [
  { id: 's1-architecture', label: 'Architecture' },
  { id: 's1-transaction', label: 'Transaction' },
  { id: 's1-pow', label: 'Proof of Work' },
  { id: 's1-trilemma', label: 'Trilemma' },
  { id: 's1-takeaways', label: 'Takeaways' },
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
      <div className="shrink-0 mb-5">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Bitcoin Architecture</h2>
        <p className="text-muted-foreground text-sm mt-1">A layered stack — click any layer to explore it.</p>
      </div>

      <div className="flex-1 min-h-0 flex gap-6">

        {/* ── Stack diagram ── */}
        <div className="flex flex-col justify-center gap-3 w-80 shrink-0">
          {LAYERS.map((layer, i) => (
            <motion.button
              key={layer.id}
              onClick={() => setActive(active === layer.id ? null : layer.id)}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, duration: 0.4, ease: 'easeOut' }}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="relative text-left rounded-xl border-2 px-5 py-3 cursor-pointer transition-colors"
              style={{
                borderColor: active === layer.id ? layer.color : layer.color + '40',
                backgroundColor: active === layer.id ? layer.color + '18' : layer.color + '08',
              }}
            >
              {/* left accent bar */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                style={{ backgroundColor: layer.color }}
                animate={{ scaleY: active === layer.id ? 1 : 0.4, opacity: active === layer.id ? 1 : 0.5 }}
                transition={{ duration: 0.2 }}
              />
              <div className="flex items-center gap-3">
                <span className="text-xl">{layer.icon}</span>
                <div>
                  <div className="font-bold text-sm text-foreground">{layer.label}</div>
                  <div className="text-xs text-muted-foreground">{layer.sublabel}</div>
                </div>
                <motion.div
                  className="ml-auto text-xs font-bold"
                  style={{ color: layer.color }}
                  animate={{ rotate: active === layer.id ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >▶</motion.div>
              </div>
            </motion.button>
          ))}

          {/* connector arrows between layers */}
          <div className="absolute pointer-events-none" />
        </div>

        {/* ── Detail panel ── */}
        <div className="flex-1 min-w-0 relative">
          <AnimatePresence mode="wait">
            {activeLayer ? (
              <motion.div
                key={activeLayer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full flex flex-col gap-4"
              >
                {/* Header */}
                <div
                  className="rounded-xl p-5 border-2"
                  style={{ borderColor: activeLayer.color + '50', background: `linear-gradient(135deg, ${activeLayer.color}18, transparent)` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{activeLayer.icon}</span>
                    <div>
                      <h3 className="text-xl font-black text-foreground">{activeLayer.label}</h3>
                      <p className="text-xs text-muted-foreground">{activeLayer.sublabel}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{activeLayer.description}</p>
                </div>

                {/* Examples */}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Examples & facts</p>
                  <div className="flex flex-wrap gap-2">
                    {activeLayer.examples.map(ex => (
                      <motion.span
                        key={ex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="px-3 py-1.5 rounded-full text-sm font-medium border"
                        style={{ color: activeLayer.color, borderColor: activeLayer.color + '40', backgroundColor: activeLayer.color + '12' }}
                      >
                        {ex}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Animated block diagram for Data layer */}
                {activeLayer.id === 'data' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 min-h-0 flex flex-col justify-center"
                  >
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Block chain — hash linking</p>
                    <div className="flex items-center gap-1 overflow-hidden">
                      {['#839,998', '#839,999', '#840,000', '#840,001'].map((num, i) => (
                        <motion.div
                          key={num}
                          initial={{ opacity: 0, scale: 0.7 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + i * 0.15 }}
                          className="flex-1 rounded-lg border-2 p-2 text-center"
                          style={{ borderColor: '#ED1C2460', backgroundColor: '#ED1C2410' }}
                        >
                          <div className="text-xs font-black text-[#ED1C24]">BLOCK</div>
                          <div className="text-xs font-bold text-foreground">{num}</div>
                          <div className="text-[9px] text-muted-foreground mt-1 font-mono">prev: 0x…</div>
                          <div className="text-[9px] text-muted-foreground font-mono">root: 0x…</div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex items-center mt-2 gap-1">
                      {[0,1,2].map(i => (
                        <motion.div
                          key={i}
                          className="flex-1 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + i * 0.15 }}
                        >
                          <div className="h-px flex-1 bg-[#ED1C24]/40" />
                          <div className="text-[#ED1C24] text-xs mx-1">→</div>
                          <div className="h-px flex-1 bg-[#ED1C24]/40" />
                        </motion.div>
                      ))}
                      <div className="flex-1" />
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-1">Each block's header includes the previous block's hash — altering one block invalidates every block after it</p>
                  </motion.div>
                )}

                {/* Mempool animation for P2P layer */}
                {activeLayer.id === 'p2p' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 min-h-0 flex flex-col justify-center"
                  >
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Transaction propagation</p>
                    <div className="flex items-start gap-4">
                      {[
                        { label: 'Alice', emoji: '👩', desc: 'Broadcasts tx to 8 peers' },
                        { label: 'Peers', emoji: '🔁', desc: 'Each peer relays to their peers' },
                        { label: 'Network', emoji: '🌐', desc: 'Reaches ~50k nodes in <1s' },
                        { label: 'Miner', emoji: '⛏️', desc: 'Picks from mempool, mines block' },
                      ].map((step, i) => (
                        <motion.div
                          key={step.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + i * 0.18 }}
                          className="flex-1 text-center"
                        >
                          <div className="text-2xl mb-1">{step.emoji}</div>
                          <div className="text-xs font-bold text-foreground">{step.label}</div>
                          <div className="text-xs text-muted-foreground leading-tight mt-0.5">{step.desc}</div>
                          {i < 3 && <div className="absolute" />}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center gap-8"
              >
                {/* Animated stack preview */}
                <div className="flex flex-col gap-2 w-64">
                  {LAYERS.map((layer, i) => (
                    <motion.div
                      key={layer.id}
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: 'easeOut' }}
                      className="h-10 rounded-lg flex items-center justify-center gap-2"
                      style={{ backgroundColor: layer.color + '25', border: `1px solid ${layer.color}50` }}
                    >
                      <span>{layer.icon}</span>
                      <span className="text-xs font-semibold" style={{ color: layer.color }}>{layer.label}</span>
                    </motion.div>
                  ))}
                  {/* animated connecting arrows */}
                  {[0,1,2].map(i => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ delay: 1 + i * 0.2, duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                      className="flex justify-center -mt-1 -mb-1 text-muted-foreground text-xs"
                    >↕</motion.div>
                  ))}
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-muted-foreground text-sm"
                >
                  ← Click a layer to explore it
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
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

        {/* ═══════ ARCHITECTURE ═══════ */}
        <div id="s1-architecture" className="h-full">
          <BitcoinArchitectureSlide />
        </div>

        <div id="s1-transaction" className="h-full flex items-center justify-center p-8">
          <div className="text-center text-muted-foreground">
            <div className="text-4xl mb-4">📤</div>
            <p className="text-lg font-medium">Bitcoin Transaction — coming soon</p>
          </div>
        </div>

        <div id="s1-pow" className="h-full flex items-center justify-center p-8">
          <div className="text-center text-muted-foreground">
            <div className="text-4xl mb-4">⛏️</div>
            <p className="text-lg font-medium">Proof of Work in Bitcoin — coming soon</p>
          </div>
        </div>

        <div id="s1-trilemma" className="h-full flex items-center justify-center p-8">
          <div className="text-center text-muted-foreground">
            <div className="text-4xl mb-4">🔺</div>
            <p className="text-lg font-medium">Blockchain Trilemma — coming soon</p>
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

        </div>
      </div>
    </div>
  );
}
