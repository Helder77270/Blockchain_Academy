import { Server, Zap } from 'lucide-react';

interface NetworkNodeProps {
  label?: string;
  status?: 'active' | 'inactive' | 'syncing';
  className?: string;
}

export function NetworkNode({
  label = "Node",
  status = 'active',
  className = ""
}: NetworkNodeProps) {
  const statusStyles = {
    active: 'border-[#10b981] shadow-[#10b981]/30',
    inactive: 'border-muted-foreground/30 shadow-none',
    syncing: 'border-[#f59e0b] shadow-[#f59e0b]/30'
  };

  return (
    <div className={`relative ${className}`}>
      <div 
        className={`
          size-20 rounded-full border-4 flex items-center justify-center
          bg-card shadow-lg
          ${statusStyles[status]}
          ${status === 'active' ? 'animate-pulse' : ''}
        `}
      >
        <Server className="size-10 text-foreground" />
      </div>
      
      {/* Status Indicator */}
      {status === 'active' && (
        <div className="absolute -top-1 -right-1 size-6 rounded-full bg-[#10b981] border-2 border-background flex items-center justify-center">
          <Zap className="size-3 text-white" fill="white" />
        </div>
      )}
      
      <div className="text-center mt-2 text-sm text-foreground">{label}</div>
    </div>
  );
}
