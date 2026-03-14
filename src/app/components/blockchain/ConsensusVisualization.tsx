interface ConsensusVisualizationProps {
  mechanism: 'pow' | 'pos' | 'dpos';
  className?: string;
}

export function ConsensusVisualization({ 
  mechanism, 
  className = "" 
}: ConsensusVisualizationProps) {
  if (mechanism === 'pow') return <PowDiagram className={className} />;
  if (mechanism === 'pos') return <PosDiagram className={className} />;
  return <DPosDiagram className={className} />;
}

/* ─── Proof of Work ─── */
function PowDiagram({ className = "" }: { className?: string }) {
  const miners = [
    { label: "Miner A", hash: "78.3 TH/s", color: "#ED1C24", pct: 35 },
    { label: "Miner B", hash: "54.1 TH/s", color: "#f59e0b", pct: 24 },
    { label: "Miner C", hash: "41.7 TH/s", color: "#6366f1", pct: 19 },
    { label: "Pool D",  hash: "49.2 TH/s", color: "#39B54A", pct: 22 },
  ];

  return (
    <div className={`w-full ${className}`}>
      {/* Race visualization */}
      <div className="space-y-3 mb-6">
        {miners.map((m) => (
          <div key={m.label} className="flex items-center gap-3">
            <div className="w-20 text-xs font-bold text-foreground shrink-0">{m.label}</div>
            <div className="flex-1 h-7 bg-muted/40 rounded-full overflow-hidden relative">
              <div
                className="h-full rounded-full flex items-center justify-end pr-2 transition-all duration-700"
                style={{ width: `${m.pct}%`, background: m.color }}
              >
                <span className="text-[10px] font-mono text-white font-bold">{m.hash}</span>
              </div>
            </div>
            <div className="w-10 text-xs text-muted-foreground text-right">{m.pct}%</div>
          </div>
        ))}
      </div>

      {/* Process flow */}
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="p-2 bg-[#ED1C24]/10 rounded-lg border border-[#ED1C24]/30">
          <div className="text-lg mb-1">⛏️</div>
          <div className="text-[10px] font-bold text-foreground">Increment Nonce</div>
          <div className="text-[9px] text-muted-foreground">Try billions of values</div>
        </div>
        <div className="p-2 bg-[#f59e0b]/10 rounded-lg border border-[#f59e0b]/30">
          <div className="text-lg mb-1">🔢</div>
          <div className="text-[10px] font-bold text-foreground">Hash Header</div>
          <div className="text-[9px] text-muted-foreground">SHA-256(SHA-256(header))</div>
        </div>
        <div className="p-2 bg-[#6366f1]/10 rounded-lg border border-[#6366f1]/30">
          <div className="text-lg mb-1">🎯</div>
          <div className="text-[10px] font-bold text-foreground">Check Target</div>
          <div className="text-[9px] text-muted-foreground">hash &lt; difficulty target?</div>
        </div>
        <div className="p-2 bg-[#39B54A]/10 rounded-lg border border-[#39B54A]/30">
          <div className="text-lg mb-1">✅</div>
          <div className="text-[10px] font-bold text-foreground">Block Found!</div>
          <div className="text-[9px] text-muted-foreground">Broadcast + reward</div>
        </div>
      </div>

      {/* Difficulty adjustment note */}
      <div className="mt-4 p-3 bg-card rounded-lg border border-border text-center">
        <span className="text-xs text-muted-foreground">
          <span className="font-bold text-foreground">Difficulty adjusts every 2,016 blocks</span> (~2 weeks) to maintain a ~10 min block time.
          More hash power → higher difficulty → more leading zeros required.
        </span>
      </div>
    </div>
  );
}

/* ─── Proof of Stake ─── */
function PosDiagram({ className = "" }: { className?: string }) {
  const validators = [
    { label: "Validator A", stake: "32,000 ETH", color: "#6366f1", pct: 40, selected: true },
    { label: "Validator B", stake: "16,000 ETH", color: "#8b5cf6", pct: 20, selected: false },
    { label: "Validator C", stake: "24,000 ETH", color: "#a78bfa", pct: 30, selected: false },
    { label: "Validator D", stake: "8,000 ETH",  color: "#c4b5fd", pct: 10, selected: false },
  ];

  return (
    <div className={`w-full ${className}`}>
      {/* Stake distribution */}
      <div className="space-y-3 mb-6">
        {validators.map((v) => (
          <div key={v.label} className="flex items-center gap-3">
            <div className="w-24 text-xs font-bold text-foreground shrink-0 flex items-center gap-1">
              {v.selected && <span className="text-[#39B54A]">★</span>}
              {v.label}
            </div>
            <div className="flex-1 h-7 bg-muted/40 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full flex items-center justify-end pr-2"
                style={{
                  width: `${v.pct}%`,
                  background: v.selected ? '#39B54A' : v.color,
                  boxShadow: v.selected ? '0 0 12px #39B54A60' : 'none'
                }}
              >
                <span className="text-[10px] font-mono text-white font-bold">{v.stake}</span>
              </div>
            </div>
            <div className="w-10 text-xs text-muted-foreground text-right">{v.pct}%</div>
          </div>
        ))}
      </div>

      {/* Process flow */}
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="p-2 bg-[#6366f1]/10 rounded-lg border border-[#6366f1]/30">
          <div className="text-lg mb-1">🔒</div>
          <div className="text-[10px] font-bold text-foreground">Lock Stake</div>
          <div className="text-[9px] text-muted-foreground">Deposit tokens as collateral</div>
        </div>
        <div className="p-2 bg-[#39B54A]/10 rounded-lg border border-[#39B54A]/30">
          <div className="text-lg mb-1">🎲</div>
          <div className="text-[10px] font-bold text-foreground">Random Selection</div>
          <div className="text-[9px] text-muted-foreground">Weighted by stake + randomness</div>
        </div>
        <div className="p-2 bg-[#f59e0b]/10 rounded-lg border border-[#f59e0b]/30">
          <div className="text-lg mb-1">📝</div>
          <div className="text-[10px] font-bold text-foreground">Propose Block</div>
          <div className="text-[9px] text-muted-foreground">Committee attests validity</div>
        </div>
        <div className="p-2 bg-[#22d3ee]/10 rounded-lg border border-[#22d3ee]/30">
          <div className="text-lg mb-1">💰</div>
          <div className="text-[10px] font-bold text-foreground">Reward / Slash</div>
          <div className="text-[9px] text-muted-foreground">Honest → reward, cheat → slashed</div>
        </div>
      </div>

      {/* Slashing note */}
      <div className="mt-4 p-3 bg-card rounded-lg border border-border text-center">
        <span className="text-xs text-muted-foreground">
          <span className="font-bold text-[#ED1C24]">Slashing:</span> Validators who sign conflicting blocks or go offline lose part of their stake.
          Ethereum requires <span className="font-bold text-foreground">32 ETH minimum</span> to run a validator.
        </span>
      </div>
    </div>
  );
}

/* ─── Delegated Proof of Stake / BFT ─── */
function DPosDiagram({ className = "" }: { className?: string }) {
  const delegates = [
    { label: "Delegate 1", votes: "12M", color: "#ED1C24", pct: 28 },
    { label: "Delegate 2", votes: "10M", color: "#f59e0b", pct: 24 },
    { label: "Delegate 3", votes: "9M",  color: "#39B54A", pct: 21 },
  ];

  return (
    <div className={`w-full ${className}`}>
      {/* Top elected delegates */}
      <div className="space-y-3 mb-6">
        {delegates.map((d) => (
          <div key={d.label} className="flex items-center gap-3">
            <div className="w-24 text-xs font-bold text-foreground shrink-0">{d.label}</div>
            <div className="flex-1 h-7 bg-muted/40 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full flex items-center justify-end pr-2"
                style={{ width: `${d.pct * 2.5}%`, background: d.color }}
              >
                <span className="text-[10px] font-mono text-white font-bold">{d.votes} votes</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Flow */}
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="p-2 bg-[#6366f1]/10 rounded-lg border border-[#6366f1]/30">
          <div className="text-lg mb-1">🗳️</div>
          <div className="text-[10px] font-bold text-foreground">Token Holders Vote</div>
          <div className="text-[9px] text-muted-foreground">Elect a fixed set of delegates</div>
        </div>
        <div className="p-2 bg-[#ED1C24]/10 rounded-lg border border-[#ED1C24]/30">
          <div className="text-lg mb-1">👥</div>
          <div className="text-[10px] font-bold text-foreground">Top N Elected</div>
          <div className="text-[9px] text-muted-foreground">e.g. 21 (EOS) or 101 (Lisk)</div>
        </div>
        <div className="p-2 bg-[#39B54A]/10 rounded-lg border border-[#39B54A]/30">
          <div className="text-lg mb-1">🔄</div>
          <div className="text-[10px] font-bold text-foreground">Round-Robin Blocks</div>
          <div className="text-[9px] text-muted-foreground">Delegates take turns producing</div>
        </div>
        <div className="p-2 bg-[#f59e0b]/10 rounded-lg border border-[#f59e0b]/30">
          <div className="text-lg mb-1">⚡</div>
          <div className="text-[10px] font-bold text-foreground">BFT Finality</div>
          <div className="text-[9px] text-muted-foreground">2/3 supermajority confirms</div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-card rounded-lg border border-border text-center">
        <span className="text-xs text-muted-foreground">
          <span className="font-bold text-foreground">DPoS + BFT</span> trades decentralization for speed: fewer validators = faster consensus,
          but token holders can <span className="font-bold text-[#ED1C24]">vote out</span> bad delegates at any time.
        </span>
      </div>
    </div>
  );
}
