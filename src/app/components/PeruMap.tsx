import { useState } from 'react';

interface Department {
  id: string;
  name: string;
  count: number;
  color: string;
}

interface PeruMapProps {
  onDepartmentClick?: (departmentId: string) => void;
}

export function PeruMap({ onDepartmentClick }: PeruMapProps) {
  const [hoveredDept, setHoveredDept] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const departments: Department[] = [
    { id: 'lima', name: 'Lima', count: 425, color: '#BF0909' },
    { id: 'arequipa', name: 'Arequipa', count: 318, color: '#9a0707' },
    { id: 'cusco', name: 'Cusco', count: 227, color: '#e84545' },
    { id: 'loreto', name: 'Loreto', count: 189, color: '#f06060' },
    { id: 'libertad', name: 'La Libertad', count: 156, color: '#f67c7c' },
    { id: 'piura', name: 'Piura', count: 134, color: '#fa9999' },
    { id: 'ancash', name: 'Ancash', count: 98, color: '#fcb5b5' },
    { id: 'otros', name: 'Otros', count: 106, color: '#fdd1d1' }
  ];

  const handleMouseEnter = (dept: Department, event: React.MouseEvent) => {
    setHoveredDept(dept.id);
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top
    });
  };

  const handleMouseLeave = () => {
    setHoveredDept(null);
  };

  const handleClick = (deptId: string) => {
    onDepartmentClick?.(deptId);
  };

  const getDepartment = (id: string) => departments.find(d => d.id === id);

  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 300 400" className="w-full h-full">
        {/* Loreto (Norte/Selva) */}
        <path
          d="M 150 20 L 280 80 L 270 150 L 200 140 L 150 120 Z"
          fill={hoveredDept === 'loreto' ? '#ff8080' : getDepartment('loreto')?.color}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer transition-all hover:opacity-80"
          onMouseEnter={(e) => handleMouseEnter(getDepartment('loreto')!, e)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('loreto')}
        />

        {/* Piura (Noroeste) */}
        <path
          d="M 50 60 L 120 40 L 150 80 L 100 100 Z"
          fill={hoveredDept === 'piura' ? '#ff9999' : getDepartment('piura')?.color}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer transition-all hover:opacity-80"
          onMouseEnter={(e) => handleMouseEnter(getDepartment('piura')!, e)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('piura')}
        />

        {/* La Libertad (Norte costa) */}
        <path
          d="M 100 100 L 150 80 L 170 130 L 120 150 Z"
          fill={hoveredDept === 'libertad' ? '#ff8080' : getDepartment('libertad')?.color}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer transition-all hover:opacity-80"
          onMouseEnter={(e) => handleMouseEnter(getDepartment('libertad')!, e)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('libertad')}
        />

        {/* Ancash (Centro costa) */}
        <path
          d="M 80 150 L 120 150 L 130 200 L 90 200 Z"
          fill={hoveredDept === 'ancash' ? '#ffb3b3' : getDepartment('ancash')?.color}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer transition-all hover:opacity-80"
          onMouseEnter={(e) => handleMouseEnter(getDepartment('ancash')!, e)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('ancash')}
        />

        {/* Lima (Centro) */}
        <path
          d="M 90 200 L 130 200 L 140 260 L 80 260 Z"
          fill={hoveredDept === 'lima' ? '#9a0707' : getDepartment('lima')?.color}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer transition-all hover:opacity-80"
          onMouseEnter={(e) => handleMouseEnter(getDepartment('lima')!, e)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('lima')}
        />

        {/* Cusco (Sur sierra) */}
        <path
          d="M 140 260 L 200 240 L 220 300 L 160 320 Z"
          fill={hoveredDept === 'cusco' ? '#ff8080' : getDepartment('cusco')?.color}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer transition-all hover:opacity-80"
          onMouseEnter={(e) => handleMouseEnter(getDepartment('cusco')!, e)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('cusco')}
        />

        {/* Arequipa (Sur costa) */}
        <path
          d="M 80 260 L 140 260 L 160 320 L 100 340 Z"
          fill={hoveredDept === 'arequipa' ? '#ff8080' : getDepartment('arequipa')?.color}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer transition-all hover:opacity-80"
          onMouseEnter={(e) => handleMouseEnter(getDepartment('arequipa')!, e)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('arequipa')}
        />

        {/* Otros departamentos (centro) */}
        <path
          d="M 130 200 L 200 180 L 200 240 L 140 260 Z"
          fill={hoveredDept === 'otros' ? '#ffe0e0' : getDepartment('otros')?.color}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer transition-all hover:opacity-80"
          onMouseEnter={(e) => handleMouseEnter(getDepartment('otros')!, e)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('otros')}
        />

        {/* Marcadores de ciudades principales */}
        <circle cx="110" cy="230" r="3" fill="#E2A615" stroke="#fff" strokeWidth="1" />
        <text x="110" y="245" fontSize="8" fill="#E2A615" textAnchor="middle" className="font-['Roboto',sans-serif] font-semibold">Lima</text>

        <circle cx="120" cy="120" r="2" fill="#E2A615" stroke="#fff" strokeWidth="1" />

        <circle cx="120" cy="310" r="2" fill="#E2A615" stroke="#fff" strokeWidth="1" />
      </svg>

      {/* Tooltip */}
      {hoveredDept && (
        <div
          className="fixed z-50 bg-[#294269] text-white px-3 py-2 rounded-lg shadow-xl pointer-events-none font-['Roboto',sans-serif]"
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y - 60}px`,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="text-sm font-semibold">{getDepartment(hoveredDept)?.name}</div>
          <div className="text-xs text-[#294269] font-bold">
            {getDepartment(hoveredDept)?.count} licitaciones
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
            <div className="border-8 border-transparent border-t-[#26292E]"></div>
          </div>
        </div>
      )}

      {/* Leyenda */}
      <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-md text-xs font-['Roboto',sans-serif]">
        <div className="font-semibold text-[#294269] mb-1">Licitaciones por región</div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#294269] rounded"></div>
          <span className="text-gray-700">Mayor</span>
          <div className="w-3 h-3 bg-[#b8d4ff] rounded ml-2"></div>
          <span className="text-gray-700">Menor</span>
        </div>
      </div>
    </div>
  );
}
