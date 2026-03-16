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

        {/* CONTENT SLIDES — TO BE BUILT */}
        {[
          { id: 's4-interop', emoji: '🔗', label: 'Interoperability: Connecting Blockchains' },
          { id: 's4-cosmos', emoji: '🌌', label: 'Cosmos — Internet of Blockchains' },
          { id: 's4-layer0', emoji: '0️⃣', label: 'Layer 0 — Infrastructure for Blockchains' },
          { id: 's4-starknet', emoji: '⚡', label: 'Starknet — ZK-Rollups & Cairo VM' },
        ].map(slide => (
          <div key={slide.id} id={slide.id} className="h-full flex items-center justify-center p-8">
            <div className="text-center text-muted-foreground">
              <div className="text-4xl mb-4">{slide.emoji}</div>
              <p className="text-lg font-medium">{slide.label} — coming soon</p>
            </div>
          </div>
        ))}

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
