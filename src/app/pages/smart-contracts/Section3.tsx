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

        <Stub id="s3-homedepot"  label="Home Depot — Supply Chain Smart Contracts" />
        <Stub id="s3-realestate" label="Real-Estate NFT Deeds" />
        <Stub id="s3-dmv"        label="Vehicle Titles — California DMV" />

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
