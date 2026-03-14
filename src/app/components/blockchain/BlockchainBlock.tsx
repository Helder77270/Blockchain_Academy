import { Database, Hash, Clock, Shield, Layers, Gauge, Binary } from 'lucide-react';

interface BlockchainBlockProps {
  blockNumber: number;
  hash?: string;
  previousHash?: string;
  timestamp?: string;
  data?: string;
  nonce?: string;
  difficulty?: string;
  version?: string;
  merkleRoot?: string;
  highlighted?: boolean;
  className?: string;
}

export function BlockchainBlock({
  blockNumber,
  hash = "0x1a2b3c...",
  previousHash = "0x9d8e7f...",
  timestamp = "10:45:32",
  data = "Transaction Data",
  nonce,
  difficulty,
  version,
  merkleRoot,
  highlighted = false,
  className = ""
}: BlockchainBlockProps) {
  const showExtended = !!(nonce || difficulty || version || merkleRoot);

  return (
    <div 
      className={`
        relative bg-card border-2 rounded-lg p-4 ${showExtended ? 'min-w-[340px]' : 'min-w-[200px]'}
        ${highlighted ? 'border-[#6366f1] shadow-lg shadow-[#6366f1]/20' : 'border-border'}
        ${className}
      `}
    >
      {/* Block Number Badge */}
      <div className="absolute -top-3 left-4 bg-[#6366f1] text-white px-3 py-1 rounded-full text-xs font-mono">
        Block #{blockNumber}
      </div>
      
      <div className="mt-4 space-y-2.5">
        {/* Version */}
        {version && (
          <div className="flex items-start gap-2">
            <Layers className="size-4 text-[#f59e0b] mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground">Version</div>
              <div className="font-mono text-xs text-foreground/80">{version}</div>
            </div>
          </div>
        )}

        {/* Previous Hash */}
        <div className="flex items-start gap-2">
          <Hash className="size-4 text-[#8b5cf6] mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-xs text-muted-foreground">Prev Hash</div>
            <div className="font-mono text-xs text-foreground/80 truncate">{previousHash}</div>
          </div>
        </div>

        {/* Merkle Root */}
        {merkleRoot && (
          <div className="flex items-start gap-2">
            <Binary className="size-4 text-[#ED1C24] mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground">Merkle Root</div>
              <div className="font-mono text-xs text-foreground/80 truncate">{merkleRoot}</div>
            </div>
          </div>
        )}
        
        {/* Data */}
        <div className="flex items-start gap-2">
          <Database className="size-4 text-[#22d3ee] mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-xs text-muted-foreground">Data</div>
            <div className="text-sm text-foreground truncate">{data}</div>
          </div>
        </div>
        
        {/* Timestamp */}
        <div className="flex items-start gap-2">
          <Clock className="size-4 text-[#10b981] mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <div className="text-xs text-muted-foreground">Timestamp</div>
            <div className="text-sm text-foreground/80">{timestamp}</div>
          </div>
        </div>

        {/* Difficulty */}
        {difficulty && (
          <div className="flex items-start gap-2">
            <Gauge className="size-4 text-[#f59e0b] mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground">Difficulty</div>
              <div className="font-mono text-xs text-foreground/80">{difficulty}</div>
            </div>
          </div>
        )}

        {/* Nonce */}
        {nonce && (
          <div className="flex items-start gap-2">
            <Shield className="size-4 text-[#39B54A] mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground">Nonce</div>
              <div className="font-mono text-xs text-foreground/80">{nonce}</div>
            </div>
          </div>
        )}
        
        {/* Hash */}
        <div className="pt-2 border-t border-border">
          <div className="text-xs text-muted-foreground mb-1">Block Hash</div>
          <div className="font-mono text-xs text-[#6366f1] truncate">{hash}</div>
        </div>
      </div>
    </div>
  );
}
