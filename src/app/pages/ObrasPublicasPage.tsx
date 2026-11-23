import { ArrowLeft, Download, AlertTriangle, TrendingDown, Percent } from 'lucide-react';
import type { Page } from '../App';

interface ObrasPublicasPageProps {
  navigate: (page: Page) => void;
}

const obrasDestacadas = [
  {
    nombre: 'Construcción Hospital Apoyo (Piura)',
    idec: '847593',
    monto: 'S/ 186M',
    avanceFisico: 42,
    avanceFinanciero: 65,
    estado: 'riesgo',
    estadoLabel: null,
  },
  {
    nombre: 'Carretera Tramo II (Cajamarca)',
    idec: '112233',
    monto: 'S/ 45M',
    avanceFisico: 0,
    avanceFinanciero: 0,
    estado: 'paralizada',
    estadoLabel: 'Paralizada (Arbitraje)',
  },
  {
    nombre: 'Ampliación Red Vial Loreto',
    idec: '334421',
    monto: 'S/ 98M',
    avanceFisico: 28,
    avanceFinanciero: 51,
    estado: 'riesgo',
    estadoLabel: null,
  },
  {
    nombre: 'Saneamiento Básico Puno',
    idec: '556677',
    monto: 'S/ 32M',
    avanceFisico: 0,
    avanceFinanciero: 0,
    estado: 'paralizada',
    estadoLabel: 'Paralizada (Arbitraje)',
  },
];

// Map dots — colored circles representing obra locations
const mapDots = [
  { x: 38, y: 28, color: '#BF0909', label: 'Piura' },
  { x: 52, y: 35, color: '#e2a615', label: 'Cajamarca' },
  { x: 28, y: 55, color: '#BF0909', label: 'La Libertad' },
  { x: 65, y: 60, color: '#22c55e', label: 'Loreto' },
  { x: 42, y: 72, color: '#e2a615', label: 'Lima' },
  { x: 35, y: 85, color: '#BF0909', label: 'Puno' },
];

export function ObrasPublicasPage({ navigate }: ObrasPublicasPageProps) {
  return (
    <div className="flex-1 overflow-auto bg-[#f7f7f5] font-['Roboto',sans-serif]">

      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 px-8 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate({ type: 'home' })}
          className="flex items-center gap-2 text-[#294269] hover:text-[#9a0707] text-[13px] font-medium transition-colors"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </button>
        <button className="flex items-center gap-2 bg-[#294269] text-white text-[13px] font-semibold px-4 py-2 rounded-[6px] hover:bg-black transition-colors">
          <Download size={14} />
          Descargar HTML
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">

        <h1 className="text-[26px] font-bold text-[#26292E] mb-6">
          Mapa de Ejecución de Infraestructura
        </h1>

        {/* KPI cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-[8px] p-5 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
              Obras Paralizadas Nacional
            </p>
            <p className="text-[32px] font-bold text-[#26292E] leading-none mb-2">8.5%</p>
            <div className="flex items-center gap-1.5">
              <AlertTriangle size={13} className="text-[#294269] shrink-0" />
              <p className="text-[12px] font-medium text-[#294269]">1,420 obras detenidas (&gt;30 días)</p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-[8px] p-5 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
              Brecha Física-Financiera Prom.
            </p>
            <p className="text-[32px] font-bold text-[#26292E] leading-none mb-2">-12.4%</p>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#e2a615] shrink-0" />
              <p className="text-[12px] font-medium text-[#e2a615]">Dinero pagado supera el avance físico</p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-[8px] p-5 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
              Índice de Adicionales
            </p>
            <p className="text-[32px] font-bold text-[#26292E] leading-none mb-2">18%</p>
            <div className="flex items-center gap-1.5">
              <Percent size={13} className="text-gray-400 shrink-0" />
              <p className="text-[12px] font-medium text-gray-500">Obras con sobrecostos aprobados</p>
            </div>
          </div>
        </div>

        {/* Map + Obras destacadas */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Map panel */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-[8px] shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-[12px] font-semibold text-gray-500 font-['Roboto',sans-serif]">
                Vista: Costa Norte (Piura - Lambayeque)
              </p>
            </div>
            <div className="relative bg-[#e8eef4] p-2" style={{ minHeight: 340 }}>
              {/* Grid lines to simulate map */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="#94a3b8" strokeWidth="0.3" />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="#94a3b8" strokeWidth="0.3" />
                ))}
                {/* Coastline-ish shape */}
                <path d="M30 5 Q45 15 40 30 Q50 45 45 60 Q55 75 50 95" stroke="#64748b" strokeWidth="1.5" fill="none" strokeDasharray="2,2" />
              </svg>

              {/* Dot legend */}
              <div className="absolute bottom-3 left-3 bg-white/90 rounded-[6px] px-3 py-2 text-[10px] font-['Roboto',sans-serif] shadow-sm space-y-1">
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#63c9c4]" /><span className="text-gray-600">Alto riesgo</span></div>
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#e2a615]" /><span className="text-gray-600">Riesgo medio</span></div>
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" /><span className="text-gray-600">Normal</span></div>
              </div>

              {/* Dots */}
              {mapDots.map((dot, i) => (
                <div
                  key={i}
                  className="absolute group cursor-pointer"
                  style={{ left: `${dot.x}%`, top: `${dot.y}%`, transform: 'translate(-50%,-50%)' }}
                >
                  <div
                    className="w-3.5 h-3.5 rounded-full border-2 border-white shadow-md transition-transform group-hover:scale-150"
                    style={{ backgroundColor: dot.color }}
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 bg-[#294269] text-white text-[9px] px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow">
                    {dot.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Obras destacadas */}
          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-[8px] shadow-sm p-5">
            <h2 className="text-[15px] font-bold text-[#26292E] mb-4">
              Obras Destacadas (Riesgo Alto)
            </h2>
            <div className="space-y-5">
              {obrasDestacadas.map((obra, i) => (
                <div key={i} className="border-b border-gray-100 last:border-0 pb-5 last:pb-0">
                  <button className="text-[14px] font-bold text-[#26292E] hover:text-[#63c9c4] transition-colors text-left mb-0.5">
                    {obra.nombre}
                  </button>
                  <p className="text-[11px] text-gray-400 mb-2 font-['Roboto',sans-serif]">
                    IDEC: {obra.idec} · Monto: {obra.monto}
                  </p>

                  {obra.estado === 'riesgo' && (
                    <div>
                      <p className="text-[11px] text-[#294269] font-semibold mb-1.5 font-['Roboto',sans-serif]">
                        Avance Físico ({obra.avanceFisico}%) vs Financiero ({obra.avanceFinanciero}%)
                      </p>
                      {/* Dual progress bar */}
                      <div className="space-y-1">
                        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                          <div
                            className="h-full bg-[#63c9c4] rounded-full transition-all"
                            style={{ width: `${obra.avanceFisico}%` }}
                          />
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                          <div
                            className="h-full bg-gray-400 rounded-full transition-all"
                            style={{ width: `${obra.avanceFinanciero}%` }}
                          />
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#63c9c4]" /><span className="text-[10px] text-gray-500">Físico</span></div>
                          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-400" /><span className="text-[10px] text-gray-500">Financiero</span></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {obra.estado === 'paralizada' && (
                    <div className="flex items-center gap-1.5">
                      <TrendingDown size={13} className="text-[#294269]" />
                      <span className="inline-block bg-[#63c9c4]/10 text-[#294269] border border-[#63c9c4]/30 rounded-[4px] px-2.5 py-0.5 text-[11px] font-bold font-['Roboto',sans-serif]">
                        {obra.estadoLabel}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
