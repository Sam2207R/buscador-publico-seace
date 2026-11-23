import { useState, useRef, useEffect } from 'react';
import type { Herramienta } from './mockData';
import { herramientaStyle } from './mockData';

interface ActPrepBadgeProps {
  herramientas: Herramienta[];
  code: string;
}

export function ActPrepBadge({ herramientas, code }: ActPrepBadgeProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (herramientas.length === 0) return null;

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
        className="flex items-center gap-1 px-2 py-0.5 bg-gray-300 text-gray-700 rounded text-[10px] font-semibold font-['Roboto',sans-serif] border border-gray-300 hover:bg-gray-400 hover:text-white transition-colors"
      >
        <span>ActPrep</span>
        {/* Badge count — yellow circle like image */}
        <span className="flex items-center justify-center bg-[#e2a615] text-[#26292E] rounded-full w-4 h-4 text-[9px] font-bold leading-none">
          {herramientas.length}
        </span>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 z-50 w-60 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-3 pb-1">
            <span className="text-[14px] font-bold text-[#26292E] font-['Roboto',sans-serif]">ActPrep</span>
            <span className="flex items-center justify-center bg-[#e2a615] text-[#26292E] rounded-full w-5 h-5 text-[10px] font-bold shrink-0">
              {herramientas.length}
            </span>
          </div>
          <p className="px-4 pb-2.5 text-[10px] text-gray-400 font-['Roboto',sans-serif] border-b border-gray-100">
            Herramientas de actuaciones preparatorias
          </p>

          {/* Herramientas list */}
          <div className="py-1">
            {herramientas.map((h, idx) => {
              const cfg = herramientaStyle[h];
              return (
                <div key={idx} className="flex items-center px-4 py-2.5 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${cfg.dot}`} />
                  <span className="text-[13px] text-[#26292E] font-['Roboto',sans-serif] ml-2.5">{h}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
