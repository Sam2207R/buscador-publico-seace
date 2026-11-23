import { useState } from 'react';
import { ArrowLeft, Download, Search, TrendingUp, AlertTriangle, BarChart2, CheckCircle } from 'lucide-react';
import type { Page } from '../App';

interface BuscarPageProps {
  navigate: (page: Page) => void;
}

const resultadosAnaliticos = [
  {
    code: 'LP-SR-4-2025',
    estado: 'Ejecución',
    estadoColor: 'bg-green-100 text-green-700',
    titulo: 'Adquisición de Equipos de Cómputo para II.EE',
    entidad: 'Ministerio de Educación',
    monto: 'S/ 12,500,000',
    analitica: '5 postores • Desviación presupuesto: -2.5% (Ahorro)',
  },
  {
    code: 'AS-CM-12-2025',
    estado: 'Selección',
    estadoColor: 'bg-amber-100 text-amber-700',
    titulo: 'Servicio de Mantenimiento Preventivo de Equipos Médicos',
    entidad: 'Hospital Nacional Cayetano Heredia',
    monto: 'S/ 4,800,000',
    analitica: '3 postores • Desviación presupuesto: +1.2% (Sobrecosto)',
  },
  {
    code: 'LP-GR-7-2025',
    estado: 'Convocatoria',
    estadoColor: 'bg-blue-100 text-blue-700',
    titulo: 'Construcción de Infraestructura Educativa — Loreto',
    entidad: 'Gobierno Regional de Loreto',
    monto: 'S/ 38,200,000',
    analitica: '2 postores • Desviación presupuesto: 0% (Estimado)',
  },
  {
    code: 'LP-MTC-9-2025',
    estado: 'Ejecución',
    estadoColor: 'bg-green-100 text-green-700',
    titulo: 'Rehabilitación de Carretera Interregional Tramo Norte',
    entidad: 'Ministerio de Transportes y Comunicaciones',
    monto: 'S/ 95,000,000',
    analitica: '4 postores • Desviación presupuesto: -4.1% (Ahorro)',
  },
  {
    code: 'ADP-MINSA-3-2025',
    estado: 'Riesgo',
    estadoColor: 'bg-red-100 text-[#294269]',
    titulo: 'Adquisición de Medicamentos e Insumos para Centros de Salud',
    entidad: 'Ministerio de Salud — MINSA',
    monto: 'S/ 21,700,000',
    analitica: '1 postor • Desviación presupuesto: +8.7% (Alerta)',
  },
];

const sectores = ['Salud', 'Educación', 'Transportes', 'Vivienda', 'Interior', 'Agricultura'];
const estadosOcds = ['Planificación', 'Selección', 'Adjudicación', 'Ejecución', 'Terminado'];

export function BuscarPage({ navigate }: BuscarPageProps) {
  const [query, setQuery] = useState('');
  const [sector, setSector] = useState('Salud');
  const [estadoOcds, setEstadoOcds] = useState('Selección');

  const filtered = query
    ? resultadosAnaliticos.filter(r =>
        r.titulo.toLowerCase().includes(query.toLowerCase()) ||
        r.entidad.toLowerCase().includes(query.toLowerCase()) ||
        r.code.toLowerCase().includes(query.toLowerCase())
      )
    : resultadosAnaliticos;

  return (
    <div className="flex-1 overflow-auto bg-[#f7f7f5] font-['Roboto',sans-serif]">

      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 px-8 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate({ type: 'home' })}
          className="flex items-center gap-2 text-[#294269] hover:text-[#9a0707] text-[13px] font-medium transition-colors"
        >
          <ArrowLeft size={16} />
          Inicio / Buscador
        </button>
        <button className="flex items-center gap-2 bg-[#294269] text-white text-[13px] font-semibold px-4 py-2 rounded-[6px] hover:bg-black transition-colors">
          <Download size={14} />
          Descargar HTML
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">

        {/* Search bar */}
        <div className="flex items-center bg-white border border-gray-300 rounded-[8px] overflow-hidden shadow-sm mb-6 focus-within:border-[#63c9c4] transition-colors">
          <Search size={16} className="text-gray-400 ml-4 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Ej. Licitación de Computadoras, MINSA, Piura..."
            className="flex-1 px-3 py-3 text-[14px] text-[#26292E] outline-none font-['Roboto',sans-serif] placeholder-gray-400 bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="px-4 text-gray-400 hover:text-gray-600 text-[12px]"
            >
              ✕
            </button>
          )}
        </div>

        {/* KPI strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-[8px] p-4 shadow-sm">
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Monto Filtrado Adjudicado</p>
            <p className="text-[26px] font-bold text-[#26292E] leading-none mb-1">S/ 245.8M</p>
            <p className="text-[11px] text-gray-500">En base a 145 resultados</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-[8px] p-4 shadow-sm">
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Competitividad Activa</p>
            <p className="text-[26px] font-bold text-[#26292E] leading-none mb-1">3.2</p>
            <p className="text-[11px] text-green-600 flex items-center gap-1">
              <TrendingUp size={11} /> Promedio postores por proceso
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-[8px] p-4 shadow-sm">
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Procesos en Ejecución</p>
            <p className="text-[26px] font-bold text-[#26292E] leading-none mb-1">68%</p>
            <p className="text-[11px] text-gray-500 flex items-center gap-1">
              <CheckCircle size={11} className="text-green-500" /> 98 procesos contractuales
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-[8px] p-4 shadow-sm border-l-2 border-l-[#63c9c4]">
            <p className="text-[9px] font-bold text-[#0056AC] uppercase tracking-widest mb-1.5">Índice de Riesgo (Muestra)</p>
            <p className="text-[26px] font-bold text-[#0056AC] leading-none mb-1">12.4%</p>
            <p className="text-[11px] text-[#294269] flex items-center gap-1">
              <AlertTriangle size={11} /> 18 procesos con alertas activas
            </p>
          </div>
        </div>

        {/* Filtros + Resultados */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

          {/* Filtros de Datos */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-[8px] shadow-sm p-4">
              <h2 className="text-[13px] font-bold text-[#26292E] mb-4 font-['Roboto',sans-serif]">
                Filtros de Datos
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Sector</label>
                  <select
                    value={sector}
                    onChange={e => setSector(e.target.value)}
                    className="w-full border border-gray-200 rounded-[6px] px-3 py-2 text-[13px] text-[#26292E] outline-none focus:border-[#63c9c4] transition-colors font-['Roboto',sans-serif] bg-white"
                  >
                    {sectores.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Estado OCDS</label>
                  <select
                    value={estadoOcds}
                    onChange={e => setEstadoOcds(e.target.value)}
                    className="w-full border border-gray-200 rounded-[6px] px-3 py-2 text-[13px] text-[#26292E] outline-none focus:border-[#63c9c4] transition-colors font-['Roboto',sans-serif] bg-white"
                  >
                    {estadosOcds.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Rango de monto</label>
                  <div className="flex items-center gap-2">
                    <input type="number" placeholder="Mín." className="w-full border border-gray-200 rounded-[6px] px-2 py-2 text-[12px] outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]" />
                    <span className="text-gray-300 shrink-0">—</span>
                    <input type="number" placeholder="Máx." className="w-full border border-gray-200 rounded-[6px] px-2 py-2 text-[12px] outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]" />
                  </div>
                </div>
                <button className="w-full bg-[#63c9c4] text-white text-[13px] font-semibold py-2.5 rounded-[6px] hover:bg-[#3F5578] transition-colors font-['Roboto',sans-serif]">
                  Aplicar filtros
                </button>
              </div>
            </div>
          </div>

          {/* Resultados Analíticos */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-[8px] shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
                <h2 className="text-[14px] font-bold text-[#26292E] font-['Roboto',sans-serif]">
                  Resultados Analíticos
                </h2>
                <span className="text-[12px] text-gray-400 font-['Roboto',sans-serif]">
                  {filtered.length} resultados
                </span>
              </div>

              {filtered.length === 0 ? (
                <div className="py-16 text-center text-gray-400 font-['Roboto',sans-serif] text-[13px]">
                  No se encontraron resultados para "{query}"
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {filtered.map((r, i) => (
                    <div key={i} className="px-5 py-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <span className="text-[11px] text-gray-400 font-['Roboto',sans-serif] font-medium">
                          {r.code}
                        </span>
                        <span className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full ${r.estadoColor}`}>
                          {r.estado}
                        </span>
                      </div>
                      <button className="text-[14px] font-bold text-[#26292E] hover:text-[#63c9c4] transition-colors text-left font-['Roboto',sans-serif] leading-snug mb-0.5">
                        {r.titulo}
                      </button>
                      <p className="text-[12px] text-gray-500 font-['Roboto',sans-serif] mb-1.5">
                        {r.entidad}
                        <span className="mx-1.5 text-gray-300">•</span>
                        <span className="font-semibold text-[#26292E]">{r.monto}</span>
                      </p>
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-['Roboto',sans-serif]">
                        <BarChart2 size={12} className="text-[#294269] shrink-0" />
                        <span>Analítica: {r.analitica}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
