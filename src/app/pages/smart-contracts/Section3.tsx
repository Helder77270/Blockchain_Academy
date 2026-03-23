import { TitleSlide } from '../../components/templates/TitleSlide';
import { TakeawaySlide } from '../../components/templates/TakeawaySlide';
import { SectionNav } from '../../components/navigation/SectionNav';
import { Building2 } from 'lucide-react';

const chapters = [
  { id: 's3-homedepot',  label: 'Home Depot Supply Chain' },
  { id: 's3-realestate', label: 'Real-Estate NFT Deeds' },
  { id: 's3-dmv',        label: 'California DMV Titles' },
  { id: 's3-takeaways',  label: 'Takeaways' },
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

        </div>
      </div>
    </div>
  );
}
