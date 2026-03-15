import { TitleSlide } from '../components/templates/TitleSlide';
import { ConceptSlide } from '../components/templates/ConceptSlide';
import { ComparisonSlide } from '../components/templates/ComparisonSlide';
import { DiagramSlide } from '../components/templates/DiagramSlide';
import { ProcessSlide } from '../components/templates/ProcessSlide';
import { QuizSlide } from '../components/templates/QuizSlide';
import { TakeawaySlide } from '../components/templates/TakeawaySlide';
import { CalloutBox } from '../components/shared/CalloutBox';
import { DefinitionBox } from '../components/shared/DefinitionBox';
import { NetworkNode } from '../components/blockchain/NetworkNode';
import { BlockchainChain } from '../components/blockchain/BlockchainChain';
import { Bitcoin, Zap } from 'lucide-react';
import { SectionNav } from '../components/navigation/SectionNav';

const section2Chapters = [
  { id: 's2-breakthrough', label: 'Bitcoin Breakthrough' },
  { id: 's2-what', label: 'What is Bitcoin?' },
  { id: 's2-immutability', label: 'Immutability' },
  { id: 's2-supply', label: 'Supply Model' },
  { id: 's2-stats', label: 'Network Statistics' },
  { id: 's2-nodes', label: 'Node Distribution' },
  { id: 's2-security', label: 'Security Model' },
  { id: 's2-lightning', label: 'Lightning Network' },
  { id: 's2-quiz', label: 'Quizzes' },
  { id: 's2-takeaways', label: 'Takeaways' },
];

export function Section2() {
  return (
    <div className="h-full w-full flex overflow-hidden">
      <div className="w-44 shrink-0 h-full hidden lg:block border-r border-border">
        <SectionNav chapters={section2Chapters} />
      </div>
      <div id="section-scroll" className="flex-1 overflow-y-auto snap-y snap-mandatory">
        <div className="slide-flow">

        {/* ═══════ TITLE ═══════ */}
        <div className="h-full">
          <TitleSlide
            sectionNumber="SECTION 02"
            title="Bitcoin and Beyond"
            subtitle="A deep dive into the world's first cryptocurrency and its network"
            icon={<Bitcoin className="size-20 text-[#f59e0b]" />}
            gradient="from-[#f59e0b] to-[#ED1C24]"
          />
        </div>

        {/* ═══════ 1. WHY BITCOIN WAS A BREAKTHROUGH ═══════ */}
        <div id="s2-breakthrough" className="h-full">
          <ConceptSlide
            title="Why Bitcoin Was a Breakthrough"
            description="The mysterious Satoshi Nakamoto solved the double-spending problem without a trusted authority — combining decades of cryptographic research into one working protocol."
            visual={
              <div className="space-y-4 w-full">
                <CalloutBox type="important" title="The Double-Spending Problem">
                  How do you prevent someone from spending the same digital currency twice without a central authority to verify transactions?
                </CalloutBox>
                <CalloutBox type="tip" title="Satoshi's Solution">
                  Combine cryptographic proof, distributed consensus, and economic incentives to create a trustless system where the network itself prevents fraud.
                </CalloutBox>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <div className="font-mono text-sm text-muted-foreground mb-2">Genesis Block Message:</div>
                  <div className="text-sm text-foreground italic">
                    "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"
                  </div>
                </div>
              </div>
            }
            keyPoints={[
              "Created a decentralized consensus mechanism (Proof of Work)",
              "Designed a transparent public ledger system",
              "Implemented cryptographic security for transactions",
              "Established fixed supply and predictable issuance schedule"
            ]}
          />
        </div>

        {/* ═══════ 2. WHAT IS BITCOIN ═══════ */}
        <div id="s2-what" className="h-full">
          <ConceptSlide
            title="What is Bitcoin?"
            description="Bitcoin is the first decentralized digital currency — a peer-to-peer electronic cash system that operates without banks, governments, or intermediaries."
            visual={
              <div className="space-y-4 w-full">
                <DefinitionBox
                  term="Bitcoin (BTC)"
                  definition="A decentralized digital currency created in 2009 by Satoshi Nakamoto. It runs on a public blockchain where transactions are verified by a global network of nodes and miners."
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-xl border border-[#f59e0b]/30">
                    <h4 className="font-bold text-[#f59e0b] mb-2">🌐 Permissionless</h4>
                    <p className="text-sm text-muted-foreground">Anyone can send, receive, or validate transactions without asking permission</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#ED1C24]/20 to-transparent rounded-xl border border-[#ED1C24]/30">
                    <h4 className="font-bold text-[#ED1C24] mb-2">🔓 Open Source</h4>
                    <p className="text-sm text-muted-foreground">The code is public — anyone can audit, fork, or contribute to Bitcoin Core</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#39B54A]/20 to-transparent rounded-xl border border-[#39B54A]/30">
                    <h4 className="font-bold text-[#39B54A] mb-2">💎 Scarce</h4>
                    <p className="text-sm text-muted-foreground">Hard-capped at 21 million coins — enforced by code, not promises</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#6366f1]/20 to-transparent rounded-xl border border-[#6366f1]/30">
                    <h4 className="font-bold text-[#6366f1] mb-2">⚡ Censorship Resistant</h4>
                    <p className="text-sm text-muted-foreground">No entity can freeze, reverse, or block a valid Bitcoin transaction</p>
                  </div>
                </div>
              </div>
            }
            keyPoints={[
              "Bitcoin is both a payment network and a unit of currency (BTC)",
              "It solved the double-spending problem without a central authority",
              "Transactions are irreversible once confirmed on-chain",
              "Bitcoin pioneered the entire cryptocurrency industry"
            ]}
          />
        </div>

        {/* ═══════ 3. IMMUTABILITY & BLOCK LINKING ═══════ */}
        <div id="s2-immutability" className="h-full">
          <DiagramSlide
            title="Immutability Through Block Linking"
            diagram={
              <BlockchainChain
                blocks={[
                  {
                    blockNumber: 840000,
                    hash: "0x00000...a3f7",
                    previousHash: "0x00000...9c12",
                    timestamp: "Apr 20, 2024",
                    data: "Halving Block",
                    highlighted: false
                  },
                  {
                    blockNumber: 840001,
                    hash: "0x00000...b8e2",
                    previousHash: "0x00000...a3f7",
                    timestamp: "Apr 20, 2024",
                    data: "3.125 BTC reward",
                    highlighted: false
                  },
                  {
                    blockNumber: 840002,
                    hash: "0x00000...c4d9",
                    previousHash: "0x00000...b8e2",
                    timestamp: "Apr 20, 2024",
                    data: "142 transactions",
                    highlighted: true
                  }
                ]}
              />
            }
            caption="Each block's hash depends on the previous block's hash — altering any block would cascade through every subsequent block"
            annotations={[
              {
                label: "Cryptographic Linking",
                description: "Each block header includes the hash of the previous block, creating an unbreakable chain of commitments"
              },
              {
                label: "Why It Matters",
                description: "To alter a past transaction, an attacker would need to recalculate every block after it faster than the entire network — practically impossible"
              },
              {
                label: "Finality Grows Over Time",
                description: "The deeper a block is buried, the more computational work protects it. 6 confirmations (~60 min) is considered practically irreversible"
              }
            ]}
          />
        </div>

        {/* ═══════ 4. SUPPLY MODEL ═══════ */}
        <div id="s2-supply" className="h-full">
          <ConceptSlide
            title="Bitcoin Supply Model"
            description="Bitcoin has a fixed, predictable monetary policy — arguably the most transparent in history."
            visual={
              <div className="space-y-4 w-full">
                <div className="p-5 bg-card rounded-xl border-2 border-[#f59e0b]">
                  <h4 className="font-bold text-[#f59e0b] mb-3">📊 Supply Numbers</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="text-muted-foreground">Maximum Supply</div>
                      <div className="font-bold text-foreground text-lg">21,000,000 BTC</div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="text-muted-foreground">Circulating (~2025)</div>
                      <div className="font-bold text-foreground text-lg">~19,800,000 BTC</div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="text-muted-foreground">Current Block Reward</div>
                      <div className="font-bold text-foreground text-lg">3.125 BTC</div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="text-muted-foreground">Next Halving</div>
                      <div className="font-bold text-foreground text-lg">~2028</div>
                    </div>
                  </div>
                </div>
                <CalloutBox type="tip" title="The Halving">
                  Every 210,000 blocks (~4 years), the block reward is cut in half. Started at 50 BTC in 2009, now 3.125 BTC after the April 2024 halving. The last Bitcoin will be mined around the year 2140.
                </CalloutBox>
              </div>
            }
            keyPoints={[
              "Fixed supply makes Bitcoin deflationary by design",
              "~94% of all Bitcoin that will ever exist has already been mined",
              "Halving events historically precede major price cycles",
              "Estimated 3-4 million BTC are permanently lost (forgotten keys)"
            ]}
          />
        </div>

        {/* ═══════ 5. NETWORK STATISTICS ═══════ */}
        <div id="s2-stats" className="h-full">
          <ConceptSlide
            title="Bitcoin Network Statistics"
            description="The Bitcoin network is the most powerful and longest-running decentralized computing network in history."
            visual={
              <div className="space-y-3 w-full">
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 bg-card rounded-xl border border-border text-center">
                    <div className="text-2xl font-bold text-[#f59e0b]">~800 EH/s</div>
                    <div className="text-xs text-muted-foreground mt-1">Total Hash Rate (2025)</div>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border text-center">
                    <div className="text-2xl font-bold text-[#39B54A]">~19,000+</div>
                    <div className="text-xs text-muted-foreground mt-1">Reachable Full Nodes</div>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border text-center">
                    <div className="text-2xl font-bold text-[#ED1C24]">~580 GB</div>
                    <div className="text-xs text-muted-foreground mt-1">Full Blockchain Size</div>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border text-center">
                    <div className="text-2xl font-bold text-[#6366f1]">~10 min</div>
                    <div className="text-xs text-muted-foreground mt-1">Average Block Time</div>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border text-center">
                    <div className="text-2xl font-bold text-[#8b5cf6]">~400K</div>
                    <div className="text-xs text-muted-foreground mt-1">Daily Transactions</div>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border text-center">
                    <div className="text-2xl font-bold text-[#f59e0b]">99.99%</div>
                    <div className="text-xs text-muted-foreground mt-1">Uptime Since 2009</div>
                  </div>
                </div>
                <CalloutBox type="info" title="Difficulty Adjustment">
                  Every 2,016 blocks (~2 weeks), the network automatically adjusts mining difficulty to maintain the ~10-minute block target — regardless of how much hash power joins or leaves.
                </CalloutBox>
              </div>
            }
            keyPoints={[
              "Hash rate has increased exponentially, now measured in exahashes",
              "Bitcoin has had only 2 brief notable downtime events in 15+ years",
              "The difficulty adjustment is one of Bitcoin's most elegant features",
              "Anyone with a computer can run a full node and verify the entire chain"
            ]}
          />
        </div>

        {/* ═══════ 6. NODE DISTRIBUTION ═══════ */}
        <div id="s2-nodes" className="h-full">
          <DiagramSlide
            title="Node Distribution & Roles"
            diagram={
              <div className="flex flex-col items-center gap-6 py-2">
                <div className="flex gap-8 items-end">
                  <div className="flex flex-col items-center gap-2">
                    <NetworkNode label="Full Node" status="active" />
                    <span className="text-xs text-muted-foreground text-center max-w-24">Stores entire blockchain, validates all rules</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <NetworkNode label="Miner" status="active" />
                    <span className="text-xs text-muted-foreground text-center max-w-24">Creates new blocks, earns rewards</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <NetworkNode label="SPV Node" status="syncing" />
                    <span className="text-xs text-muted-foreground text-center max-w-24">Light client, verifies via Merkle proofs</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <NetworkNode label="Pruned Node" status="active" />
                    <span className="text-xs text-muted-foreground text-center max-w-24">Full validation, discards old blocks</span>
                  </div>
                </div>
                <div className="text-center px-6 py-3 bg-card rounded-lg border border-border max-w-lg">
                  <p className="text-sm text-muted-foreground">
                    Nodes are distributed across <span className="text-foreground font-bold">100+ countries</span>. 
                    Top concentrations: United States, Germany, France, Canada, Netherlands. 
                    Geographic diversity increases censorship resistance.
                  </p>
                </div>
              </div>
            }
            caption="A healthy network needs geographic and jurisdictional diversity among nodes"
            annotations={[
              {
                label: "Full Nodes",
                description: "Enforce all consensus rules independently. ~19,000 publicly reachable; estimated 50,000+ total including private nodes"
              },
              {
                label: "Miners",
                description: "Pool-based mining dominates. Major pools: Foundry USA, AntPool, F2Pool. Mining hardware uses specialized ASICs"
              },
              {
                label: "Why It Matters",
                description: "More nodes = harder to attack or censor. Each node independently verifies every block and transaction"
              }
            ]}
          />
        </div>

        {/* ═══════ 7. SECURITY MODEL ═══════ */}
        <div id="s2-security" className="h-full">
          <ConceptSlide
            title="Bitcoin Security Model"
            description="Bitcoin's security relies on economic incentives, cryptographic proofs, and decentralized verification — not trust."
            visual={
              <div className="space-y-4 w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-[#ED1C24]/20 to-transparent rounded-xl border border-[#ED1C24]/30">
                    <h4 className="font-bold text-[#ED1C24] mb-2">⛏️ 51% Attack</h4>
                    <p className="text-sm text-muted-foreground">An attacker would need more hash power than the rest of the network combined — currently requiring billions of dollars in hardware and electricity</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#39B54A]/20 to-transparent rounded-xl border border-[#39B54A]/30">
                    <h4 className="font-bold text-[#39B54A] mb-2">🔐 Cryptographic Security</h4>
                    <p className="text-sm text-muted-foreground">SHA-256 hashing and ECDSA signatures have no known practical attacks. Breaking them requires breakthroughs that don't yet exist</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#6366f1]/20 to-transparent rounded-xl border border-[#6366f1]/30">
                    <h4 className="font-bold text-[#6366f1] mb-2">💰 Economic Incentives</h4>
                    <p className="text-sm text-muted-foreground">Miners profit more from honest behavior than attacks. Attacking would destroy the value of their own holdings and hardware</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-xl border border-[#f59e0b]/30">
                    <h4 className="font-bold text-[#f59e0b] mb-2">🌍 Decentralization</h4>
                    <p className="text-sm text-muted-foreground">No single government, company, or individual can shut down Bitcoin — nodes exist in 100+ countries</p>
                  </div>
                </div>
                <CalloutBox type="warning" title="What About Quantum Computing?">
                  Current quantum computers cannot break Bitcoin's cryptography. If they advance far enough, Bitcoin can upgrade to quantum-resistant algorithms — research is already underway.
                </CalloutBox>
              </div>
            }
            keyPoints={[
              "Attacking Bitcoin costs more than cooperating with it",
              "The network has never been successfully hacked in 15+ years",
              "6 confirmations (~60 min) is considered practically irreversible",
              "Security increases as hash rate and node count grow"
            ]}
          />
        </div>

        {/* ═══════ 8. LIGHTNING NETWORK ═══════ */}
        <div id="s2-lightning" className="h-full">
          <ProcessSlide
            title="The Lightning Network"
            steps={[
              {
                number: 1,
                title: "Open Channel",
                description: "Two parties lock BTC in a multi-signature address on the main chain, creating a payment channel"
              },
              {
                number: 2,
                title: "Off-Chain Transactions",
                description: "They exchange signed transactions instantly and for nearly zero fees — without touching the blockchain"
              },
              {
                number: 3,
                title: "Route Payments",
                description: "Channels connect into a network — payments route through intermediaries even without a direct channel"
              },
              {
                number: 4,
                title: "Close Channel",
                description: "When done, the final balance is broadcast to the main chain in a single transaction"
              }
            ]}
          />
        </div>

        <div className="h-full">
          <ConceptSlide
            title="Lightning Network in Practice"
            description="Lightning is Bitcoin's Layer 2 scaling solution — enabling instant, cheap micropayments while inheriting the security of the base layer."
            visual={
              <div className="space-y-4 w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="size-5 text-[#f59e0b]" />
                      <h4 className="font-bold text-foreground">Speed</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Transactions settle in milliseconds instead of ~10 minutes</p>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="size-5 text-[#39B54A]" />
                      <h4 className="font-bold text-foreground">Cost</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Fees typically less than 1 satoshi (~$0.0003) per payment</p>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="size-5 text-[#6366f1]" />
                      <h4 className="font-bold text-foreground">Capacity</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">~5,000+ BTC locked in channels, ~16,000+ nodes routing payments</p>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="size-5 text-[#ED1C24]" />
                      <h4 className="font-bold text-foreground">Adoption</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">El Salvador, Strike, Cash App, and thousands of merchants accept Lightning payments</p>
                  </div>
                </div>
                <CalloutBox type="tip" title="Real-World Impact">
                  El Salvador adopted Bitcoin as legal tender in 2021 and built the Chivo wallet on Lightning. Citizens can send remittances home for near-zero fees instead of the typical 10-15% charged by traditional services.
                </CalloutBox>
              </div>
            }
            keyPoints={[
              "Lightning solves Bitcoin's scalability bottleneck (~7 TPS on-chain)",
              "Payments are private — only sender and receiver know the details",
              "Enables use cases like streaming payments (pay per second)",
              "Inherits Bitcoin's security: channels are enforced by on-chain smart contracts"
            ]}
          />
        </div>

        {/* ═══════ QUIZ ═══════ */}
        <div id="s2-quiz" className="h-full">
          <QuizSlide
            question="Why can there never be more than 21 million Bitcoin?"
            options={[
              {
                text: "A government regulation limits the supply",
                correct: false
              },
              {
                text: "The rule is enforced by code: every node rejects blocks that violate it",
                correct: true
              },
              {
                text: "Satoshi Nakamoto manually controls the issuance",
                correct: false
              },
              {
                text: "Mining hardware physically cannot produce more",
                correct: false
              }
            ]}
            explanation="The 21 million limit is enforced by Bitcoin's consensus rules. Every full node independently verifies that new blocks follow the supply schedule. Changing this would require convincing the vast majority of the network to adopt new rules — a practical impossibility."
          />
        </div>

        {/* Quiz: security */}
        <div className="h-full">
          <QuizSlide
            question="Why is a 51% attack on Bitcoin considered economically irrational?"
            options={[
              { text: "Because Bitcoin is protected by government regulations", correct: false },
              { text: "Because the cost far exceeds potential profit, and success would destroy the attacker's own holdings", correct: true },
              { text: "Because only 49% of nodes can ever be compromised at once", correct: false },
              { text: "Because Satoshi Nakamoto can reverse any malicious transactions", correct: false }
            ]}
            explanation="A successful 51% attack would require billions in hardware and electricity. Even if it succeeded, it would crash Bitcoin's price — destroying the value of the attacker's own coins and equipment. Honest mining is simply more profitable."
          />
        </div>

        {/* Quiz: Lightning Network */}
        <div className="h-full">
          <QuizSlide
            question="What is the main purpose of the Lightning Network?"
            options={[
              { text: "To increase Bitcoin's maximum supply beyond 21 million", correct: false },
              { text: "To allow instant, near-free payments by processing transactions off-chain", correct: true },
              { text: "To replace the Proof of Work consensus mechanism", correct: false },
              { text: "To make all Bitcoin transactions completely anonymous", correct: false }
            ]}
            explanation="The Lightning Network is a Layer 2 solution that processes transactions in off-chain payment channels. Final balances are settled on the main chain, enabling instant payments with minimal fees while inheriting Bitcoin's base-layer security."
          />
        </div>

        {/* ═══════ TAKEAWAYS ═══════ */}
        <div id="s2-takeaways" className="h-full">
          <TakeawaySlide
            title="Section 2 — Key Takeaways"
            takeaways={[
              "Bitcoin is a decentralized, permissionless digital currency with a fixed supply of 21 million coins",
              "Immutability comes from cryptographic block linking — altering any block cascades through the entire chain",
              "The halving mechanism creates predictable, decreasing issuance — making Bitcoin deflationary",
              "The network's security comes from massive hash power, global node distribution, and economic incentives",
              "A 51% attack is theoretically possible but economically irrational at Bitcoin's scale",
              "The Lightning Network enables instant, near-free payments while inheriting Bitcoin's base-layer security",
              "Bitcoin has maintained 99.99% uptime since its launch in 2009 — the most reliable financial network ever created"
            ]}
          />
        </div>
      </div>
      </div>
    </div>
  );
}