import { TitleSlide } from '../components/templates/TitleSlide';
import { TimelineSlide } from '../components/templates/TimelineSlide';
import { ConceptSlide } from '../components/templates/ConceptSlide';
import { TakeawaySlide } from '../components/templates/TakeawaySlide';
import { QuizSlide } from '../components/templates/QuizSlide';
import { CalloutBox } from '../components/shared/CalloutBox';
import { ScrollText } from 'lucide-react';
import { SectionNav } from '../components/navigation/SectionNav';

const prologueChapters = [
  { id: 'p-cypherpunks', label: 'The Cypherpunks' },
  { id: 'p-cypherpunk-values', label: 'By the People' },
  { id: 'p-timeline', label: 'Timeline' },
  { id: 'p-why', label: 'Why It Matters' },
  { id: 'p-takeaways', label: 'Takeaways' },
  { id: 'p-quiz', label: 'Quizzes' },
];

export function Prologue() {
  return (
    <div className="h-full w-full flex overflow-hidden">
      <div className="w-44 shrink-0 h-full hidden lg:block border-r border-border">
        <SectionNav chapters={prologueChapters} />
      </div>
      <div id="section-scroll" className="flex-1 overflow-y-auto snap-y snap-mandatory">
        <div className="slide-flow">

        {/* ═══════ TITLE ═══════ */}
        <div className="h-full">
          <TitleSlide
            sectionNumber="PROLOGUE"
            title="The History of Blockchain"
            subtitle="How a movement for privacy and freedom gave birth to decentralized money"
            icon={<ScrollText className="size-20 text-[#8b5cf6]" />}
            gradient="from-[#8b5cf6] to-[#ED1C24]"
          />
        </div>

        {/* ═══════ 1. THE CYPHERPUNKS ═══════ */}
        <div id="p-cypherpunks" className="h-full">
          <ConceptSlide
            title="The Cypherpunks"
            description="In the 1980s and 1990s, a loose group of cryptographers, hackers, and activists decided that privacy was not a luxury — it was a precondition for freedom."
            visual={
              <div className="space-y-4 w-full">
                <div className="p-6 bg-gradient-to-br from-[#8b5cf6]/10 to-transparent rounded-xl border-2 border-[#8b5cf6]/40">
                  <p className="text-lg italic text-foreground leading-relaxed mb-3">
                    "Privacy is a precondition for freedom, not a luxury."
                  </p>
                  <p className="text-sm text-muted-foreground">— Cypherpunk philosophy</p>
                </div>
                <CalloutBox type="important" title="Core Cypherpunk Principle">
                  "Privacy is necessary for an open society in the electronic age. We cannot expect governments, corporations, or other large, faceless organizations to grant us privacy out of their beneficence."
                  — Eric Hughes, A Cypherpunk's Manifesto (1993)
                </CalloutBox>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-[#ED1C24]/20 to-transparent rounded-xl border border-[#ED1C24]/30">
                    <h4 className="font-bold text-[#ED1C24] mb-2">🔐 Privacy by Default</h4>
                    <p className="text-sm text-muted-foreground">Systems should protect privacy without requiring trust in any authority</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#39B54A]/20 to-transparent rounded-xl border border-[#39B54A]/30">
                    <h4 className="font-bold text-[#39B54A] mb-2">💻 Code is Law</h4>
                    <p className="text-sm text-muted-foreground">Cryptographic mathematics, not legislation, should enforce rights</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#6366f1]/20 to-transparent rounded-xl border border-[#6366f1]/30">
                    <h4 className="font-bold text-[#6366f1] mb-2">🌐 Open Source</h4>
                    <p className="text-sm text-muted-foreground">Tools must be public, auditable, and available to everyone — no gatekeepers</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-xl border border-[#f59e0b]/30">
                    <h4 className="font-bold text-[#f59e0b] mb-2">🏗️ Build, Don't Beg</h4>
                    <p className="text-sm text-muted-foreground">Write code to change reality, don't wait for permission from institutions</p>
                  </div>
                </div>
              </div>
            }
            keyPoints={[
              "The movement emerged in response to growing government surveillance",
              "Members communicated via encrypted mailing lists",
              "They published tools like PGP, Tor, and anonymous remailers",
              "Their work became the technical DNA of Bitcoin and all blockchains"
            ]}
          />
        </div>

        {/* ═══════ 2. CYPHERPUNK VALUES ═══════ */}
        <div id="p-cypherpunk-values" className="h-full">
          <ConceptSlide
            title="Technology by the People, for the People"
            description="The Cypherpunks weren't building products. They were building liberation tools — and they gave them away for free."
            visual={
              <div className="space-y-4 w-full">
                <div className="p-5 bg-gradient-to-br from-[#8b5cf6]/15 to-[#ED1C24]/10 rounded-xl border-2 border-[#8b5cf6]/50">
                  <p className="text-base font-bold text-foreground mb-1">The Manifesto in Three Words</p>
                  <div className="flex gap-3 mt-3">
                    <div className="flex-1 text-center p-3 bg-[#8b5cf6]/20 rounded-lg border border-[#8b5cf6]/40">
                      <div className="text-2xl font-black text-[#8b5cf6]">PRIVACY</div>
                      <div className="text-xs text-muted-foreground mt-1">is a right, not a feature</div>
                    </div>
                    <div className="flex-1 text-center p-3 bg-[#ED1C24]/20 rounded-lg border border-[#ED1C24]/40">
                      <div className="text-2xl font-black text-[#ED1C24]">AUTONOMY</div>
                      <div className="text-xs text-muted-foreground mt-1">over your own data and money</div>
                    </div>
                    <div className="flex-1 text-center p-3 bg-[#39B54A]/20 rounded-lg border border-[#39B54A]/40">
                      <div className="text-2xl font-black text-[#39B54A]">CODE</div>
                      <div className="text-xs text-muted-foreground mt-1">is the law that can't be lobbied</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border">
                  <p className="text-sm italic text-muted-foreground leading-relaxed">
                    "We are writing code. We know that software can't be destroyed and that a widely dispersed system can't be shut down."
                  </p>
                  <p className="text-xs text-[#8b5cf6] font-bold mt-2">— Eric Hughes, A Cypherpunk's Manifesto (1993)</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-muted/20 rounded-lg border border-border text-center">
                    <div className="text-lg font-black text-foreground">👤 → 🌍</div>
                    <div className="text-xs text-muted-foreground mt-1">Individual tools with global reach</div>
                  </div>
                  <div className="p-3 bg-muted/20 rounded-lg border border-border text-center">
                    <div className="text-lg font-black text-foreground">🔓 Free</div>
                    <div className="text-xs text-muted-foreground mt-1">Open-source, no gatekeepers, no cost</div>
                  </div>
                </div>
              </div>
            }
            keyPoints={[
              "Anyone, anywhere could use or audit the tools — no permission needed",
              "Designed to be censorship-resistant: no single point of shutdown",
              "The enemy wasn't technology — it was centralised power over information",
              "Bitcoin inherited this DNA: no CEO, no headquarters, no off switch",
            ]}
          />
        </div>

        {/* ═══════ 3. TIMELINE ═══════ */}
        <div id="p-timeline" className="h-full">
          <TimelineSlide
            title="From Cypherpunks to Bitcoin"
            events={[
              {
                year: "1982",
                title: "David Chaum — DigiCash",
                description: "The first anonymous digital cash system using blind signatures. Chaum proved that private electronic payments were mathematically possible."
              },
              {
                year: "1991",
                title: "Haber & Stornetta — Cryptographic Timestamps",
                description: "Proposed a cryptographically secured chain of blocks to timestamp digital documents — the direct ancestor of blockchain structure."
              },
              {
                year: "1993",
                title: "Eric Hughes — A Cypherpunk's Manifesto",
                description: "Published the founding document of the cypherpunk movement, declaring privacy a fundamental right to be defended with code."
              },
              {
                year: "1997",
                title: "Adam Back — Hashcash",
                description: "A proof-of-work system originally designed to combat email spam. This concept became the direct inspiration for Bitcoin's mining mechanism."
              },
              {
                year: "1998",
                title: "Wei Dai (B-Money) & Nick Szabo (Bit Gold)",
                description: "Two independent proposals for decentralized digital currencies using cryptographic proofs — both direct precursors to Bitcoin's design."
              },
              {
                year: "2008",
                title: "Satoshi Nakamoto — The Bitcoin Whitepaper",
                description: "An anonymous individual or group published 'Bitcoin: A Peer-to-Peer Electronic Cash System', combining decades of cypherpunk research into one unified protocol."
              },
              {
                year: "2009",
                title: "The Genesis Block",
                description: "Block #0 is mined on January 3, 2009. Embedded message: 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'."
              }
            ]}
          />
        </div>

        {/* ═══════ 4. WHY THIS HISTORY MATTERS ═══════ */}
        <div id="p-why" className="h-full">
          <ConceptSlide
            title="Why This History Matters"
            description="Bitcoin did not emerge from nothing. It was the culmination of 30 years of cryptographic research, failed experiments, and ideological conviction."
            visual={
              <div className="space-y-4 w-full">
                <div className="p-5 bg-card rounded-xl border-2 border-[#ED1C24]">
                  <h4 className="font-bold text-[#ED1C24] mb-3">🧩 What Satoshi Combined</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="font-bold text-foreground">Proof of Work</div>
                      <div className="text-muted-foreground">From Hashcash (Adam Back)</div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="font-bold text-foreground">Chained Blocks</div>
                      <div className="text-muted-foreground">From Haber & Stornetta</div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="font-bold text-foreground">Digital Scarcity</div>
                      <div className="text-muted-foreground">From Bit Gold (Nick Szabo)</div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="font-bold text-foreground">P2P Distribution</div>
                      <div className="text-muted-foreground">From B-Money (Wei Dai)</div>
                    </div>
                  </div>
                </div>
                <CalloutBox type="tip" title="Satoshi's Genius">
                  Satoshi didn't invent any single component. The genius was in combining existing cryptographic primitives with economic incentive design into one coherent system that actually worked.
                </CalloutBox>
              </div>
            }
            keyPoints={[
              "Every core concept (hashing, digital signatures, PoW) predates Bitcoin",
              "Previous attempts (DigiCash, B-Money, Bit Gold) all failed or remained theoretical",
              "Bitcoin succeeded because it aligned cryptography with economic incentives",
              "Understanding the history helps you evaluate new blockchain projects critically"
            ]}
          />
        </div>

        {/* ═══════ 5. TAKEAWAYS ═══════ */}
        <div id="p-takeaways" className="h-full">
          <TakeawaySlide
            title="Prologue Takeaways"
            takeaways={[
              "The cypherpunk movement championed privacy as a fundamental right, defended through code rather than law",
              "From the 1980s to 2008, cryptographers built the individual pieces that Bitcoin would later unify",
              "Satoshi Nakamoto combined proof-of-work, chained blocks, digital scarcity, and P2P networking into one system",
              "The Genesis Block message — 'Chancellor on brink of second bailout for banks' — reveals Bitcoin's ideological roots",
              "Understanding this history is essential to critically evaluating blockchain technology today"
            ]}
          />
        </div>

        {/* ═══════ 6. QUIZZES ═══════ */}
        <div id="p-quiz" className="h-full">
          <QuizSlide
            question="What was the core belief of the Cypherpunk movement?"
            options={[
              { text: "Governments should regulate all digital communications", correct: false },
              { text: "Privacy is a precondition for freedom and should be defended with code", correct: true },
              { text: "Corporations should control encryption technology", correct: false },
              { text: "Digital currencies should be managed by central banks", correct: false },
            ]}
            explanation="The Cypherpunks believed that privacy is not a luxury but a fundamental right, and that cryptographic code — not laws or institutions — should enforce it."
          />
        </div>

        <div className="h-full">
          <QuizSlide
            question="Which concept did Adam Back's Hashcash (1997) directly inspire in Bitcoin?"
            options={[
              { text: "Smart contracts", correct: false },
              { text: "Blind signatures for anonymous payments", correct: false },
              { text: "Proof-of-work mining", correct: true },
              { text: "Peer-to-peer networking", correct: false },
            ]}
            explanation="Hashcash was a proof-of-work system originally designed to combat email spam. Satoshi Nakamoto adapted this concept as the foundation for Bitcoin's mining and consensus mechanism."
          />
        </div>

        <div className="h-full">
          <QuizSlide
            question="What message did Satoshi Nakamoto embed in Bitcoin's Genesis Block?"
            options={[
              { text: "\"Hello World\"", correct: false },
              { text: "\"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks\"", correct: true },
              { text: "\"A Cypherpunk's Manifesto\"", correct: false },
              { text: "\"In code we trust\"", correct: false },
            ]}
            explanation="The embedded headline from The Times newspaper reveals Bitcoin's ideological roots — it was created as a direct response to the failures of the traditional banking system during the 2008 financial crisis."
          />
        </div>

        </div>
      </div>
    </div>
  );
}
