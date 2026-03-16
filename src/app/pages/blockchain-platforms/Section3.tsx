import { TitleSlide } from '../../components/templates/TitleSlide';
import { TakeawaySlide } from '../../components/templates/TakeawaySlide';
import { SectionNav } from '../../components/navigation/SectionNav';
import { Building2 } from 'lucide-react';

const chapters = [
  { id: 's3-why', label: 'Why Permissioned?' },
  { id: 's3-supplychains', label: 'Supply Chains' },
  { id: 's3-overview', label: 'Fabric Overview' },
  { id: 's3-fabricx', label: 'Fabric Deep Dive' },
  { id: 's3-consensus', label: 'Pluggable Consensus' },
  { id: 's3-bft', label: 'Consensus & BFT' },
  { id: 's3-channels', label: 'Channels' },
  { id: 's3-txflow', label: 'Transaction Flow' },
  { id: 's3-comparison', label: 'ETH vs Fabric' },
  { id: 's3-takeaways', label: 'Takeaways' },
];

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

        {/* CONTENT SLIDES — TO BE BUILT */}
        {[
          { id: 's3-why', emoji: '🏢', label: 'Why Permissioned Blockchains Exist' },
          { id: 's3-supplychains', emoji: '🚚', label: 'Smart Contracts in Supply Chains' },
          { id: 's3-overview', emoji: '🗂️', label: 'Hyperledger Fabric — Overview' },
          { id: 's3-fabricx', emoji: '🔬', label: 'Hyperledger Fabric Deep Dive' },
          { id: 's3-consensus', emoji: '🔌', label: 'Pluggable Consensus' },
          { id: 's3-bft', emoji: '🛡️', label: 'Consensus & BFT' },
          { id: 's3-channels', emoji: '📡', label: 'Channels' },
          { id: 's3-txflow', emoji: '🔄', label: 'Transaction Flow in Hyperledger Fabric' },
        ].map(slide => (
          <div key={slide.id} id={slide.id} className="h-full flex items-center justify-center p-8">
            <div className="text-center text-muted-foreground">
              <div className="text-4xl mb-4">{slide.emoji}</div>
              <p className="text-lg font-medium">{slide.label} — coming soon</p>
            </div>
          </div>
        ))}

        {/* ═══════ COMPARISON ═══════ */}
        <div id="s3-comparison" className="h-full flex items-center justify-center p-8">
          <div className="text-center text-muted-foreground">
            <div className="text-4xl mb-4">⚖️</div>
            <p className="text-lg font-medium">Ethereum vs Hyperledger Fabric — coming soon</p>
          </div>
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
