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

        {/* CONTENT SLIDES — TO BE BUILT */}
        <div id="s1-architecture" className="h-full flex items-center justify-center p-8">
          <div className="text-center text-muted-foreground">
            <div className="text-4xl mb-4">🏗️</div>
            <p className="text-lg font-medium">Bitcoin Architecture — coming soon</p>
          </div>
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
