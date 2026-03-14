interface ComparisonItem {
  feature: string;
  option1: string;
  option2: string;
  option3?: string;
}

interface ComparisonSlideProps {
  title: string;
  option1Label: string;
  option2Label: string;
  option3Label?: string;
  items: ComparisonItem[];
}

export function ComparisonSlide({ title, option1Label, option2Label, option3Label, items }: ComparisonSlideProps) {
  const hasThreeOptions = !!option3Label;
  const cols = hasThreeOptions ? 'grid-cols-4' : 'grid-cols-3';

  return (
    <div className="h-full w-full flex flex-col p-12">
      <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-6xl">
          {/* Table Header */}
          <div className={`grid ${cols} gap-4 mb-4`}>
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-bold text-foreground">Feature</h3>
            </div>
            <div className="p-4 bg-gradient-to-br from-[#ED1C24] to-[#39B54A] rounded-lg">
              <h3 className="font-bold text-white">{option1Label}</h3>
            </div>
            <div className="p-4 bg-gradient-to-br from-[#39B54A] to-[#ED1C24] rounded-lg">
              <h3 className="font-bold text-white">{option2Label}</h3>
            </div>
            {hasThreeOptions && (
              <div className="p-4 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-lg">
                <h3 className="font-bold text-white">{option3Label}</h3>
              </div>
            )}
          </div>
          
          {/* Table Rows */}
          <div className="space-y-2">
            {items.map((item, index) => (
              <div
                key={index}
                className={`grid ${cols} gap-4 bg-card border border-border rounded-lg overflow-hidden hover:border-[#ED1C24]/50 transition-colors`}
              >
                <div className="p-4 font-bold text-foreground border-r border-border">
                  {item.feature}
                </div>
                <div className="p-4 text-muted-foreground border-r border-border">
                  {item.option1}
                </div>
                <div className={`p-4 text-muted-foreground${hasThreeOptions ? ' border-r border-border' : ''}`}>
                  {item.option2}
                </div>
                {hasThreeOptions && (
                  <div className="p-4 text-muted-foreground">
                    {item.option3}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}