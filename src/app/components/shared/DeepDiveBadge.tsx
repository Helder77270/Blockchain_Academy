import { Layers } from 'lucide-react';

/**
 * Badge marking supplementary "Deep Dive" slides in the Project Management
 * course — material kept beyond the core curriculum flow. Render it next to
 * the slide's eyebrow label so students can tell the main narrative from
 * optional depth.
 */
export function DeepDiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#8b5cf6]/15 text-[#8b5cf6] border border-[#8b5cf6]/30">
      <Layers className="size-3" />
      Deep Dive — Supplementary
    </span>
  );
}
