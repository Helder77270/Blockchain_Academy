import { AlertCircle, Info, Lightbulb, AlertTriangle } from 'lucide-react';

interface CalloutBoxProps {
  type?: 'info' | 'warning' | 'tip' | 'important';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function CalloutBox({ 
  type = 'info', 
  title, 
  children, 
  className = "" 
}: CalloutBoxProps) {
  const styles = {
    info: {
      bg: 'bg-[#3b82f6]/10',
      border: 'border-[#3b82f6]',
      icon: <Info className="size-5 text-[#3b82f6]" />,
      titleColor: 'text-[#3b82f6]'
    },
    warning: {
      bg: 'bg-[#f59e0b]/10',
      border: 'border-[#f59e0b]',
      icon: <AlertTriangle className="size-5 text-[#f59e0b]" />,
      titleColor: 'text-[#f59e0b]'
    },
    tip: {
      bg: 'bg-[#10b981]/10',
      border: 'border-[#10b981]',
      icon: <Lightbulb className="size-5 text-[#10b981]" />,
      titleColor: 'text-[#10b981]'
    },
    important: {
      bg: 'bg-[#8b5cf6]/10',
      border: 'border-[#8b5cf6]',
      icon: <AlertCircle className="size-5 text-[#8b5cf6]" />,
      titleColor: 'text-[#8b5cf6]'
    }
  };

  const style = styles[type];

  return (
    <div className={`${style.bg} border-l-4 ${style.border} rounded-r-lg p-4 ${className}`}>
      <div className="flex items-start gap-3">
        {style.icon}
        <div className="flex-1">
          {title && (
            <div className={`font-bold ${style.titleColor} mb-1`}>{title}</div>
          )}
          <div className="text-sm text-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
}
