import { TitleSlide } from '../../components/templates/TitleSlide';
import { TakeawaySlide } from '../../components/templates/TakeawaySlide';
import { ProcessSlide } from '../../components/templates/ProcessSlide';
import { DiscussionSlide } from '../../components/templates/DiscussionSlide';
import { SectionNav } from '../../components/navigation/SectionNav';
import { ShieldAlert } from 'lucide-react';

const chapters = [
  { id: 's3-categories',   label: 'Risk Categories' },
  { id: 's3-matrix',       label: 'Risk Matrix' },
  { id: 's3-technical',    label: 'Technical Risks' },
  { id: 's3-regulatory',   label: 'Regulatory Risks' },
  { id: 's3-audit',        label: 'Audit Process' },
  { id: 's3-mitigation',   label: 'Mitigation Strategies' },
  { id: 's3-discussion',   label: 'Discussion' },
  { id: 's3-takeaways',    label: 'Takeaways' },
];

export function PM_Section3() {
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
            sectionNumber="SESSION 03"
            title="Risk Management in Blockchain Projects"
            subtitle="Identifying, assessing, and mitigating the unique risks that make blockchain projects high-stakes"
            icon={<ShieldAlert className="size-20 text-[#ef4444]" />}
            gradient="from-[#ef4444] to-[#f97316]"
          />
        </div>

        {/* ═══════ RISK CATEGORIES ═══════ */}
        <div id="s3-categories" className="h-full flex flex-col p-5 lg:p-8">
          <div className="shrink-0 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ef4444]">Session 03</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-1 mb-1">Risk Categories in Blockchain Projects</h2>
            <p className="text-sm text-muted-foreground">Blockchain introduces risk dimensions that do not exist in traditional software projects — categorize them before you can manage them.</p>
          </div>
          <div className="flex-1 min-h-0 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                category: 'Technical Risks',
                color: '#6366f1',
                icon: '💻',
                risks: [
                  'Smart contract bugs (reentrancy, overflow)',
                  'Oracle manipulation and failure',
                  'Protocol upgrade breaking changes',
                  'Private key compromise',
                  'Gas price spikes blocking operations',
                ],
              },
              {
                category: 'Regulatory Risks',
                color: '#ef4444',
                icon: '⚖️',
                risks: [
                  'Token classified as unregistered security',
                  'GDPR conflict with immutability',
                  'Cross-border jurisdiction conflicts',
                  'AML / KYC compliance gaps',
                  'Regulatory framework changes post-launch',
                ],
              },
              {
                category: 'Adoption Risks',
                color: '#f97316',
                icon: '📉',
                risks: [
                  'Consortium members withdraw from the network',
                  'Network effects fail to materialize',
                  'User experience too complex for target audience',
                  'Competing standard emerges mid-project',
                  'Token price volatility affecting incentives',
                ],
              },
              {
                category: 'Operational Risks',
                color: '#eab308',
                icon: '🔧',
                risks: [
                  'Dependency on third-party L1/L2 availability',
                  'Key person risk in small core teams',
                  'Governance gridlock on critical decisions',
                  'Insufficient node decentralization',
                  'Incident response without a kill switch',
                ],
              },
            ].map(cat => (
              <div key={cat.category} className="p-4 bg-card border rounded-xl flex flex-col" style={{ borderColor: cat.color + '40' }}>
                <div className="text-2xl mb-2">{cat.icon}</div>
                <div className="font-bold text-sm mb-3" style={{ color: cat.color }}>{cat.category}</div>
                <ul className="space-y-1.5 flex-1">
                  {cat.risks.map(r => (
                    <li key={r} className="text-xs text-muted-foreground flex gap-1.5">
                      <span style={{ color: cat.color }} className="shrink-0">•</span>{r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════ RISK MATRIX ═══════ */}
        <div id="s3-matrix" className="h-full flex flex-col p-5 lg:p-8">
          <div className="shrink-0 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ef4444]">Session 03</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-1 mb-1">Risk Assessment Matrix</h2>
            <p className="text-sm text-muted-foreground">Prioritize risks by their likelihood and impact. Blockchain projects tend to have a higher concentration of high-impact / low-probability events.</p>
          </div>
          <div className="flex-1 min-h-0 grid grid-cols-2 gap-5">
            {/* Matrix */}
            <div className="relative border border-border rounded-xl overflow-hidden bg-card">
              <div className="grid grid-cols-3 grid-rows-3 h-full">
                {/* Row headers + cells */}
                {[
                  { impact: 'HIGH', prob: 'HIGH', bg: '#ef4444', label: 'Critical — Act Now', items: ['Smart contract exploit', 'Regulatory shutdown order'] },
                  { impact: 'HIGH', prob: 'MED', bg: '#f97316', label: 'High — Mitigate', items: ['Key protocol upgrade', 'Security audit findings'] },
                  { impact: 'HIGH', prob: 'LOW', bg: '#eab308', label: 'Significant — Monitor', items: ['GDPR conflict', 'L1 hard fork'] },
                  { impact: 'MED', prob: 'HIGH', bg: '#f97316', label: 'High — Mitigate', items: ['Consortium member exit', 'Gas price spike'] },
                  { impact: 'MED', prob: 'MED', bg: '#eab308', label: 'Moderate — Plan', items: ['Oracle failure', 'UX adoption issues'] },
                  { impact: 'MED', prob: 'LOW', bg: '#39B54A', label: 'Low — Accept', items: ['Token classification review', 'Minor governance dispute'] },
                  { impact: 'LOW', prob: 'HIGH', bg: '#eab308', label: 'Moderate — Accept', items: ['Gas estimation errors', 'Documentation gaps'] },
                  { impact: 'LOW', prob: 'MED', bg: '#39B54A', label: 'Low — Accept', items: ['Minor UI bugs', 'Testnet instability'] },
                  { impact: 'LOW', prob: 'LOW', bg: '#39B54A', label: 'Negligible', items: ['Color scheme changes', 'Minor partner delays'] },
                ].map((cell, i) => (
                  <div key={i} className="p-2 border border-border/30 flex flex-col" style={{ backgroundColor: cell.bg + '15' }}>
                    <div className="text-[9px] font-bold mb-1" style={{ color: cell.bg }}>{cell.label}</div>
                    {cell.items.map(item => <div key={item} className="text-[9px] text-muted-foreground">• {item}</div>)}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-1 right-2 text-[9px] text-muted-foreground">→ Probability (Low → High)</div>
              <div className="absolute top-1/2 left-1 text-[9px] text-muted-foreground -rotate-90 origin-center">↑ Impact</div>
            </div>
            {/* Response strategies */}
            <div className="space-y-3">
              <div className="font-bold text-sm text-foreground">Risk Response Strategies</div>
              {[
                { strategy: 'Avoid', color: '#ef4444', desc: 'Eliminate the risk by changing the project approach. Example: do not deploy on an untested L2 if security cannot be confirmed.' },
                { strategy: 'Mitigate', color: '#f97316', desc: 'Reduce likelihood or impact. Example: mandatory smart contract audit before mainnet deployment reduces exploit risk.' },
                { strategy: 'Transfer', color: '#eab308', desc: 'Shift the risk to another party. Example: use a third-party oracle provider with an SLA rather than building your own.' },
                { strategy: 'Accept', color: '#39B54A', desc: 'Acknowledge the risk and prepare a response plan. Example: accept regulatory uncertainty but document a pivot plan if classification changes.' },
                { strategy: 'Exploit', color: '#6366f1', desc: 'For positive risks — accelerate favorable outcomes. Example: if a major partner wants to join the consortium, fast-track their onboarding.' },
              ].map(s => (
                <div key={s.strategy} className="flex gap-3 p-3 bg-card border border-border rounded-lg">
                  <div className="shrink-0 px-2 py-0.5 rounded text-[10px] font-black text-white h-fit" style={{ background: s.color }}>{s.strategy.toUpperCase()}</div>
                  <div className="text-xs text-muted-foreground">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════ TECHNICAL RISKS ═══════ */}
        <div id="s3-technical" className="h-full flex flex-col p-5 lg:p-8">
          <div className="shrink-0 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ef4444]">Session 03</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-1 mb-1">Deep Dive: Technical Risks</h2>
            <p className="text-sm text-muted-foreground">Smart contract vulnerabilities are the most catastrophic technical risk — because there is no rollback.</p>
          </div>
          <div className="flex-1 min-h-0 grid grid-cols-2 gap-5">
            <div className="space-y-3">
              {[
                {
                  name: 'Reentrancy Attack',
                  severity: 'Critical',
                  color: '#ef4444',
                  example: 'The DAO hack (2016): $60M drained. A contract calls an external address before updating its own state — allowing the called contract to re-enter and drain funds.',
                  mitigation: 'Checks-Effects-Interactions pattern. ReentrancyGuard modifier. Always update state before external calls.',
                },
                {
                  name: 'Integer Overflow / Underflow',
                  severity: 'High',
                  color: '#ef4444',
                  example: 'Before Solidity 0.8, arithmetic operations could silently wrap around. An attacker subtracts from a zero balance to get a huge number.',
                  mitigation: 'Use Solidity ≥0.8 (built-in overflow checks) or SafeMath library for older contracts.',
                },
                {
                  name: 'Oracle Manipulation',
                  severity: 'Critical',
                  color: '#ef4444',
                  example: 'Flash loan attacks manipulate DEX spot prices used as oracles, draining lending protocols that trust those prices for collateral valuation.',
                  mitigation: 'Use time-weighted average prices (TWAP). Use decentralized oracle networks (Chainlink). Never use a single on-chain DEX as your sole price feed.',
                },
                {
                  name: 'Access Control Flaws',
                  severity: 'High',
                  color: '#f97316',
                  example: 'Missing onlyOwner modifier allows any address to call admin functions. The Parity wallet freeze (2017): $280M locked due to an unprotected initialization function.',
                  mitigation: 'Explicit access control on every sensitive function. Role-based access control (RBAC). Thorough test coverage for permission scenarios.',
                },
              ].map(r => (
                <div key={r.name} className="p-4 bg-card border border-border rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-sm text-foreground">{r.name}</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded text-white" style={{ background: r.color }}>{r.severity}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2"><span className="font-semibold text-foreground">Example: </span>{r.example}</div>
                  <div className="text-xs text-[#39B54A]"><span className="font-semibold">Mitigation: </span>{r.mitigation}</div>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                {
                  name: 'Front-Running (MEV)',
                  severity: 'High',
                  color: '#f97316',
                  example: 'Miners / validators can observe pending transactions and insert their own before them. Sandwich attacks drain DEX traders by front- and back-running their swaps.',
                  mitigation: 'Commit-reveal schemes. Slippage limits in AMM swaps. Use private mempools (e.g. Flashbots Protect) for sensitive transactions.',
                },
                {
                  name: 'Upgrade Proxy Vulnerabilities',
                  severity: 'High',
                  color: '#f97316',
                  example: 'Upgradeable contracts using proxies have a storage collision risk if not implemented correctly. A malicious upgrade can drain all funds.',
                  mitigation: 'Use established proxy patterns (OpenZeppelin Transparent or UUPS). Mandatory timelock on upgrades. Multi-sig upgrade control.',
                },
                {
                  name: 'Private Key Compromise',
                  severity: 'Critical',
                  color: '#ef4444',
                  example: 'If the deployer private key or admin key is compromised, all funds and administrative functions are at risk. The Ronin bridge hack ($625M): stolen validator keys.',
                  mitigation: 'Multi-sig for all privileged operations. Hardware security modules (HSM). Key rotation procedures. Principle of least privilege.',
                },
                {
                  name: 'Protocol Dependency Risk',
                  severity: 'Medium',
                  color: '#eab308',
                  example: 'Your project relies on an L2, oracle, or DeFi protocol that can be upgraded, deprecated, or exploited — affecting your project without any code changes on your part.',
                  mitigation: 'Audit all external dependencies. Build abstraction layers. Monitor dependency governance and security channels. Have fallback mechanisms.',
                },
              ].map(r => (
                <div key={r.name} className="p-4 bg-card border border-border rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-sm text-foreground">{r.name}</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded text-white" style={{ background: r.color }}>{r.severity}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2"><span className="font-semibold text-foreground">Example: </span>{r.example}</div>
                  <div className="text-xs text-[#39B54A]"><span className="font-semibold">Mitigation: </span>{r.mitigation}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════ REGULATORY RISKS ═══════ */}
        <div id="s3-regulatory" className="h-full flex flex-col p-5 lg:p-8">
          <div className="shrink-0 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ef4444]">Session 03</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-1 mb-1">Regulatory Risk Landscape</h2>
            <p className="text-sm text-muted-foreground">Regulatory frameworks for blockchain are incomplete globally — and enforcement is accelerating. Every PM must understand the key dimensions.</p>
          </div>
          <div className="flex-1 min-h-0 grid grid-cols-3 gap-5">
            {[
              {
                area: 'Securities Law',
                flag: '🏛️',
                color: '#ef4444',
                risk: 'Your token may be classified as a security (Howey Test in the US), requiring registration with financial regulators.',
                signal: ['Promised profit from others\' efforts', 'Investment of money in a common enterprise', 'Token sold to fund project development', 'Secondary market trading promoted'],
                mitigation: 'Get a legal opinion before any token issuance. Consider utility-first token design. Engage securities counsel early.',
              },
              {
                area: 'Data Protection (GDPR)',
                flag: '🇪🇺',
                color: '#f97316',
                risk: 'Storing personal data on an immutable blockchain conflicts directly with the GDPR right to erasure. Once on-chain, data cannot be deleted.',
                signal: ['Personal identifiers on-chain', 'Hash of personal data (may still qualify)', 'EU residents as users', 'Smart contract storing KYC data'],
                mitigation: 'Store only hashes or pointers on-chain. Keep PII in off-chain, deletable storage. Pseudonymize aggressively.',
              },
              {
                area: 'AML / KYC Compliance',
                flag: '🔍',
                color: '#eab308',
                risk: 'Financial blockchain projects may be classified as Virtual Asset Service Providers (VASPs) under FATF guidelines, requiring full AML programs.',
                signal: ['Token exchange or transfer functionality', 'DeFi protocol handling large value', 'Cross-border transactions', 'Anonymous wallet interactions'],
                mitigation: 'Conduct VASP analysis early. Implement on-chain KYC or identity solutions. Build transaction monitoring from day one.',
              },
            ].map(area => (
              <div key={area.area} className="p-5 bg-card border rounded-xl flex flex-col" style={{ borderColor: area.color + '40' }}>
                <div className="text-2xl mb-2">{area.flag}</div>
                <div className="font-bold mb-2" style={{ color: area.color }}>{area.area}</div>
                <div className="text-xs text-muted-foreground mb-3 leading-relaxed">{area.risk}</div>
                <div className="font-semibold text-xs text-foreground mb-1">⚠️ Warning Signals:</div>
                <ul className="text-xs text-muted-foreground space-y-1 mb-3">
                  {area.signal.map(s => <li key={s} className="flex gap-1.5"><span style={{ color: area.color }}>•</span>{s}</li>)}
                </ul>
                <div className="mt-auto p-2.5 rounded-lg text-xs text-[#39B54A] bg-[#39B54A]/10">
                  <span className="font-bold">Mitigation: </span>{area.mitigation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════ AUDIT PROCESS ═══════ */}
        <div id="s3-audit" className="h-full">
          <ProcessSlide
            sectionNumber="SESSION 03"
            title="Smart Contract Audit Process"
            subtitle="A security audit is not a checkbox — it is a multi-phase process that the PM must plan for from day one"
            steps={[
              {
                number: '01',
                title: 'Scope Definition & Kickoff',
                description: 'Define audit scope: which contracts, which commit hash, which invariants must hold. Share full documentation, architecture diagrams, and test suite with auditors.',
              },
              {
                number: '02',
                title: 'Automated & Manual Review',
                description: 'Auditors run static analysis tools (Slither, Mythril) and perform manual line-by-line code review. Focus on access control, state transitions, and economic logic.',
              },
              {
                number: '03',
                title: 'Draft Report & Finding Triage',
                description: 'Auditors issue a draft report categorizing findings as Critical / High / Medium / Low / Informational. PM and dev team triage each finding and prepare responses.',
              },
              {
                number: '04',
                title: 'Remediation & Verification',
                description: 'Development team remediates all Critical and High findings. Auditors verify fixes on the updated commit. This may require multiple rounds — plan the time buffer.',
              },
              {
                number: '05',
                title: 'Final Report & Mainnet Gate',
                description: 'Auditors publish the final public report. No Critical or High findings open. PM conducts the go/no-go gate review before authorizing mainnet deployment.',
              },
            ]}
            accentColor="#ef4444"
          />
        </div>

        {/* ═══════ MITIGATION STRATEGIES ═══════ */}
        <div id="s3-mitigation" className="h-full flex flex-col p-5 lg:p-8">
          <div className="shrink-0 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ef4444]">Session 03</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-1 mb-1">Risk Mitigation Toolkit</h2>
            <p className="text-sm text-muted-foreground">Blockchain PMs have a specific set of mitigation tools beyond standard project management practices.</p>
          </div>
          <div className="flex-1 min-h-0 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { tool: 'Mandatory Security Audit', icon: '🔐', color: '#ef4444', when: 'Before every mainnet deployment', desc: 'Non-negotiable for any contract holding value. Budget 4–8 weeks and 15–25% of development cost.' },
              { tool: 'Bug Bounty Program', icon: '🏆', color: '#f97316', when: 'Post-launch, ongoing', desc: 'Crowdsource security research. Offer rewards proportional to finding severity. HackerOne, Immunefi, Code4rena.' },
              { tool: 'Formal Verification', icon: '📐', color: '#6366f1', when: 'Critical financial contracts', desc: 'Mathematically prove that contract logic meets specified invariants. Expensive but highest assurance level.' },
              { tool: 'Timelock Controls', icon: '⏱️', color: '#eab308', when: 'All admin / upgrade functions', desc: 'Queue privileged actions with a delay (24–72h). Gives stakeholders time to review and exit before changes take effect.' },
              { tool: 'Multi-Sig Governance', icon: '🔑', color: '#39B54A', when: 'Key management, treasury', desc: 'Require M-of-N signers for critical operations. Eliminates single-point-of-failure from key compromise.' },
              { tool: 'Circuit Breakers / Pause', icon: '🛑', color: '#ef4444', when: 'Emergency response', desc: 'Build pause() functions into contracts for emergency stops. Define who can pause and under what conditions — before launch.' },
              { tool: 'Insurance Protocols', icon: '🛡️', color: '#22d3ee', when: 'High-value TVL projects', desc: 'On-chain insurance (Nexus Mutual, InsurAce) covers smart contract exploit losses. Part of a mature risk transfer strategy.' },
              { tool: 'Staged Rollouts', icon: '📊', color: '#8b5cf6', when: 'New deployments', desc: 'Deploy with TVL caps initially. Increase limits as the protocol proves its stability over time. Limits blast radius.' },
            ].map(t => (
              <div key={t.tool} className="p-4 bg-card border rounded-xl flex flex-col" style={{ borderTopWidth: 3, borderTopColor: t.color }}>
                <div className="text-xl mb-2">{t.icon}</div>
                <div className="font-bold text-sm mb-1" style={{ color: t.color }}>{t.tool}</div>
                <div className="text-[10px] text-muted-foreground bg-muted rounded px-1.5 py-0.5 mb-2 w-fit">{t.when}</div>
                <div className="text-xs text-muted-foreground flex-1">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════ DISCUSSION ═══════ */}
        <div id="s3-discussion" className="h-full">
          <DiscussionSlide
            prompt="A DeFi protocol is about to launch with $10M in initial liquidity. The security audit found 2 Medium and 4 Low findings — all resolved. One High finding is still open (upgradeability mechanism). Do you launch? What is your decision framework?"
            guidingQuestions={[
              'Your blockchain project operates across the EU and US. Your legal team says you need to store KYC data immutably for compliance. Your privacy counsel says that violates GDPR. How do you resolve this conflict in your architecture?',
              'You are the PM for a consortium supply chain blockchain. One member is pressuring you to skip the security audit to meet the launch deadline. How do you respond? What data do you use to make your case?',
            ]}
          />
        </div>

        {/* ═══════ TAKEAWAYS ═══════ */}
        <div id="s3-takeaways" className="h-full">
          <TakeawaySlide
            title="Key Takeaways — Session 03"
            takeaways={[
              'Blockchain projects carry four distinct risk categories: technical, regulatory, adoption, and operational — each requiring a specific management approach.',
              'Smart contract vulnerabilities (reentrancy, oracle manipulation, access control flaws) are irreversible once deployed — the audit process is the most important PM gate.',
              'Never store personal data on-chain in a GDPR-regulated context. Store hashes and keep PII in off-chain deletable storage.',
              'Token issuance carries securities law risk. Get legal classification opinions before any token sale or public distribution.',
              'Mitigation tools like timelocks, multi-sig, circuit breakers, and staged rollouts reduce blast radius — they cannot eliminate risk, but they give you response time.',
            ]}
          />
        </div>

        </div>
      </div>
    </div>
  );
}
