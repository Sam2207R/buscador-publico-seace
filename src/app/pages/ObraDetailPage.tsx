import { useState } from 'react';
import {
  ArrowLeft, LayoutList, LayoutGrid, GitBranch, ChevronDown, ChevronUp,
  Building2, FileText, Users, Shield, Calendar, Package, X, Download,
  Banknote, Clock, CheckCircle, BarChart2, Eye
} from 'lucide-react';
import type { Page } from '../App';
import { PROCESOS, EC_DATA } from '../data/obras_data';

interface ObraDetailPageProps {
  id: string;
  navigate: (page: Page) => void;
}

// ─── Mock data ───────────────────────────────────────────────────────────────

const FASES = ['Actuaciones Preparatorias', 'Selección', 'Contratos'];


function getMontoContratado(p: any) {
  if (p.seleccion && Array.isArray(p.seleccion.items) && p.seleccion.items.length) {
    return p.seleccion.items
      .filter((it: any) => it.estado === 'Contratado')
      .reduce((acc: number, it: any) => {
        const postorGanador = (it.postores && it.postores[0]) ? it.postores[0] : null;
        const valorStr = postorGanador ? postorGanador.montoAdj : it.vrve;
        const n = parseFloat((valorStr || '0').replace(/[^0-9.]/g, ''));
        return acc + (isNaN(n) ? 0 : n);
      }, 0);
  }
  return p.monto;
}

function fmtMoneda(n: number) {
  return 'S/ ' + n.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function estadoBadge(estado: string, label: string) {
  const cls: Record<string, string> = {
    contratado: 'bg-[#E6F4ED] text-[#126B49] border-[#126B49]/30',
    publicado: 'bg-[#EFF6FF] text-[#0056AC] border-[#0056AC]/30',
    desierto: 'bg-[#edf0f4] text-[#294269] border-[#63c9c4]/30',
    convocatoria: 'bg-[#FFF7ED] text-[#D75600] border-[#D75600]/30',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold border rounded-[4px] ${cls[estado] || 'bg-gray-100 text-gray-600 border-gray-300'}`}>
      {label}
    </span>
  );
}

function MiniFases({ proceso }: { proceso: typeof PROCESOS[0] }) {
  return (
    <div className="flex gap-1 mt-2">
      {FASES.map((_, i) => {
        const done = proceso.fasesCompletas.includes(i);
        const current = i === proceso.faseActualIdx && !done;
        return (
          <div
            key={i}
            className={`h-[4px] flex-1 rounded-full transition-colors ${done ? 'bg-[#126B49]' : current ? 'bg-[#D75600]' : 'bg-[#DEE3EA]'}`}
          />
        );
      })}
    </div>
  );
}

// ─── Accordion ───────────────────────────────────────────────────────────────

function Accordion({ id, title, children, openSet, toggle }: {
  id: string; title: React.ReactNode; children: React.ReactNode;
  openSet: Set<string>; toggle: (id: string) => void;
}) {
  const open = openSet.has(id);
  return (
    <div className="border border-[#DEE3EA] rounded-[6px] overflow-hidden mb-2">
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-[#F6F9FC] hover:bg-[#EEF3FA] transition-colors text-left"
        onClick={() => toggle(id)}
      >
        <span className="flex items-center gap-2 text-[12.5px] font-semibold text-[#26292E] font-['Roboto',sans-serif]">
          {title}
        </span>
        {open ? <ChevronUp size={15} className="text-[#294269] shrink-0" /> : <ChevronDown size={15} className="text-gray-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-4 py-3 bg-white text-[12px] font-['Roboto',sans-serif] text-[#26292E]">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Info field ──────────────────────────────────────────────────────────────

function Field({ label, value, mono, full }: { label: string; value: string; mono?: boolean; full?: boolean }) {
  return (
    <div className={`flex flex-col gap-0.5 ${full ? 'col-span-2' : ''}`}>
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</span>
      <span className={`text-[12px] text-[#26292E] ${mono ? "font-['IBM_Plex_Mono',monospace]" : ''}`}>{value}</span>
    </div>
  );
}


function ExpedienteTecnicoObra({ eto }: { eto: any }) {
  const [activeTab, setActiveTab] = useState(1);
  if (!eto) return null;
  const fReg = eto.fReg || '—';

  const fmtKb = (kb: number) => kb.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  const DocTblSimple = ({ arch, kb }: { arch: string; kb: number }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-[11.5px]">
        <thead>
          <tr>
            <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[50px]">Nro</th>
            <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Nombre del Archivo</th>
            <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[150px]">Fecha de Registro</th>
            <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[110px]">Tamaño (KB)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">1</td>
            <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]"><span className="text-[#0056AC] font-semibold cursor-pointer hover:underline">{arch}</span></td>
            <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">{fReg}</td>
            <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">{fmtKb(kb)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const DocTblMulti = ({ rows }: { rows: any[] }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-[11.5px]">
        <thead>
          <tr>
            <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[50px]">Nro</th>
            <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Nombre del Archivo</th>
            <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[150px]">Fecha de Registro</th>
            <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[110px]">Tamaño (KB)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">{i + 1}</td>
              <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]"><span className="text-[#0056AC] font-semibold cursor-pointer hover:underline">{r.arch}</span></td>
              <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">{fReg}</td>
              <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">{fmtKb(r.kb)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const DocTblConNombre = ({ colNombre, rows }: { colNombre: string; rows: any[] }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-[11.5px]">
        <thead>
          <tr>
            <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[50px]">Nro</th>
            <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">{colNombre}</th>
            <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Nombre del Archivo</th>
            <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[150px]">Fecha de Registro</th>
            <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[110px]">Tamaño (KB)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">{i + 1}</td>
              <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">{r.doc}</td>
              <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]"><span className="text-[#0056AC] font-semibold cursor-pointer hover:underline">{r.arch}</span></td>
              <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">{fReg}</td>
              <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">{fmtKb(r.kb)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const Grp = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="border border-[#DEE3EA] rounded-[6px] relative pt-2 mb-4 mt-4 first:mt-1.5">
      <div className="absolute top-[-11px] left-2.5 bg-white border border-[#DEE3EA] rounded-[5px] px-2.5 py-0.5 text-[11px] font-bold text-[#0056AC]">
        {title}
      </div>
      <div className="p-3.5 pt-4 pb-2.5">
        {children}
      </div>
    </div>
  );

  const KvTable = ({ rows }: { rows: { label: string; value: React.ReactNode }[] }) => (
    <table className="w-full border-collapse text-[12px]">
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-500 font-semibold w-[42%] align-top">{r.label}</td>
            <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] align-top">{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      <div className="flex gap-[2px] bg-[#0056AC] p-1 rounded-t-[6px] flex-wrap">
        {[1, 2, 3, 4].map(num => (
          <button
            key={num}
            onClick={() => setActiveTab(num)}
            className={`px-3.5 py-1.5 rounded-[4px] text-[11.5px] font-bold transition-colors font-['Roboto',sans-serif] ${
              activeTab === num ? 'bg-white text-[#0056AC]' : 'bg-transparent text-white/80 hover:bg-white/10'
            }`}
          >
            Sección {num}
          </button>
        ))}
      </div>
      <div className="p-3.5 pt-3 border border-t-0 border-[#DEE3EA] rounded-b-[6px] bg-white">
        {activeTab === 1 && (
          <div>
            <p className="text-[11.5px] text-gray-500 leading-snug mb-3.5 bg-[#F6F9FC] p-2.5 rounded-[6px]">
              Según el Anexo de definiciones del Reglamento de la LCE, es el conjunto de documentos que comprende: memoria descriptiva, especificaciones técnicas, planos de ejecución de obra, metrados, presupuesto de obra, fecha de determinación del presupuesto de obra, análisis de precios, calendario de avance de obra valorizado, fórmulas polinómicas y, si el caso lo requiere, estudio de suelos, estudio geológico, de impacto ambiental u otros complementarios.
            </p>
            <Grp title="Datos de aprobación del Expediente Técnico de Obra">
              <KvTable rows={[
                { label: 'Tipo de documento de aprobación', value: eto.aprobacion.tipo },
                { label: 'Nro.', value: eto.aprobacion.nro },
                { label: 'Fecha de Aprobación del Expediente Técnico de Obra', value: eto.aprobacion.fecha },
                { label: 'Documento de Aprobación del Expediente Técnico de Obra', value: <><span className="text-[#0056AC] font-semibold cursor-pointer hover:underline">{eto.aprobacion.archivo}</span> ({fmtKb(eto.aprobacion.tamKb)} KB)</> },
              ]} />
            </Grp>
            <Grp title="Funcionario que aprueba el Expediente Técnico de Obra">
              <KvTable rows={[
                { label: 'Tipo de documento de identidad', value: eto.funcionario.tipoDoc },
                { label: 'Nro.', value: eto.funcionario.nro },
                { label: 'Apellido Paterno', value: eto.funcionario.apPat },
                { label: 'Apellido Materno', value: eto.funcionario.apMat },
                { label: 'Nombres', value: eto.funcionario.nombres },
                { label: 'Cargo', value: eto.funcionario.cargo },
              ]} />
            </Grp>
            <Grp title="Formulación del Expediente Técnico de Obra">
              <KvTable rows={[
                { label: 'Forma de elaboración del Expediente Técnico de Obra', value: eto.formulacion.forma },
                { label: 'Unidad Orgánica de la Entidad', value: eto.formulacion.unidad },
              ]} />
            </Grp>
            <Grp title="Plazo de Ejecución de la Obra">
              <KvTable rows={[
                { label: 'Plazo de ejecución de la obra', value: eto.plazoEjecucion },
              ]} />
            </Grp>
          </div>
        )}

        {activeTab === 2 && (
          <div>
            {eto.sec2.map((d: any, i: number) => (
              <Grp key={i} title={d.doc}>
                <DocTblSimple arch={d.arch} kb={d.kb} />
              </Grp>
            ))}
          </div>
        )}

        {activeTab === 3 && (
          <div>
            <Grp title="Presupuesto de Obra">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[11.5px]">
                  <thead>
                    <tr>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[50px]">Nro</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Nombre del Archivo</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[170px]">Fecha de determinación del presupuesto</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[150px]">Fecha de Registro</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[110px]">Tamaño (KB)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">1</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]"><span className="text-[#0056AC] font-semibold cursor-pointer hover:underline">{eto.presupuesto.arch}</span></td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">{eto.presupuesto.fDeterm}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">{fReg}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">{fmtKb(eto.presupuesto.kb)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Grp>
            <Grp title="Análisis de precios">
              <DocTblSimple arch={eto.analisisPrecios.arch} kb={eto.analisisPrecios.kb} />
            </Grp>
            <Grp title="Relación de precios y cantidades de recursos requeridos por tipo">
              <DocTblSimple arch={eto.relacionPrecios.arch} kb={eto.relacionPrecios.kb} />
            </Grp>
            <Grp title="Programa de ejecución de obra y calendario de avance">
              <DocTblSimple arch={eto.calendarioAvance.arch} kb={eto.calendarioAvance.kb} />
            </Grp>
            <Grp title="Fórmulas polinómicas">
              <DocTblSimple arch={eto.formulaPolinomica.arch} kb={eto.formulaPolinomica.kb} />
            </Grp>
            <Grp title="Estudios Técnicos">
              <DocTblConNombre colNombre="Nombre del estudio" rows={eto.estudios.map((s: any) => ({ doc: s.nombre, arch: s.arch, kb: s.kb }))} />
            </Grp>
            <Grp title="Gestión de riesgos">
              <DocTblSimple arch={eto.gestionRiesgos.arch} kb={eto.gestionRiesgos.kb} />
            </Grp>
            <Grp title="Gastos generales fijos y variables">
              <DocTblSimple arch={eto.gastosGenerales.arch} kb={eto.gastosGenerales.kb} />
            </Grp>
          </div>
        )}

        {activeTab === 4 && (
          <div>
            <Grp title="Equipamiento y/o Mobiliario">
              <DocTblSimple arch={eto.equipamiento.arch} kb={eto.equipamiento.kb} />
            </Grp>
            <Grp title="Documentos de disponibilidad física del terreno">
              <DocTblMulti rows={eto.terreno} />
            </Grp>
            <Grp title="Licencias, autorizaciones y permisos (de corresponder)">
              <DocTblConNombre colNombre="Nombre del documento" rows={eto.licencias} />
            </Grp>
            <Grp title="Otros documentos del expediente técnico">
              <DocTblConNombre colNombre="Nombre del documento" rows={eto.otrosDocs} />
            </Grp>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Phase content ───────────────────────────────────────────────────────────

function ActuacionesPreparatorias({ proceso, openSet, toggle }: {
  proceso: typeof PROCESOS[0]; openSet: Set<string>; toggle: (id: string) => void;
}) {
  const a = proceso.anuncio;
  const ac = proceso.actuaciones;
  const en = ac.entidad;
  const pr = ac.procedimiento;
  const uid = 'ap-' + proceso.codigo;

  return (
    <div className="space-y-1">
<Accordion id={uid + '-ent'} title={<><Building2 size={13} />Información general de la entidad</>} openSet={openSet} toggle={toggle}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Entidad convocante" value={en.nombre} full />
          <Field label="RUC" value={en.ruc} mono />
          <Field label="Teléfono" value={en.telefono} />
          <Field label="Dirección legal" value={en.direccion} full />
          <Field label="Página web" value={en.web} />
        </div>
      </Accordion>

      {proceso.eto && (
        <Accordion id={uid + '-eto'} title={<><FileText size={13} />Expediente Técnico de Obra</>} openSet={openSet} toggle={toggle}>
          <ExpedienteTecnicoObra eto={proceso.eto} />
        </Accordion>
      )}

      <Accordion id={uid + '-proc'} title={<><FileText size={13} />Información general del procedimiento</>} openSet={openSet} toggle={toggle}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Objeto de contratación" value={pr.objeto} />
          <Field label="Derecho de participación" value={pr.derechoPart} />
          <Field label="Cuantía" value={pr.vrVeImporte} mono />
          <Field label="Fecha de publicación" value={pr.fechaPublicacion} />
          <Field label="Descripción del objeto" value={pr.descripcion} full />
          <Field label="Normativa aplicable" value={pr.normativa} full />
        </div>
      </Accordion>

      <Accordion id={uid + '-ec'} title={<><Users size={13} />Entidad contratante</>} openSet={openSet} toggle={toggle}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[11.5px]">
            <thead>
              <tr>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] rounded-tl-[4px] w-36">N° RUC</th>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] rounded-tr-[4px]">Entidad Contratante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 font-['IBM_Plex_Mono',monospace] text-[11.5px] border-b border-[#DEE3EA]">{ac.entidadContratante.ruc}</td>
                <td className="px-3 py-2 border-b border-[#DEE3EA]">{ac.entidadContratante.nombre}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Accordion>

      <Accordion id={uid + '-ac'} title={<><Shield size={13} />Acuerdos comerciales</>} openSet={openSet} toggle={toggle}>
        <p className="text-[11.5px] text-gray-500 mb-3">El procedimiento se encuentra bajo la cobertura del o de los siguientes acuerdos comerciales:</p>
        <table className="w-full border-collapse text-[11.5px]">
          <thead>
            <tr>
              <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] rounded-tl-[4px] w-10">Nro.</th>
              <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] rounded-tr-[4px]">Descripción del Acuerdo Comercial</th>
            </tr>
          </thead>
          <tbody>
            {ac.acuerdosComerciales.map((ac2, i) => (
              <tr key={i} className="border-b border-[#DEE3EA]">
                <td className="px-3 py-2 text-gray-500">{i + 1}</td>
                <td className="px-3 py-2">{ac2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Accordion>

      <Accordion id={uid + '-anuncio'} title={<><Calendar size={13} />Anuncio de contratación futura</>} openSet={openSet} toggle={toggle}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="N°" value={a.n} />
          <Field label="Tipo de selección" value={a.tipoSeleccion} />
          <Field label="Nombre de la entidad" value={a.entidad} full />
          <Field label="Fecha de publicación" value={a.fechaPublicacion} />
          <Field label="Objeto de la contratación" value={a.objetoContratacion} />
          <Field label="Cantidad" value={a.cantidad} />
          <Field label="Plazo en días" value={String(a.plazoDias)} />
          <Field label="Fecha aprox. de convocatoria" value={a.fechaConvocatoria} />
          <Field label="Descripción del objeto" value={a.descripcionObjeto} full />
          <Field label="Alcance" value={a.alcance} full />
        </div>
        <div className="mt-3 pt-3 border-t border-[#DEE3EA]">
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 border-[1.5px] border-[#0056AC] text-[#0056AC] rounded-[4px] text-[11.5px] font-bold hover:bg-[#0056AC] hover:text-white transition-colors">
            <ArrowLeft size={12} />
            Volver al Anuncio de Contratación Futura (ACF-0038-MPCH)
          </button>
        </div>
      </Accordion>

      <Accordion id={uid + '-comite'} title={<><Users size={13} />Conductor del Tipo de Selección</>} openSet={openSet} toggle={toggle}>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <Field label="Tipo" value={proceso.comite.tipoConductor} />
            <Field label="Tipo de documento" value={proceso.comite.tipoDocumento} full />
            <Field label="Fecha de emisión" value={proceso.comite.fechaEmision} />
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Lista de Integrantes</p>
          <table className="w-full border-collapse text-[11.5px]">
            <thead>
              <tr>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] w-12">Nro.</th>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px]">Apellidos y Nombres</th>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] w-44">Tipo de Integrante</th>
              </tr>
            </thead>
            <tbody>
              {proceso.comite.integrantes.map((m: any, i: number) => (
                <tr key={i} className="border-b border-[#DEE3EA]">
                  <td className="px-3 py-2 text-gray-500">{i + 1}</td>
                  <td className="px-3 py-2 font-medium">{m.nombre}</td>
                  <td className="px-3 py-2 text-gray-600">{m.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Accordion>
    </div>
  );
}

// Datos de versiones anteriores por etapa (para el modal de historial)
const HISTORIAL_VERSION_ANTERIOR: Record<string, { documento: string; archivo: string; tamanio: string; fecha: string; motivo: string }> = {
  'Convocatoria': { documento: 'Bases Administrativas (versión preliminar)', archivo: 'Bases_Admin_v1.pdf', tamanio: '2850 KB', fecha: '05/04/2026 09:10', motivo: 'Versión preliminar publicada por el comité de selección' },
  'Absolución de consultas y observaciones': { documento: 'Pliego de absolución de consultas y observaciones (primera ronda)', archivo: 'Absolucion_v1.pdf', tamanio: '1 KB', fecha: '24/04/2026 16:40', motivo: 'Primera ronda de absolución' },
  'Integración de las Bases': { documento: 'Bases Integradas (versión preliminar)', archivo: 'Bases_Integradas_v1.pdf', tamanio: '2870 KB', fecha: '26/04/2026 11:05', motivo: 'Versión preliminar, pendiente de visto bueno del titular' },
};

const ETAPAS_CON_HISTORIAL = Object.keys(HISTORIAL_VERSION_ANTERIOR);

interface HistorialDoc {
  etapa: string;
  documento: string;
  archivo: string;
  tamanio: string;
  fecha: string;
}


interface OfertaDoc {
  nombre: string;
  tipo: string;
  tamano: string;
}

interface OfertaItem {
  descripcion: string;
  cantSolicitada: number;
  vrve: string;
  cantOfertada: number;
  montoOfertado: string;
  docEspecificos: string;
  leySelva: string;
}

function OfertaModal({ oferta, onClose }: { oferta: any; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-[8px] shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col font-['Roboto',sans-serif]">
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#D75600] shrink-0">
          <h3 className="text-[14px] font-bold text-white">Listado de presentación ofertas del procedimiento</h3>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            aria-label="Cerrar"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-5 overflow-y-auto space-y-5 bg-white">
          {oferta.esConsorcio && oferta.integrantes && (
            <div className="border border-[#DEE3EA] rounded-[6px] relative pt-2">
              <div className="absolute top-[-11px] left-2.5 bg-white border border-[#DEE3EA] rounded-[5px] px-2.5 py-0.5 text-[11px] font-bold text-[#0056AC]">
                Integrantes del consorcio
              </div>
              <div className="p-3.5 pt-4 pb-2.5 overflow-x-auto">
                <table className="w-full border-collapse text-[11.5px]">
                  <thead>
                    <tr>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[40px]">Nro.</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Tipo de Proveedor</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">RUC/Código</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Nombre o Razón Social</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Registro RNP</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">% Participación</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">País Origen</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">MYPE</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Empresa integrada por discapacitados</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Estado de Consentimiento</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] whitespace-nowrap">Fecha y Hora de Consentimiento</th>
                    </tr>
                  </thead>
                  <tbody>
                    {oferta.integrantes.map((m: any, i: number) => (
                      <tr key={i} className="hover:bg-[#F6F9FC]">
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-600">{i + 1}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{m.tipo}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-[#0056AC] font-['IBM_Plex_Mono',monospace] font-bold">{m.ruc}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] font-semibold text-gray-800">{m.nombre}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{m.rnp}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{m.participacion}%</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{m.pais}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{m.mype || '—'}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{m.discapacitados || '—'}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{m.estadoConsentimiento}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700 whitespace-nowrap">{m.fechaConsentimiento}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="border border-[#DEE3EA] rounded-[6px] relative pt-2">
            <div className="absolute top-[-11px] left-2.5 bg-white border border-[#DEE3EA] rounded-[5px] px-2.5 py-0.5 text-[11px] font-bold text-[#0056AC]">
              Listado de documentos
            </div>
            <div className="p-3.5 pt-4 pb-2.5 overflow-x-auto">
              <table className="w-full border-collapse text-[11.5px]">
                <thead>
                  <tr>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[40px]">Nro.</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Nombre Archivo</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[120px]">Tipo Archivo</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[120px]">Tamaño Archivo</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[100px]">Documento</th>
                  </tr>
                </thead>
                <tbody>
                  {(oferta.documentos || []).map((d: any, i: number) => (
                    <tr key={i} className="hover:bg-[#F6F9FC]">
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-600">{i + 1}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] font-medium text-gray-800">{d.nombre}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{d.tipo}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{d.tamano}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">
                        <button className="text-[11.5px] font-bold text-[#0056AC] hover:underline">Descargar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="border border-[#DEE3EA] rounded-[6px] relative pt-2">
            <div className="absolute top-[-11px] left-2.5 bg-white border border-[#DEE3EA] rounded-[5px] px-2.5 py-0.5 text-[11px] font-bold text-[#0056AC]">
              Listado de ítems
            </div>
            <div className="p-3.5 pt-4 pb-2.5 overflow-x-auto">
              <table className="w-full border-collapse text-[11.5px]">
                <thead>
                  <tr>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[40px]">Nro.</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Descripción del ítem</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Cantidad solicitada</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">VR/VE/Cuantía de la contratación</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Cantidad ofertada</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Monto ofertado</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Ley de promoción de la Selva</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Archivo con detalle de monto ofertado</th>
                  </tr>
                </thead>
                <tbody>
                  {(oferta.items || []).map((it: any, i: number) => (
                    <tr key={i} className="hover:bg-[#F6F9FC]">
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-600">{i + 1}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] font-medium text-gray-800">{it.descripcion}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{it.cantSolicitada}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700 font-['IBM_Plex_Mono',monospace]">{it.vrve}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{it.cantOfertada}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700 font-['IBM_Plex_Mono',monospace]">{it.montoOfertado}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{it.leySelva}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">
                        <button className="text-[11.5px] font-bold text-[#0056AC] hover:underline">Descargar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HistorialModal({ doc, onClose }: { doc: HistorialDoc; onClose: () => void }) {
  const prev = HISTORIAL_VERSION_ANTERIOR[doc.etapa];
  const vigenteLabel = prev ? 'v2 (vigente)' : 'v1 (vigente)';

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-[8px] shadow-2xl w-full max-w-2xl overflow-hidden font-['Roboto',sans-serif]">
        {/* Red header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#63c9c4]">
          <h3 className="text-[14px] font-bold text-white">Historial de documentos — {doc.etapa}</h3>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            aria-label="Cerrar"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-[12.5px] text-[#26292E] mb-4">
            Etapa: <strong>{doc.etapa}</strong>
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-[11.5px]">
              <thead>
                <tr>
                  {['Versión', 'Documento', 'Archivo', 'Fecha y hora pub.', 'Acciones'].map((h, i, arr) => (
                    <th key={h} className={`bg-[#294269] text-white px-3 py-2 text-left text-[11px] ${i === 0 ? 'rounded-tl-[4px] w-28' : ''} ${i === arr.length - 1 ? 'rounded-tr-[4px] w-24' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {prev && (
                  <tr className="bg-[#F6F9FC] border-b border-[#DEE3EA]">
                    <td className="px-3 py-2 font-['IBM_Plex_Mono',monospace] text-gray-400 text-[11px]">v1</td>
                    <td className="px-3 py-2 text-gray-500">{prev.documento}</td>
                    <td className="px-3 py-2 text-gray-400 text-[11px]">{prev.archivo} ({prev.tamanio})</td>
                    <td className="px-3 py-2 text-gray-400 whitespace-nowrap">{prev.fecha}</td>
                    <td className="px-3 py-2">
                      <button className="text-[11px] text-[#294269] font-bold hover:underline">Descargar</button>
                    </td>
                  </tr>
                )}
                <tr className="border-b border-[#DEE3EA]">
                  <td className="px-3 py-2 font-['IBM_Plex_Mono',monospace] text-[11px] text-gray-600">{vigenteLabel}</td>
                  <td className="px-3 py-2 font-medium">{doc.documento}</td>
                  <td className="px-3 py-2 text-gray-500 text-[11px]">{doc.archivo} ({doc.tamanio})</td>
                  <td className="px-3 py-2 text-gray-500 whitespace-nowrap">{doc.fecha}</td>
                  <td className="px-3 py-2">
                    <button className="text-[11px] text-[#294269] font-bold hover:underline">Descargar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {prev && (
            <p className="text-[11.5px] text-gray-500">{prev.motivo}.</p>
          )}
          {!prev && (
            <p className="text-[11.5px] text-gray-500">No se registran versiones anteriores para esta etapa.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Seleccion({ proceso, openSet, toggle, setOfertaModal }: {
  proceso: typeof PROCESOS[0]; openSet: Set<string>; toggle: (id: string) => void; setOfertaModal: (o: any) => void;
}) {
  const s = proceso.seleccion;
  const uid = 'sel-' + proceso.codigo;
  const tieneOfertas = proceso.ofertas && proceso.ofertas.length > 0;
  const [historialDoc, setHistorialDoc] = useState<HistorialDoc | null>(null);

  return (
    <div className="space-y-1">
      {historialDoc && <HistorialModal doc={historialDoc} onClose={() => setHistorialDoc(null)} />}

      <Accordion id={uid + '-info'} title={<><FileText size={13} />Convocatoria — Información general</>} openSet={openSet} toggle={toggle}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Nomenclatura" value={s.nomenclatura} mono />
          <Field label="N° Convocatoria" value={s.nConvocatoria} />
          <Field label="Tipo Compra o Selección" value={s.tipoCompra} />
          <Field label="Versión SEACE" value={s.versionSEACE} />
          <Field label="Normativa aplicable" value={s.normativa} full />
        </div>
      </Accordion>

      <Accordion id={uid + '-cron'} title={<><Calendar size={13} />Cronograma</>} openSet={openSet} toggle={toggle}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[11.5px]">
            <thead>
              <tr>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] rounded-tl-[4px]">Etapa</th>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] whitespace-nowrap">Fecha Inicio</th>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] rounded-tr-[4px] whitespace-nowrap">Fecha Fin</th>
              </tr>
            </thead>
            <tbody>
              {s.cronograma.map((c, i) => (
                <tr key={i} className="border-b border-[#DEE3EA]">
                  <td className="px-3 py-2">{c.etapa}</td>
                  <td className="px-3 py-2 font-['IBM_Plex_Mono',monospace] text-[#1a5cb5] whitespace-nowrap">{c.inicio}</td>
                  <td className="px-3 py-2 font-['IBM_Plex_Mono',monospace] text-[#1a5cb5] whitespace-nowrap">{c.fin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Accordion>

      <Accordion id={uid + '-docs'} title={<><FileText size={13} />Documentos por etapa</>} openSet={openSet} toggle={toggle}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[11.5px]">
            <thead>
              <tr>
                <th className="bg-[#D75600] text-white px-3 py-2 text-left text-[11px] rounded-tl-[4px] w-10">Nro.</th>
                <th className="bg-[#D75600] text-white px-3 py-2 text-left text-[11px]">Etapa</th>
                <th className="bg-[#D75600] text-white px-3 py-2 text-left text-[11px]">Documento</th>
                <th className="bg-[#D75600] text-white px-3 py-2 text-left text-[11px]">Archivo</th>
                <th className="bg-[#D75600] text-white px-3 py-2 text-left text-[11px] whitespace-nowrap">Fecha y hora pub.</th>
                <th className="bg-[#D75600] text-white px-3 py-2 text-[11px] text-center">Acciones</th>
                <th className="bg-[#D75600] text-white px-3 py-2 text-[11px] rounded-tr-[4px] text-center w-20">Historial</th>
              </tr>
            </thead>
            <tbody>
              {s.documentos.map((d) => {
                const tieneHistorial = ETAPAS_CON_HISTORIAL.includes(d.etapa);
                return (
                  <tr key={d.n} className="border-b border-[#DEE3EA] hover:bg-[#F6F9FC]">
                    <td className="px-3 py-2 text-gray-500 font-['IBM_Plex_Mono',monospace]">{d.n}</td>
                    <td className="px-3 py-2">{d.etapa}</td>
                    <td className="px-3 py-2">{d.documento}</td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-1.5">
                        <FileText size={12} className="text-[#294269]" />
                        <span className="text-[11px] text-gray-500">{d.archivo}</span>
                        <span className="text-[10px] text-gray-400">({d.tamanio})</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 text-gray-500 whitespace-nowrap">{d.fecha}</td>
                    <td className="px-3 py-2 text-center">
                      <button className="inline-flex items-center gap-1 text-[11px] text-[#294269] font-bold hover:underline">
                        <Download size={11} />Descargar
                      </button>
                    </td>
                    <td className="px-3 py-2 text-center">
                      {tieneHistorial && (
                        <button
                          onClick={() => setHistorialDoc({ etapa: d.etapa, documento: d.documento, archivo: d.archivo, tamanio: d.tamanio, fecha: d.fecha })}
                          className="p-1 hover:bg-[#F6F9FC] rounded transition-colors text-gray-500 hover:text-[#0056AC]"
                          title="Ver historial de documentos"
                          aria-label="Ver historial de documentos"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Accordion>

      <Accordion id={uid + '-items'} title={<><Package size={13} />Listado de ítems</>} openSet={openSet} toggle={toggle}>
        <div className="space-y-3">
          {s.items.map((it) => {
            const estColor = it.estado === 'Contratado'
              ? 'bg-[#E6F4ED] text-[#126B49]'
              : it.estado === 'Desierto'
              ? 'bg-[#edf0f4] text-[#294269]'
              : 'bg-[#EFF6FF] text-[#0056AC]';
            return (
              <div key={it.n} className="border border-[#DEE3EA] rounded-[6px] p-3 bg-[#F6F9FC]">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-[12px] font-bold text-[#0056AC]">{it.n} — {it.descripcion}</p>
                  <span className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-[3px] ${estColor}`}>{it.estado}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <Field label="Código CUBSO" value={it.cubso} mono />
                  <Field label="Cantidad" value={it.cantidad} />
                  <Field label="Cuantía" value={it.estado === 'Publicado' ? '—' : it.vrve} />
                  <Field label="Reserva MYPE" value={it.mype} />
                  <Field label="Paquete" value={it.paquete} />
                </div>
                {it.postores.length > 0 && (
                  <table className="w-full border-collapse text-[11.5px] mt-1">
                    <thead>
                      <tr>
                        {['Postor', 'MYPE', 'Ley Selva', 'Bonif.', 'Cant. adjudicada', 'Monto adjudicado'].map(h => (
                          <th key={h} className="bg-[#EFF6FF] text-[#0056AC] px-2 py-1.5 text-left text-[10.5px]">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {it.postores.map((p, pi) => (
                        <tr key={pi} className="border-b border-[#DEE3EA]">
                          <td className="px-2 py-1.5">{p.postor}</td>
                          <td className="px-2 py-1.5">{p.mype}</td>
                          <td className="px-2 py-1.5">{p.selva}</td>
                          <td className="px-2 py-1.5">{p.bonif}</td>
                          <td className="px-2 py-1.5 font-['IBM_Plex_Mono',monospace] text-right">{p.cantAdj}</td>
                          <td className="px-2 py-1.5 font-['IBM_Plex_Mono',monospace] text-right font-bold text-[#126B49]">{p.montoAdj}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            );
          })}
        </div>
      </Accordion>

      {tieneOfertas && (
        <div className="border border-[#DEE3EA] rounded-[6px] overflow-hidden mb-2">
          <div className="px-4 py-3 bg-[#294269] text-white">
            <p className="text-[12.5px] font-bold font-['Roboto',sans-serif]">Listado de ofertas calificadas</p>
          </div>
          <div className="px-4 py-3 overflow-x-auto bg-white">
            <table className="w-full border-collapse text-[11.5px]">
              <thead>
                <tr>
                  {['Nro.', 'RUC/Código', 'Nombre o Razón Social', 'Fecha de Presentación', 'Hora de Presentación', 'Usuario de Presentación', 'Acciones'].map(h => (
                    <th key={h} className="bg-[#F6F9FC] text-gray-600 px-3 py-2 text-center text-[11px] border-b-2 border-[#DEE3EA]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {proceso.ofertas.map((o: any, i: number) => (
                  <tr key={i} className="border-b border-[#DEE3EA] hover:bg-[#F6F9FC]">
                    <td className="px-3 py-2 text-gray-700 text-center">{i + 1}</td>
                    <td className="px-3 py-2 font-['IBM_Plex_Mono',monospace] text-gray-700 text-center">{o.ruc}</td>
                    <td className="px-3 py-2 font-semibold text-gray-700 text-center">{o.nombre}</td>
                    <td className="px-3 py-2 text-gray-700 text-center">{o.fecha}</td>
                    <td className="px-3 py-2 text-gray-700 text-center">{o.hora}</td>
                    <td className="px-3 py-2 font-['IBM_Plex_Mono',monospace] text-gray-700 text-center">{o.usuario}</td>
                    <td className="px-3 py-2 text-center">
                      <button onClick={() => setOfertaModal(o)} title="Ver detalle" aria-label="Ver detalle" className="inline-flex items-center justify-center w-7 h-7 rounded-[4px] bg-[#EFF6FF] text-[#0056AC] hover:bg-[#0056AC] hover:text-white transition-colors"><Eye size={14} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {proceso.indicadoresRiesgo && (
        <IndicadoresRiesgo datos={proceso.indicadoresRiesgo} />
      )}
    </div>
  );
}

// ─── Gauge SVG ───────────────────────────────────────────────────────────────

function GaugeTransparencia({ score, nivel }: { score: number; nivel: string }) {
  const r = 54;
  const cx = 70;
  const cy = 70;
  const strokeW = 12;
  const circ = Math.PI * r;
  const pct = Math.min(Math.max(score, 0), 100) / 100;
  const colorTrack = nivel === 'Satisfactorio' ? '#126B49' : nivel === 'Regular' ? '#D75600' : '#BF0909';
  const startAngle = Math.PI;
  const endAngle = Math.PI + Math.PI * pct;
  const x1 = cx + r * Math.cos(startAngle);
  const y1 = cy + r * Math.sin(startAngle);
  const x2 = cx + r * Math.cos(endAngle);
  const y2 = cy + r * Math.sin(endAngle);
  const largeArc = pct > 0.5 ? 1 : 0;

  return (
    <div className="flex flex-col items-center">
      <svg width="140" height="82" viewBox="0 0 140 82" aria-label={`Índice de Transparencia: ${score}`}>
        {/* Track background */}
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke="#DEE3EA"
          strokeWidth={strokeW}
          strokeLinecap="round"
        />
        {/* Filled arc */}
        {score > 0 && (
          <path
            d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`}
            fill="none"
            stroke={colorTrack}
            strokeWidth={strokeW}
            strokeLinecap="round"
          />
        )}
        {/* Score label */}
        <text x={cx} y={cy - 2} textAnchor="middle" fontSize="22" fontWeight="bold" fill="#26292E" fontFamily="'IBM Plex Mono', monospace">{score}</text>
        <text x={cx} y={cy + 14} textAnchor="middle" fontSize="9" fill={colorTrack} fontFamily="Roboto, sans-serif" fontWeight="600">{nivel}</text>
        <text x={cx - r + 4} y={cy + 18} textAnchor="middle" fontSize="8" fill="#888" fontFamily="Roboto, sans-serif">0</text>
        <text x={cx + r - 4} y={cy + 18} textAnchor="middle" fontSize="8" fill="#888" fontFamily="Roboto, sans-serif">100</text>
      </svg>
      <p className="text-[10px] text-gray-500 mt-1 font-['Roboto',sans-serif] text-center">Puntaje OCI ({new Date().getFullYear()})</p>
    </div>
  );
}

// ─── Indicadores de Riesgo ───────────────────────────────────────────────────

function IndicadoresRiesgo({ datos }: { datos: any }) {
  const { cumplimientoPlazo, datosAbiertos } = datos;
  const riesgoColor: Record<string, string> = {
    Alto: 'bg-[#edf0f4] text-[#294269] border-[#63c9c4]/30',
    Medio: 'bg-[#FFF7ED] text-[#D75600] border-[#D75600]/30',
    Bajo: 'bg-[#E6F4ED] text-[#126B49] border-[#126B49]/30',
  };
  const badgeColor: Record<string, string> = {
    naranja: 'bg-[#FFF7ED] text-[#D75600] border-[#D75600]/30',
    azul: 'bg-[#EFF6FF] text-[#0056AC] border-[#0056AC]/30',
  };
  const nivelColor = datosAbiertos.nivel === 'Satisfactorio' ? '#126B49' : datosAbiertos.nivel === 'Regular' ? '#D75600' : '#BF0909';

  return (
    <div className="border border-[#DEE3EA] rounded-[6px] overflow-hidden mb-2">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#F6F9FC] border-b border-[#DEE3EA]">
        <div className="flex items-center gap-2">
          <Shield size={14} className="text-[#294269]" />
          <span className="text-[12.5px] font-bold text-[#26292E] font-['Roboto',sans-serif]">
            Indicadores de Riesgo de la Contratación
          </span>
        </div>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-[4px] border ${riesgoColor[cumplimientoPlazo.riesgoGlobal] || 'bg-gray-100 text-gray-600 border-gray-300'}`}>
          RIESGO GLOBAL: {cumplimientoPlazo.riesgoGlobal.toUpperCase()}
        </span>
      </div>

      {/* Body — 2 columnas */}
      <div className="grid grid-cols-2 divide-x divide-[#DEE3EA] bg-white">

        {/* Izquierda: Cumplimiento de Plazos */}
        <div className="px-4 py-3">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 font-['Roboto',sans-serif]">
            Cumplimiento de plazos y condición del proceso
          </p>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#63c9c4] text-white text-[13px] font-bold font-['IBM_Plex_Mono',monospace]">
              {cumplimientoPlazo.totalEventos}
            </span>
            <span className="text-[11.5px] text-[#26292E] font-['Roboto',sans-serif]">
              evento{cumplimientoPlazo.totalEventos !== 1 ? 's' : ''} detectado{cumplimientoPlazo.totalEventos !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="space-y-2.5">
            {cumplimientoPlazo.grupos.map((g: any, gi: number) => (
              <div key={gi}>
                <p className="text-[11px] font-bold text-[#26292E] mb-1.5 font-['Roboto',sans-serif]">{g.tipo}</p>
                <div className="space-y-1.5 pl-2 border-l-2 border-[#DEE3EA]">
                  {g.items.map((item: any, ii: number) => (
                    <div key={ii} className="flex items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] text-[#26292E] font-['Roboto',sans-serif] leading-snug">{item.titulo}</p>
                        {item.detalle && (
                          <p className="text-[10px] text-gray-500 font-['IBM_Plex_Mono',monospace] mt-0.5">{item.detalle}</p>
                        )}
                      </div>
                      {item.badge && (
                        <span className={`shrink-0 text-[9.5px] font-bold px-1.5 py-0.5 rounded-[3px] border whitespace-nowrap ${badgeColor[item.color] || 'bg-gray-100 text-gray-600 border-gray-300'}`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Derecha: Datos Abiertos OCI */}
        <div className="px-4 py-3">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 font-['Roboto',sans-serif]">
            Datos Abiertos-OCI
          </p>
          <p className="text-[11px] font-bold text-[#26292E] mb-2 font-['Roboto',sans-serif]">Índice de Transparencia</p>
          <GaugeTransparencia score={datosAbiertos.indiceTransparencia} nivel={datosAbiertos.nivel} />
          <div className="mt-3 space-y-1.5">
            {datosAbiertos.criterios.map((c: any, ci: number) => (
              <div key={ci} className="flex items-center gap-2">
                <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${c.cumple ? 'bg-[#E6F4ED]' : 'bg-[#edf0f4]'}`}>
                  {c.cumple
                    ? <CheckCircle size={11} className="text-[#126B49]" />
                    : <X size={10} className="text-[#294269]" />
                  }
                </span>
                <span className="text-[11px] text-[#26292E] font-['Roboto',sans-serif]">{c.nombre}</span>
              </div>
            ))}
            <p className="text-[10px] text-gray-500 mt-2 font-['Roboto',sans-serif]">
              {datosAbiertos.criterios.filter((c: any) => c.cumple).length} de {datosAbiertos.criterios.length} criterios al 100%. Pendiente: registro de pagos y publicación de contrato.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


function Contratos({ proceso, openSet, toggle }: {
  proceso: typeof PROCESOS[0]; openSet: Set<string>; toggle: (id: string) => void;
}) {
  const [selectedContratoKey, setSelectedContratoKey] = useState<string>('');
  
  const contratosKeys = Object.keys(EC_DATA).filter(k => k === proceso.codigo || k.startsWith(proceso.codigo + '-'));
  
  const initialKey = contratosKeys.length > 0 ? contratosKeys[0] : '';
  const currentKey = selectedContratoKey || initialKey;
  
  if (!currentKey || !EC_DATA[currentKey]) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-gray-400 gap-2">
        <Clock size={32} className="opacity-40" />
        <p className="text-[12px] font-['Roboto',sans-serif]">Este procedimiento aún no ha llegado a la fase de Contratos.</p>
      </div>
    );
  }

  const c = EC_DATA[currentKey];
  const uid = 'ec-' + currentKey;

  const pctF = c.af ? c.af.pct : 0;
  const pctFis = c.fis ? c.fis.pct : 0;
  const barColor = (p: number) => p >= 80 ? '#126B49' : p >= 40 ? '#D75600' : '#BF0909';

  return (
    <div className="space-y-4">
      {contratosKeys.length > 1 && (
        <div className="flex items-center gap-3 flex-wrap bg-white border border-[#DEE3EA] rounded-[8px] p-3">
          <label className="text-[12px] font-bold text-gray-600 whitespace-nowrap">
            {contratosKeys.length} contratos derivados de este procedimiento — Seleccionar:
          </label>
          <select 
            value={currentKey} 
            onChange={(e) => setSelectedContratoKey(e.target.value)}
            className="flex-1 min-w-[240px] px-3 py-1.5 border-[1.5px] border-[#0056AC] rounded-[6px] text-[12.5px] font-semibold text-[#0056AC] bg-white cursor-pointer"
          >
            {contratosKeys.map(k => {
              const d = EC_DATA[k];
              const con = (d.con || '').split('-').slice(1).join('-') || d.con || '—';
              const esItem = k.startsWith(proceso.codigo + '-');
              const nroItem = esItem ? k.slice((proceso.codigo + '-').length) : null;
              const etiquetaItem = nroItem ? `Ítem ${nroItem} — ` : '';
              return <option key={k} value={k}>{etiquetaItem}{con} — {fmtMoneda(d.mto || 0)}</option>;
            })}
          </select>
        </div>
      )}

      <div className="space-y-1">
        <Accordion id={uid + '-info'} title={<><FileText size={13} />Información general del contrato</>} openSet={openSet} toggle={toggle}>
          <div className="grid grid-cols-2 gap-3">
            <Field label="N° de Contrato" value={c.nct} mono />
            <Field label="Monto contratado" value={fmtMoneda(c.mto)} mono />
            <Field label="Contratista" value={c.con} full />
            <Field label="Entidad contratante" value={c.ent} full />
            <Field label="Fecha suscripción" value={c.fsus} />
            <Field label="Fecha inicio" value={c.fini} />
            <Field label="Fecha fin" value={c.ffin} />
            <Field label="Lugar de ejecución" value={c.lug} />
          </div>
        </Accordion>

        <Accordion id={uid + '-av'} title={<><BarChart2 size={13} />Avance de ejecución</>} openSet={openSet} toggle={toggle}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Financiero */}
            <div className="bg-[#F6F9FC] border border-[#DEE3EA] rounded-[6px] p-3">
              <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-2">Avance Financiero</p>
              <div className="flex gap-3 mb-3">
                <div className="text-center"><div className="text-[18px] font-bold text-[#0056AC] font-['IBM_Plex_Mono',monospace]">{pctF}%</div><div className="text-[10px] text-gray-500">Ejecutado</div></div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between text-[11px]"><span className="text-gray-500">Total</span><span className="font-['IBM_Plex_Mono',monospace]">{fmtMoneda(c.af.total)}</span></div>
                  <div className="flex justify-between text-[11px]"><span className="text-[#126B49]">Pagado</span><span className="font-['IBM_Plex_Mono',monospace] text-[#126B49]">{fmtMoneda(c.af.pag)}</span></div>
                  <div className="flex justify-between text-[11px]"><span className="text-[#D75600]">Pendiente</span><span className="font-['IBM_Plex_Mono',monospace] text-[#D75600]">{fmtMoneda(c.af.pen)}</span></div>
                </div>
              </div>
              <div className="h-2 bg-[#DEE3EA] rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${pctF}%`, background: barColor(pctF) }} />
              </div>
              <div className="flex justify-between mt-1 text-[10px] text-gray-400"><span>0%</span><span className="font-bold text-[#26292E]">{pctF}% completado</span><span>100%</span></div>
            </div>

            {/* Físico */}
            <div className="bg-[#F6F9FC] border border-[#DEE3EA] rounded-[6px] p-3">
              <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-2">Avance Físico</p>
              <div className="flex gap-3 mb-3">
                <div className="text-center"><div className="text-[18px] font-bold text-[#D75600] font-['IBM_Plex_Mono',monospace]">{pctFis}%</div><div className="text-[10px] text-gray-500">Ejecutado</div></div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between text-[11px]"><span className="text-gray-500">Hitos totales</span><span className="font-bold">{c.fis.total}</span></div>
                  <div className="flex justify-between text-[11px]"><span className="text-[#126B49]">Completados</span><span className="font-bold text-[#126B49]">{c.fis.comp}</span></div>
                  <div className="flex justify-between text-[11px]"><span className="text-[#D75600]">Pendientes</span><span className="font-bold text-[#D75600]">{c.fis.total - c.fis.comp}</span></div>
                </div>
              </div>
              <div className="h-2 bg-[#DEE3EA] rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${pctFis}%`, background: barColor(pctFis) }} />
              </div>
              <div className="flex justify-between mt-1 text-[10px] text-gray-400"><span>0%</span><span className="font-bold text-[#26292E]">{pctFis}% completado</span><span>100%</span></div>
            </div>
          </div>
        </Accordion>

        {c.gar && (
          <Accordion id={uid + '-gar'} title={<><Shield size={13} />Garantías</>} openSet={openSet} toggle={toggle}>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Clase de garantía" value={c.gar.clase} full />
              <Field label="Tipo" value={c.gar.tipo} />
              <Field label="N° de garantía" value={c.gar.num} mono />
              <Field label="Monto" value={fmtMoneda(c.gar.monto)} mono />
              <Field label="Emisor" value={c.gar.emisor} />
              <Field label="Fecha de emisión" value={c.gar.femi} />
              <Field label="Fecha de vencimiento" value={c.gar.fven} />
              <Field label="Condición" value={c.gar.cond} />
            </div>
            <div className="mt-3 pt-3 border-t border-[#DEE3EA]">
              <button className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0056AC] hover:underline">
                <Download size={12} />
                Descargar garantía
              </button>
            </div>
          </Accordion>
        )}

        {c.inv && (
          <Accordion id={uid + '-inv'} title={<><Building2 size={13} />Proyecto de Inversión — Banco de Inversiones MEF</>} openSet={openSet} toggle={toggle}>
            <div className="bg-[#F6F9FC] border border-[#DEE3EA] rounded-[8px] p-4">
              <div className="inline-flex items-center gap-2 bg-[#0056AC] text-white px-3 py-1.5 rounded-[6px] mb-3">
                <span className="text-[10px] font-bold opacity-80">CUI</span>
                <span className="text-[18px] font-bold font-['IBM_Plex_Mono',monospace]">{c.inv.cui}</span>
              </div>
              <div className="text-[12px] font-semibold text-gray-700 leading-snug mb-3">
                {c.inv.nombre}
              </div>
              <a href={c.inv.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-[#184397] text-white rounded-[6px] text-[12px] font-bold hover:bg-[#113170] transition-colors mb-3">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"></path></svg>
                Ver en Banco de Inversiones — ofi5.mef.gob.pe
              </a>
              <div className="border border-[#C5CDDA] rounded-[6px] p-3 bg-[#E1F0FF] text-[12px]">
                <div className="font-bold text-[#0056AC] mb-1.5">Banco de Inversiones · MEF</div>
                <div className="mb-1 text-[11.5px]">CUI: <strong>{c.inv.cui}</strong></div>
                <div className="text-[11.5px] text-gray-700 leading-snug mb-2.5">{c.inv.nombre}</div>
                <div className="bg-[#C5CDDA]/30 px-3 py-1.5 rounded-[6px] text-[11px] text-[#184397]">
                  <strong>Fase:</strong> Ejecución &nbsp;·&nbsp; <strong>Estado:</strong> En ejecución &nbsp;·&nbsp; <strong>Monto:</strong> {fmtMoneda(c.mto)}
                </div>
              </div>
            </div>
          </Accordion>
        )}

        {c.ci && (
          <Accordion id={uid + '-ci'} title={<><FileText size={13} />Cuaderno de Incidencias</>} openSet={openSet} toggle={toggle}>
            <div className="grid grid-cols-2 gap-3 mb-4 bg-[#F6F9FC] border border-[#DEE3EA] p-3 rounded-[6px]">
              <Field label="Entidad" value={c.ci.ent} full />
              <Field label="Obra" value={c.ci.obra} full />
              <Field label="CUI" value={c.ci.cui} />
              <Field label="Fecha de suscripción" value={c.ci.fsus} />
              <Field label="Fecha de apertura" value={c.ci.fap} />
              <Field label="Contratista" value={c.ci.con} />
              <Field label="Residente" value={c.ci.res} />
              <Field label="Supervisor" value={c.ci.sup} />
            </div>

            <div className="text-[12px] font-bold text-gray-700 mb-2">Asientos del Cuaderno de Incidencias</div>
            <div className="border border-[#DEE3EA] rounded-[6px] overflow-hidden">
              <div className="grid grid-cols-[44px_1fr_160px_120px_160px] gap-1.5 bg-[#63c9c4] text-white px-3 py-2 text-[12px] font-bold">
                <div>N°</div>
                <div>Título del asiento</div>
                <div className="hidden md:block"></div>
                <div className="hidden md:block"></div>
                <div className="hidden md:block"></div>
              </div>
              <div className="bg-white">
                {c.ci.asientos.map((a: any, i: number) => (
                  <div key={i} className="flex items-start gap-2.5 p-2.5 border-b border-[#DEE3EA] hover:bg-[#F6F9FC] transition-colors last:border-0">
                    <div className="text-[13px] font-bold font-['IBM_Plex_Mono',monospace] text-[#294269] min-w-[34px] pt-0.5">{a.n}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-bold text-[#26292E] leading-snug mb-1 uppercase">{a.tit}</div>
                      <div className="flex items-center gap-1.5 flex-wrap text-[12px] text-gray-500">
                        <span className="inline-flex px-2 py-0.5 rounded-[4px] bg-[#edf0f4] text-[#294269] text-[11px] font-bold uppercase tracking-[0.02em]">{a.tipo}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-gray-500">{a.f}</span>
                        <span className="text-gray-300">·</span>
                        <span className="font-medium text-gray-700">{a.u}</span>
                        <span className={`inline-flex px-2 py-0.5 rounded-[4px] text-[11px] font-bold uppercase ${a.rol === 'Supervisor' ? 'bg-[#edf0f4] text-[#294269]' : 'bg-[#E3F3EC] text-[#126B49]'}`}>{a.rol}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Accordion>
        )}

        <Accordion id={uid + '-contro'} title={<><FileText size={13} />Controversias</>} openSet={openSet} toggle={toggle}>
          <div className="space-y-4">
            <div className="border border-[#DEE3EA] rounded-[10px] overflow-hidden">
              <div className="bg-gray-700 text-white px-3.5 py-2.5 flex items-center gap-2 font-bold text-[13px]">
                <FileText size={15} />
                <span>Junta de Prevención y Resolución de Disputas</span>
              </div>
              <div className="grid grid-cols-2 gap-3 p-4 bg-white">
                <Field label="Instituciones que administran medios de Solución de Controversias" value="CENTRO DE ANÁLISIS Y RESOLUCIÓN DE CONFLICTOS DE LA PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ" full />
                <Field label="Código de JPRD" value="JPRD-504-2026" />
                <Field label="Fecha de Audiencia" value="03/06/2026" />
                <Field label="Fecha de registro de la JPRD" value="26/06/2026" />
                <Field label="Nro. Miembros" value="1" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Contrato Tripartito</span>
                  <button className="text-[12px] font-bold text-[#0056AC] text-left hover:underline">Descargar</button>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Acta de Instalación</span>
                  <button className="text-[12px] font-bold text-[#0056AC] text-left hover:underline">Descargar</button>
                </div>
                <Field label="Fecha de documento de decisión" value="—" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Decisión emitida</span>
                  <button className="text-[12px] font-bold text-[#0056AC] text-left hover:underline">Descargar</button>
                </div>
              </div>
            </div>

            <div className="border border-[#DEE3EA] rounded-[10px] overflow-hidden">
              <div className="bg-gray-700 text-white px-3.5 py-2.5 font-bold text-[13px]">Arbitraje</div>
              <div className="p-4 bg-white"><p className="text-[12px] text-gray-500">No hay datos</p></div>
            </div>

            <div className="border border-[#DEE3EA] rounded-[10px] overflow-hidden">
              <div className="bg-gray-700 text-white px-3.5 py-2.5 font-bold text-[13px]">Conciliación</div>
              <div className="p-4 bg-white"><p className="text-[12px] text-gray-500">No hay datos</p></div>
            </div>

            <div className="border border-[#DEE3EA] rounded-[10px] overflow-hidden">
              <div className="bg-gray-700 text-white px-3.5 py-2.5 font-bold text-[13px]">Otros Mecanismos</div>
              <div className="p-4 bg-white"><p className="text-[12px] text-gray-500">No hay datos</p></div>
            </div>
          </div>
        </Accordion>

      {/* Indicadores de Proceso — Contratos */}
      <div className="border border-[#DEE3EA] rounded-[10px] bg-white overflow-hidden shadow-sm mt-4">
        <button
          onClick={() => toggle(uid + '-ec-risk')}
          className="w-full flex items-center justify-between px-4 py-3 bg-[#294269] hover:bg-[#3C3E43] transition-colors text-left border-b border-[#DEE3EA]"
        >
          <div className="flex items-center gap-2">
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
            <span className="text-[14px] font-bold text-white">Indicadores de Proceso — Contratos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-white/20 px-2.5 py-0.5 rounded-[12px] text-[12px] font-bold text-white">3 indicadores activos</span>
            {openSet && openSet.has(uid + '-ec-risk') ? <ChevronUp size={15} className="text-white/70 shrink-0 ml-1" /> : <ChevronDown size={15} className="text-white/70 shrink-0 ml-1" />}
          </div>
        </button>
        {openSet && openSet.has(uid + '-ec-risk') && (
          <div className="p-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Card 1: RNP / Pladicop */}
            <div className="border-[1.5px] border-[#DEE3EA] rounded-[8px] p-3.5 relative overflow-hidden bg-white hover:shadow-md transition-shadow col-span-1 md:col-span-2">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#126B49]"></div>
              <div className="pl-3">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Indicador 1 · RNP / Pladicop</div>
                <div className="text-[15px] font-bold text-[#26292E] leading-snug mb-0.5">Desempeño y Reputación del Proveedor</div>
                <div className="text-[11px] font-semibold text-[#126B49] mb-2.5">Registro Nacional de Proveedores — medición trimestral</div>
                
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div>
                    <span className="text-[22px] font-bold font-['IBM_Plex_Mono',monospace] leading-none block mb-px text-[#126B49]">92%</span>
                    <span className="text-[11px] font-medium text-gray-500">Ratio de cumplimiento</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-[#DEE3EA] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#126B49] to-[#22c55e]" style={{ width: '92%' }}></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-500 mt-1"><span>0%</span><span>Meta: ≥85%</span><span>100%</span></div>
                  </div>
                </div>
                <div className="text-[12.5px] text-gray-700 leading-snug mb-2">Proveedor <strong>CONSORCIO VIAL AMAZONAS S.A.C.</strong> registra 0 penalidades por mora en sus últimos 12 contratos con conformidad. Calificación trimestral: <strong>Excelente</strong>.</div>
                <div className="flex gap-2.5 flex-wrap">
                  <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#26292E]"><div className="w-2.5 h-2.5 rounded-full bg-[#126B49]"></div>Sin penalidades por mora</div>
                  <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#26292E]"><div className="w-2.5 h-2.5 rounded-full bg-[#126B49]"></div>Habilitado en RNP</div>
                  <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#26292E]"><div className="w-2.5 h-2.5 rounded-full bg-[#126B49]"></div>Sin impedimentos legales</div>
                </div>
              </div>
            </div>

            {/* Card 2: Supervisión de Obra */}
            <div className="border-[1.5px] border-[#DEE3EA] rounded-[8px] p-3.5 relative overflow-hidden bg-white hover:shadow-md transition-shadow">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D75600]"></div>
              <div className="pl-3">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Indicador 2 · Supervisión de Obra</div>
                <div className="text-[15px] font-bold text-[#26292E] leading-snug mb-0.5">Avance Físico y Financiero en Obras</div>
                <div className="text-[11px] font-semibold text-[#D75600] mb-2.5">Ratio de ejecución — Avance Real vs. Programado</div>
                
                <div className="flex flex-col gap-1.5 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-gray-500 w-[90px] shrink-0">Programado</span>
                    <div className="flex-1 h-[7px] bg-[#DEE3EA] rounded-[3px] overflow-hidden"><div className="h-full bg-[#63c9c4]" style={{ width: '100%' }}></div></div>
                    <span className="text-[11px] font-bold font-['IBM_Plex_Mono',monospace] text-[#294269] w-[70px] text-right shrink-0">S/ 412,500</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-gray-500 w-[90px] shrink-0">Ejecutado</span>
                    <div className="flex-1 h-[7px] bg-[#DEE3EA] rounded-[3px] overflow-hidden"><div className="h-full bg-[#126B49]" style={{ width: '60%' }}></div></div>
                    <span className="text-[11px] font-bold font-['IBM_Plex_Mono',monospace] text-[#126B49] w-[70px] text-right shrink-0">S/ 247,500</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#26292E] mb-2"><div className="w-2.5 h-2.5 rounded-full bg-[#D75600]"></div><strong>Ratio de ejecución: 60%</strong> — Por debajo del umbral crítico (80%)</div>
                <div className="text-[12.5px] text-gray-600 leading-snug">La valorización acumulada ejecutada (60%) es menor al 80% de la programada.</div>
              </div>
            </div>

            {/* Card 4: Penalidades Aplicadas */}
            <div className="border-[1.5px] border-[#DEE3EA] rounded-[8px] p-3.5 relative overflow-hidden bg-white hover:shadow-md transition-shadow">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#63c9c4]"></div>
              <div className="pl-3">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Indicador 4 · Desempeño Contractual</div>
                <div className="text-[15px] font-bold text-[#26292E] leading-snug mb-0.5">Penalidades Aplicadas</div>
                <div className="text-[11px] font-semibold text-[#294269] mb-2.5">Ley N° 32069</div>
                
                <div className="grid grid-cols-2 gap-2.5 mb-3">
                  <div className="text-center p-2.5 border border-[#DEE3EA] rounded-[4px]">
                    <div className="text-[20px] font-bold text-[#0056AC] font-['IBM_Plex_Mono',monospace]">1</div>
                    <div className="text-[10px] text-gray-500 font-semibold mt-0.5">Penalidad aplicada</div>
                  </div>
                  <div className="text-center p-2.5 border border-[#DEE3EA] rounded-[4px]">
                    <div className="text-[20px] font-bold text-[#D75600] font-['IBM_Plex_Mono',monospace]">{fmtMoneda(c.mto * 0.01)}</div>
                    <div className="text-[10px] text-gray-500 font-semibold mt-0.5">Monto penalizado</div>
                  </div>
                </div>
                <div className="text-[12.5px] text-gray-600 leading-snug">Penalidad por mora aplicada por un retraso de <strong>5 días calendario</strong>.</div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}


// ─── Phase tabs ───────────────────────────────────────────────────────────────

function PhaseTabs({ proceso, activeTab, onTabChange, openSet, toggleAccordion, setOfertaModal }: {
  proceso: typeof PROCESOS[0];
  activeTab: number;
  onTabChange: (i: number) => void;
  openSet: Set<string>;
  toggleAccordion: (id: string) => void;
  setOfertaModal: (o: any) => void;
}) {
  return (
    <div>
      <div className="flex border-b border-[#DEE3EA] mb-3">
        {FASES.map((fase, i) => {
          const done = proceso.fasesCompletas.includes(i);
          const active = i === activeTab;
          return (
            <button
              key={i}
              onClick={() => onTabChange(i)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-[12px] font-semibold border-b-2 transition-colors font-['Roboto',sans-serif] ${
                active
                  ? 'border-[#294269] text-[#294269] bg-[#edf0f4]/40'
                  : 'border-transparent text-gray-500 hover:text-[#26292E]'
              }`}
            >
              {done ? (
                <CheckCircle size={12} className={active ? 'text-[#126B49]' : 'text-[#126B49]/60'} />
              ) : (
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${active ? 'bg-[#63c9c4] text-white' : 'bg-gray-200 text-gray-500'}`}>{i + 1}</span>
              )}
              {fase}
            </button>
          );
        })}
      </div>
      {activeTab === 0 && <ActuacionesPreparatorias proceso={proceso} openSet={openSet} toggle={toggleAccordion} />}
      {activeTab === 1 && <Seleccion proceso={proceso} openSet={openSet} toggle={toggleAccordion} setOfertaModal={setOfertaModal} />}
      {activeTab === 2 && <Contratos proceso={proceso} openSet={openSet} toggle={toggleAccordion} />}
    </div>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────

export function ObraDetailPage({ id, navigate }: ObraDetailPageProps) {
  const [ofertaModal, setOfertaModal] = useState<any | null>(null);
  const [activeView, setActiveView] = useState<'rail' | 'cards' | 'timeline'>('rail');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const [modalTab, setModalTab] = useState(0);
  const [modalAccordions, setModalAccordions] = useState<Set<string>>(new Set());
  const [timelineIdx, setTimelineIdx] = useState(0);
  const [timelineTab, setTimelineTab] = useState(0);

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleModalAccordion = (id: string) => {
    setModalAccordions(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const totalMonto = PROCESOS.reduce((acc, p) => acc + getMontoContratado(p), 0);
  const itemsAdj = PROCESOS.reduce((acc, p) => acc + p.seleccion.items.filter((it: any) => it.estado === 'Contratado' || it.estado === 'Adjudicado').length, 0);
  const enCurso = PROCESOS.reduce((acc, p) => acc + p.seleccion.items.filter((it: any) => !['Nulo', 'Adjudicado', 'Contratado', 'Desierto'].includes(it.estado)).length, 0);

  const selectedProcess = PROCESOS[selectedIdx];

  const views = [
    { key: 'rail' as const, label: 'Maestro / Detalle', Icon: LayoutList },
  ];

  return (
    <div className="flex flex-col flex-1 overflow-hidden bg-[#F6F9FC] font-['Roboto',sans-serif]">
      {ofertaModal && <OfertaModal oferta={ofertaModal} onClose={() => setOfertaModal(null)} />}

      {/* ── Sticky header ── */}
      <div className="bg-white border-b-2 border-[#63c9c4] px-5 py-3 shrink-0">

        {/* Back nav */}
        <button
          onClick={() => navigate({ type: 'search-all', query: '' })}
          className="flex items-center gap-1.5 text-[#294269] hover:text-[#9a0707] text-[12px] font-bold mb-3 transition-colors"
        >
          <ArrowLeft size={13} />
          Volver a resultados
        </button>

        {/* IDEC card */}
        <div className="flex items-start justify-between gap-6 mb-3">
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-1.5 bg-[#0056AC]/10 text-[#0056AC] text-[10px] font-bold px-2 py-0.5 rounded-[4px] mb-1.5 uppercase tracking-wider">
              Expediente de Contratación · IDEC · Obras
            </div>
            <h1 className="text-[20px] font-bold text-[#26292E] leading-tight mb-0.5 font-['IBM_Plex_Mono',monospace]">IDEC-2026-003412</h1>
            <p className="text-[12px] text-gray-500"><span className="font-semibold">Entidad:</span> MUNICIPALIDAD PROVINCIAL DE CHACHAPOYAS</p>
            <p className="text-[11.5px] text-gray-600 mt-1 leading-snug">Ejecución de obra: Mejoramiento y ampliación de la red de agua potable y alcantarillado en la zona urbana y periurbana de Chachapoyas.</p>
          </div>
          <div className="shrink-0 flex gap-4 text-right">
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Publicación</div>
              <div className="text-[12px] font-semibold text-[#26292E]">12/04/2026</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Cierre</div>
              <div className="text-[12px] font-semibold text-[#D75600]">En curso</div>
            </div>
          </div>
        </div>

        {/* KPI strip */}
        <div className="flex gap-4 border-t border-[#DEE3EA] pt-3">
          {[
            { icon: <LayoutList size={15} />, color: 'text-[#0056AC]', bg: 'bg-[#EFF6FF]', val: PROCESOS.length, label: 'Procedimientos derivados' },
            { icon: <Banknote size={15} />, color: 'text-[#126B49]', bg: 'bg-[#E6F4ED]', val: fmtMoneda(totalMonto), label: 'Monto total contratado' },
            { icon: <CheckCircle size={15} />, color: 'text-[#126B49]', bg: 'bg-[#E6F4ED]', val: itemsAdj, label: 'Ítems adjudicados' },
            { icon: <Clock size={15} />, color: 'text-[#D75600]', bg: 'bg-[#FFF7ED]', val: enCurso, label: 'En curso' },
          ].map(({ icon, color, bg, val, label }, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className={`w-7 h-7 rounded-full ${bg} ${color} flex items-center justify-center shrink-0`}>{icon}</div>
              <div>
                <div className={`text-[15px] font-bold ${color} font-['IBM_Plex_Mono',monospace] leading-tight`}>{val}</div>
                <div className="text-[10px] text-gray-500 leading-tight">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── View switcher ── */}
      <div className="bg-white border-b border-[#DEE3EA] px-5 py-2 flex items-center gap-2 shrink-0">
        {views.map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setActiveView(key)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-[11.5px] font-semibold transition-colors ${
              activeView === key
                ? 'bg-[#63c9c4] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Icon size={13} />
            {label}
          </button>
        ))}
      </div>

      {/* ── Content area ── */}
      <div className="flex-1 overflow-auto">

        {/* ── VISTA 1: MAESTRO / DETALLE ── */}
        {activeView === 'rail' && (
          <div className="flex h-full min-h-0">

            {/* Left rail */}
            <div className="w-[280px] shrink-0 border-r border-[#DEE3EA] bg-white overflow-y-auto">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#DEE3EA] sticky top-0 bg-white z-10">
                <h3 className="text-[12px] font-bold text-[#26292E]">Procedimientos derivados</h3>
                <span className="bg-[#0056AC] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{PROCESOS.length}</span>
              </div>
              {PROCESOS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => { setSelectedIdx(i); setActiveTab(0); setOpenAccordions(new Set()); }}
                  className={`w-full text-left px-4 py-3 border-b border-[#DEE3EA] transition-colors ${
                    i === selectedIdx ? 'bg-[#edf0f4] border-l-2 border-l-[#63c9c4]' : 'hover:bg-[#F6F9FC]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-['IBM_Plex_Mono',monospace] text-[#294269] font-bold truncate">{p.seleccion.nomenclatura}</span>
                    {estadoBadge(p.estado, p.estadoLabel)}
                  </div>
                  <p className="text-[11px] text-gray-600 leading-snug line-clamp-2 mb-1.5">{p.objeto}</p>
                  <p className="text-[11px] font-bold font-['IBM_Plex_Mono',monospace] text-[#26292E]">{fmtMoneda(getMontoContratado(p))}</p>
                  <MiniFases proceso={p} />
                </button>
              ))}
            </div>

            {/* Right detail */}
            <div className="flex-1 overflow-y-auto p-5">
              <div className="bg-white border border-[#DEE3EA] rounded-[8px] p-5">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-[14px] font-bold font-['IBM_Plex_Mono',monospace] text-[#294269] mb-1">{selectedProcess.seleccion.nomenclatura}</h2>
                    <p className="text-[12.5px] text-[#26292E] leading-snug">{selectedProcess.objeto}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    {estadoBadge(selectedProcess.estado, selectedProcess.estadoLabel)}
                    {Object.keys(EC_DATA).filter(k => k === selectedProcess.codigo || k.startsWith(selectedProcess.codigo + '-')).length <= 1 && (
                      <>
                        <div className="text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mt-1">Monto adjudicado</div>
                        <p className="text-[18px] font-bold font-['IBM_Plex_Mono',monospace] text-[#294269]">{fmtMoneda(getMontoContratado(selectedProcess))}</p>
                      </>
                    )}
                  </div>
                </div>
                <PhaseTabs
                  proceso={selectedProcess}
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                  openSet={openAccordions}
                  toggleAccordion={toggleAccordion}
                  setOfertaModal={setOfertaModal}
                />
              </div>
            </div>
          </div>
        )}

        {/* ── VISTA 2: TABLERO DE TARJETAS ── */}
        {activeView === 'cards' && (
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROCESOS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => { setModalIdx(i); setModalTab(p.faseActualIdx); setModalAccordions(new Set()); }}
                  className="bg-white border border-[#DEE3EA] rounded-[8px] p-4 text-left hover:shadow-md transition-shadow hover:border-[#63c9c4]/40 group"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="text-[11px] font-['IBM_Plex_Mono',monospace] text-[#294269] font-bold">{p.codigo}</div>
                      <div className="text-[10.5px] text-gray-400">Licitación pública</div>
                    </div>
                    {estadoBadge(p.estado, p.estadoLabel)}
                  </div>
                  <p className="text-[12px] text-[#26292E] leading-snug mb-3 line-clamp-3">{p.objeto}</p>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Cuantía</span>
                    <span className="text-[12px] font-bold font-['IBM_Plex_Mono',monospace] text-[#26292E]">{fmtMoneda(getMontoContratado(p))}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#D75600] shrink-0" />
                    <span className="text-[10.5px] text-gray-500">Fase actual: {FASES[p.faseActualIdx]}</span>
                  </div>
                  <MiniFases proceso={p} />
                  <div className="mt-3 pt-3 border-t border-[#DEE3EA] text-[11px] text-[#294269] font-semibold group-hover:underline">
                    Ver ficha completa →
                  </div>
                </button>
              ))}
            </div>

            <p className="text-[11.5px] text-gray-500 mt-4 px-1">
              <strong>Patrón de Tarjetas:</strong> cada proceso hijo es una unidad visual autónoma. El detalle completo se abre en modal.
            </p>
          </div>
        )}

        {/* ── VISTA 3: TIMELINE ── */}
        {activeView === 'timeline' && (
          <div className="p-5">
            <div className="bg-white border border-[#DEE3EA] rounded-[8px] p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[13px] font-bold text-[#26292E]">Línea de procedimientos derivados del IDEC</h3>
                <div className="flex items-center gap-4 text-[10.5px] text-gray-500">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#126B49] inline-block" />Fase completada</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#D75600] inline-block" />Fase actual</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#DEE3EA] inline-block" />Fase pendiente</span>
                </div>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {PROCESOS.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => { setTimelineIdx(i); setTimelineTab(0); setOpenAccordions(new Set()); }}
                    className={`shrink-0 w-52 text-left border rounded-[8px] p-3 transition-all ${
                      i === timelineIdx
                        ? 'border-[#63c9c4] bg-[#edf0f4] shadow-sm'
                        : 'border-[#DEE3EA] bg-[#F6F9FC] hover:border-[#63c9c4]/40'
                    }`}
                  >
                    <div className="text-[10.5px] font-['IBM_Plex_Mono',monospace] text-[#294269] font-bold mb-1 truncate">{p.codigo}</div>
                    <div className="text-[11px] font-bold font-['IBM_Plex_Mono',monospace] text-[#26292E] mb-1">{fmtMoneda(getMontoContratado(p))}</div>
                    <MiniFases proceso={p} />
                    <div className="mt-2">{estadoBadge(p.estado, p.estadoLabel)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Detail */}
            <div className="bg-white border border-[#DEE3EA] rounded-[8px] p-5">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-[14px] font-bold font-['IBM_Plex_Mono',monospace] text-[#294269] mb-1">{PROCESOS[timelineIdx].seleccion.nomenclatura}</h2>
                  <p className="text-[12.5px] text-[#26292E] leading-snug">{PROCESOS[timelineIdx].objeto}</p>
                </div>
                <div className="shrink-0 text-right">
                  {estadoBadge(PROCESOS[timelineIdx].estado, PROCESOS[timelineIdx].estadoLabel)}
                  {Object.keys(EC_DATA).filter(k => k === PROCESOS[timelineIdx].codigo || k.startsWith(PROCESOS[timelineIdx].codigo + '-')).length <= 1 && (
                    <>
                      <div className="text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mt-1">Monto adjudicado</div>
                      <p className="text-[18px] font-bold font-['IBM_Plex_Mono',monospace] text-[#294269]">{fmtMoneda(getMontoContratado(PROCESOS[timelineIdx]))}</p>
                    </>
                  )}
                </div>
              </div>
              <PhaseTabs
                proceso={PROCESOS[timelineIdx]}
                activeTab={timelineTab}
                onTabChange={setTimelineTab}
                openSet={openAccordions}
                toggleAccordion={toggleAccordion}
                setOfertaModal={setOfertaModal}
              />
            </div>

            <p className="text-[11.5px] text-gray-500 mt-4 px-1">
              <strong>Patrón de Río de Procesos:</strong> los nodos recrean la secuencia cronológica. Al hacer clic, la ficha completa se ancla debajo.
            </p>
          </div>
        )}
      </div>

      {/* ── Modal (Cards view) ── */}
      {modalIdx !== null && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          onClick={e => { if (e.target === e.currentTarget) setModalIdx(null); }}
        >
          <div className="bg-white rounded-[8px] shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
            <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-[#DEE3EA] shrink-0">
              <div>
                <div className="text-[13px] font-bold font-['IBM_Plex_Mono',monospace] text-[#294269]">{PROCESOS[modalIdx].seleccion.nomenclatura}</div>
                <div className="text-[12px] text-[#26292E] mt-0.5 leading-snug">{PROCESOS[modalIdx].objeto}</div>
              </div>
              <button
                onClick={() => setModalIdx(null)}
                className="shrink-0 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Cerrar"
              >
                <X size={16} className="text-gray-500" />
              </button>
            </div>
            <div className="flex items-center justify-between px-5 py-2.5 border-b border-[#DEE3EA] shrink-0">
              {estadoBadge(PROCESOS[modalIdx].estado, PROCESOS[modalIdx].estadoLabel)}
              {Object.keys(EC_DATA).filter(k => k === PROCESOS[modalIdx].codigo || k.startsWith(PROCESOS[modalIdx].codigo + '-')).length <= 1 && (
                <div className="text-right">
                  <div className="text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Monto adjudicado</div>
                  <span className="text-[16px] font-bold font-['IBM_Plex_Mono',monospace] text-[#294269]">
                    {fmtMoneda(getMontoContratado(PROCESOS[modalIdx]))}
                  </span>
                </div>
              )}
            </div>
            <div className="overflow-y-auto flex-1 p-5">
              <PhaseTabs
                proceso={PROCESOS[modalIdx]}
                activeTab={modalTab}
                onTabChange={setModalTab}
                openSet={modalAccordions}
                toggleAccordion={toggleModalAccordion}
                setOfertaModal={setOfertaModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
