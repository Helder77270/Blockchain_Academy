import { TitleSlide } from '../../components/templates/TitleSlide';
import { TakeawaySlide } from '../../components/templates/TakeawaySlide';
import { SectionNav } from '../../components/navigation/SectionNav';
import { Layers } from 'lucide-react';

const chapters = [
  { id: 's2-why', label: 'Why Ethereum?' },
  { id: 's2-accounts', label: 'Accounts' },
  { id: 's2-evm', label: 'EVM' },
  { id: 's2-transaction', label: 'Transaction' },
  { id: 's2-smartcontracts', label: 'Smart Contracts' },
  { id: 's2-consensus', label: 'PoW → PoS' },
  { id: 's2-evmecosystem', label: 'EVM Everywhere' },
  { id: 's2-comparison', label: 'BTC vs ETH' },
  { id: 's2-takeaways', label: 'Takeaways' },
];

export function BP_Section2() {
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
            sectionNumber="SECTION 02"
            title="Ethereum: From Money to Programmable Blockchain"
            subtitle="Accounts, EVM, smart contracts, consensus evolution, and the EVM ecosystem"
            icon={<Layers className="size-20 text-[#627EEA]" />}
            gradient="from-[#627EEA] to-[#8b5cf6]"
          />
        </div>

        {/* CONTENT SLIDES — TO BE BUILT */}
        {[
          { id: 's2-why', emoji: '💡', label: 'Why Ethereum Was Needed' },
          { id: 's2-accounts', emoji: '👤', label: 'Ethereum Accounts' },
          { id: 's2-evm', emoji: '⚙️', label: 'Ethereum Virtual Machine (EVM)' },
          { id: 's2-transaction', emoji: '📤', label: 'Ethereum Transaction' },
          { id: 's2-smartcontracts', emoji: '📜', label: 'Smart Contracts' },
          { id: 's2-consensus', emoji: '🔄', label: 'Consensus Evolution: PoW → PoS' },
          { id: 's2-evmecosystem', emoji: '🌐', label: 'EVM is Everywhere' },
          { id: 's2-comparison', emoji: '⚖️', label: 'Quick Comparison: BTC vs ETH' },
        ].map(slide => (
          <div key={slide.id} id={slide.id} className="h-full flex items-center justify-center p-8">
            <div className="text-center text-muted-foreground">
              <div className="text-4xl mb-4">{slide.emoji}</div>
              <p className="text-lg font-medium">{slide.label} — coming soon</p>
            </div>
          </div>
        ))}

        {/* ═══════ TAKEAWAYS ═══════ */}
        <div id="s2-takeaways" className="h-full">
          <TakeawaySlide
            title="Section 02 — Key Takeaways"
            takeaways={[
              'Ethereum extends Bitcoin by adding a Turing-complete virtual machine — the EVM',
              'Two account types: Externally Owned Accounts (EOAs) and Contract Accounts',
              'Smart contracts are programs stored on-chain that execute deterministically when triggered',
              'The Merge (2022) replaced Proof of Work with Proof of Stake — cutting energy use by 99.95%',
              'The EVM has become an industry standard — Polygon, Arbitrum, Base, Optimism, and more are EVM-compatible',
              'Bitcoin is digital money; Ethereum is a programmable settlement layer',
            ]}
          />
        </div>

        </div>
      </div>
    </div>
  );
}
