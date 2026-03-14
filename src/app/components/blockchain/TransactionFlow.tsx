import { ArrowRight, User, Wallet } from 'lucide-react';

interface TransactionFlowProps {
  from: string;
  to: string;
  amount: string;
  status?: 'pending' | 'confirmed' | 'failed';
  className?: string;
}

export function TransactionFlow({
  from,
  to,
  amount,
  status = 'confirmed',
  className = ""
}: TransactionFlowProps) {
  const statusColors = {
    pending: 'border-[#f59e0b] bg-[#f59e0b]/10',
    confirmed: 'border-[#10b981] bg-[#10b981]/10',
    failed: 'border-[#ef4444] bg-[#ef4444]/10'
  };
  
  const statusTextColors = {
    pending: 'text-[#f59e0b]',
    confirmed: 'text-[#10b981]',
    failed: 'text-[#ef4444]'
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Sender */}
      <div className="flex flex-col items-center gap-2">
        <div className="size-16 rounded-full bg-[#6366f1]/20 border-2 border-[#6366f1] flex items-center justify-center">
          <User className="size-8 text-[#6366f1]" />
        </div>
        <div className="text-center">
          <div className="text-xs text-muted-foreground">From</div>
          <div className="font-mono text-xs text-foreground">{from}</div>
        </div>
      </div>
      
      {/* Arrow with Amount */}
      <div className="flex-1 flex flex-col items-center gap-2">
        <ArrowRight className="size-8 text-[#22d3ee]" strokeWidth={2} />
        <div className={`px-4 py-2 rounded-lg border-2 ${statusColors[status]}`}>
          <div className="font-mono font-bold text-foreground">{amount}</div>
          <div className={`text-xs uppercase ${statusTextColors[status]}`}>{status}</div>
        </div>
      </div>
      
      {/* Receiver */}
      <div className="flex flex-col items-center gap-2">
        <div className="size-16 rounded-full bg-[#8b5cf6]/20 border-2 border-[#8b5cf6] flex items-center justify-center">
          <Wallet className="size-8 text-[#8b5cf6]" />
        </div>
        <div className="text-center">
          <div className="text-xs text-muted-foreground">To</div>
          <div className="font-mono text-xs text-foreground">{to}</div>
        </div>
      </div>
    </div>
  );
}
