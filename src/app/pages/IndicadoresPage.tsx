import { useState } from 'react';
import { 
  ArrowLeft, 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Search,
  ChevronDown,
  Building2,
  FileText,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Clock
} from 'lucide-react';
import type { Page } from '../App';

interface IndicadoresPageProps {
  navigate: (page: Page) => void;
}

export function IndicadoresPage({ navigate }: IndicadoresPageProps) {
  const [entidad, setEntidad] = useState('');
  const [anio, setAnio] = useState('2026');
  const [mes, setMes] = useState('Todos');
  const [tipoProceso, setTipoProceso] = useState('Todos');

  const handleLimpiar = () => {
    setEntidad('');
    setAnio('2026');
    setMes('Todos');
    setTipoProceso('Todos');
  };

  const handleBuscar = () => {
    console.log('Buscando con:', { entidad, anio, mes, tipoProceso });
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50 font-['Roboto',sans-serif]">
      {/* Header institucional gob.pe */}
      <div className="bg-[#294269] text-white px-12 py-8">
        <button
          onClick={() => navigate({ type: 'home' })}
          className="flex items-center gap-2 text-white/70 hover:text-white mb-6 text-[13px] transition-colors"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </button>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-[#63c9c4] p-1.5 rounded-lg">
                <BarChart3 size={24} className="text-white" />
              </div>
              <h1 className="text-[32px] font-bold leading-tight">Indicadores de Convocatorias</h1>
            </div>
            <p className="text-white/70 text-[15px] max-w-2xl">
              Consulte la información estadística sobre los procesos de selección convocados por las entidades del Estado.
            </p>
          </div>
        </div>
      </div>

      <div className="px-12 py-8 max-w-7xl mx-auto space-y-10">
        
        {/* 1. SECCIÓN FILTROS */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-[12px] font-bold text-[#26292E] uppercase tracking-wider">Entidad</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ingrese el nombre de la entidad"
                  value={entidad}
                  onChange={(e) => setEntidad(e.target.value)}
                  className="w-full h-11 pl-4 pr-10 bg-white border border-gray-300 rounded-lg text-[14px] font-medium text-[#26292E] outline-none focus:border-[#63c9c4] transition-colors"
                />
                <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[12px] font-bold text-[#26292E] uppercase tracking-wider">Año</label>
              <div className="relative">
                <select 
                  value={anio}
                  onChange={(e) => setAnio(e.target.value)}
                  className="w-full h-11 pl-4 pr-10 bg-white border border-gray-300 rounded-lg text-[14px] font-medium text-[#26292E] appearance-none outline-none focus:border-[#63c9c4] transition-colors"
                >
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2023">2023</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[12px] font-bold text-[#26292E] uppercase tracking-wider">Mes</label>
              <div className="relative">
                <select 
                  value={mes}
                  onChange={(e) => setMes(e.target.value)}
                  className="w-full h-11 pl-4 pr-10 bg-white border border-gray-300 rounded-lg text-[14px] font-medium text-[#26292E] appearance-none outline-none focus:border-[#63c9c4] transition-colors"
                >
                  <option value="Todos">Todos</option>
                  <option value="1">Enero</option>
                  <option value="2">Febrero</option>
                  <option value="3">Marzo</option>
                  <option value="4">Abril</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[12px] font-bold text-[#26292E] uppercase tracking-wider">Tipo de proceso</label>
              <div className="relative">
                <select 
                  value={tipoProceso}
                  onChange={(e) => setTipoProceso(e.target.value)}
                  className="w-full h-11 pl-4 pr-10 bg-white border border-gray-300 rounded-lg text-[14px] font-medium text-[#26292E] appearance-none outline-none focus:border-[#63c9c4] transition-colors"
                >
                  <option value="Todos">Todos</option>
                  <option value="LP">Licitación Pública</option>
                  <option value="CP">Concurso Público</option>
                  <option value="AS">Adjudicación Simplificada</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
            <button 
              onClick={handleLimpiar}
              className="px-6 py-2.5 bg-white border border-gray-300 text-[#26292E] rounded-lg text-[14px] font-bold hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <RefreshCw size={16} />
              Limpiar
            </button>
            <button 
              onClick={handleBuscar}
              className="px-8 py-2.5 bg-[#63c9c4] text-white rounded-lg text-[14px] font-bold hover:bg-[#3F5578] transition-colors flex items-center gap-2 shadow-sm"
            >
              <Search size={16} />
              Buscar
            </button>
          </div>
        </div>

        {/* 2. CARDS (Tasa Ejecución, Índice, Tasa Menores) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-[14px] font-medium text-gray-500 leading-tight pr-4">Tasa de ejecución efectiva de convocatorias</h3>
              <div className="size-10 bg-red-50 rounded-full flex items-center justify-center text-[#294269] shrink-0">
                <PieChart size={20} />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-3">
                <span className="text-[32px] font-bold text-[#26292E] leading-none">82.5%</span>
                <span className="text-[12px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded flex items-center gap-1">
                  <TrendingUp size={12} /> +5.2%
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-[14px] font-medium text-gray-500 leading-tight pr-4">Índice de ejecución del presupuesto <br/><span className="text-[11px]">(programado vs ejecutado)</span></h3>
              <div className="size-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                <BarChart3 size={20} />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-[32px] font-bold text-[#26292E] leading-none">94.2%</span>
              </div>
              <p className="text-[12px] text-gray-500 font-medium">S/ 450M ejecutado de S/ 478M programado</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-[14px] font-medium text-gray-500 leading-tight pr-4">Tasa de ejecución de contratos menores</h3>
              <div className="size-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 shrink-0">
                <FileText size={20} />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-3">
                <span className="text-[32px] font-bold text-[#26292E] leading-none">68.4%</span>
                <span className="text-[12px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded flex items-center gap-1">
                  <TrendingUp size={12} className="rotate-180" /> -1.4%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CONTRATOS MENORES POR OBJETO */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-[16px] font-bold text-[#26292E] flex items-center gap-2">
              <div className="w-1.5 h-5 bg-[#63c9c4] rounded-full" />
              Contratos menores ejecutados por objeto de contratación
            </h2>
          </div>
          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            {[
              { label: 'Bienes', pct: 45, count: '1,450', amount: '12.5 M', color: 'bg-blue-500' },
              { label: 'Servicios', pct: 35, count: '2,120', amount: '18.2 M', color: 'bg-green-500' },
              { label: 'Consultoría de Obra', pct: 8, count: '340', amount: '5.4 M', color: 'bg-yellow-500' },
              { label: 'Obras', pct: 12, count: '120', amount: '8.9 M', color: 'bg-red-500' },
            ].map(item => (
              <div key={item.label} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-bold text-[#26292E]">{item.label}</span>
                  <span className="text-[14px] font-bold text-[#0056AC]">{item.pct}%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.pct}%` }} />
                </div>
                <div className="flex items-center justify-between text-[12px] text-gray-500 font-medium">
                  <span>{item.count} procesos</span>
                  <span>S/ {item.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. DETALLE POR TIPO DE PROCESO (Actualizado según image-32) */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-[16px] font-bold text-[#26292E] flex items-center gap-2">
              <div className="w-1.5 h-5 bg-[#294269] rounded-full" />
              Detalle por tipo de proceso
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-200">
                  <th className="px-4 py-4 text-[11px] font-bold text-[#26292E] uppercase tracking-wider">Tipo de Procesos</th>
                  <th className="px-4 py-4 text-[11px] font-bold text-[#26292E] uppercase tracking-wider text-center">Convocados</th>
                  <th className="px-4 py-4 text-[11px] font-bold text-[#26292E] uppercase tracking-wider text-center">Contratados</th>
                  <th className="px-4 py-4 text-[11px] font-bold text-[#26292E] uppercase tracking-wider text-center">Desiertos/nulos</th>
                  <th className="px-4 py-4 text-[11px] font-bold text-[#26292E] uppercase tracking-wider text-center">Tasa ejecución</th>
                  <th className="px-4 py-4 text-[11px] font-bold text-[#26292E] uppercase tracking-wider text-right">Monto adjudicado (S/)</th>
                  <th className="px-4 py-4 text-[11px] font-bold text-[#26292E] uppercase tracking-wider text-center">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'Licitación Pública', conv: 124, cont: 110, des: 14, tasa: '88.7%', amount: '45,230,000', status: 'Finalizado' },
                  { name: 'Concurso Público', conv: 85, cont: 78, des: 7, tasa: '91.8%', amount: '32,150,000', status: 'En Proceso' },
                  { name: 'Adjudicación Simplificada', conv: 542, cont: 490, des: 52, tasa: '90.4%', amount: '28,440,000', status: 'Finalizado' },
                  { name: 'Subasta Inversa Electrónica', conv: 320, cont: 295, des: 25, tasa: '92.2%', amount: '15,880,000', status: 'Finalizado' },
                  { name: 'Contratación Directa', conv: 45, cont: 45, des: 0, tasa: '100%', amount: '3,460,500', status: 'Finalizado' },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-red-50/40 transition-colors group cursor-pointer">
                    <td className="px-4 py-4 text-[13px] font-bold text-[#26292E] group-hover:text-[#63c9c4] transition-colors">
                      {item.name}
                    </td>
                    <td className="px-4 py-4 text-[13px] text-gray-600 text-center font-medium">
                      {item.conv}
                    </td>
                    <td className="px-4 py-4 text-[13px] text-gray-600 text-center font-medium">
                      {item.cont}
                    </td>
                    <td className="px-4 py-4 text-[13px] text-gray-400 text-center font-medium">
                      {item.des}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-[13px] font-bold text-[#26292E]">{item.tasa}</span>
                    </td>
                    <td className="px-4 py-4 text-[13px] text-[#26292E] font-bold text-right">
                      {item.amount}
                    </td>
                    <td className="px-4 py-4 text-center text-right">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        item.status === 'Finalizado' 
                        ? 'bg-green-50 text-green-700' 
                        : 'bg-blue-50 text-blue-700'
                      }`}>
                        {item.status === 'Finalizado' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Footer institucional */}
      <footer className="bg-[#294269] text-white py-6 px-12 text-[12px] border-t border-white/10 mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4">
          <div className="flex items-center gap-6">
            <span className="font-bold">Observatorio de Contrataciones del Estado</span>
            <span className="text-white/40">Sede Central: Av. Gregorio Escobedo cdra. 7 s/n Jesús María</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-white/40">© OSCE · SEACE 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
