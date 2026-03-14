import { TitleSlide } from '../components/templates/TitleSlide';
import { ConceptSlide } from '../components/templates/ConceptSlide';
import { ComparisonSlide } from '../components/templates/ComparisonSlide';
import { DiscussionSlide } from '../components/templates/DiscussionSlide';
import { TakeawaySlide } from '../components/templates/TakeawaySlide';
import { QuizSlide } from '../components/templates/QuizSlide';
import { CalloutBox } from '../components/shared/CalloutBox';
import { Rocket } from 'lucide-react';
import { SectionNav } from '../components/navigation/SectionNav';

const section3Chapters = [
  { id: 's3-usecases', label: 'Use Cases' },
  { id: 's3-ecosystem', label: 'Web3 Ecosystem' },
  { id: 's3-web3', label: 'Web1 → Web3' },
  { id: 's3-dapp', label: 'App vs dApp' },
  { id: 's3-ethics', label: 'Ethics' },
  { id: 's3-future', label: 'Future Trends' },
  { id: 's3-discussion', label: 'Discussion' },
  { id: 's3-quiz', label: 'Quizzes' },
  { id: 's3-takeaways', label: 'Takeaways' },
];

export function Section3() {
  return (
    <div className="h-full w-full flex overflow-hidden">
      <div className="w-44 shrink-0 h-full hidden lg:block border-r border-border">
        <SectionNav chapters={section3Chapters} />
      </div>
      <div id="section-scroll" className="flex-1 overflow-y-auto snap-y snap-mandatory">
        <div className="h-full slide-flow">

        {/* ═══════ TITLE ═══════ */}
        <div className="h-full">
          <TitleSlide
            sectionNumber="SECTION 03"
            title="What's Next for Blockchain?"
            subtitle="Applications, ecosystem, evolution of the web, and the future of decentralized technology"
            icon={<Rocket className="size-20 text-[#39B54A]" />}
            gradient="from-[#39B54A] to-[#22d3ee]"
          />
        </div>

        {/* ═══════ 1. BLOCKCHAIN USE CASES — HUB & SPOKE MAP ═══════ */}
        <div id="s3-usecases" className="h-full flex items-center justify-center p-8">
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl font-bold text-foreground mb-1 text-center">Blockchain Use Cases</h2>
            <p className="text-sm text-muted-foreground text-center mb-7">
              Blockchain technology extends far beyond cryptocurrency — it can transform any industry that relies on trust, records, or intermediaries.
            </p>

            {/* 3×3 hub-and-spoke grid */}
            <div className="grid grid-cols-3 gap-4 items-center">

              {/* Row 1 */}
              <div className="p-4 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-xl border border-[#f59e0b]/40 text-center">
                <div className="text-2xl mb-1">💰</div>
                <h4 className="font-bold text-[#f59e0b] text-sm">Finance & DeFi</h4>
                <p className="text-xs text-muted-foreground mt-1">Payments, lending, trading without banks</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#ED1C24]/20 to-transparent rounded-xl border border-[#ED1C24]/40 text-center">
                <div className="text-2xl mb-1">🏥</div>
                <h4 className="font-bold text-[#ED1C24] text-sm">Healthcare</h4>
                <p className="text-xs text-muted-foreground mt-1">Patient records, drug traceability</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#6366f1]/20 to-transparent rounded-xl border border-[#6366f1]/40 text-center">
                <div className="text-2xl mb-1">🗳️</div>
                <h4 className="font-bold text-[#6366f1] text-sm">Voting & Governance</h4>
                <p className="text-xs text-muted-foreground mt-1">Tamper-proof elections & DAOs</p>
              </div>

              {/* Row 2 — center node */}
              <div className="p-4 bg-gradient-to-br from-[#22d3ee]/20 to-transparent rounded-xl border border-[#22d3ee]/40 text-center">
                <div className="text-2xl mb-1">🚚</div>
                <h4 className="font-bold text-[#22d3ee] text-sm">Supply Chain</h4>
                <p className="text-xs text-muted-foreground mt-1">Track & trace, authenticity verification</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#39B54A]/30 to-[#ED1C24]/10 rounded-2xl border-2 border-[#39B54A] shadow-[0_0_30px_rgba(57,181,74,0.2)]">
                <div className="text-3xl mb-2">⛓️</div>
                <div className="font-black text-foreground text-base tracking-wide text-center">BLOCKCHAIN</div>
                <div className="text-xs text-[#39B54A] mt-1 font-medium">8+ industries</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#8b5cf6]/20 to-transparent rounded-xl border border-[#8b5cf6]/40 text-center">
                <div className="text-2xl mb-1">🪪</div>
                <h4 className="font-bold text-[#8b5cf6] text-sm">Digital Identity</h4>
                <p className="text-xs text-muted-foreground mt-1">Self-sovereign identity, credentials</p>
              </div>

              {/* Row 3 */}
              <div className="p-4 bg-gradient-to-br from-[#10b981]/20 to-transparent rounded-xl border border-[#10b981]/40 text-center">
                <div className="text-2xl mb-1">🌍</div>
                <h4 className="font-bold text-[#10b981] text-sm">Sustainability</h4>
                <p className="text-xs text-muted-foreground mt-1">Carbon credits, renewable certificates</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#ED1C24]/20 to-transparent rounded-xl border border-[#ED1C24]/40 text-center">
                <div className="text-2xl mb-1">🏠</div>
                <h4 className="font-bold text-[#ED1C24] text-sm">Real Estate</h4>
                <p className="text-xs text-muted-foreground mt-1">Property records, fractional ownership</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-xl border border-[#f59e0b]/40 text-center">
                <div className="text-2xl mb-1">🎨</div>
                <h4 className="font-bold text-[#f59e0b] text-sm">Digital Art & NFTs</h4>
                <p className="text-xs text-muted-foreground mt-1">Provable ownership of digital assets</p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ 2. BLOCKCHAIN & WEB3 ECOSYSTEM MAP ═══════ */}
        <div id="s3-ecosystem" className="h-full flex items-center justify-center p-8">
          <div className="max-w-4xl w-full">
            <h2 className="text-3xl font-bold text-foreground mb-1 text-center">The Blockchain & Web3 Ecosystem</h2>
            <p className="text-sm text-muted-foreground text-center mb-6">
              A layered stack — from raw infrastructure at the bottom to end users at the top.
            </p>

            <div className="space-y-2">

              {/* Layer: Users */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#39B54A]/20 to-transparent border border-[#39B54A]/40">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-base">👤</span>
                  <span className="font-bold text-[#39B54A] text-xs uppercase tracking-widest">Users</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Developers', 'Traders', 'Creators', 'Institutions', 'Individuals'].map(u => (
                    <span key={u} className="px-3 py-1 bg-[#39B54A]/10 border border-[#39B54A]/30 rounded-full text-xs text-foreground">{u}</span>
                  ))}
                </div>
              </div>

              {/* Layer: Interfaces */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#6366f1]/20 to-transparent border border-[#6366f1]/40">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-base">🖥️</span>
                  <span className="font-bold text-[#6366f1] text-xs uppercase tracking-widest">Interfaces</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Wallets (MetaMask, Phantom)', 'dApps', 'Exchanges (Uniswap, Binance)', 'NFT Marketplaces', 'Bridges'].map(u => (
                    <span key={u} className="px-3 py-1 bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-full text-xs text-foreground">{u}</span>
                  ))}
                </div>
              </div>

              {/* Layer: Applications */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#f59e0b]/20 to-transparent border border-[#f59e0b]/40">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-base">⚙️</span>
                  <span className="font-bold text-[#f59e0b] text-xs uppercase tracking-widest">Applications & Protocols</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['DeFi (Aave, Compound)', 'NFTs (ERC-721)', 'DAOs (Snapshot, Aragon)', 'Gaming (Axie Infinity)', 'Stablecoins (USDC, DAI)'].map(u => (
                    <span key={u} className="px-3 py-1 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-full text-xs text-foreground">{u}</span>
                  ))}
                </div>
              </div>

              {/* Layer: Blockchains */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#ED1C24]/20 to-transparent border border-[#ED1C24]/40">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-base">⛓️</span>
                  <span className="font-bold text-[#ED1C24] text-xs uppercase tracking-widest">Blockchain Layer (L1 / L2)</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Bitcoin', 'Ethereum', 'Solana', 'Polygon', 'Arbitrum', 'Optimism', 'Avalanche'].map(u => (
                    <span key={u} className="px-3 py-1 bg-[#ED1C24]/10 border border-[#ED1C24]/30 rounded-full text-xs text-foreground">{u}</span>
                  ))}
                </div>
              </div>

              {/* Layer: Infrastructure */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#9ca3af]/10 to-transparent border border-[#9ca3af]/30">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-base">🖧</span>
                  <span className="font-bold text-muted-foreground text-xs uppercase tracking-widest">Infrastructure</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Nodes', 'Validators / Miners', 'P2P Network', 'Cryptography', 'Consensus Mechanisms'].map(u => (
                    <span key={u} className="px-3 py-1 bg-muted border border-border rounded-full text-xs text-foreground">{u}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ═══════ 3. EVOLUTION OF THE INTERNET — WEB1 / WEB2 / WEB3 ═══════ */}
        <div id="s3-web3" className="h-full flex items-center justify-center p-8">
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl font-bold text-foreground mb-1 text-center">The Evolution of the Internet</h2>
            <p className="text-sm text-muted-foreground text-center mb-7">
              Each era defined by what users could do — and who owned the data.
            </p>

            <div className="grid grid-cols-3 gap-5">

              {/* Web1 */}
              <div className="p-6 bg-card rounded-2xl border-2 border-[#9ca3af]/40 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-[#9ca3af]/20 border border-[#9ca3af]/40 flex items-center justify-center text-lg">🌐</div>
                  <div>
                    <div className="font-black text-foreground text-lg">Web 1.0</div>
                    <div className="text-xs text-muted-foreground">1991 – 2004</div>
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-[#9ca3af]/20 rounded-full text-center text-xs font-bold text-muted-foreground tracking-widest">📖 READ ONLY</div>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-[#9ca3af] shrink-0">•</span>Static HTML pages</li>
                  <li className="flex gap-2"><span className="text-[#9ca3af] shrink-0">•</span>No user interaction or accounts</li>
                  <li className="flex gap-2"><span className="text-[#9ca3af] shrink-0">•</span>Information flows one-way</li>
                  <li className="flex gap-2"><span className="text-[#9ca3af] shrink-0">•</span>Content owned by publishers only</li>
                  <li className="flex gap-2"><span className="text-[#9ca3af] shrink-0">•</span>Yahoo, GeoCities, early forums</li>
                </ul>
                <div className="mt-auto p-3 bg-muted rounded-lg text-xs text-muted-foreground italic">
                  "The internet was a library. You could only look."
                </div>
              </div>

              {/* Web2 */}
              <div className="p-6 bg-card rounded-2xl border-2 border-[#6366f1]/50 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-[#6366f1]/20 border border-[#6366f1]/40 flex items-center justify-center text-lg">📱</div>
                  <div>
                    <div className="font-black text-foreground text-lg">Web 2.0</div>
                    <div className="text-xs text-muted-foreground">2004 – Present</div>
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-[#6366f1]/20 rounded-full text-center text-xs font-bold text-[#6366f1] tracking-widest">✏️ READ + WRITE</div>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-[#6366f1] shrink-0">•</span>Social media & user-generated content</li>
                  <li className="flex gap-2"><span className="text-[#6366f1] shrink-0">•</span>Platforms own and monetize your data</li>
                  <li className="flex gap-2"><span className="text-[#6366f1] shrink-0">•</span>Free services — you are the product</li>
                  <li className="flex gap-2"><span className="text-[#6366f1] shrink-0">•</span>Centralized cloud infrastructure</li>
                  <li className="flex gap-2"><span className="text-[#6366f1] shrink-0">•</span>Google, Facebook, YouTube, Amazon</li>
                </ul>
                <div className="mt-auto p-3 bg-muted rounded-lg text-xs text-muted-foreground italic">
                  "The internet became interactive. But platforms kept the keys."
                </div>
              </div>

              {/* Web3 */}
              <div className="p-6 bg-card rounded-2xl border-2 border-[#39B54A]/60 flex flex-col gap-3 shadow-[0_0_20px_rgba(57,181,74,0.1)]">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-[#39B54A]/20 border border-[#39B54A]/50 flex items-center justify-center text-lg">🔐</div>
                  <div>
                    <div className="font-black text-foreground text-lg">Web 3.0</div>
                    <div className="text-xs text-[#39B54A]">Now → Future</div>
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-[#39B54A]/20 rounded-full text-center text-xs font-bold text-[#39B54A] tracking-widest">🔑 READ + WRITE + OWN</div>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-[#39B54A] shrink-0">•</span>User-owned data & assets via wallets</li>
                  <li className="flex gap-2"><span className="text-[#39B54A] shrink-0">•</span>Decentralized applications (dApps)</li>
                  <li className="flex gap-2"><span className="text-[#39B54A] shrink-0">•</span>Token-based economies & governance</li>
                  <li className="flex gap-2"><span className="text-[#39B54A] shrink-0">•</span>Self-sovereign identity</li>
                  <li className="flex gap-2"><span className="text-[#39B54A] shrink-0">•</span>Ethereum, Solana, IPFS, DAOs</li>
                </ul>
                <div className="mt-auto p-3 bg-[#39B54A]/10 rounded-lg border border-[#39B54A]/20 text-xs text-muted-foreground italic">
                  "The internet becomes owned by its users. No platform can take it away."
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ═══════ 4. TODAY'S APP vs DAPP ═══════ */}
        <div id="s3-dapp" className="h-full">
          <ComparisonSlide
            title="Today's App vs dApp"
            option1Label="Traditional App"
            option2Label="Decentralized App (dApp)"
            items={[
              {
                feature: "Architecture",
                option1: "Centralized servers controlled by a company",
                option2: "Smart contracts on a blockchain + decentralized storage"
              },
              {
                feature: "Data Ownership",
                option1: "Company owns and controls user data",
                option2: "Users own their data and assets"
              },
              {
                feature: "Downtime",
                option1: "Server outage = entire service offline",
                option2: "No single point of failure — runs as long as the network exists"
              },
              {
                feature: "Censorship",
                option1: "Company can ban users, remove content, change terms",
                option2: "No entity can censor transactions once on-chain"
              },
              {
                feature: "Revenue Model",
                option1: "Ads, subscriptions, data monetization",
                option2: "Token incentives, protocol fees, community governance"
              },
              {
                feature: "Example",
                option1: "Spotify — company controls catalog, pays artists pennies",
                option2: "Audius — artists upload directly, fans pay via $AUDIO tokens"
              }
            ]}
          />
        </div>

        {/* ═══════ 5. ETHICAL CONSIDERATIONS ═══════ */}
        <div id="s3-ethics" className="h-full">
          <ConceptSlide
            title="Ethical Considerations"
            description="Blockchain is not inherently good or bad — its impact depends on how it is designed, governed, and used."
            visual={
              <div className="space-y-4 w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-gradient-to-br from-[#ED1C24]/20 to-transparent rounded-xl border border-[#ED1C24]/30">
                    <h4 className="font-bold text-[#ED1C24] mb-2">⚡ Energy Consumption</h4>
                    <p className="text-sm text-muted-foreground">Bitcoin's Proof of Work uses more electricity than some countries. Ethereum's move to PoS reduced its energy use by ~99.95%.</p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-[#8b5cf6]/20 to-transparent rounded-xl border border-[#8b5cf6]/30">
                    <h4 className="font-bold text-[#8b5cf6] mb-2">👁️ Surveillance vs Privacy</h4>
                    <p className="text-sm text-muted-foreground">Public blockchains are transparent by default. Every transaction is visible forever — creating tension between accountability and privacy.</p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-xl border border-[#f59e0b]/30">
                    <h4 className="font-bold text-[#f59e0b] mb-2">🔒 Irreversibility</h4>
                    <p className="text-sm text-muted-foreground">On-chain transactions cannot be reversed. What about fraud victims? The "code is law" philosophy has limits when real people are harmed.</p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-[#39B54A]/20 to-transparent rounded-xl border border-[#39B54A]/30">
                    <h4 className="font-bold text-[#39B54A] mb-2">🌍 Dual-Use Reality</h4>
                    <p className="text-sm text-muted-foreground">Blockchain helped Ukrainians receive donations and Venezuelans preserve savings — but also enabled ransomware payments and sanctions evasion.</p>
                  </div>
                </div>
                <CalloutBox type="warning" title="No Technology is Neutral">
                  The same properties that make blockchain valuable — censorship resistance, immutability, pseudonymity — can be exploited. Critical thinking about trade-offs is essential.
                </CalloutBox>
              </div>
            }
            keyPoints={[
              "Energy debates must distinguish between PoW and PoS",
              "Privacy vs transparency is one of blockchain's core tensions",
              "Irreversibility protects integrity but punishes human error",
              "Real-world impact is both positive and negative — context matters"
            ]}
          />
        </div>

        {/* ═══════ 6. FUTURE TRENDS ═══════ */}
        <div id="s3-future" className="h-full">
          <ConceptSlide
            title="Future Trends"
            description="The next decade of blockchain will be shaped by convergence with other technologies and solutions to current limitations."
            visual={
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-[#ED1C24]/20 to-transparent rounded-xl border border-[#ED1C24]/30">
                  <h4 className="font-bold text-[#ED1C24] mb-2">🤖 AI + Blockchain</h4>
                  <p className="text-sm text-muted-foreground">Verifiable AI outputs, decentralized training data, provenance tracking for AI-generated content. Blockchain can prove what is real.</p>
                </div>
                <div className="p-5 bg-gradient-to-br from-[#6366f1]/20 to-transparent rounded-xl border border-[#6366f1]/30">
                  <h4 className="font-bold text-[#6366f1] mb-2">🔮 Zero-Knowledge Proofs</h4>
                  <p className="text-sm text-muted-foreground">Prove something is true without revealing the underlying data. Enables privacy-preserving identity, voting, and transactions at scale.</p>
                </div>
                <div className="p-5 bg-gradient-to-br from-[#39B54A]/20 to-transparent rounded-xl border border-[#39B54A]/30">
                  <h4 className="font-bold text-[#39B54A] mb-2">🔗 Layer 0 & Interoperability</h4>
                  <p className="text-sm text-muted-foreground">Protocols like Polkadot and Cosmos connect different blockchains. The future is a network of networks, not one chain to rule them all.</p>
                </div>
                <div className="p-5 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-xl border border-[#f59e0b]/30">
                  <h4 className="font-bold text-[#f59e0b] mb-2">🪪 Decentralized Identity (DID)</h4>
                  <p className="text-sm text-muted-foreground">Self-sovereign identity lets you prove credentials without sharing personal data. One identity across all services, owned by you.</p>
                </div>
                <div className="p-5 bg-gradient-to-br from-[#8b5cf6]/20 to-transparent rounded-xl border border-[#8b5cf6]/30">
                  <h4 className="font-bold text-[#8b5cf6] mb-2">🧾 Account Abstraction</h4>
                  <p className="text-sm text-muted-foreground">Makes crypto wallets work like normal accounts: social recovery, gas sponsoring, session keys. The UX revolution blockchain needs.</p>
                </div>
                <div className="p-5 bg-gradient-to-br from-[#22d3ee]/20 to-transparent rounded-xl border border-[#22d3ee]/30">
                  <h4 className="font-bold text-[#22d3ee] mb-2">🏗️ Real-World Assets (RWAs)</h4>
                  <p className="text-sm text-muted-foreground">Tokenizing real estate, bonds, commodities on-chain. BlackRock, Franklin Templeton, and others are already doing this at scale.</p>
                </div>
              </div>
            }
            keyPoints={[
              "AI + blockchain solves the provenance and trust problem for digital content",
              "ZK proofs unlock privacy without sacrificing verifiability",
              "Interoperability protocols will connect isolated blockchain ecosystems",
              "Account abstraction will make crypto accessible to mainstream users"
            ]}
          />
        </div>

        {/* ═══════ DISCUSSION ═══════ */}
        <div id="s3-discussion" className="h-full">
          <DiscussionSlide
            prompt="What industry do you think could benefit most from blockchain technology in the next 10 years?"
            guidingQuestions={[
              "What problems exist in that industry that blockchain could solve?",
              "What are the potential challenges to adoption?",
              "How would blockchain improve transparency or efficiency?",
              "What stakeholders might resist this change and why?"
            ]}
          />
        </div>

        {/* ═══════ QUIZZES ═══════ */}
        <div id="s3-quiz" className="h-full">
          <QuizSlide
            question="What is the fundamental shift that Web3 represents compared to Web2?"
            options={[
              { text: "Faster internet speeds and better streaming quality", correct: false },
              { text: "Users own their data, identity, and digital assets instead of platforms", correct: true },
              { text: "Free access to all premium content and services", correct: false },
              { text: "Government control and regulation of all internet content", correct: false }
            ]}
            explanation="Web3 shifts ownership from platforms to users through decentralization and cryptographic keys. Instead of companies owning your data, you control your identity and assets via wallets and on-chain protocols."
          />
        </div>

        <div className="h-full">
          <QuizSlide
            question="What is a key advantage of a dApp over a traditional centralized application?"
            options={[
              { text: "dApps are always faster and cheaper to use", correct: false },
              { text: "dApps have no single point of failure — they run as long as the blockchain network exists", correct: true },
              { text: "dApps don't require an internet connection to function", correct: false },
              { text: "dApps are always free and generate no revenue", correct: false }
            ]}
            explanation="Because dApps run on decentralized blockchain networks via smart contracts, they have no central server that can fail or be shut down. As long as the underlying blockchain network operates, the dApp continues to function."
          />
        </div>

        <div className="h-full">
          <QuizSlide
            question="Which layer of the Web3 ecosystem contains protocols like Ethereum, Solana, and Polygon?"
            options={[
              { text: "The Interface layer (wallets and dApps)", correct: false },
              { text: "The Application layer (DeFi, NFTs, DAOs)", correct: false },
              { text: "The Blockchain Layer (L1 / L2)", correct: true },
              { text: "The Infrastructure layer (nodes and validators)", correct: false }
            ]}
            explanation="Ethereum, Solana, and Polygon are L1 blockchains or L2 scaling solutions. They sit between raw infrastructure (nodes, validators, P2P network) and the application protocols (DeFi, NFTs, DAOs) built on top of them."
          />
        </div>

        {/* ═══════ TAKEAWAYS ═══════ */}
        <div id="s3-takeaways" className="h-full">
          <TakeawaySlide
            title="Section 3 — Key Takeaways"
            takeaways={[
              "Blockchain use cases span 8+ industries: finance, healthcare, supply chain, voting, identity, real estate, sustainability, and digital art",
              "The Web3 ecosystem is a layered stack — from nodes and validators at the bottom to wallets, dApps, and users at the top",
              "Web3 = Read + Write + Own: the key shift is that users own their data and digital assets instead of platforms",
              "dApps replace centralized servers with smart contracts — removing single points of failure and platform control",
              "Ethical trade-offs are real: energy consumption, privacy vs transparency, irreversibility, and dual-use potential",
              "Future trends — ZK proofs, AI integration, DID, account abstraction — will define blockchain's next decade"
            ]}
          />
        </div>

      </div>
      </div>
    </div>
  );
}
