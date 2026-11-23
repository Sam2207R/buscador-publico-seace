import { useState } from 'react';
import { 
  ArrowLeft, 
  Search,
  ChevronDown,
  Building2,
  RefreshCw,
  Landmark,
  Map,
  Users,
  Scale,
  BookOpen,
  Activity,
  HardHat,
  Bus,
  Briefcase,
  HeartPulse,
  Droplets,
  Library
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import type { Page } from '../App';

interface ExplorePageProps {
  navigate: (page: Page) => void;
}

const pieData = [
  { name: 'Bienes', value: 45, color: '#BF0909' },
  { name: 'Servicios', value: 35, color: '#26292E' },
  { name: 'Obras', value: 15, color: '#575b63' },
  { name: 'Consultoría', value: 5, color: '#9ca3af' }
];

const barData = [
  { mes: 'Ene', monto: 850 }, { mes: 'Feb', monto: 920 }, { mes: 'Mar', monto: 1100 },
  { mes: 'Abr', monto: 1050 }, { mes: 'May', monto: 1250 }, { mes: 'Jun', monto: 1180 },
  { mes: 'Jul', monto: 1350 }, { mes: 'Ago', monto: 1420 }, { mes: 'Sep', monto: 1550 },
  { mes: 'Oct', monto: 1680 }, { mes: 'Nov', monto: 1800 }, { mes: 'Dic', monto: 1950 }
];

const topEntidadesNacional = [
  { entidad: 'Ministerio de Transportes y Comunicaciones', procesos: 1240, monto: '5,420,000,000', pct: 28.5 },
  { entidad: 'Ministerio de Salud', procesos: 3100, monto: '3,150,000,000', pct: 16.5 },
  { entidad: 'Ministerio de Educación', procesos: 2200, monto: '1,740,000,000', pct: 9.1 },
  { entidad: 'Seguro Social de Salud - ESSALUD', procesos: 1850, monto: '1,420,000,000', pct: 7.4 },
  { entidad: 'Ministerio de Vivienda, Construcción y Saneamiento', procesos: 890, monto: '1,150,000,000', pct: 6.0 },
];

const topEntidadesRegional = [
  { entidad: 'Gobierno Regional de Piura', procesos: 850, monto: '1,890,000,000', pct: 15.2 },
  { entidad: 'Gobierno Regional de La Libertad', procesos: 720, monto: '1,650,000,000', pct: 13.3 },
  { entidad: 'Gobierno Regional de Arequipa', procesos: 680, monto: '1,420,000,000', pct: 11.4 },
  { entidad: 'Gobierno Regional de Cusco', procesos: 610, monto: '1,280,000,000', pct: 10.3 },
  { entidad: 'Gobierno Regional de Loreto', procesos: 540, monto: '1,120,000,000', pct: 9.0 },
];

const topEntidadesLocal = [
  { entidad: 'Municipalidad Metropolitana de Lima', procesos: 680, monto: '1,320,000,000', pct: 12.5 },
  { entidad: 'Municipalidad Provincial de Arequipa', procesos: 320, monto: '450,000,000', pct: 4.3 },
  { entidad: 'Municipalidad Distrital de Miraflores', procesos: 210, monto: '380,000,000', pct: 3.6 },
  { entidad: 'Municipalidad Distrital de San Isidro', procesos: 195, monto: '340,000,000', pct: 3.2 },
  { entidad: 'Municipalidad Provincial del Cusco', procesos: 180, monto: '310,000,000', pct: 2.9 },
];

function GovernmentDashboard({ title, topEntities, stats }: { title: string, topEntities: any[], stats: { monto: string, procesos: string, pct: string } }) {
  return (
    <div className="mb-10">
      <div className="bg-white rounded-[8px] border border-gray-200 shadow-sm p-6 mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-[#63c9c4] rounded-full" />
          <h2 className="text-[24px] font-bold text-[#26292E]">{title}</h2>
        </div>
        <div className="flex flex-wrap items-center gap-8 lg:gap-12">
          <div>
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Monto adjudicado</p>
            <p className="text-[22px] font-bold text-[#0056AC]">{stats.monto}</p>
          </div>
          <div className="w-px h-10 bg-gray-200 hidden sm:block" />
          <div>
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Procesos</p>
            <p className="text-[22px] font-bold text-[#26292E]">{stats.procesos}</p>
          </div>
          <div className="w-px h-10 bg-gray-200 hidden sm:block" />
          <div>
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">% del gasto total</p>
            <p className="text-[22px] font-bold text-[#26292E]">{stats.pct}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-[8px] border border-gray-200 shadow-sm p-6">
          <h3 className="text-[15px] font-bold text-[#26292E] mb-6 uppercase tracking-wide">Distribución por objeto</h3>
          <div className="flex items-center h-[220px]">
            <ResponsiveContainer width="50%" height="100%">
              <PieChart>
                <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                  {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <RechartsTooltip formatter={(value: number) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-1/2 pl-6 space-y-4">
              {pieData.map(d => (
                <div key={d.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: d.color }} />
                    <span className="text-[13px] font-medium text-[#26292E]">{d.name}</span>
                  </div>
                  <span className="text-[13px] font-bold text-[#26292E]">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[8px] border border-gray-200 shadow-sm p-6 flex flex-col">
          <h3 className="text-[15px] font-bold text-[#26292E] mb-6 uppercase tracking-wide">Evolución Mensual (S/ M)</h3>
          <div className="flex-1 space-y-3 overflow-y-auto pr-2">
            {barData.map(d => (
              <div key={d.mes} className="flex items-center gap-3 group">
                <span className="w-8 text-[11px] font-bold text-gray-400 group-hover:text-[#26292E] transition-colors">{d.mes}</span>
                <div className="flex-1 bg-gray-100 h-3.5 rounded-full overflow-hidden flex relative">
                  <div className="bg-[#63c9c4] h-full rounded-full transition-all duration-500 opacity-80 group-hover:opacity-100" style={{ width: `${(d.monto / 2000) * 100}%` }} />
                </div>
                <span className="w-12 text-[11px] font-bold text-[#26292E] text-right group-hover:text-[#63c9c4] transition-colors">{d.monto}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[8px] border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-[15px] font-bold text-[#26292E] uppercase tracking-wide">Top entidades · {title}</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-white">
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider w-16">Nro</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Entidad</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Procesos</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">Monto Adjudicado (S/)</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">% Part.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {topEntities.map((ent, i) => (
                <tr key={i} className="hover:bg-red-50/30 transition-colors group">
                  <td className="px-6 py-4 text-[13px] font-bold text-[#26292E]">{i + 1}</td>
                  <td className="px-6 py-4 text-[13px] font-bold text-[#26292E] group-hover:text-[#63c9c4] transition-colors">{ent.entidad}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-600 font-medium text-center">{ent.procesos.toLocaleString()}</td>
                  <td className="px-6 py-4 text-[13px] font-bold text-[#26292E] text-right">{parseInt(ent.monto).toLocaleString('es-PE')}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-600 font-medium text-center">{ent.pct}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function ExplorePage({ navigate }: ExplorePageProps) {
  const [nivelGobierno, setNivelGobierno] = useState('Todos');
  const [entidad, setEntidad] = useState('');
  const [objeto, setObjeto] = useState('Todos');
  const [anio, setAnio] = useState('2026');
  const [mes, setMes] = useState('Todos');

  const handleLimpiar = () => {
    setNivelGobierno('Todos');
    setEntidad('');
    setObjeto('Todos');
    setAnio('2026');
    setMes('Todos');
  };

  const handleBuscar = () => {
    console.log('Buscando con:', { nivelGobierno, entidad, objeto, anio, mes });
  };

  const nivelesGobierno = ['Todos', 'Gobierno Nacional', 'Gobierno Regional', 'Gobierno Local'];
  const objetos = ['Todos', 'Bienes', 'Servicios', 'Obras', 'Consultoría de Obra'];
  const anios = ['2026', '2025', '2026', '2023', '2022', '2021', '2020'];
  const meses = [
    { v: 'Todos', l: 'Todos' }, { v: '1', l: 'Enero' }, { v: '2', l: 'Febrero' }, { v: '3', l: 'Marzo' }, 
    { v: '4', l: 'Abril' }, { v: '5', l: 'Mayo' }, { v: '6', l: 'Junio' }, { v: '7', l: 'Julio' },
    { v: '8', l: 'Agosto' }, { v: '9', l: 'Septiembre' }, { v: '10', l: 'Octubre' }, { v: '11', l: 'Noviembre' }, { v: '12', l: 'Diciembre' }
  ];

  return (
    <div className="flex-1 overflow-auto bg-[#f3f4f6] font-['Roboto',sans-serif]">
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
              <div className="bg-[#63c9c4] p-1.5 rounded-[8px]">
                <Map size={24} className="text-white" />
              </div>
              <h1 className="text-[32px] font-bold leading-tight">Explora contrataciones</h1>
            </div>
            <p className="text-white/70 text-[15px] max-w-2xl">
              Directorio oficial de entidades públicas. Navegue por los distintos niveles de gobierno para explorar y analizar sus contrataciones.
            </p>
          </div>
        </div>
      </div>

      <div className="px-12 py-8 max-w-7xl mx-auto space-y-10">
        
        {/* 1. SECCIÓN FILTROS HOMOLOGADA */}
        <div className="bg-white rounded-[8px] border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
            <Search size={18} className="text-[#294269]" />
            <h3 className="text-[15px] font-bold text-[#26292E]">Filtros de búsqueda</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-5 gap-6">
            
            <div className="space-y-2 md:col-span-2">
              <label className="text-[12px] font-bold text-[#26292E] uppercase tracking-wider">Nivel de gobierno</label>
              <div className="relative">
                <select 
                  value={nivelGobierno}
                  onChange={(e) => setNivelGobierno(e.target.value)}
                  className="w-full h-11 pl-4 pr-10 bg-white border border-gray-300 rounded-[8px] text-[14px] font-medium text-[#26292E] appearance-none outline-none focus:border-[#63c9c4] transition-colors hover:border-gray-400"
                >
                  {nivelesGobierno.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>

            <div className="space-y-2 md:col-span-3">
              <label className="text-[12px] font-bold text-[#26292E] uppercase tracking-wider">Entidad</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ingrese el nombre de la entidad a buscar"
                  value={entidad}
                  onChange={(e) => setEntidad(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 bg-white border border-gray-300 rounded-[8px] text-[14px] font-medium text-[#26292E] outline-none focus:border-[#63c9c4] transition-colors hover:border-gray-400"
                />
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-[12px] font-bold text-[#26292E] uppercase tracking-wider">Objeto de contratación</label>
              <div className="relative">
                <select 
                  value={objeto}
                  onChange={(e) => setObjeto(e.target.value)}
                  className="w-full h-11 pl-4 pr-10 bg-white border border-gray-300 rounded-[8px] text-[14px] font-medium text-[#26292E] appearance-none outline-none focus:border-[#63c9c4] transition-colors hover:border-gray-400"
                >
                  {objetos.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>

            <div className="space-y-2 md:col-span-1">
              <label className="text-[12px] font-bold text-[#26292E] uppercase tracking-wider">Año</label>
              <div className="relative">
                <select 
                  value={anio}
                  onChange={(e) => setAnio(e.target.value)}
                  className="w-full h-11 pl-4 pr-10 bg-white border border-gray-300 rounded-[8px] text-[14px] font-medium text-[#26292E] appearance-none outline-none focus:border-[#63c9c4] transition-colors hover:border-gray-400"
                >
                  {anios.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-[12px] font-bold text-[#26292E] uppercase tracking-wider">Mes</label>
              <div className="relative">
                <select 
                  value={mes}
                  onChange={(e) => setMes(e.target.value)}
                  className="w-full h-11 pl-4 pr-10 bg-white border border-gray-300 rounded-[8px] text-[14px] font-medium text-[#26292E] appearance-none outline-none focus:border-[#63c9c4] transition-colors hover:border-gray-400"
                >
                  {meses.map(m => <option key={m.v} value={m.v}>{m.l}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>

          </div>
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
            <button 
              onClick={handleLimpiar}
              className="px-6 py-2.5 bg-white border border-gray-300 text-[#26292E] rounded-[8px] text-[14px] font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm"
            >
              <RefreshCw size={16} />
              Limpiar
            </button>
            <button 
              onClick={handleBuscar}
              className="px-8 py-2.5 bg-[#294269] text-white rounded-[8px] text-[14px] font-bold hover:bg-[#3F5578] transition-colors flex items-center gap-2 shadow-sm"
            >
              <Search size={16} />
              Buscar
            </button>
          </div>
        </div>

        {/* Dashboards por Nivel de Gobierno */}
        {(nivelGobierno === 'Todos' || nivelGobierno === 'Gobierno Nacional') && (
          <GovernmentDashboard 
            title="Gobierno Nacional" 
            topEntities={topEntidadesNacional}
            stats={{ monto: 'S/ 12,500 M', procesos: '24,560', pct: '42%' }}
          />
        )}

        {(nivelGobierno === 'Todos' || nivelGobierno === 'Gobierno Regional') && (
          <GovernmentDashboard 
            title="Gobierno Regional" 
            topEntities={topEntidadesRegional}
            stats={{ monto: 'S/ 8,400 M', procesos: '15,620', pct: '28%' }}
          />
        )}

        {(nivelGobierno === 'Todos' || nivelGobierno === 'Gobierno Local') && (
          <GovernmentDashboard 
            title="Gobierno Local" 
            topEntities={topEntidadesLocal}
            stats={{ monto: 'S/ 5,800 M', procesos: '42,890', pct: '30%' }}
          />
        )}

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
