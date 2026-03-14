import { 
  FileText, 
  Calendar, 
  GitBranch, 
  Layers, 
  ArrowRightLeft, 
  CheckCircle2, 
  HelpCircle, 
  MessageSquare,
  Pen
} from 'lucide-react';

const templates = [
  {
    name: 'TitleSlide',
    icon: <FileText className="size-6" />,
    description: 'Section introductions with large titles and gradients',
    color: 'from-[#ED1C24] to-[#39B54A]'
  },
  {
    name: 'ConceptSlide',
    icon: <Layers className="size-6" />,
    description: 'Two-column layout with visuals and key points',
    color: 'from-[#39B54A] to-[#ED1C24]'
  },
  {
    name: 'TimelineSlide',
    icon: <Calendar className="size-6" />,
    description: 'Chronological events with visual timeline',
    color: 'from-[#ED1C24] to-[#ffffff]'
  },
  {
    name: 'DiagramSlide',
    icon: <GitBranch className="size-6" />,
    description: 'Technical diagrams with annotations',
    color: 'from-[#ffffff] to-[#39B54A]'
  },
  {
    name: 'ProcessSlide',
    icon: <ArrowRightLeft className="size-6" />,
    description: 'Step-by-step process flows',
    color: 'from-[#ED1C24] to-[#39B54A]'
  },
  {
    name: 'ComparisonSlide',
    icon: <Layers className="size-6" />,
    description: 'Side-by-side feature comparisons',
    color: 'from-[#39B54A] to-[#ED1C24]'
  },
  {
    name: 'TakeawaySlide',
    icon: <CheckCircle2 className="size-6" />,
    description: 'Summary of key learnings',
    color: 'from-[#39B54A] to-[#ffffff]'
  },
  {
    name: 'QuizSlide',
    icon: <HelpCircle className="size-6" />,
    description: 'Interactive quiz questions',
    color: 'from-[#ED1C24] to-[#39B54A]'
  },
  {
    name: 'DiscussionSlide',
    icon: <MessageSquare className="size-6" />,
    description: 'Discussion prompts for engagement',
    color: 'from-[#39B54A] to-[#ED1C24]'
  },
  {
    name: 'WhiteboardSlide',
    icon: <Pen className="size-6" />,
    description: 'Interactive explanation area',
    color: 'from-[#ffffff] to-[#ED1C24]'
  }
];

export function TemplateShowcase() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-foreground mb-6">Available Templates</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {templates.map((template) => (
          <div
            key={template.name}
            className="group bg-card border border-border rounded-lg p-4 hover:border-[#ED1C24] transition-all cursor-pointer"
          >
            <div className={`size-12 rounded-lg bg-gradient-to-br ${template.color} flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform`}>
              {template.icon}
            </div>
            <div className="font-bold text-sm text-foreground mb-1">{template.name}</div>
            <div className="text-xs text-muted-foreground">{template.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}