import { Landmark } from 'lucide-react';

interface MicroVaultCalloutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Running case-study callout for the Project Management course (Course 04).
 *
 * MicroVault — a three-person startup building an over-collateralized USDC
 * lending protocol on an Ethereum L2 — is introduced on the Learning
 * Objectives page and then applied on every content slide via this box.
 * Keep the copy inside to 1–3 sentences: how this slide's concept plays out
 * for MicroVault, ending with the decision the team takes ("We proceed by…").
 */
export function MicroVaultCallout({ children, className = '' }: MicroVaultCalloutProps) {
  return (
    <div className={`bg-[#f97316]/10 border-l-4 border-[#f97316] rounded-r-lg p-3 lg:p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <Landmark className="size-5 shrink-0 text-[#f97316] mt-0.5" />
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-black uppercase tracking-wider text-[#f97316] mb-0.5">
            Case Study — MicroVault
          </div>
          <div className="text-sm text-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
}
