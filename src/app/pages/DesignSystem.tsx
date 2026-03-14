import { TitleSlide } from '../components/templates/TitleSlide';
import { ConceptSlide } from '../components/templates/ConceptSlide';
import { TimelineSlide } from '../components/templates/TimelineSlide';
import { DiagramSlide } from '../components/templates/DiagramSlide';
import { ProcessSlide } from '../components/templates/ProcessSlide';
import { ComparisonSlide } from '../components/templates/ComparisonSlide';
import { TakeawaySlide } from '../components/templates/TakeawaySlide';
import { QuizSlide } from '../components/templates/QuizSlide';
import { DiscussionSlide } from '../components/templates/DiscussionSlide';
import { BlockchainBlock } from '../components/blockchain/BlockchainBlock';
import { TransactionFlow } from '../components/blockchain/TransactionFlow';
import { NetworkNode } from '../components/blockchain/NetworkNode';
import { BlockchainChain } from '../components/blockchain/BlockchainChain';
import { DefinitionBox } from '../components/shared/DefinitionBox';
import { CalloutBox } from '../components/shared/CalloutBox';
import { Palette } from 'lucide-react';

export function DesignSystem() {
  return (
    <div className="size-full overflow-y-auto">
      <div className="min-h-screen p-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Palette className="size-12 text-[#ED1C24]" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#ED1C24] to-[#39B54A] bg-clip-text text-transparent">
              Blockchain Education Design System
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            A comprehensive library of templates and components for teaching blockchain
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Color Palette</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-6 bg-[#ED1C24] rounded-lg">
              <div className="text-white font-bold mb-1">Primary (Red)</div>
              <div className="text-white/70 text-sm">#ED1C24</div>
            </div>
            <div className="p-6 bg-[#39B54A] rounded-lg">
              <div className="text-white font-bold mb-1">Secondary (Green)</div>
              <div className="text-white/70 text-sm">#39B54A</div>
            </div>
            <div className="p-6 bg-[#ffffff] border-2 border-[#ED1C24] rounded-lg">
              <div className="text-[#000000] font-bold mb-1">White</div>
              <div className="text-[#000000]/70 text-sm">#FFFFFF</div>
            </div>
            <div className="p-6 bg-[#000000] border border-border rounded-lg">
              <div className="text-white font-bold mb-1">Black</div>
              <div className="text-white/70 text-sm">#000000</div>
            </div>
            <div className="p-6 bg-[#f59e0b] rounded-lg">
              <div className="text-white font-bold mb-1">Warning</div>
              <div className="text-white/70 text-sm">#f59e0b</div>
            </div>
            <div className="p-6 bg-[#ef4444] rounded-lg">
              <div className="text-white font-bold mb-1">Destructive</div>
              <div className="text-white/70 text-sm">#ef4444</div>
            </div>
            <div className="p-6 bg-[#0a0a0a] border border-border rounded-lg">
              <div className="text-white font-bold mb-1">Background</div>
              <div className="text-white/70 text-sm">#0a0a0a</div>
            </div>
            <div className="p-6 bg-[#1a1a1a] border border-border rounded-lg">
              <div className="text-white font-bold mb-1">Card</div>
              <div className="text-white/70 text-sm">#1a1a1a</div>
            </div>
          </div>
        </section>

        {/* Slide Templates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Slide Templates</h2>
          <div className="space-y-8">
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="p-4 bg-card border-b border-border">
                <h3 className="font-bold text-foreground">TitleSlide</h3>
                <p className="text-sm text-muted-foreground">Section introduction with large title and optional icon</p>
              </div>
              <div className="h-64 bg-background">
                <TitleSlide
                  sectionNumber="SECTION 01"
                  title="Example Title"
                  subtitle="This is a subtitle"
                />
              </div>
            </div>

            <div className="border border-border rounded-xl overflow-hidden">
              <div className="p-4 bg-card border-b border-border">
                <h3 className="font-bold text-foreground">ConceptSlide</h3>
                <p className="text-sm text-muted-foreground">Two-column layout with visual and key points</p>
              </div>
              <div className="h-64 bg-background">
                <ConceptSlide
                  title="Concept Title"
                  description="Brief description of the concept"
                  keyPoints={["Point 1", "Point 2", "Point 3"]}
                />
              </div>
            </div>

            <div className="border border-border rounded-xl overflow-hidden">
              <div className="p-4 bg-card border-b border-border">
                <h3 className="font-bold text-foreground">ProcessSlide</h3>
                <p className="text-sm text-muted-foreground">Step-by-step process visualization</p>
              </div>
              <div className="h-64 bg-background">
                <ProcessSlide
                  title="Process Steps"
                  steps={[
                    { number: 1, title: "Step 1", description: "First step" },
                    { number: 2, title: "Step 2", description: "Second step" }
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blockchain Components */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Blockchain Components</h2>
          <div className="space-y-8">
            <div className="border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4">BlockchainBlock</h3>
              <div className="flex justify-center">
                <BlockchainBlock
                  blockNumber={100}
                  hash="0xabcdef..."
                  previousHash="0x123456..."
                  data="Sample Data"
                />
              </div>
            </div>

            <div className="border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4">TransactionFlow</h3>
              <TransactionFlow
                from="0xABC...123"
                to="0xDEF...456"
                amount="2.5 BTC"
                status="confirmed"
              />
            </div>

            <div className="border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4">NetworkNode</h3>
              <div className="flex justify-center gap-8">
                <NetworkNode label="Active" status="active" />
                <NetworkNode label="Syncing" status="syncing" />
                <NetworkNode label="Inactive" status="inactive" />
              </div>
            </div>

            <div className="border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4">BlockchainChain</h3>
              <BlockchainChain
                blocks={[
                  { blockNumber: 0, data: "Genesis" },
                  { blockNumber: 1, data: "Block 1" },
                  { blockNumber: 2, data: "Block 2", highlighted: true }
                ]}
              />
            </div>
          </div>
        </section>

        {/* Shared Components */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Shared Components</h2>
          <div className="space-y-4 max-w-3xl">
            <DefinitionBox
              term="Example Term"
              definition="This is a definition box used to highlight important terminology."
            />
            
            <CalloutBox type="info" title="Info Callout">
              This is an informational callout box.
            </CalloutBox>
            
            <CalloutBox type="warning" title="Warning">
              This is a warning callout.
            </CalloutBox>
            
            <CalloutBox type="tip" title="Pro Tip">
              This is a tip callout.
            </CalloutBox>
            
            <CalloutBox type="important" title="Important">
              This is an important callout.
            </CalloutBox>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Typography</h2>
          <div className="space-y-4">
            <div>
              <h1 className="text-foreground">Heading 1 - Default Style</h1>
              <code className="text-xs text-muted-foreground">h1 element</code>
            </div>
            <div>
              <h2 className="text-foreground">Heading 2 - Default Style</h2>
              <code className="text-xs text-muted-foreground">h2 element</code>
            </div>
            <div>
              <h3 className="text-foreground">Heading 3 - Default Style</h3>
              <code className="text-xs text-muted-foreground">h3 element</code>
            </div>
            <div>
              <p className="text-foreground">Body text - Regular paragraph content</p>
              <code className="text-xs text-muted-foreground">p element</code>
            </div>
            <div>
              <code className="font-mono text-foreground">Monospace text for code: 0xABCDEF123456</code>
              <div className="text-xs text-muted-foreground mt-1">font-mono class or code element</div>
            </div>
          </div>
        </section>

        {/* Usage Guide */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Usage Guide</h2>
          <div className="prose prose-invert max-w-4xl">
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground">How to Use This Design System</h3>
              
              <div>
                <h4 className="font-bold text-foreground mb-2">1. Import Templates</h4>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`import { TitleSlide } from '../components/templates/TitleSlide';
import { ConceptSlide } from '../components/templates/ConceptSlide';`}</code>
                </pre>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-2">2. Import Components</h4>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`import { BlockchainBlock } from '../components/blockchain/BlockchainBlock';
import { DefinitionBox } from '../components/shared/DefinitionBox';`}</code>
                </pre>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-2">3. Compose Your Content</h4>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`<TitleSlide
  sectionNumber="SECTION 01"
  title="Your Title"
  subtitle="Your subtitle"
/>`}</code>
                </pre>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-2">4. Customize</h4>
                <p className="text-muted-foreground">All components accept className props and can be customized with Tailwind classes. Colors follow the defined theme variables for consistency.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}