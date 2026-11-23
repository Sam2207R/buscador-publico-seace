import { useState } from 'react';
import { Eye, Star, Download, LayoutGrid, List, LayoutList, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { CMDetailModal } from './CMDetailModal';

type CMData = {
  n: string;
  ent: string;
  ubg: string;
  desc: string;
  obj: 'BIEN' | 'SERVICIO' | 'OBRA' | 'CONSULTORÍA';
  cre: string;
  traz: string[];
  alert: boolean;
};

const CM_DATA: CMData[] = [
  { n: 'CM-2025-002001-2026', ent: 'MUNICIPALIDAD DISTRITAL DE MIRAFLORES', ubg: 'LIMA / LIMA / MIRAFLORES', desc: 'ADQUISICIÓN DE ÚTILES DE OFICINA Y MATERIALES DE LIMPIEZA PARA LA GERENCIA DE ADMINISTRACIÓN', obj: 'BIEN', cre: '03/01/2025', traz: ['Req', 'Selección'], alert: false },
  { n: 'CM-2025-002002-2026', ent: 'GOBIERNO REGIONAL DE AYACUCHO', ubg: 'AYACUCHO / HUAMANGA / AYACUCHO', desc: 'SERVICIO DE MANTENIMIENTO PREVENTIVO DE COMPUTADORAS Y EQUIPOS DE CÓMPUTO DE LA SEDE CENTRAL', obj: 'SERVICIO', cre: '10/01/2025', traz: ['Req'], alert: false },
  { n: 'CM-2025-002003-2026', ent: 'MINISTERIO DE SALUD - MINSA', ubg: 'LIMA / LIMA / JESÚS MARÍA', desc: 'ADQUISICIÓN DE INSUMOS MÉDICOS DESCARTABLES PARA LA ATENCIÓN DE EMERGENCIAS', obj: 'BIEN', cre: '15/01/2025', traz: ['Req', 'Selección', 'Contrato'], alert: false },
  { n: 'CM-2025-002004-2026', ent: 'MUNICIPALIDAD PROVINCIAL DE AREQUIPA', ubg: 'AREQUIPA / AREQUIPA / AREQUIPA', desc: 'SERVICIO DE IMPRESIÓN Y FOTOCOPIADO DE DOCUMENTOS ADMINISTRATIVOS Y TÉCNICOS', obj: 'SERVICIO', cre: '20/01/2025', traz: ['Req'], alert: false },
  { n: 'CM-2025-002005-2026', ent: 'INSTITUTO NACIONAL DE ESTADÍSTICA E INFORMÁTICA - INEI', ubg: 'LIMA / LIMA / MIRAFLORES', desc: 'ADQUISICIÓN DE TÓNER Y CARTUCHOS DE TINTA PARA IMPRESORAS DE LA SEDE CENTRAL Y OFICINAS REGIONALES', obj: 'BIEN', cre: '25/01/2025', traz: ['Req'], alert: true },
  { n: 'CM-2025-002006-2026', ent: 'MUNICIPALIDAD DISTRITAL DE SAN BORJA', ubg: 'LIMA / LIMA / SAN BORJA', desc: 'TRABAJOS DE PINTURA Y MANTENIMIENTO MENOR EN INSTALACIONES DE LA MUNICIPALIDAD DISTRITAL', obj: 'OBRA', cre: '28/01/2025', traz: ['Req', 'Selección'], alert: true },
];

const TABLA_DATA = [
  { n: '01', cod: 'LP-1234567890-2026', ent: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA', fecha: '24/12/2025', tipo: 'LICITACIÓN PÚBLICA', obj: 'BIEN', desc: 'ADQUISICIÓN DE HOJUELAS PRECOCIDAS DE AVENA, QUINUA, KIWICHA, MACA, SOYA, LECHE ENTERA EN POLVO Y AZÚCAR', etapas: 'Plan → Selec', etapa_cls: 'ep-sel' },
  { n: '02', cod: 'LP-1234567891-2026', ent: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA', fecha: '14/10/2025', tipo: 'LICITACIÓN PÚBLICA', obj: 'BIEN', desc: 'ADQUISICIÓN DE EQUIPOS DE PROTECCIÓN PERSONAL TÉCNICO Y ADMINISTRATIVO DE ELECTRO ORIENTE S.A.', etapas: 'Plan → Selec → FUP', etapa_cls: 'ep-fup' },
  { n: '03', cod: 'LP-1234567892-2026', ent: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA', fecha: '14/10/2025', tipo: 'LICITACIÓN PÚBLICA', obj: 'BIEN', desc: 'ADQUISICIÓN, EQUIPAMIENTO, MONTAJE, PRUEBAS Y PUESTA EN SERVICIO PARA AMPLIACIÓN DE REDES SECUNDARIAS', etapas: 'Plan → Selec → FUP → Contrato', etapa_cls: 'ep-cont' },
  { n: '04', cod: 'LP-1234567893-2026', ent: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA', fecha: '14/10/2025', tipo: 'LICITACIÓN PÚBLICA', obj: 'SERVICIO', desc: 'SERVICIO DE MECA Y BAL TENSIÓN, PARA EL DEPARTAMENTO DE DISTRIBUCIÓN DE LA GERENCIA REGIONAL', etapas: 'Plan', etapa_cls: 'ep-plan' },
  { n: '05', cod: 'LP-1234567894-2026', ent: 'GOBIERNO REGIONAL DE LORETO UNIDAD EJECUTORA SALUD UCAYALI', fecha: '14/10/2025', tipo: 'LICITACIÓN PÚBLICA', obj: 'BIEN', desc: 'ADQUISICIÓN DE (03) TOTEM PARA LA ZONA REGISTRAL N° VI', etapas: 'Plan → Selec', etapa_cls: 'ep-sel' },
  { n: '06', cod: 'LP-1234567895-2026', ent: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA', fecha: '14/10/2025', tipo: 'LICITACIÓN PÚBLICA', obj: 'SERVICIO', desc: 'ADQUISICIÓN DE GRUPO ELECTRÓGENO DE 3,500 MW EN GENERACIÓN ELÉCTRICA DEL SERVICIO ELÉCTRICO', etapas: 'Plan → Selec → FUP', etapa_cls: 'ep-fup' },
  { n: '07', cod: 'LP-1234567896-2026', ent: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA', fecha: '14/10/2025', tipo: 'LICITACIÓN PÚBLICA', obj: 'BIEN', desc: 'ADQUISICIÓN DE GRUPO ELECTRÓGENO DE 1 MW EN GENERACIÓN ELÉCTRICA DEL SERVICIO ELÉCTRICO DE CAÑETE', etapas: 'Plan → Selec → FUP → Contrato', etapa_cls: 'ep-cont' },
  { n: '08', cod: 'LP-1234567897-2026', ent: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA', fecha: '14/10/2025', tipo: 'LICITACIÓN PÚBLICA', obj: 'OBRA', desc: 'ADQUISICIÓN DE POSTES DE CONCRETO ARMADO CENTRIFUGADO DE DEFICIENCIAS EN REDES', etapas: 'Plan → Selec', etapa_cls: 'ep-sel' },
  { n: '09', cod: 'LP-1234567898-2026', ent: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA', fecha: '14/10/2025', tipo: 'LICITACIÓN PÚBLICA', obj: 'BIEN', desc: 'ADQUISICIÓN DE UNIFORMES (2025) PARA EL PERSONAL DL 728 DE LA ZONA REGISTRAL N° VI', etapas: 'Plan → Selec → FUP → Contrato', etapa_cls: 'ep-cont' },
];

const CM_FASE_ORDER = ['Req', 'Selección', 'Contrato'];
const CM_FASE_LBL: Record<string, string> = { Req: 'Requerimiento', Selección: 'Selección', Contrato: 'Contrato' };

const objBadge = (o: string) => {
  const cls = o === 'BIEN' ? 'bg-[#fde8e8] text-[#C0282A]' : o === 'SERVICIO' ? 'bg-[#e0f2fe] text-[#0369a1]' : 'bg-[#dcfce7] text-[#166534]';
  return <span className={`inline-flex px-2 py-0.5 rounded-[4px] text-[9.5px] font-bold mb-2 ${cls}`}>{o}</span>;
};

const objBadgeSmall = (o: string) => {
  const cls = o === 'BIEN' ? 'bg-[#fde8e8] text-[#C0282A]' : o === 'SERVICIO' ? 'bg-[#e0f2fe] text-[#0369a1]' : 'bg-[#dcfce7] text-[#166534]';
  return <span className={`inline-flex px-1.5 py-0.5 rounded-[3px] text-[9.5px] font-bold ${cls}`}>{o}</span>;
};

const renderTraz = (traz: string[]) => {
  const activeIdx = traz.length - 1;
  const activeKey = traz[activeIdx];
  const activePosInOrder = CM_FASE_ORDER.indexOf(activeKey);

  return (
    <div className="flex items-center flex-nowrap">
      {CM_FASE_ORDER.map((key, i) => {
        const isDone = i < activePosInOrder;
        const isActive = i === activePosInOrder;
        const cls = isDone ? 'bg-[#EAF3DE] text-[#3B6D11]' : isActive ? 'bg-[#63c9c4] text-white' : 'bg-[#F1EFE8] text-[#888780] border border-[#D3D1C7]';
        const label = isDone ? `✓ ${CM_FASE_LBL[key]}` : CM_FASE_LBL[key];
        
        return (
          <div key={key} className="flex items-center">
            {i > 0 && <span className="text-[#C5CDDA] text-[8px] mx-[2px]">→</span>}
            <span className={`inline-flex items-center px-1.5 py-0.5 rounded-[4px] text-[9.5px] font-bold ${cls}`}>{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export function CMResults() {
  const [viewMode, setViewMode] = useState<'grid' | 'extended' | 'table'>('grid');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleDownload = (n: string, ent: string) => {
    alert(`📥 Descargando requerimiento\n\n${n}\n${ent}\n\nArchivo: Requerimiento_${n.replace(/[^a-z0-9]/gi, '_')}.pdf`);
  };

  return (
    <div className="flex flex-col h-full bg-[#F6F9FC]">
      {/* TOOLBAR */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[20px] font-bold text-[#26292E]">Resultados de búsqueda</span>
          <span className="px-3 py-1 bg-[#E2A615] text-[#294269] rounded-full text-[14px] font-bold">187 encontrados</span>
        </div>
        <div className="flex items-center gap-2">
          {/* View toggle */}
          <div className="flex gap-[2px] bg-[#DEE3EA] rounded-[4px] p-[2px]">
            <button
              onClick={() => setViewMode('table')}
              title="Lista"
              className={`w-[30px] h-[28px] rounded-[4px] flex items-center justify-center transition-all ${viewMode === 'table' ? 'bg-[#294269] text-white' : 'bg-transparent text-[#515458] hover:bg-[#DEE3EA] hover:text-[#26292E]'}`}
            >
              <LayoutList size={13} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              title="Cards grilla"
              className={`w-[30px] h-[28px] rounded-[4px] flex items-center justify-center transition-all ${viewMode === 'grid' ? 'bg-[#294269] text-white' : 'bg-transparent text-[#515458] hover:bg-[#DEE3EA] hover:text-[#26292E]'}`}
            >
              <LayoutGrid size={13} />
            </button>
            <button
              onClick={() => setViewMode('extended')}
              title="Cards extendido"
              className={`w-[30px] h-[28px] rounded-[4px] flex items-center justify-center transition-all ${viewMode === 'extended' ? 'bg-[#294269] text-white' : 'bg-transparent text-[#515458] hover:bg-[#DEE3EA] hover:text-[#26292E]'}`}
            >
              <List size={13} />
            </button>
          </div>
          <div className="flex items-center gap-1.5 text-[11.5px] text-[#515458]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M7 12h10M11 18h2"/></svg>
            Ordenar por:
            <select className="px-2 py-1.5 border-[1.5px] border-[#C5CDDA] rounded-[4px] text-[11.5px] bg-white text-[#26292E] outline-none">
              <option>Sin ordenar</option><option>Mayor monto</option><option>Más reciente</option><option>Entidad A-Z</option>
            </select>
          </div>
          <input className="px-2.5 py-1.5 border-[1.5px] border-[#C5CDDA] rounded-[4px] text-[11.5px] bg-white text-[#26292E] min-w-[160px] outline-none" placeholder="🔍 Buscar en resultados..." />
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 border-[1.5px] border-[#C5CDDA] rounded-[4px] text-[11.5px] bg-white font-semibold text-[#26292E] hover:border-[#63c9c4] hover:text-[#63c9c4] transition-colors">
            <Download size={12} />
            Exportar
          </button>
        </div>
      </div>

      {/* VIEWS */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {CM_DATA.map((d, i) => (
            <div key={d.n} className="bg-white border border-[#DEE3EA] rounded-[4px] p-6 shadow-sm hover:shadow-md transition-shadow relative cursor-pointer">
              <div className="absolute bottom-0 right-0 left-0 h-[5px] bg-[#63c9c4] rounded-b-[4px]" />
              <div className="flex justify-between items-start mb-1.5">
                <span className="text-[10.5px] font-bold text-[#0056AC] font-['Roboto',sans-serif]">{d.n}</span>
                <div className="flex gap-1.5 items-center">
                  {d.alert && (
                    <span className="relative text-[#f59e0b] text-[15px] cursor-default flex items-center group">
                      ⚠
                      {/* Tooltip implementation would go here */}
                    </span>
                  )}
                  <button className="w-[27px] h-[27px] rounded-[4px] border-[1.5px] border-[#C5CDDA] flex items-center justify-center bg-white text-[#8A94A2] hover:border-[#f59e0b] hover:text-[#f59e0b] transition-all">
                    <Star size={12} />
                  </button>
                  <button onClick={() => setSelectedIdx(i)} className="w-[27px] h-[27px] rounded-[4px] border-[1.5px] border-[#C5CDDA] flex items-center justify-center bg-white text-[#515458] hover:bg-[#63c9c4] hover:text-white hover:border-[#63c9c4] transition-all">
                    <Eye size={12} />
                  </button>
                </div>
              </div>
              <div className="text-[18px] font-bold text-[#26292E] mb-1.5 leading-snug">{d.ent}</div>
              <div className="text-[14px] text-[#515458] leading-snug mb-2.5 line-clamp-2">{d.desc}</div>
              {objBadge(d.obj)}
              
              <div className="flex items-center gap-2 text-[13px] text-[#3C3E43] py-1.5 border-t border-[#DEE3EA] mt-1.5 flex-wrap">
                <span className="font-bold text-[#26292E] whitespace-nowrap">Cotizaciones:</span>
                <span className="text-[#515458]">26/06/2026 16:30:00 - 27/06/2026 10:00:00</span>
              </div>
              <div className="flex items-center gap-1.5 text-[13px] text-[#3C3E43] py-1">
                <span className="font-bold text-[#26292E] whitespace-nowrap">Fecha de publicación:</span>
                <span className="text-[#515458]"> 26/06/2026 15:21:16</span>
              </div>
              <div className="flex items-center gap-1 pt-2.5 border-t border-[#DEE3EA] mt-2 flex-wrap">
                <span className="text-[12px] font-bold text-[#979797] uppercase tracking-[.04em] mr-1">Trazabilidad</span>
                {renderTraz(d.traz)}
              </div>
              
              <div className="flex items-center gap-2 pt-3 mt-2 border-t border-[#DEE3EA] flex-wrap">
                <button onClick={() => setSelectedIdx(i)} className="ml-auto px-4 py-2 bg-[#0056AC] text-white rounded-[4px] text-[14px] font-bold hover:bg-[#184397] transition-colors flex items-center gap-1.5 whitespace-nowrap">
                  <Eye size={14} /> Ver detalle
                </button>
                <button onClick={() => handleDownload(d.n, d.ent)} className="px-4 py-2 bg-white text-[#0056AC] border-2 border-[#0056AC] rounded-[4px] text-[14px] font-bold hover:bg-[#E1F0FF] transition-colors flex items-center gap-1.5 whitespace-nowrap">
                  <Download size={14} /> Descargar requerimiento
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewMode === 'extended' && (
        <div className="flex flex-col gap-2.5">
          {CM_DATA.map((d, i) => (
            <div key={d.n} className="bg-white rounded-[8px] border-[1.5px] border-[#DEE3EA] p-3.5 shadow-sm hover:border-[#63c9c4] hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-start justify-between gap-4 mb-1.5">
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-bold text-[#0056AC] font-['Roboto',sans-serif] mb-[3px]">{d.n}</div>
                  <div className="text-[13px] font-bold text-[#26292E] mb-[2px]">{d.ent}</div>
                  <div className="text-[11px] text-[#8A94A2] flex items-center gap-1 mb-1.5">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> {d.ubg}
                  </div>
                  <div className="text-[12px] text-[#3C3E43] leading-snug mb-1">{d.desc}</div>
                  {objBadgeSmall(d.obj)}
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0 min-w-[180px]">
                  <button onClick={() => setSelectedIdx(i)} className="px-3 py-1.5 bg-[#63c9c4] text-white border-none rounded-[4px] text-[11px] font-bold hover:bg-[#DC362E] cursor-pointer flex items-center gap-1">
                    <Eye size={12} /> Ver detalle
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-[#F6F9FC]">
                <span className="text-[12px] font-bold text-[#979797] uppercase tracking-[.04em] mr-1">Trazabilidad</span>
                {renderTraz(d.traz)}
                {d.alert && (
                  <div className="bg-[#fffbeb] border border-[#fcd34d] rounded-[4px] px-2 py-1 text-[11px] text-[#92400e] flex items-center gap-1 flex-1">
                    ⏰ Faltan 05 días para culminar el registro de participantes
                  </div>
                )}
                <button className="flex items-center gap-1 text-[11px] text-[#8A94A2] cursor-pointer px-2 py-1 rounded-[4px] border border-[#C5CDDA] bg-white whitespace-nowrap hover:text-[#63c9c4] hover:border-[#63c9c4]">
                  <Star size={12} /> Favorito
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewMode === 'table' && (
        <div className="bg-white rounded-[8px] overflow-hidden shadow-sm border border-[#DEE3EA]">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-white px-3 py-2 text-[11px] font-bold text-[#3C3E43] text-left border-b-2 border-[#63c9c4] whitespace-nowrap cursor-pointer hover:text-[#63c9c4]">N° <span className="text-[9px] text-[#8A94A2] ml-1">↕</span></th>
                <th className="bg-white px-3 py-2 text-[11px] font-bold text-[#3C3E43] text-left border-b-2 border-[#63c9c4] whitespace-nowrap cursor-pointer hover:text-[#63c9c4]">Entidad <span className="text-[9px] text-[#8A94A2] ml-1">↕</span></th>
                <th className="bg-white px-3 py-2 text-[11px] font-bold text-[#3C3E43] text-left border-b-2 border-[#63c9c4] whitespace-nowrap cursor-pointer hover:text-[#63c9c4]">Fecha de publicación <span className="text-[9px] text-[#8A94A2] ml-1">↕</span></th>
                <th className="bg-white px-3 py-2 text-[11px] font-bold text-[#3C3E43] text-left border-b-2 border-[#63c9c4] whitespace-nowrap cursor-pointer hover:text-[#63c9c4]">Tipo de Procedimiento <span className="text-[9px] text-[#8A94A2] ml-1">↕</span></th>
                <th className="bg-white px-3 py-2 text-[11px] font-bold text-[#3C3E43] text-left border-b-2 border-[#63c9c4] whitespace-nowrap cursor-pointer hover:text-[#63c9c4]">Objeto de Contratación <span className="text-[9px] text-[#8A94A2] ml-1">↕</span></th>
                <th className="bg-white px-3 py-2 text-[11px] font-bold text-[#3C3E43] text-left border-b-2 border-[#63c9c4] whitespace-nowrap cursor-pointer hover:text-[#63c9c4]">Descripción preliminar del requerimiento <span className="text-[9px] text-[#8A94A2] ml-1">↕</span></th>
                <th className="bg-white px-3 py-2 text-[11px] font-bold text-[#3C3E43] text-left border-b-2 border-[#63c9c4] whitespace-nowrap cursor-pointer hover:text-[#63c9c4]">Etapas <span className="text-[9px] text-[#8A94A2] ml-1">↕</span></th>
                <th className="bg-white px-3 py-2 text-[11px] font-bold text-[#3C3E43] text-left border-b-2 border-[#63c9c4] whitespace-nowrap">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {TABLA_DATA.map((d, i) => {
                const epCls = d.etapa_cls === 'ep-plan' ? 'bg-[#f3f4f6] text-[#3C3E43]' : d.etapa_cls === 'ep-sel' ? 'bg-[#fef3c7] text-[#92400e]' : d.etapa_cls === 'ep-fup' ? 'bg-[#e0f2fe] text-[#0369a1]' : 'bg-[#dcfce7] text-[#166534]';
                return (
                  <tr key={i} className="hover:bg-[#fff8f8] border-b border-[#DEE3EA] last:border-b-0">
                    <td className="px-3 py-2 text-[11.5px] text-[#8A94A2] font-bold text-center align-middle">{d.n}</td>
                    <td className="px-3 py-2 text-[11.5px] text-[#3C3E43] align-middle">
                      <span className="font-['Roboto',sans-serif] font-bold text-[#0056AC] text-[10.5px]">{d.cod}</span><br />
                      <span className="text-[10px] text-[#294269] font-semibold">{d.ent}</span>
                    </td>
                    <td className="px-3 py-2 text-[11px] text-[#3C3E43] align-middle whitespace-nowrap">{d.fecha}</td>
                    <td className="px-3 py-2 text-[11px] text-[#3C3E43] align-middle">{d.tipo}</td>
                    <td className="px-3 py-2 align-middle">{objBadgeSmall(d.obj)}</td>
                    <td className="px-3 py-2 text-[11.5px] text-[#3C3E43] align-middle max-w-[280px]">{d.desc}</td>
                    <td className="px-3 py-2 align-middle">
                      <span className={`inline-flex items-center gap-[3px] px-2 py-0.5 rounded-[4px] text-[10px] font-bold whitespace-nowrap ${epCls}`}>
                        {d.etapas}
                      </span>
                    </td>
                    <td className="px-3 py-2 align-middle">
                      <button onClick={() => setSelectedIdx(i % CM_DATA.length)} className="w-[28px] h-[28px] rounded-[4px] border-[1.5px] border-[#C5CDDA] flex items-center justify-center bg-white text-[#515458] hover:bg-[#63c9c4] hover:text-white hover:border-[#63c9c4] transition-all mx-auto">
                        <Eye size={12} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {selectedIdx !== null && (
        <CMDetailModal
          data={CM_DATA[selectedIdx]}
          onClose={() => setSelectedIdx(null)}
        />
      )}
    </div>
  );
}