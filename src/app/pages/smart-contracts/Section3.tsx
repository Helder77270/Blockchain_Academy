import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TitleSlide } from '../../components/templates/TitleSlide';
import { TakeawaySlide } from '../../components/templates/TakeawaySlide';
import { SectionNav } from '../../components/navigation/SectionNav';
import { Building2 } from 'lucide-react';

const chapters = [
  { id: 's3-objectives', label: 'Objectives' },
  { id: 's3-homedepot',  label: 'Home Depot Supply Chain' },
  { id: 's3-realestate', label: 'Real-Estate NFT Deeds' },
  { id: 's3-dmv',        label: 'California DMV Titles' },
  { id: 's3-exercise',   label: '🎯 Exercise' },
  { id: 's3-takeaways',  label: 'Takeaways' },
  { id: 's3-summary',    label: 'Summary' },
];

function Stub({ id, label }: { id: string; label: string }) {
  return (
    <div id={id} className="h-full flex items-center justify-center p-8">
      <div className="text-center text-muted-foreground">
        <div className="text-4xl mb-4">🏗️</div>
        <p className="text-lg font-medium">{label} — coming soon</p>
      </div>
    </div>
  );
}

// ─── Exercise: Design Your Own Mini-Brief ────────────────────────────────────

const INDUSTRIES = ['Finance', 'Supply Chain', 'Healthcare', 'Real Estate', 'Government', 'Entertainment', 'Insurance', 'Gaming'];

const EXAMPLES: Record<string, { pain: string; parties: string; trigger: string; output: string; risk: string }> = {
  Finance:       { pain: 'Cross-border payments take 3–5 days and cost 5–8% in fees', parties: 'Sender bank / Receiver bank / Blockchain', trigger: 'Sender deposits funds + recipient KYC confirmed', output: 'Funds released instantly to recipient in local currency', risk: 'Oracle needed for FX rate — potential manipulation' },
  'Supply Chain':{ pain: 'Invoice disputes between suppliers and retailers take 3–5 weeks to resolve', parties: 'Supplier / Retailer / Logistics provider', trigger: 'Delivery scan confirmed + invoice matched to PO', output: 'Payment auto-released to supplier within 24h', risk: 'IoT sensor data must come from a trusted oracle' },
  Healthcare:    { pain: 'Patient consent for data sharing is paper-based and slow', parties: 'Patient / Hospital A / Hospital B', trigger: 'Patient signs consent transaction on-chain', output: 'Access token minted — Hospital B can read specific records', risk: 'Medical data itself must stay off-chain (privacy law)' },
  'Real Estate': { pain: 'Property title transfer takes 30–60 days and costs 6% in intermediary fees', parties: 'Buyer / Seller / Title company', trigger: 'Full payment received + title search clear', output: 'Deed NFT transferred to buyer; funds released to seller', risk: 'Legal recognition of NFT as deed requires legislation' },
  Government:    { pain: 'Benefit disbursements are slow and subject to fraud', parties: 'Government / Citizens / Verifier', trigger: 'Eligibility criteria confirmed via verified credentials', output: 'Benefit amount sent directly to citizen wallet', risk: 'Off-chain identity verification is the weak point' },
  Entertainment: { pain: 'Music royalties take 18 months to reach artists through label chains', parties: 'Artist / Streaming platform / Listener', trigger: 'Each stream event recorded on-chain', output: 'Micro-payment split instantly: artist 80%, label 20%', risk: 'High transaction volume — requires L2 or rollup' },
  Insurance:     { pain: 'Flight delay claims require manual submission and 2–4 week payout', parties: 'Traveller / Insurer / Flight data oracle', trigger: 'Flight delay > 2h confirmed by oracle (FlightAware)', output: 'Fixed payout sent automatically to traveller wallet', risk: 'Oracle data quality is the single point of failure' },
  Gaming:        { pain: 'In-game assets can be deleted or altered by the developer at any time', parties: 'Player / Game developer / Marketplace', trigger: 'Player purchases or earns item in-game', output: 'NFT minted to player wallet — tradeable and permanent', risk: 'Game server still centralised; contract only covers ownership' },
};

function DesignYourOwnExercise() {
  const [selected,  setSelected]  = useState<string | null>(null);
  const [stepIndex, setStepIndex] = useState(0);

  const ex = selected ? EXAMPLES[selected] : null;
  const steps = ex ? [
    { label: 'Pain Point',       emoji: '🩹', value: ex.pain },
    { label: 'Parties Involved', emoji: '👥', value: ex.parties },
    { label: 'Trigger',          emoji: '⚡', value: ex.trigger },
    { label: 'Output / Action',  emoji: '✅', value: ex.output },
    { label: 'Key Risk',         emoji: '⚠️', value: ex.risk },
  ] : [];

  const handleSelect = (ind: string) => { setSelected(ind); setStepIndex(0); };
  const next = () => setStepIndex(i => Math.min(i + 1, steps.length - 1));
  const prev = () => setStepIndex(i => Math.max(i - 1, 0));

  return (
    <div className="h-full flex flex-col p-6 lg:p-8">
      <div className="shrink-0 mb-4">
        <span className="px-2.5 py-0.5 rounded-full bg-[#39B54A]/15 border border-[#39B54A]/40 text-[#39B54A] text-xs font-bold">🎯 Exercise</span>
        <h2 className="text-2xl font-bold text-foreground mt-1">Design Your Own Smart Contract</h2>
        <p className="text-muted-foreground text-sm">Pick an industry, then think through each prompt before revealing the example answer.</p>
      </div>

      <div className="flex-1 min-h-0 flex gap-6">

        {/* Industry selector */}
        <div className="flex flex-col gap-2 w-44 shrink-0 justify-center">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">Choose industry</p>
          {INDUSTRIES.map(ind => (
            <motion.button key={ind} onClick={() => handleSelect(ind)} whileHover={{ x: 4 }} whileTap={{ scale: 0.97 }}
              className="px-3 py-2 rounded-xl border-2 text-left text-xs font-semibold transition-colors"
              style={{
                borderColor: selected === ind ? '#39B54A' : 'var(--border)',
                backgroundColor: selected === ind ? '#39B54A18' : 'var(--card)',
                color: selected === ind ? '#39B54A' : 'var(--foreground)',
              }}>
              {ind}
            </motion.button>
          ))}
        </div>

        {/* Step-through panel */}
        <div className="flex-1 min-w-0 flex flex-col">
          {!selected ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="text-5xl mb-3">👈</div>
                <p className="text-sm">Select an industry to begin</p>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div key={selected} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="flex-1 flex flex-col gap-4">

                {/* Progress dots */}
                <div className="flex items-center gap-2 shrink-0">
                  {steps.map((s, i) => (
                    <button key={i} onClick={() => setStepIndex(i)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold transition-colors"
                      style={{
                        backgroundColor: i <= stepIndex ? '#39B54A20' : 'var(--muted)',
                        color: i <= stepIndex ? '#39B54A' : 'var(--muted-foreground)',
                        border: `1px solid ${i === stepIndex ? '#39B54A' : 'transparent'}`,
                      }}>
                      {s.emoji} {s.label}
                    </button>
                  ))}
                </div>

                {/* Prompt card — show question first, reveal on click */}
                <motion.div key={stepIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  className="flex-1 flex flex-col gap-4">

                  <div className="p-5 rounded-xl border-2 border-[#39B54A]/30 bg-[#39B54A]/06 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{steps[stepIndex].emoji}</span>
                      <div className="font-black text-lg text-foreground">{steps[stepIndex].label}</div>
                      <span className="ml-auto text-xs text-muted-foreground">{stepIndex + 1} / {steps.length}</span>
                    </div>

                    {/* Question prompt */}
                    <div className="p-3 bg-muted rounded-lg text-sm text-muted-foreground italic">
                      {{
                        0: `What problem exists in ${selected} that requires trust in an intermediary?`,
                        1: `Who are the 2–3 parties involved? Who holds the funds or assets?`,
                        2: `What event or condition triggers the smart contract to execute?`,
                        3: `What does the contract do automatically when triggered?`,
                        4: `What could go wrong? What is the single weakest point in this design?`,
                      }[stepIndex]}
                    </div>

                    {/* Example answer */}
                    <div className="p-3 bg-[#39B54A]/10 border border-[#39B54A]/30 rounded-lg">
                      <div className="text-[10px] font-bold text-[#39B54A] uppercase tracking-widest mb-1">Example answer — {selected}</div>
                      <div className="text-sm text-foreground">{steps[stepIndex].value}</div>
                    </div>
                  </div>

                  {/* Nav */}
                  <div className="flex items-center gap-3 shrink-0">
                    <button onClick={prev} disabled={stepIndex === 0}
                      className="px-4 py-2 rounded-lg bg-muted text-xs font-semibold text-muted-foreground hover:bg-muted/80 disabled:opacity-30 transition-colors">← Previous</button>
                    <button onClick={next} disabled={stepIndex === steps.length - 1}
                      className="px-4 py-2 rounded-lg bg-[#39B54A] text-white text-xs font-bold hover:bg-[#39B54A]/90 disabled:opacity-30 transition-colors">Next →</button>
                    {stepIndex === steps.length - 1 && (
                      <span className="text-xs text-[#39B54A] font-semibold ml-2">✓ Brief complete! Now try another industry.</span>
                    )}
                  </div>
                </motion.div>

              </motion.div>
            </AnimatePresence>
          )}
        </div>

      </div>
    </div>
  );
}

export function SC_Section3() {
  return (
    <div className="h-full w-full flex overflow-hidden">
      <div className="w-44 shrink-0 h-full hidden lg:block border-r border-border">
        <SectionNav chapters={chapters} />
      </div>
      <div id="section-scroll" className="flex-1 overflow-y-auto snap-y snap-mandatory">
        <div className="slide-flow">

        <div className="h-full">
          <TitleSlide
            sectionNumber="SECTION 03"
            title="Case Studies"
            subtitle="Real-world smart contract deployments — what worked, what didn't, and why it matters"
            icon={<Building2 className="size-20 text-[#6366f1]" />}
            gradient="from-[#6366f1] to-[#22d3ee]"
          />
        </div>

        {/* ═══════ OBJECTIVES ═══════ */}
        <div id="s3-objectives" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6366f1]">Learning Objectives</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-1">What You Will Learn</h2>
            <p className="text-sm text-muted-foreground mt-1">By the end of this section, you will be able to:</p>
          </div>
          <div className="flex-1 min-h-0 grid grid-cols-2 gap-4">
            {[
              { num: '01', label: 'Analyze DeFi protocols', desc: 'Understand how Uniswap AMM and Compound lending work on-chain without intermediaries' },
              { num: '02', label: 'Evaluate supply chain claims', desc: 'Identify where blockchain genuinely helps vs creates unnecessary complexity' },
              { num: '03', label: 'Understand the oracle problem', desc: 'Explain why off-chain data is the biggest structural weakness of smart contracts' },
              { num: '04', label: 'Critically assess hype', desc: 'Apply de-hype criteria to real blockchain project proposals' },
              { num: '05', label: 'Learn from real deployments', desc: 'Extract lessons from Home Depot, California DMV, and Real-Estate case studies' },
            ].map((obj, i) => (
              <motion.div
                key={obj.num}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.35 }}
                className="flex gap-4 p-5 rounded-2xl border"
                style={{ borderColor: '#6366f140', backgroundColor: '#6366f108' }}
              >
                <div className="text-3xl font-black shrink-0 text-[#6366f1]/40">{obj.num}</div>
                <div>
                  <div className="font-bold text-sm text-foreground">{obj.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{obj.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════ CASE STUDY 1 — HOME DEPOT ═══════ */}
        <div id="s3-homedepot" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-1">
            <div className="text-xs font-bold text-[#f59e0b] uppercase tracking-widest mb-1">Case Study 01 — Supply Chain</div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Home Depot: Supply Chain Dispute Resolution</h2>
            <p className="text-muted-foreground text-sm mt-1">How the world's largest home improvement retailer used blockchain to eliminate weeks of supplier disputes.</p>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-3 gap-4 mt-4">

            {/* Problem */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-lg bg-[#ED1C24] flex items-center justify-center text-white text-xs font-black shrink-0">01</div>
                <div className="text-xs font-bold text-[#ED1C24] uppercase tracking-widest">The Problem</div>
              </div>
              <div className="flex-1 p-4 bg-gradient-to-br from-[#ED1C24]/10 to-transparent border border-[#ED1C24]/30 rounded-xl flex flex-col gap-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Home Depot manages <span className="text-foreground font-semibold">thousands of suppliers</span> across a global supply chain. When goods arrived damaged, delayed, or incorrect, resolving the dispute required:
                </p>
                <ul className="space-y-2">
                  {[
                    'Weeks of back-and-forth emails between buyer and supplier',
                    'Manual reconciliation of paper invoices, purchase orders, and shipping docs',
                    'No single source of truth — each party had different records',
                    'Average resolution time: 3–5 weeks, tying up cash flow',
                  ].map(p => (
                    <li key={p} className="flex gap-2 text-xs text-muted-foreground">
                      <span className="text-[#ED1C24] shrink-0 mt-0.5">✗</span>{p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto p-2 bg-[#ED1C24]/10 rounded-lg text-xs text-center">
                  <span className="font-bold text-[#ED1C24]">Cost:</span> <span className="text-muted-foreground">Millions in delayed payments, admin overhead, and strained supplier relationships</span>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-lg bg-[#6366f1] flex items-center justify-center text-white text-xs font-black shrink-0">02</div>
                <div className="text-xs font-bold text-[#6366f1] uppercase tracking-widest">The Solution</div>
              </div>
              <div className="flex-1 p-4 bg-gradient-to-br from-[#6366f1]/10 to-transparent border border-[#6366f1]/30 rounded-xl flex flex-col gap-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Home Depot deployed a <span className="text-foreground font-semibold">blockchain-based supply chain platform</span> in partnership with IBM (Hyperledger Fabric):
                </p>
                <ul className="space-y-2">
                  {[
                    'All purchase orders, shipping confirmations, and invoices recorded on a shared ledger in real time',
                    'Smart contracts auto-match delivery confirmations against POs — flagging discrepancies instantly',
                    'Both Home Depot and suppliers see the same immutable data — no he-said-she-said',
                    'Dispute resolution triggers automatically when conditions deviate from contract terms',
                  ].map(s => (
                    <li key={s} className="flex gap-2 text-xs text-muted-foreground">
                      <span className="text-[#6366f1] shrink-0 mt-0.5">›</span>{s}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto p-2 bg-[#6366f1]/10 rounded-lg text-xs text-center font-mono">
                  Delivery confirmed → Invoice auto-approved → Payment released
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-lg bg-[#39B54A] flex items-center justify-center text-white text-xs font-black shrink-0">03</div>
                <div className="text-xs font-bold text-[#39B54A] uppercase tracking-widest">The Results</div>
              </div>
              <div className="flex-1 p-4 bg-gradient-to-br from-[#39B54A]/10 to-transparent border border-[#39B54A]/30 rounded-xl flex flex-col gap-3">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { metric: '3–5 weeks → hours', label: 'Dispute resolution time', color: '#39B54A' },
                    { metric: '↓ significantly', label: 'Administrative overhead', color: '#6366f1' },
                    { metric: '↑ improved', label: 'Supplier relationships', color: '#f59e0b' },
                    { metric: 'Single source of truth', label: 'Shared data for all parties', color: '#8b5cf6' },
                  ].map(r => (
                    <div key={r.label} className="p-3 bg-card border border-border rounded-xl">
                      <div className="font-black text-sm" style={{ color: r.color }}>{r.metric}</div>
                      <div className="text-xs text-muted-foreground">{r.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto p-2 bg-[#39B54A]/10 rounded-lg">
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Platform:</span> IBM Blockchain (Hyperledger Fabric) — permissioned, only Home Depot and its suppliers participate.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ═══════ CASE STUDY 2 — PROPY ═══════ */}
        <div id="s3-realestate" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-1">
            <div className="text-xs font-bold text-[#8b5cf6] uppercase tracking-widest mb-1">Case Study 02 — Real Estate</div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Propy: Real-Estate NFT Deeds</h2>
            <p className="text-muted-foreground text-sm mt-1">The first legally recognised property sale via NFT — and what it means for real estate globally.</p>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-3 gap-4 mt-4">

            {/* Problem */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-lg bg-[#ED1C24] flex items-center justify-center text-white text-xs font-black shrink-0">01</div>
                <div className="text-xs font-bold text-[#ED1C24] uppercase tracking-widest">The Problem</div>
              </div>
              <div className="flex-1 p-4 bg-gradient-to-br from-[#ED1C24]/10 to-transparent border border-[#ED1C24]/30 rounded-xl flex flex-col gap-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Real estate transactions remain one of the most <span className="text-foreground font-semibold">friction-heavy processes</span> in the modern economy:
                </p>
                <ul className="space-y-2">
                  {[
                    '30–60 day closing timelines: title search, escrow, notarization, county recording',
                    'Multiple intermediaries: agents, lawyers, title companies, banks — each taking a cut',
                    'Paper-based deeds stored in local county offices — vulnerable to loss, fraud, and errors',
                    'Cross-border property purchases nearly impossible without local legal representation',
                  ].map(p => (
                    <li key={p} className="flex gap-2 text-xs text-muted-foreground">
                      <span className="text-[#ED1C24] shrink-0 mt-0.5">✗</span>{p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto p-2 bg-[#ED1C24]/10 rounded-lg text-xs text-center">
                  <span className="font-bold text-[#ED1C24]">US market:</span> <span className="text-muted-foreground">$1.7T in annual home sales — ~6% in transaction costs</span>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-lg bg-[#8b5cf6] flex items-center justify-center text-white text-xs font-black shrink-0">02</div>
                <div className="text-xs font-bold text-[#8b5cf6] uppercase tracking-widest">The Solution</div>
              </div>
              <div className="flex-1 p-4 bg-gradient-to-br from-[#8b5cf6]/10 to-transparent border border-[#8b5cf6]/30 rounded-xl flex flex-col gap-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Propy places the property deed inside an <span className="text-foreground font-semibold">ERC-721 NFT</span> (Ethereum). Ownership of the NFT = legal ownership of the property:
                </p>
                <ul className="space-y-2">
                  {[
                    'Property is held inside an LLC; the NFT represents ownership of the LLC',
                    'Transferring the NFT = transferring the LLC = transferring the property',
                    'Smart contract handles escrow — funds released only when title is confirmed',
                    'Transaction recorded on Ethereum: public, permanent, globally accessible',
                    'Settlement time: hours instead of weeks',
                  ].map(s => (
                    <li key={s} className="flex gap-2 text-xs text-muted-foreground">
                      <span className="text-[#8b5cf6] shrink-0 mt-0.5">›</span>{s}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto p-2 bg-[#8b5cf6]/10 rounded-lg text-xs text-center font-mono">
                  NFT transfer → LLC transfer → Property transfer
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-lg bg-[#39B54A] flex items-center justify-center text-white text-xs font-black shrink-0">03</div>
                <div className="text-xs font-bold text-[#39B54A] uppercase tracking-widest">The Results</div>
              </div>
              <div className="flex-1 p-4 bg-gradient-to-br from-[#39B54A]/10 to-transparent border border-[#39B54A]/30 rounded-xl flex flex-col gap-3">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { metric: '$215,000', label: 'First NFT property sale — Kyiv, Ukraine (2017)', color: '#39B54A' },
                    { metric: '$653,000', label: 'First US NFT home sale — Gulfport, Florida (2022)', color: '#8b5cf6' },
                    { metric: 'Hours vs weeks', label: 'Settlement time reduction', color: '#f59e0b' },
                    { metric: 'Cross-border', label: 'Any buyer, anywhere — no local agent required', color: '#6366f1' },
                  ].map(r => (
                    <div key={r.label} className="p-3 bg-card border border-border rounded-xl">
                      <div className="font-black text-sm" style={{ color: r.color }}>{r.metric}</div>
                      <div className="text-xs text-muted-foreground">{r.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto p-2 bg-[#39B54A]/10 rounded-lg text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Caveat:</span> legal framework still requires the LLC wrapper. Direct deed-as-NFT requires legislative change in most jurisdictions.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ═══════ CASE STUDY 3 — CALIFORNIA DMV ═══════ */}
        <div id="s3-dmv" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-1">
            <div className="text-xs font-bold text-[#22d3ee] uppercase tracking-widest mb-1">Case Study 03 — Government</div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">California DMV: Vehicle Titles on Avalanche</h2>
            <p className="text-muted-foreground text-sm mt-1">The largest US state DMV moves 42 million vehicle titles to a public blockchain — live in 2024.</p>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-3 gap-4 mt-4">

            {/* Problem */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-lg bg-[#ED1C24] flex items-center justify-center text-white text-xs font-black shrink-0">01</div>
                <div className="text-xs font-bold text-[#ED1C24] uppercase tracking-widest">The Problem</div>
              </div>
              <div className="flex-1 p-4 bg-gradient-to-br from-[#ED1C24]/10 to-transparent border border-[#ED1C24]/30 rounded-xl flex flex-col gap-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  California's DMV manages <span className="text-foreground font-semibold">42 million vehicle titles</span> on legacy paper-based systems dating back decades:
                </p>
                <ul className="space-y-2">
                  {[
                    'Paper titles easily lost, damaged, or forged — enabling vehicle fraud worth billions annually',
                    'Title transfers require in-person DMV visits — average wait: 2–3 hours',
                    'Lenders cannot instantly verify clear title before approving auto loans',
                    'Out-of-state transfers require duplicate paperwork and weeks of processing',
                  ].map(p => (
                    <li key={p} className="flex gap-2 text-xs text-muted-foreground">
                      <span className="text-[#ED1C24] shrink-0 mt-0.5">✗</span>{p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto p-2 bg-[#ED1C24]/10 rounded-lg text-xs text-center">
                  <span className="font-bold text-[#ED1C24]">Scale:</span> <span className="text-muted-foreground">~42M titles, largest state vehicle registry in the US</span>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-lg bg-[#22d3ee] flex items-center justify-center text-white text-xs font-black shrink-0">02</div>
                <div className="text-xs font-bold text-[#22d3ee] uppercase tracking-widest">The Solution</div>
              </div>
              <div className="flex-1 p-4 bg-gradient-to-br from-[#22d3ee]/10 to-transparent border border-[#22d3ee]/30 rounded-xl flex flex-col gap-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Partnership with <span className="text-foreground font-semibold">Oxhead Alpha</span> to migrate all CA vehicle titles to the <span className="text-foreground font-semibold">Avalanche blockchain</span> as digital NFTs:
                </p>
                <ul className="space-y-2">
                  {[
                    'Each vehicle title becomes a unique NFT — representing legal ownership on-chain',
                    'Title transfers executed as blockchain transactions — instant, tamper-proof, auditable',
                    'Lienholders (banks) can verify and release liens digitally — no paper, no delay',
                    'Avalanche chosen for: EVM compatibility, low fees, high throughput, and custom subnet support',
                    'DMV retains control via a permissioned Avalanche subnet',
                  ].map(s => (
                    <li key={s} className="flex gap-2 text-xs text-muted-foreground">
                      <span className="text-[#22d3ee] shrink-0 mt-0.5">›</span>{s}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto p-2 bg-[#22d3ee]/10 rounded-lg text-xs text-center font-mono">
                  Title NFT minted → Transfer = blockchain tx → Lien released on-chain
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-lg bg-[#39B54A] flex items-center justify-center text-white text-xs font-black shrink-0">03</div>
                <div className="text-xs font-bold text-[#39B54A] uppercase tracking-widest">The Results</div>
              </div>
              <div className="flex-1 p-4 bg-gradient-to-br from-[#39B54A]/10 to-transparent border border-[#39B54A]/30 rounded-xl flex flex-col gap-3">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { metric: '42 million', label: 'Vehicle titles migrated to blockchain (2024)', color: '#22d3ee' },
                    { metric: 'Minutes vs weeks', label: 'Title transfer processing time', color: '#39B54A' },
                    { metric: 'Real-time', label: 'Lien verification for lenders', color: '#6366f1' },
                    { metric: 'First in the US', label: 'State government blockchain title system at scale', color: '#f59e0b' },
                  ].map(r => (
                    <div key={r.label} className="p-3 bg-card border border-border rounded-xl">
                      <div className="font-black text-sm" style={{ color: r.color }}>{r.metric}</div>
                      <div className="text-xs text-muted-foreground">{r.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto p-2 bg-[#39B54A]/10 rounded-lg">
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Key takeaway:</span> even government institutions trust blockchain for legal record-keeping — when the use case (immutable, auditable, shared ownership) fits perfectly.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ═══════ EXERCISE: DESIGN YOUR OWN ═══════ */}
        <div id="s3-exercise" className="h-full">
          <DesignYourOwnExercise />
        </div>

        <div id="s3-takeaways" className="h-full">
          <TakeawaySlide
            title="Section 03 — Key Takeaways"
            takeaways={[
              'Home Depot: smart contracts reduced supplier dispute resolution from weeks to hours',
              'Real-estate NFT deeds tokenize property ownership — title transfer becomes instant and auditable',
              'California DMV pilots digital vehicle titles on blockchain — reducing fraud and paperwork',
              'All three cases replace slow, trust-dependent paper processes with code-enforced automation',
              'The common thread: many parties, no single trusted authority, and a need for an immutable record',
            ]}
          />
        </div>

        {/* ═══════ SUMMARY ═══════ */}
        <div id="s3-summary" className="h-full flex flex-col p-6 lg:p-10">
          <div className="shrink-0 mb-5">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Section Summary</h2>
            <p className="text-sm text-muted-foreground mt-1">Everything covered in this section — at a glance</p>
          </div>
          <div className="flex-1 min-h-0 grid grid-cols-3 gap-4 content-start">
            {[
              { icon: '🏠', title: 'Home Depot', summary: '$50B in annual supply disputes automated — accounts payable resolved via Hyperledger Fabric in days, not weeks' },
              { icon: '🏡', title: 'Real-Estate NFTs', summary: 'NFT property deeds eliminate title insurance delays — Vermont & Wyoming pilots; still legally experimental globally' },
              { icon: '🚗', title: 'California DMV', summary: 'Blockchain car titles reduced fraud; title transfer dropped from 2 weeks to minutes via Tezos' },
              { icon: '🔮', title: 'The Oracle Problem', summary: 'Off-chain data is the #1 vulnerability — Chainlink, API3 provide decentralized feeds; still a trust assumption' },
              { icon: '❌', title: 'De-Hype Cases', summary: 'Voting, supply chain provenance, social media — often a database is cheaper, faster, and sufficient' },
              { icon: '🏗️', title: 'When SC Shines', summary: 'DeFi (trustless settlement), cross-border multi-party conditionals, programmable money — real value here' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="flex flex-col gap-2 p-4 rounded-2xl border bg-card"
                style={{ borderColor: '#6366f130' }}
              >
                <div className="text-3xl">{card.icon}</div>
                <div className="font-bold text-sm text-foreground">{card.title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{card.summary}</div>
              </motion.div>
            ))}
          </div>
          <div className="shrink-0 mt-4 p-3 rounded-xl border border-border bg-card/50 text-center">
            <span className="text-xs text-muted-foreground">Proceed to Section 4 for technical challenges, attacks, and limitations →</span>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
