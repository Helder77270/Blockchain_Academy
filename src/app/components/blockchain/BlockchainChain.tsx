import { BlockchainBlock } from './BlockchainBlock';
import { ArrowRight } from 'lucide-react';

interface Block {
  blockNumber: number;
  hash?: string;
  previousHash?: string;
  timestamp?: string;
  data?: string;
  highlighted?: boolean;
}

interface BlockchainChainProps {
  blocks: Block[];
  className?: string;
}

export function BlockchainChain({ blocks, className = "" }: BlockchainChainProps) {
  return (
    <div className={`flex items-center gap-4 overflow-x-auto pt-4 pb-4 ${className}`}>
      {blocks.map((block, index) => (
        <div key={block.blockNumber} className="flex items-center gap-4">
          <BlockchainBlock {...block} />
          {index < blocks.length - 1 && (
            <ArrowRight className="size-8 text-[#6366f1] flex-shrink-0" strokeWidth={2} />
          )}
        </div>
      ))}
    </div>
  );
}
