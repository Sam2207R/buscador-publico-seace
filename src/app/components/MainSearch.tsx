import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface MainSearchProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 2026 - 2004 + 1 }, (_, i) => 2026 - i);

export function MainSearch({ value, onChange, onSearch }: MainSearchProps) {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  return (
    <div className="mb-6">
      <div className="flex items-stretch max-w-4xl mx-auto border-2 border-gray-300 rounded-lg focus-within:border-[#294269] shadow-sm bg-white">
        {/* Year Selector */}
        <div className="relative shrink-0">
          <button
            onClick={() => setShowYearDropdown(!showYearDropdown)}
            className="flex items-center gap-1.5 px-4 h-full bg-[#294269] text-white hover:bg-[#3a3f46] transition-colors font-['Roboto',sans-serif] text-[15px] font-semibold rounded-l-[6px]"
          >
            <span>{selectedYear}</span>
            <ChevronDown size={13} className={`transition-transform ${showYearDropdown ? 'rotate-180' : ''}`} />
          </button>
          {showYearDropdown && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setShowYearDropdown(false)} />
              <div className="absolute left-0 top-full mt-1 w-24 bg-white border border-gray-200 rounded-[8px] shadow-xl z-20 max-h-56 overflow-y-auto">
                {YEARS.map((year) => (
                  <button
                    key={year}
                    onClick={() => { setSelectedYear(year); setShowYearDropdown(false); }}
                    className={`w-full text-left px-4 py-2 text-[13px] hover:bg-red-50 hover:text-[#63c9c4] transition-colors font-['Roboto',sans-serif] ${
                      year === selectedYear ? 'bg-[#63c9c4] text-white font-semibold' : 'text-[#26292E]'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="w-px bg-gray-200 my-2" />

        {/* Text Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
          placeholder="Buscar por código, entidad, descripción, tipo de procedimiento..."
          className="flex-1 px-5 py-4 text-base bg-transparent outline-none font-['Roboto',sans-serif] text-[#26292E] placeholder-gray-400"
        />

        {/* Search Button */}
        <button
          onClick={onSearch}
          className="shrink-0 px-5 bg-[#63c9c4] text-white hover:bg-[#3F5578] transition-colors flex items-center justify-center rounded-r-[6px]"
        >
          <Search size={20} />
        </button>
      </div>
    </div>
  );
}
