import { ReactNode } from 'react';

interface TitleSlideProps {
  sectionNumber?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  gradient?: string;
}

export function TitleSlide({
  sectionNumber,
  title,
  subtitle,
  icon,
  gradient = "from-[#ED1C24] to-[#39B54A]"
}: TitleSlideProps) {
  return (
    <div className="slide-template w-full items-center justify-center p-6 lg:p-12 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(237,28,36,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(237,28,36,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Gradient Orb */}
      <div className={`absolute top-1/4 right-1/4 size-64 lg:size-96 bg-gradient-to-br ${gradient} opacity-20 blur-3xl rounded-full`} />

      <div className="relative z-10 text-center max-w-4xl mx-auto flex-1 flex flex-col items-center justify-center">
        {sectionNumber && (
          <div className="inline-block mb-3 lg:mb-4 px-4 py-2 rounded-full bg-[#ED1C24]/20 border border-[#ED1C24]">
            <span className="text-[#ED1C24] font-mono">{sectionNumber}</span>
          </div>
        )}

        {icon && (
          <div className="flex justify-center mb-4 lg:mb-6">
            {icon}
          </div>
        )}

        <h1 className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 pb-2 bg-gradient-to-r from-[#ED1C24] via-[#39B54A] to-[#ffffff] bg-clip-text text-transparent">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base lg:text-xl text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}