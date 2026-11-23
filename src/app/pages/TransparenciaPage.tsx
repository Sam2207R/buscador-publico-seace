import { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  ChevronDown, 
  X, 
  Info, 
  Trophy, 
  AlertTriangle, 
  Scale, 
  Bell, 
  CheckCircle2, 
  BarChart3,
  Calendar,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  LineChart, Line, AreaChart, Area 
} from 'recharts';
import type { Page } from '../App';

interface TransparenciaPageProps {
  navigate: (page: Page) => void;
}

// 1. Componente de Progreso Circular (Donuts del Checklist)
function ChecklistDonut({ pct, label, status }: { pct: number; label: string; status: 'cumple' | 'parcial' | 'critico' }) {
  const color = status === 'cumple' ? '#15803D' : status === 'parcial' ? '#D97706' : '#DC2626';
  const bgColor = status === 'cumple' ? '#DCFCE7' : status === 'parcial' ? '#FEF3C7' : '#FEE2E2';
  
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative size-20">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={[{ value: pct }, { value: 100 - pct }]}
              innerRadius={28}
              outerRadius={38}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
            >
              <Cell fill={color} />
              <Cell fill="#F3F4F6" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[14px] font-bold text-[#26292E]">{pct}%</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[11px] font-bold text-[#26292E] mb-1 leading-tight">{label}</p>
        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
          status === 'cumple' ? 'bg-green-100 text-green-700' : 
          status === 'parcial' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
        }`}>
          {status === 'cumple' ? '✓ Cumple' : status === 'parcial' ? '⚠ Parcial' : '⚠ Crítico'}
        </span>
      </div>
    </div>
  );
}

// Data para gráficos
const dataPostorUnico = [
  { name: 'Salud', value: 35 },
  { name: 'Transp.', value: 28 },
  { name: 'Educ.', value: 42 },
  { name: 'Defensa', value: 15 },
  { name: 'Viv.', value: 22 },
  { name: 'Agri.', value: 31 }
];

const dataEvolucion = [
  { name: 'Ene', value: 65 },
  { name: 'Feb', value: 68 },
  { name: 'Mar', value: 72 },
  { name: 'Abr', value: 75 },
  { name: 'May', value: 82 },
  { name: 'Jun', value: 85 }
];

const dataApelaciones = [
  { name: 'Fundadas', value: 45, color: '#15803D' },
  { name: 'Infundadas', value: 30, color: '#9CA3AF' },
  { name: 'Improcedentes', value: 15, color: '#D97706' },
  { name: 'En trámite', value: 10, color: '#DC2626' }
];

const alertasIntegridad = [
  { ent: 'Gobierno Regional de Ucayali', desc: 'Contratos sin publicar en SEACE (OCDS)', risk: 'ALTO', date: '15/06/2026', area: 'Logística' },
  { ent: 'Municipalidad Provincial de Iquitos', desc: 'Postor único en 4 procesos consecutivos', risk: 'ALTO', date: '12/06/2026', area: 'Adquisiciones' },
  { ent: 'Hospital Regional de Lambayeque', desc: 'Apelación fundada por direccionamiento', risk: 'MEDIO', date: '10/06/2026', area: 'Médica' },
  { ent: 'UGEL Arequipa Norte', desc: 'Bases sin integrar fuera de plazo legal', risk: 'MEDIO', date: '08/06/2026', area: 'RR.HH.' },
  { ent: 'PRONIED – UE 108', desc: 'Diferencia en pagos SIAF vs Contrato', risk: 'MEDIO', date: '05/06/2026', area: 'Infraestructura' },
  { ent: 'Mun. Distrital Villa El Salvador', desc: 'Plazos de convocatoria reducidos', risk: 'MEDIO', date: '01/06/2026', area: 'Obras' },
];

export function TransparenciaPage({ navigate }: TransparenciaPageProps) {
  const [entidad, setEntidad] = useState('');

  return (
    <div className="flex-1 overflow-auto bg-[#F9FAFB] font-['Roboto',sans-serif]">
      
      {/* 2. BANNER PRINCIPAL (Fondo oscuro) */}
      <div className="bg-[#1F2937] text-white pt-10 pb-20 px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate({ type: 'home' })}
            className="flex items-center gap-2 text-[#294269] hover:text-white mb-8 text-[13px] font-bold transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </button>
          <div className="flex justify-between items-end mb-5">
            <div>
              <h1 className="text-[42px] font-bold leading-tight mb-4">Transparencia</h1>
              <p className="text-gray-400 text-[18px] max-w-2xl font-light">
                Indicadores de transparencia e integridad en las contrataciones públicas.
              </p>
            </div>
            {/* Escudo Institucional Mockup */}
            <div className="hidden lg:block opacity-20 transform translate-y-4">
              <svg className="size-40" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L2 7v10c0 5.5 4.5 10 10 10s10-4.5 10-10V7L12 2zm0 18c-4.4 0-8-3.6-8-8V8.3l8-4 8 4V12c0 4.4-3.6 8-8 8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 -mt-[50px] space-y-8 pb-20 relative z-10">
        
        {/* 3. FILA DE FILTROS (Tarjeta Flotante) */}
        <div className="bg-white rounded-[8px] border border-gray-200 shadow-2xl p-8 space-y-6">
          {/* Fila de inputs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2.5">
              <label className="text-[12px] font-bold text-[#26292E] uppercase tracking-wider">Entidad</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar entidad..."
                  value={entidad}
                  onChange={(e) => setEntidad(e.target.value)}
                  className="w-full h-12 pl-4 pr-10 border-2 border-gray-100 rounded-[8px] text-[14px] outline-none focus:border-[#63c9c4] transition-all placeholder:text-gray-300"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
            <div className="space-y-2.5">
              <label className="text-[12px] font-bold text-[#26292E] uppercase tracking-wider">Objeto</label>
              <div className="relative">
                <select className="w-full h-12 px-4 border-2 border-gray-100 rounded-[8px] text-[14px] outline-none appearance-none bg-white cursor-pointer hover:border-gray-200 transition-colors">
                  <option>Todos</option>
                  <option>Bienes</option>
                  <option>Servicios</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>
            <div className="space-y-2.5">
              <label className="text-[12px] font-bold text-[#26292E] uppercase tracking-wider">Año</label>
              <div className="relative">
                <select className="w-full h-12 px-4 border-2 border-gray-100 rounded-[8px] text-[14px] outline-none appearance-none bg-white cursor-pointer hover:border-gray-200 transition-colors">
                  <option>2026</option>
                  <option>2025</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>
            <div className="space-y-2.5">
              <label className="text-[12px] font-bold text-[#26292E] uppercase tracking-wider">Mes</label>
              <div className="relative">
                <select className="w-full h-12 px-4 border-2 border-gray-100 rounded-[8px] text-[14px] outline-none appearance-none bg-white cursor-pointer hover:border-gray-200 transition-colors">
                  <option>Junio</option>
                  <option>Mayo</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>
          </div>

          {/* Fila de botones */}
          <div className="flex justify-end gap-3 pt-2">
            <button 
              onClick={() => setEntidad('')}
              className="flex items-center justify-center gap-2 px-8 h-12 bg-white border-2 border-gray-100 rounded-[8px] text-gray-500 font-bold hover:bg-gray-50 hover:border-gray-300 hover:text-[#63c9c4] transition-all group" 
            >
              <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
              Limpiar
            </button>
            <button className="px-10 h-12 bg-[#294269] text-white rounded-[8px] font-bold flex items-center justify-center gap-2 hover:bg-[#3F5578] transition-all shadow-lg active:scale-95">
              <Search size={18} />
              Buscar
            </button>
          </div>
        </div>

        {/* 4. BARRA DE ESTADO */}
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-[6px] px-4 py-2.5 flex items-center gap-3">
          <Info size={16} className="text-[#1E40AF]" />
          <span className="text-[13px] font-medium text-[#1E40AF]">Mostrando todas las entidades · 2026 · Jun</span>
        </div>

        {/* 5. CUADRÍCULA DE MÉTRICAS (6 Tarjetas KPI) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Trophy, val: '85/100', label: 'Índice transparencia', color: 'text-blue-600' },
            { icon: AlertTriangle, val: '22%', label: 'Tasa postor único', color: 'text-red-600' },
            { icon: Scale, val: '4.8%', label: 'Apelaciones fundadas', color: 'text-amber-600' },
          ].map((kpi, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-[8px] p-4 flex flex-col items-center text-center shadow-sm">
              <div className="size-10 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                <kpi.icon size={20} className={kpi.color} />
              </div>
              <p className={`text-[20px] font-bold ${kpi.color} leading-none mb-1`}>{kpi.val}</p>
              <p className="text-[11px] text-gray-500 font-bold uppercase tracking-tight">{kpi.label}</p>
            </div>
          ))}
        </div>

        {/* 6. SECCIÓN DE GRÁFICOS ESTADÍSTICOS (2x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* A. Checklist OCDS */}
          <div className="bg-white border border-gray-200 rounded-[8px] p-6 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#26292E] uppercase tracking-wider mb-8">Checklist de Transparencia Activa</h3>
            <div className="flex justify-between items-start gap-4 flex-wrap">
              <ChecklistDonut pct={100} label="Convocatoria" status="cumple" />
              <ChecklistDonut pct={95} label="Bases" status="cumple" />
              <ChecklistDonut pct={68} label="Contratos" status="parcial" />
            </div>
          </div>

          {/* B. Postor Único por Sector */}
          <div className="bg-white border border-gray-200 rounded-[8px] p-6 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#26292E] uppercase tracking-wider mb-6">Tasa de postor único por sector</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataPostorUnico}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                  <XAxis dataKey="name" tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                  <YAxis tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{fill: '#F9FAFB'}} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {dataPostorUnico.map((entry, index) => (
                      <Cell key={index} fill={index % 2 === 0 ? '#C3002F' : '#D97706'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* C. Apelaciones */}
          <div className="bg-white border border-gray-200 rounded-[8px] p-6 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#26292E] uppercase tracking-wider mb-6">Apelaciones ante el Tribunal OSCE</h3>
            <div className="flex items-center h-[180px]">
              <ResponsiveContainer width="60%" height="100%">
                <PieChart>
                  <Pie
                    data={dataApelaciones}
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {dataApelaciones.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="w-[40%] space-y-2">
                {dataApelaciones.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="size-2.5 rounded-full" style={{backgroundColor: item.color}} />
                    <span className="text-[11px] text-gray-600 font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* D. Evolución Índice */}
          <div className="bg-white border border-gray-200 rounded-[8px] p-6 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#26292E] uppercase tracking-wider mb-6">Evolución del índice de transparencia</h3>
            <div className="h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dataEvolucion}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                  <XAxis dataKey="name" tick={{fontSize: 10}} axisLine={false} />
                  <YAxis tick={{fontSize: 10}} axisLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#C3002F" fill="#FEE2E2" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>


      </div>

      {/* Footer Final */}
      <footer className="bg-[#1F2937] text-white py-10 px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[18px] font-bold text-[#C3002F]">gob.pe</span>
            <div className="h-6 w-px bg-gray-600" />
            <span className="text-[13px] text-gray-400">Observatorio de Integridad en Contrataciones</span>
          </div>
          <div className="flex gap-8 text-[12px] text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Protección de Datos</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <span>© 2026 SEACE - OSCE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
