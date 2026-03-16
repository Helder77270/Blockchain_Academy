interface ComparisonItem {
  feature: string;
  option1: string;
  option2: string;
  option3?: string;
}

interface ComparisonSlideProps {
  title: string;
  featureLabel?: string;
  option1Label: string;
  option2Label: string;
  option3Label?: string;
  items: ComparisonItem[];
}

export function ComparisonSlide({ title, featureLabel = 'Feature', option1Label, option2Label, option3Label, items }: ComparisonSlideProps) {
  const hasThreeOptions = !!option3Label;
  const cols = hasThreeOptions ? 'grid-cols-4' : 'grid-cols-3';

  return (
    <div className="w-full flex flex-col p-5 lg:p-10">
      <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-3 lg:mb-4">{title}</h2>

      <div className="w-full max-w-6xl">
        {/* Table Header */}
        <div className={`grid ${cols} gap-2 lg:gap-4 mb-2 lg:mb-3`}>
          <div className="p-2 lg:p-4 bg-muted rounded-lg">
            <h3 className="font-bold text-sm lg:text-base text-foreground">{featureLabel}</h3>
          </div>
          <div className="p-2 lg:p-4 bg-gradient-to-br from-[#ED1C24] to-[#39B54A] rounded-lg">
            <h3 className="font-bold text-sm lg:text-base text-white">{option1Label}</h3>
          </div>
          <div className="p-2 lg:p-4 bg-gradient-to-br from-[#39B54A] to-[#ED1C24] rounded-lg">
            <h3 className="font-bold text-sm lg:text-base text-white">{option2Label}</h3>
          </div>
          {hasThreeOptions && (
            <div className="p-2 lg:p-4 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-lg">
              <h3 className="font-bold text-sm lg:text-base text-white">{option3Label}</h3>
            </div>
          )}
        </div>

        {/* Table Rows */}
        <div className="space-y-1 lg:space-y-2">
          {items.map((item, index) => (
            <div
              key={index}
              className={`grid ${cols} gap-2 lg:gap-4 bg-card border border-border rounded-lg overflow-hidden hover:border-[#ED1C24]/50 transition-colors`}
            >
              <div className="p-2 lg:p-4 font-bold text-sm lg:text-base text-foreground border-r border-border">
                {item.feature}
              </div>
              <div className="p-2 lg:p-4 text-xs lg:text-sm text-muted-foreground border-r border-border">
                {item.option1}
              </div>
              <div className={`p-2 lg:p-4 text-xs lg:text-sm text-muted-foreground${hasThreeOptions ? ' border-r border-border' : ''}`}>
                {item.option2}
              </div>
              {hasThreeOptions && (
                <div className="p-2 lg:p-4 text-xs lg:text-sm text-muted-foreground">
                  {item.option3}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}