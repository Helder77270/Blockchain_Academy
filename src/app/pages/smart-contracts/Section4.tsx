import { TitleSlide } from '../../components/templates/TitleSlide';
import { TakeawaySlide } from '../../components/templates/TakeawaySlide';
import { SectionNav } from '../../components/navigation/SectionNav';
import { ShieldAlert } from 'lucide-react';

const chapters = [
  { id: 's4-oracle',     label: 'The Oracle Problem' },
  { id: 's4-challenges', label: 'Challenges & Limitations' },
  { id: 's4-technical',  label: 'Technical Challenges' },
  { id: 's4-takeaways',  label: 'Takeaways' },
];

function Stub({ id, label }: { id: string; label: string }) {
  return (
    <div id={id} className="h-full flex items-center justify-center p-8">
      <div className="text-center text-muted-foreground">
        <div className="text-4xl mb-4">⚠️</div>
        <p className="text-lg font-medium">{label} — coming soon</p>
      </div>
    </div>
  );
}

export function SC_Section4() {
  return (
    <div className="h-full w-full flex overflow-hidden">
      <div className="w-44 shrink-0 h-full hidden lg:block border-r border-border">
        <SectionNav chapters={chapters} />
      </div>
      <div id="section-scroll" className="flex-1 overflow-y-auto snap-y snap-mandatory">
        <div className="slide-flow">

        <div className="h-full">
          <TitleSlide
            sectionNumber="SECTION 04"
            title="Dehype Smart Contracts"
            subtitle="An honest look at the oracle problem, real limitations, and where smart contracts fall short"
            icon={<ShieldAlert className="size-20 text-[#6366f1]" />}
            gradient="from-[#ED1C24] to-[#6366f1]"
          />
        </div>

        <Stub id="s4-oracle"     label="The Oracle Problem" />
        <Stub id="s4-challenges" label="Challenges & Limitations" />
        <Stub id="s4-technical"  label="Technical Challenges & Limitations" />

        <div id="s4-takeaways" className="h-full">
          <TakeawaySlide
            title="Section 04 — Key Takeaways"
            takeaways={[
              'The oracle problem: smart contracts cannot access external data trustlessly — bridges introduce new attack surfaces',
              'Immutability is a double-edged sword — bugs are permanent unless upgrade patterns are used',
              '"Code is law" means users have no recourse when code behaves correctly but harmfully',
              'Gas costs make complex on-chain logic economically impractical for many use cases',
              'Smart contracts are not always the answer — a database is faster, cheaper, and easier in many contexts',
              'Security audits are not optional — $6B+ lost since 2016; Shayan Eskandari has audited dozens of real contracts',
            ]}
          />
        </div>

        </div>
      </div>
    </div>
  );
}
