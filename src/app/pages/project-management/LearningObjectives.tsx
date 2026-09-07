import { TitleSlide } from '../../components/templates/TitleSlide';
import { SiteFooter } from '../../components/shared/SiteFooter';
import { GraduationCap, CheckCircle, Map, ShieldAlert, MessageSquare, Trophy, Landmark } from 'lucide-react';

const objectives = [
  {
    icon: <CheckCircle className="size-6 text-[#f97316]" />,
    title: 'Apply Project Management Methods to Blockchain Projects',
    description:
      'Apply established project management methods to blockchain initiatives — accounting for what genuinely makes blockchain different: immutability and irreversible deployment, regulatory uncertainty, and a stakeholder landscape wider than most IT projects.',
    color: '#f97316',
  },
  {
    icon: <Map className="size-6 text-[#eab308]" />,
    title: 'Create Effective Project Plans and Use Relevant Tools, Including AI',
    description:
      'Create effective project plans — from SMART objectives and the on-chain/off-chain scope boundary through WBS, backlogs, estimation, and schedules — and use the right planning and tracking tools, including, deliberately, AI-enabled tools.',
    color: '#eab308',
  },
  {
    icon: <ShieldAlert className="size-6 text-[#ef4444]" />,
    title: 'Define and Manage Blockchain-Specific Risks',
    description:
      'Define and manage the risks specific to blockchain work — technological, security, regulatory & compliance, and workforce — with structured identification, assessment, response strategies, and a living risk register.',
    color: '#ef4444',
  },
  {
    icon: <MessageSquare className="size-6 text-[#22d3ee]" />,
    title: 'Communicate and Collaborate Within Teams',
    description:
      'Communicate and collaborate effectively within a blockchain team — technical and non-technical members alike — with the right protocols, channels, collaboration tools, and a rehearsed incident communication plan.',
    color: '#22d3ee',
  },
  {
    icon: <Trophy className="size-6 text-[#8b5cf6]" />,
    title: 'Align Team Leadership with Stakeholder Management',
    description:
      'Align your leadership approach with the realities of stakeholder management in a decentralized environment — building trust in distributed teams, adapting leadership style to context, and resolving conflict constructively.',
    color: '#8b5cf6',
  },
];

export function PM_LearningObjectives() {
  return (
    <div className="size-full overflow-y-auto">
      <div className="min-h-screen">
        {/* Title */}
        <div className="h-screen">
          <TitleSlide
            sectionNumber="BEFORE WE BEGIN"
            title="Learning Objectives"
            subtitle="What you will learn in this course — and the case study we'll manage from charter to handoff"
            icon={<GraduationCap className="size-20 text-[#f97316]" />}
            gradient="from-[#f97316] to-[#eab308]"
          />
        </div>

        {/* Objectives Grid */}
        <div className="h-screen flex items-center justify-center p-8 lg:p-12">
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3 text-center">By the End of This Course</h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              How do you actually manage a blockchain project — from the first business case conversation, through scoping, planning,
              delivery, and risk, all the way to a live, audited protocol? And beyond launch: quality gates, change management, and
              closing a project properly when the product it created keeps evolving.
            </p>

            <div className="space-y-3 lg:space-y-4">
              {objectives.map((obj, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 p-4 lg:p-5 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
                  style={{ borderLeftWidth: 4, borderLeftColor: obj.color }}
                >
                  <div
                    className="size-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${obj.color}20` }}
                  >
                    {obj.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base lg:text-lg mb-1">{obj.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{obj.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs lg:text-sm text-muted-foreground mt-6 text-center max-w-3xl mx-auto">
              <span className="font-semibold text-foreground">Grounded in the PMI Project Management Body of Knowledge (PMBOK Guide, 8th Edition, 2026)</span>,
              applied throughout to real industry case studies. The six sections build on each other — one continuous set of decisions a
              project manager actually makes, in the order they make them, with practical exercises and mini case studies for in-class discussion.
            </p>
          </div>
        </div>

        {/* MicroVault case study intro */}
        <div className="h-screen flex items-center justify-center p-8 lg:p-12">
          <div className="max-w-4xl w-full">
            <div className="flex justify-center mb-5">
              <div className="size-16 lg:size-20 rounded-2xl bg-gradient-to-br from-[#f97316] to-[#eab308] flex items-center justify-center shadow-lg">
                <Landmark className="size-8 lg:size-10 text-white" />
              </div>
            </div>
            <div className="text-center mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#f97316]">Our running case study</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-1">Meet MicroVault</h2>
              <p className="text-base text-muted-foreground mt-2 max-w-2xl mx-auto">
                Everything in this course is anchored to a single running case study, so the concepts stay connected to one real
                initiative from beginning to end. Look for the <span className="font-semibold text-[#f97316]">MicroVault box</span> on
                each slide.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
              <div className="p-5 bg-card border border-border rounded-xl">
                <div className="font-bold text-foreground mb-3">The startup</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-[#f97316]">•</span> A three-person startup building an over-collateralized lending protocol on an Ethereum Layer-2</li>
                  <li className="flex gap-2"><span className="text-[#f97316]">•</span> Users deposit USDC to earn yield</li>
                  <li className="flex gap-2"><span className="text-[#f97316]">•</span> Borrowers draw USDC against crypto collateral — like a bank loan against a house deed, on-chain and over-collateralized</li>
                </ul>
              </div>
              <div className="p-5 bg-card border border-border rounded-xl">
                <div className="font-bold text-foreground mb-3">The constraints</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-[#eab308]">•</span> 6 months of funding</li>
                  <li className="flex gap-2"><span className="text-[#eab308]">•</span> One mandatory external security audit before launch</li>
                  <li className="flex gap-2"><span className="text-[#eab308]">•</span><span>A governance token and light DAO planned — deliberately — for <span className="font-semibold text-foreground">after</span> launch, not part of this project's scope</span></li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-r from-[#f97316]/15 to-[#eab308]/15 border-2 border-[#f97316]/40">
              <div className="text-[10px] font-black uppercase tracking-wider text-[#f97316] mb-1">The objective — stated the SMART way</div>
              <p className="text-sm lg:text-base text-foreground font-semibold leading-relaxed">
                Launch an audited USDC over-collateralized lending protocol on an L2 within 6 months — supporting deposits, withdrawals,
                and borrowing — passing one external security audit before mainnet.
              </p>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-5">
              We'll return to MicroVault in every section — scoping it, planning it, assessing its risks, communicating around it,
              leading its team, and closing it out. By Section 6, you'll have practiced managing one blockchain initiative from charter
              to handoff. Let's get started.
            </p>
          </div>
        </div>
      </div>
      <SiteFooter className="snap-start" />
    </div>
  );
}
