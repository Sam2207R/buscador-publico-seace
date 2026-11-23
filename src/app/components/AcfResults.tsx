import { useState } from 'react';
import { X, Download, LayoutGrid, LayoutList, Columns2, ArrowUpDown, Eye, ChevronRight } from 'lucide-react';
import type { Page } from '../App';

// ─── Data ────────────────────────────────────────────────────────────────────

const ACF_DATA = [
  { id: 1, codigo: 'ACF-0031-GORELAM', entidad: 'GOBIERNO REGIONAL DE LAMBAYEQUE - HOSPITAL REGIONAL LAMBAYEQUE', fechaPub: '05/05/2026 16:10:34', tipoSel: 'Licitación Pública', objeto: 'Bien', desc: 'ADQUISICIÓN DE INSUMOS PARA PRUEBAS DE INMUNOHEMATOLOGÍA CON EQUIPO EN COMODATO DEL SERVICIO DE BANCO DE SANGRE DEL DEPARTAMENTO DE APOYO AL DIAGNÓSTICO', alcance: 'El presente requerimiento busca la adquisición de insumos para pruebas de inmunohematología siendo un insumo esencial para el cumplimiento del DECRETO SUPREMO N° 017-2022-SA, la cual detalla contar con: grupos sanguíneos fase sérica y globular, fenotipificación extendido y ampliado, pruebas de compatibilidad, Coombs directos prevención de reacciones hemolíticas, rastreo de anticuerpos irregulares para donantes y pacientes fortaleciendo la seguridad transfusional para los pacientes del Hospital Regional Lambayeque.', cantidad: 139460, plazo: 730, fechaConv: '15/06/2026', region: 'LAMBAYEQUE' },
  { id: 2, codigo: 'ACF-0032-SUNASS', entidad: 'SUPERINTENDENCIA NACIONAL DE SERVICIOS DE SANEAMIENTO', fechaPub: '22/04/2026 11:28:54', tipoSel: 'Licitación Pública', objeto: 'Bien', desc: 'ADQUISICIÓN DE ESTACIONES PARA MONITOREO REMOTO DE LA CALIDAD DE LA PRESTACIÓN DEL SERVICIO DE AGUA EN PEQUEÑAS CIUDADES - IOA RR CUI 2693824', alcance: 'Contratar una persona natural o jurídica para la adquisición de 28 estaciones de monitoreo remoto, a fin de generar información oportuna y confiable de la calidad de los servicios de agua, brindado por los prestadores de las pequeñas ciudades.', cantidad: 28, plazo: 100, fechaConv: '30/07/2026', region: 'LIMA' },
  { id: 3, codigo: 'ACF-0033-MUNIDEV', entidad: 'MUNICIPALIDAD DISTRITAL DE DEAN VALDIVIA', fechaPub: '07/04/2026 17:10:36', tipoSel: 'Licitación Pública', objeto: 'Bien', desc: 'ADQUISICIÓN DE ÓMNIBUS EN LA GERENCIA DE DESARROLLO SOCIAL DE LA MUNICIPALIDAD DISTRITAL DE DEAN VALDIVIA, DISTRITO DE DEAN VALDIVIA, PROVINCIA DE ISLAY, DEPARTAMENTO DE AREQUIPA; con CUI 2718155.', alcance: 'La Entidad requiere la compra de un ómnibus, con la finalidad de optimizar el despliegue y traslado de personal para la atención de la población del distrito de Deán Valdivia. En ese sentido, resulta necesaria la adquisición de un vehículo, para lo cual se solicita la aprobación del ANEXO N.° 05: Solicitud de Modificación del Cuadro Multianual de Necesidades, correspondiente a la adquisición de un ómnibus para la Gerencia de Desarrollo Social.', cantidad: 1, plazo: 40, fechaConv: '18/05/2026', region: 'AREQUIPA' },
  { id: 4, codigo: 'ACF-0034-MUNIYAU', entidad: 'MUNICIPALIDAD DISTRITAL DE YAUCA', fechaPub: '31/03/2026 17:53:13', tipoSel: 'Licitación Pública', objeto: 'Bien', desc: 'Adquisición de cisterna', alcance: 'Requerimiento para la adquisición de una cisterna para abastecimiento de agua potable en zonas rurales del distrito de Yauca, Arequipa, según especificaciones técnicas del área usuaria.', cantidad: 1, plazo: 15, fechaConv: '26/05/2026', region: 'AREQUIPA' },
  { id: 5, codigo: 'ACF-0035-INEN', entidad: 'INSTITUTO NACIONAL DE ENFERMEDADES NEOPLÁSICAS', fechaPub: '18/03/2026 15:23:41', tipoSel: 'Licitación Pública', objeto: 'Bien', desc: 'Adquisición de Equipo de Braquiterapia de Alta Tasa de Dosis (HDR) con fuente de Ir-192, sistema de planificación 2D/3D, set de aplicadores ginecológicos/urológicos y servicios de mantenimiento. Incluye desmontaje del equipo existente, instalación y capacitación bajo modalidad Llave en mano.', alcance: 'Adquisición de 01 sistema integral de Braquiterapia de Alta Tasa de Dosis (HDR) con fuente de Ir-192 (10-12 Ci). El equipamiento incluye Afterloader de al menos 20 canales, 02 estaciones de planificación de tratamiento 2D/3D con licencias permanentes, sistema de control TCS para gestión de datos clínicos, dosimetría independiente (cámara de pozo y electrómetro) y sets completos de aplicadores ginecológicos y urológicos compatibles. Bajo modalidad Llave en Mano.', cantidad: 1, plazo: 100, fechaConv: '29/05/2026', region: 'LIMA' },
  { id: 6, codigo: 'ACF-0036-SUNASS2', entidad: 'SUPERINTENDENCIA NACIONAL DE SERVICIOS DE SANEAMIENTO', fechaPub: '16/03/2026 17:44:52', tipoSel: 'Licitación Pública', objeto: 'Bien', desc: 'ADQUISICIÓN DE PLATAFORMA DE RESPALDO Y RESTAURACIÓN DE INFORMACIÓN INSTITUCIONAL PARA LA SUNASS', alcance: 'Adquisición de plataforma de respaldo y restauración de la información institucional de SUNASS, manteniendo la seguridad en los procesos y el almacenamiento de los datos, garantizando la continuidad operativa en los servicios informáticos y los sistemas con los que opera la institución.', cantidad: 1, plazo: 80, fechaConv: '15/05/2026', region: 'LIMA' },
  { id: 7, codigo: 'ACF-0037-AGRORUR', entidad: 'PROGRAMA DE DESARROLLO PRODUCTIVO AGRARIO RURAL - AGRO RURAL', fechaPub: '02/02/2026 15:26:22', tipoSel: 'Licitación Pública', objeto: 'Bien', desc: 'Adquisición postes de madera de Quinilla para el proyecto CUI 2503915', alcance: 'Suministro e implementación logística de 29,250 unidades de postes de madera de la especie Quinilla, destinados de forma exclusiva a las acciones de delimitación y protección de áreas de intervención del Proyecto CUI 2503915 en la región Madre de Dios. Debiéndose ejecutarse la prestación íntegramente en un plazo de 90 días calendario.', cantidad: 29250, plazo: 90, fechaConv: '16/03/2026', region: 'MADRE DE DIOS' },
  { id: 8, codigo: 'ACF-0038-MPCH', entidad: 'MUNICIPALIDAD PROVINCIAL DE CHACHAPOYAS', fechaPub: '24/06/2026 17:00:00', tipoSel: 'Licitación Pública', objeto: 'Obra', desc: 'Mejoramiento de la red de agua potable — Tramo 1: Zona Urbana', alcance: 'Ejecución de obra conforme al expediente técnico aprobado, incluyendo trazo, excavación, instalación de tuberías, pruebas hidráulicas y reposición de pavimento, según cronograma valorizado de obra.', cantidad: 3200, plazo: 120, fechaConv: '10/07/2026', region: 'AMAZONAS' },
];

type AcfItem = typeof ACF_DATA[0];
type Vista = 'grid' | 'lista' | 'ext';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmtN(n: number) { return n.toLocaleString('es-PE'); }
function trunca(s: string, n: number) { return s.length > n ? s.slice(0, n).trim() + '…' : s; }

function ObjetoBadge({ objeto }: { objeto: string }) {
  const cls = objeto === 'Bien' ? 'bg-[#edf0f4] text-[#294269] border border-[#546887]/20'
    : objeto === 'Servicio' ? 'bg-[#E1F0FF] text-[#0056AC] border border-[#0056AC]/20'
    : objeto === 'Obra' ? 'bg-[#E3F3EC] text-[#126B49] border border-[#126B49]/20'
    : 'bg-[#FFF3EA] text-[#D75600] border border-[#D75600]/20';
  return <span className={`inline-flex px-2 py-0.5 rounded-[4px] text-[10px] font-bold font-['Roboto',sans-serif] ${cls}`}>{objeto}</span>;
}

function TrazPills() {
  return (
    <div className="flex items-center gap-1 flex-wrap">
      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest shrink-0 font-['Roboto',sans-serif]">TRAZABILIDAD</span>
      <span className="px-1.5 py-0.5 rounded-[4px] text-[9px] font-bold bg-[#FFF3EA] text-[#D75600] border border-[#D75600]/30">ACF</span>
      <span className="text-[#8A94A2] text-[12px] font-bold leading-none">›</span>
      <span className="px-1.5 py-0.5 rounded-[4px] text-[9px] font-bold bg-[#F6F9FC] text-gray-400 border border-gray-200">Selección</span>
      <span className="text-[#8A94A2] text-[12px] font-bold leading-none">›</span>
      <span className="px-1.5 py-0.5 rounded-[4px] text-[9px] font-bold bg-[#F6F9FC] text-gray-400 border border-gray-200">Contratos</span>
    </div>
  );
}

// ─── Modal detalle ────────────────────────────────────────────────────────────

function ModalACF({ item, onClose, navigate }: { item: AcfItem; onClose: () => void; navigate?: (page: Page) => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-[8px] shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col font-['Roboto',sans-serif]">
        {/* Header blanco */}
        <div className="flex items-center justify-between gap-4 px-5 py-4 bg-white border-b border-[#DEE3EA] rounded-t-[8px] shrink-0">
          <div className="flex items-center gap-3">
            <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-[4px] bg-[#edf0f4]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#294269" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11v2M5 9v6M18 3v18M18 3C12 5 7 8 5 9M18 21C12 19 7 16 5 15"/>
              </svg>
            </span>
            <div>
              <p className="text-[10px] font-semibold text-[#6a7b96] uppercase tracking-wider mb-0.5 font-['Roboto',sans-serif]">Actuaciones Preparatorias</p>
              <h3 className="text-[15px] font-bold text-[#294269] font-['Roboto',sans-serif]">Detalle de Anuncio de contratación futura</h3>
            </div>
          </div>
          <button onClick={onClose} className="shrink-0 p-1.5 hover:bg-[#edf0f4] rounded-[4px] transition-colors" aria-label="Cerrar">
            <X size={16} className="text-[#6a7b96]" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-5 py-4 space-y-4">
          {/* Trazabilidad strip — fondo gris suave */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#F4F5F7] rounded-[4px] flex-wrap">
            <span className="text-[9.5px] font-bold text-[#26292E] uppercase tracking-wider">Trazabilidad:</span>
            <TrazPills />
          </div>

          {/* Sección 1 — Identificación */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold text-[#294269] uppercase tracking-wider whitespace-nowrap font-['Roboto',sans-serif]">Identificación del anuncio</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Código ACF', value: item.codigo, mono: true, accent: true },
                { label: 'Tipo de selección', value: item.tipoSel, mono: false, accent: false },
                { label: 'Objeto', value: item.objeto, mono: false, accent: false },
                { label: 'Fecha de publicación', value: item.fechaPub, mono: true, accent: false },
                { label: 'Fecha aprox. convocatoria', value: item.fechaConv, mono: false, accent: true },
                { label: 'Normativa', value: 'Ley N° 32069', mono: false, accent: false },
              ].map(f => (
                <div key={f.label} className="flex flex-col gap-0.5">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{f.label}</span>
                  <span className={`text-[12px] ${f.mono ? "font-['Roboto',sans-serif] text-[12px]" : ''} ${f.accent ? 'font-bold text-[#0056AC]' : 'text-[#26292E]'}`}>{f.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sección 2 — Entidad */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold text-[#294269] uppercase tracking-wider whitespace-nowrap font-['Roboto',sans-serif]">Entidad convocante</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <p className="text-[13px] font-bold text-[#26292E]">{item.entidad}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Región: {item.region}</p>
          </div>

          {/* Sección 3 — Descripción */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold text-[#294269] uppercase tracking-wider whitespace-nowrap font-['Roboto',sans-serif]">Descripción del objeto</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Objeto de la contratación</p>
            <p className="text-[12.5px] text-[#26292E] leading-snug">{item.desc}</p>
          </div>

          {/* Sección 4 — Alcance */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold text-[#294269] uppercase tracking-wider whitespace-nowrap font-['Roboto',sans-serif]">Alcance / Justificación</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <p className="text-[12.5px] text-[#26292E] leading-relaxed">{item.alcance}</p>
          </div>

          {/* Sección 5 — Cuantitativo */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold text-[#294269] uppercase tracking-wider whitespace-nowrap font-['Roboto',sans-serif]">Datos cuantitativos</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Cantidad estimada</span>
                <span className="text-[17px] font-bold text-[#0056AC] font-['Roboto',sans-serif]">{fmtN(item.cantidad)}</span>
                <span className="text-[10px] text-gray-400">unidades</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Plazo de ejecución</span>
                <span className="text-[17px] font-bold text-[#26292E] font-['Roboto',sans-serif]">{item.plazo}</span>
                <span className="text-[10px] text-gray-400">días</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Unidad de medida</span>
                <span className="text-[12px] text-[#26292E]">Unidad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-2 px-5 py-3 border-t border-[#DEE3EA] shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-[#294269] rounded-[16px] text-[12px] font-semibold text-[#294269] hover:bg-[#63c9c4] hover:border-[#63c9c4] hover:text-white transition-colors"
          >
            Cerrar
          </button>
          <button
            onClick={() => { onClose(); navigate && navigate({ type: 'bienes-detail', id: 'bien:1', from: { type: 'search-planning' } }); }}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#294269] rounded-[16px] text-[12px] font-semibold text-white hover:bg-[#63c9c4] transition-colors"
          >
            Procedimiento de selección
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Vista Grid ───────────────────────────────────────────────────────────────

function CardGrid({ item, onDetalle }: { item: AcfItem; onDetalle: () => void }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[8px] hover:shadow-lg transition-all flex flex-col font-['Roboto',sans-serif]">
      {/* Top section */}
      <div className="flex-1 p-4">
        <p className="text-[12px] font-bold text-[#0056AC] font-['Roboto',sans-serif] leading-tight mb-1">{item.codigo}</p>
        <div className="mb-2"><ObjetoBadge objeto={item.objeto} /></div>
        <p className="text-[12px] font-bold text-[#26292E] leading-snug mb-1">{item.entidad}</p>
        <p className="text-[11px] text-gray-500 uppercase leading-snug line-clamp-3">{item.desc}</p>
      </div>

      {/* Data strip */}
      <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50/60 space-y-1">
        {[
          { label: 'Publicación',    value: item.fechaPub.split(' ')[0] },
          { label: 'Conv. aprox.',   value: item.fechaConv },
          { label: 'Cantidad',       value: fmtN(item.cantidad) },
          { label: 'Plazo',          value: `${item.plazo} días` },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between">
            <span className="text-[10px] text-gray-400 font-['Roboto',sans-serif]">{label}</span>
            <span className="text-[10px] font-medium text-[#26292E] font-['Roboto',sans-serif]">{value}</span>
          </div>
        ))}
      </div>

      {/* Trazabilidad */}
      <div className="px-4 py-2.5 border-t border-gray-100 flex flex-col gap-2.5">
        <TrazPills />
        <button
          onClick={onDetalle}
          className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#294269] text-white rounded-[6px] hover:bg-[#3F5578] transition-colors text-[11px] font-semibold font-['Roboto',sans-serif]"
        >
          <Eye size={12} />
          Ver detalle
        </button>
      </div>
    </div>
  );
}

// ─── Vista Lista ──────────────────────────────────────────────────────────────

function CardLista({ item, onDetalle }: { item: AcfItem; onDetalle: () => void }) {
  return (
    <div className="bg-white border border-[#DEE3EA] rounded-[8px] hover:shadow-md hover:border-gray-300 transition-all flex gap-4 px-4 py-3 relative overflow-hidden font-['Roboto',sans-serif]">
      <div className="flex-1 min-w-0">
        <div className="text-[11px] font-bold text-[#0056AC] font-['Roboto',sans-serif] mb-0.5">
          {item.codigo} &nbsp;·&nbsp; <span className="font-['Roboto',sans-serif] font-medium text-gray-500">{item.tipoSel}</span>
        </div>
        <p className="text-[13.5px] font-bold text-[#26292E] mb-0.5">{item.entidad}</p>
        <p className="text-[12.5px] text-gray-500 leading-snug line-clamp-2">{trunca(item.desc, 160)}</p>
        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
          <ObjetoBadge objeto={item.objeto} />
          <span className="text-[10px] text-gray-400">Cant.: <strong className="text-[#26292E]">{fmtN(item.cantidad)}</strong></span>
          <span className="text-[10px] text-gray-400">Plazo: <strong className="text-[#26292E]">{item.plazo} días</strong></span>
          <span className="text-[10px] text-gray-400">Pub.: <strong className="text-[#26292E]">{item.fechaPub.split(' ')[0]}</strong></span>
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-end justify-between min-w-[180px]">
        <TrazPills />
        <div className="text-[10px] text-gray-400 text-right">Conv. aprox.: <strong className="text-[#294269]">{item.fechaConv}</strong></div>
        <button onClick={onDetalle} className="flex items-center gap-1 px-3 py-1.5 bg-[#294269] text-white text-[11px] font-bold rounded-[4px] hover:bg-[#3F5578] transition-colors">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/></svg>
          Ver detalle
        </button>
      </div>
      <div className="h-[4px] bg-[#63c9c4] absolute bottom-0 left-0 right-0" />
    </div>
  );
}

// ─── Vista Extendida ──────────────────────────────────────────────────────────

function CardExt({ item, onDetalle }: { item: AcfItem; onDetalle: () => void }) {
  return (
    <div className="bg-white border border-[#DEE3EA] rounded-[8px] hover:shadow-md hover:border-gray-300 transition-all p-4 flex flex-col gap-1.5 relative overflow-hidden font-['Roboto',sans-serif]">
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[11px] font-bold text-[#0056AC] font-['Roboto',sans-serif]">{item.codigo}</span>
        <ObjetoBadge objeto={item.objeto} />
      </div>
      <p className="text-[13px] font-bold text-[#26292E] leading-snug">{item.entidad}</p>
      <p className="text-[12px] text-gray-500 leading-snug line-clamp-2">{trunca(item.desc, 140)}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
        {[
          { label: 'Tipo de selección', value: item.tipoSel },
          { label: 'Publicación', value: item.fechaPub, mono: true },
          { label: 'Cantidad', value: fmtN(item.cantidad), mono: true },
          { label: 'Plazo', value: `${item.plazo} días`, mono: true },
        ].map(f => (
          <div key={f.label} className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-semibold">{f.label}</span>
            <span className={`text-[12px] font-medium text-[#26292E] ${f.mono ? "font-['Roboto',sans-serif]" : ''}`}>{f.value}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 mt-1 border-t border-[#DEE3EA] flex-wrap gap-2">
        <TrazPills />
        <button onClick={onDetalle} className="flex items-center gap-1 px-2.5 py-1 bg-[#294269] text-white text-[11px] font-bold rounded-[4px] hover:bg-[#3F5578] transition-colors">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/></svg>
          Ver detalle
        </button>
      </div>
      <div className="h-[5px] bg-[#63c9c4] absolute bottom-0 left-0 right-0" />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface AcfResultsProps {
  onSelectItem?: (id: string | number) => void;
  navigate?: (page: Page) => void;
}

export function AcfResults({ onSelectItem, navigate }: AcfResultsProps) {
  const [vista, setVista] = useState<Vista>('grid');
  const [tipoSel, setTipoSel] = useState('');
  const [objeto, setObjeto] = useState('');
  const [sort, setSort] = useState('');
  const [modalItem, setModalItem] = useState<AcfItem | null>(null);

  const filtered = ACF_DATA.filter(d => {
    const tipOk = !tipoSel || d.tipoSel === tipoSel;
    const objOk = !objeto || d.objeto === objeto;
    return tipOk && objOk;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'fecha-desc') return b.id - a.id;
    if (sort === 'conv-asc') {
      const da = a.fechaConv.split('/').reverse().join('');
      const db = b.fechaConv.split('/').reverse().join('');
      return da.localeCompare(db);
    }
    if (sort === 'cant-desc') return b.cantidad - a.cantidad;
    if (sort === 'plazo-desc') return b.plazo - a.plazo;
    return 0;
  });

  const TIPOS = ['Licitación Pública', 'Adjudicación Simplificada', 'Concurso Público'];
  const OBJETOS = ['Bien', 'Servicio', 'Obra'];

  return (
    <div className="space-y-3 font-['Roboto',sans-serif]">
      {modalItem && <ModalACF item={modalItem} onClose={() => setModalItem(null)} navigate={navigate} />}

      {/* ── Chips bar ── */}
      <div className="flex items-center gap-2 flex-wrap pb-2 border-b border-[#DEE3EA]">
        <span className="text-[11px] font-bold text-gray-500">Tipo:</span>
        {['', ...TIPOS].map(t => (
          <button
            key={t}
            onClick={() => setTipoSel(t)}
            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors ${tipoSel === t ? 'bg-[#63c9c4] text-white' : 'bg-[#F6F9FC] text-gray-600 hover:bg-[#DEE3EA] border border-[#DEE3EA]'}`}
          >
            {t || 'Todos'}
          </button>
        ))}
        <span className="text-[11px] font-bold text-gray-500 ml-2">Objeto:</span>
        {OBJETOS.map(o => (
          <button
            key={o}
            onClick={() => setObjeto(prev => prev === o ? '' : o)}
            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors ${objeto === o ? 'bg-[#294269] text-white' : 'bg-[#F6F9FC] text-gray-600 hover:bg-[#DEE3EA] border border-[#DEE3EA]'}`}
          >
            {o}
          </button>
        ))}
      </div>

      {/* ── Toolbar ── */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-bold text-[#26292E]">Resultados de búsqueda</span>
          <span className="bg-[#F6F9FC] border border-[#DEE3EA] text-[12px] text-gray-600 px-2 py-0.5 rounded-full font-medium">{sorted.length} encontrados</span>
        </div>
        <div className="flex items-center gap-2">
          {/* View switcher */}
          <div className="flex gap-0.5 bg-[#F6F9FC] border border-[#DEE3EA] rounded-[6px] p-0.5">
            <button
              onClick={() => setVista('lista')}
              title="Vista lista"
              className={`w-8 h-7 flex items-center justify-center rounded-[4px] transition-colors ${vista === 'lista' ? 'bg-[#294269] text-white' : 'text-gray-500 hover:bg-[#DEE3EA]'}`}
            >
              <LayoutList size={14} />
            </button>
            <button
              onClick={() => setVista('grid')}
              title="Vista grilla"
              className={`w-8 h-7 flex items-center justify-center rounded-[4px] transition-colors ${vista === 'grid' ? 'bg-[#294269] text-white' : 'text-gray-500 hover:bg-[#DEE3EA]'}`}
            >
              <LayoutGrid size={14} />
            </button>
            <button
              onClick={() => setVista('ext')}
              title="Vista extendida"
              className={`w-8 h-7 flex items-center justify-center rounded-[4px] transition-colors ${vista === 'ext' ? 'bg-[#294269] text-white' : 'text-gray-500 hover:bg-[#DEE3EA]'}`}
            >
              <Columns2 size={14} />
            </button>
          </div>
          {/* Sort */}
          <div className="flex items-center gap-1 border border-[#DEE3EA] rounded-[6px] px-2 py-1 bg-white">
            <ArrowUpDown size={12} className="text-gray-400" />
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="text-[11.5px] text-[#26292E] bg-transparent outline-none cursor-pointer"
            >
              <option value="">Sin ordenar</option>
              <option value="fecha-desc">Más recientes</option>
              <option value="conv-asc">Próxima convocatoria</option>
              <option value="cant-desc">Mayor cantidad</option>
              <option value="plazo-desc">Mayor plazo</option>
            </select>
          </div>
          {/* Export */}
          <button className="flex items-center gap-1 px-2.5 py-1.5 border border-[#DEE3EA] rounded-[6px] text-[11px] font-semibold text-gray-600 hover:bg-[#F6F9FC] transition-colors bg-white">
            <Download size={12} />
            Exportar
          </button>
        </div>
      </div>

      {/* ── Results area ── */}
      {sorted.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-gray-400">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity={0.3} className="mb-3"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <p className="text-[14px] font-bold text-gray-500">Sin resultados</p>
          <p className="text-[12px]">Ajuste los filtros o limpie la búsqueda</p>
        </div>
      ) : vista === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {sorted.map(item => (
            <CardGrid key={item.id} item={item} onDetalle={() => setModalItem(item)} />
          ))}
        </div>
      ) : vista === 'lista' ? (
        <div className="flex flex-col gap-2.5">
          {sorted.map(item => (
            <CardLista key={item.id} item={item} onDetalle={() => setModalItem(item)} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sorted.map(item => (
            <CardExt key={item.id} item={item} onDetalle={() => setModalItem(item)} />
          ))}
        </div>
      )}
    </div>
  );
}
