import { useState } from 'react';
import { Search, TrendingUp, CheckCircle, Clock, FileText, ChevronDown, Droplets, HardHat, Pill, Truck } from 'lucide-react';
import type { Page } from '../App';
import svgPaths from "../../imports/TemplateBuscadorPublico-4/svg-muqxpbpr0o";
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import imgPopular from "../../imports/image-27.png";

interface HomePageProps {
  navigate: (page: Page) => void;
}

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 2026 - 2004 + 1 }, (_, i) => 2004 + i);

const popularSearches = [
  { label: 'Vaso de Leche', Icon: Droplets },
  { label: 'Material de Construcción', Icon: HardHat },
  { label: 'Medicamentos', Icon: Pill },
  { label: 'Maquinarias', Icon: Truck },
];

export function HomePage({ navigate }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState(2026);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  // Advanced search state
  const [advObjeto, setAdvObjeto] = useState('');
  const [advEntidad, setAdvEntidad] = useState('');
  const [advUbicacion, setAdvUbicacion] = useState('');
  const [advFechaDesde, setAdvFechaDesde] = useState('');
  const [advFechaHasta, setAdvFechaHasta] = useState('');
  const [advDepartamento, setAdvDepartamento] = useState('');
  const [advProvincia, setAdvProvincia] = useState('');
  const [advDistrito, setAdvDistrito] = useState('');

  const handleAdvancedClear = () => {
    setAdvObjeto(''); setAdvEntidad(''); setAdvUbicacion('');
    setAdvFechaDesde(''); setAdvFechaHasta('');
    setAdvDepartamento(''); setAdvProvincia(''); setAdvDistrito('');
  };

  const handleAdvancedApply = () => {
    navigate({ type: 'search-all', query: [advEntidad, advObjeto, advUbicacion].filter(Boolean).join(' ') || 'búsqueda avanzada' });
  };

  const stats = [
    { label: 'Licitaciones publicadas', value: '1,245', change: '+12%', icon: FileText, color: 'blue' },
    { label: 'Buenas pro otorgadas', value: '856', change: '+8%', icon: CheckCircle, color: 'green' },
    { label: 'Procesos registrados', value: '389', change: '-3%', icon: Clock, color: 'yellow' },
    { label: 'Contratos suscritos', value: '742', change: '+15%', icon: TrendingUp, color: 'purple' },
  ];

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  const searchButtons: { page: Page; label: string; description: string; icon: string }[] = [
    {
      page: { type: 'search-contratos-menores' },
      label: 'Contratos Menores',
      description: 'Accede a la herramienta digital para contratos menores',
      icon: 'contracts-menor',
    },
    {
      page: { type: 'search-planning' },
      label: 'Actuaciones Preparatorias',
      description: 'Actuaciones preparatorias de la contratación pública',
      icon: 'campaign',
    },
    {
      page: { type: 'search-selection' },
      label: 'Selección',
      description: 'Información de los procedimientos de selección desde la convocatoria',
      icon: 'rule',
    },
    {
      page: { type: 'contratos-lista' },
      label: 'Contratos',
      description: 'Consulte los documentos de la etapa de Contratos',
      icon: 'widgets',
    },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) navigate({ type: 'search-all', query: searchQuery });
  };

  return (
    <main className="flex-1 overflow-auto">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 pt-10">
        {/* Title */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-[#0056AC] mb-2 font-['Roboto',sans-serif]">
            Buscador Público de Contrataciones del Estado
          </h1>
          <p className="text-gray-600 font-['Roboto',sans-serif]">
            Sistema Electrónico de Contrataciones del Estado · 2004 al {new Date().getFullYear()}
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-3xl mb-10">
          <div className="flex items-stretch shadow-lg hover:shadow-xl transition-shadow rounded-[24px] border border-gray-200 bg-white">
            {/* Year Selector */}
            <div className="relative shrink-0">
              <button
                onClick={() => setShowYearDropdown(!showYearDropdown)}
                className="flex items-center gap-1.5 px-4 py-4 bg-[#294269] text-white h-full hover:bg-[#3a3f46] transition-colors font-['Roboto',sans-serif] text-[15px] font-semibold rounded-l-[24px]"
              >
                <span>{selectedYear}</span>
                <ChevronDown size={14} className={`transition-transform ${showYearDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showYearDropdown && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowYearDropdown(false)} />
                  <div className="absolute left-0 top-full mt-2 z-20 bg-white border border-[#DEE3EA] rounded-[14px] overflow-hidden shadow-[0_8px_32px_-4px_rgba(41,66,105,0.18),0_2px_8px_-2px_rgba(41,66,105,0.10)] min-w-[110px]">
                    <div className="max-h-[260px] overflow-y-auto py-1.5">
                      {YEARS.map((year) => {
                        const isSelected = year === selectedYear;
                        return (
                          <button key={year}
                            onClick={() => { setSelectedYear(year); setShowYearDropdown(false); }}
                            className={`w-full flex items-center justify-between gap-3 px-4 py-2 text-[13px] font-medium tabular-nums transition-colors font-['Roboto',sans-serif] ${
                              isSelected ? 'bg-[#294269] text-white' : 'text-[#26292E] hover:bg-[#edf0f4] hover:text-[#294269]'
                            }`}
                          >
                            <span>{year}</span>
                            {isSelected && (
                              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path d="M1.5 5.5l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="w-px bg-gray-300 my-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="Buscar licitaciones, contratos, entidades..."
              className="flex-1 px-5 py-4 text-[16px] bg-transparent outline-none font-['Roboto',sans-serif] text-[#26292E] placeholder-gray-400"
            />
            <button onClick={handleSearch}
              className="shrink-0 px-5 bg-[#294269] text-white hover:bg-[#3F5578] transition-colors flex items-center justify-center rounded-r-[24px]"
            >
              <Search size={22} />
            </button>
          </div>
        </div>

        {/* Búsqueda avanzada toggle */}
        <div className="w-full max-w-3xl mb-4 -mt-6">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 text-[#294269] text-[12.5px] font-semibold transition-colors font-['Roboto',sans-serif]"
          >
            {/* Toggle switch pill */}
            <span className={`relative inline-flex items-center w-[32px] h-[18px] rounded-full transition-colors duration-200 shrink-0 ${showAdvanced ? 'bg-[#294269]' : 'bg-gray-300'}`}>
              <span className={`absolute w-[13px] h-[13px] bg-white rounded-full shadow transition-transform duration-200 ${showAdvanced ? 'translate-x-[16px]' : 'translate-x-[2px]'}`} />
            </span>
            Búsqueda avanzada
          </button>
        </div>

        {/* Búsqueda avanzada panel */}
        {showAdvanced && (
          <div className="w-full max-w-3xl mb-8 bg-white border border-[#DEE3EA] rounded-[8px] shadow-lg overflow-hidden font-['Roboto',sans-serif]">
            {/* Fields */}
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* OBJETO */}
              <div>
                <label className="block text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider mb-1">Objeto</label>
                <select
                  value={advObjeto}
                  onChange={e => setAdvObjeto(e.target.value)}
                  className="w-full px-2.5 py-2 bg-white border border-[#DEE3EA] rounded-[4px] text-[12.5px] text-[#26292E] focus:outline-none focus:border-[#63c9c4] transition-colors"
                >
                  <option value="">Todos</option>
                  <option value="bien">Bien</option>
                  <option value="servicio">Servicio</option>
                  <option value="obra">Obra</option>
                  <option value="consultoría">Consultoría</option>
                </select>
              </div>

              {/* ENTIDAD */}
              <div>
                <label className="block text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider mb-1">Entidad</label>
                <input
                  type="text"
                  value={advEntidad}
                  onChange={e => setAdvEntidad(e.target.value)}
                  placeholder="Nombre o RUC de la entidad"
                  className="w-full px-2.5 py-2 bg-white border border-[#DEE3EA] rounded-[4px] text-[12.5px] text-[#26292E] placeholder-[#C5CDDA] focus:outline-none focus:border-[#63c9c4] transition-colors"
                />
              </div>

              {/* UBICACIÓN GEOGRÁFICA */}
              <div className="sm:col-span-2">
                <label className="block text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider mb-1">Ubicación geográfica</label>
                <select
                  value={advUbicacion}
                  onChange={e => setAdvUbicacion(e.target.value)}
                  className="w-full px-2.5 py-2 bg-white border border-[#DEE3EA] rounded-[4px] text-[12.5px] text-[#26292E] focus:outline-none focus:border-[#63c9c4] transition-colors"
                >
                  <option value="">Todas las regiones</option>
                  <option value="amazonas">Amazonas</option>
                  <option value="ancash">Áncash</option>
                  <option value="apurimac">Apurímac</option>
                  <option value="arequipa">Arequipa</option>
                  <option value="ayacucho">Ayacucho</option>
                  <option value="cajamarca">Cajamarca</option>
                  <option value="callao">Callao</option>
                  <option value="cusco">Cusco</option>
                  <option value="huancavelica">Huancavelica</option>
                  <option value="huanuco">Huánuco</option>
                  <option value="ica">Ica</option>
                  <option value="junin">Junín</option>
                  <option value="la-libertad">La Libertad</option>
                  <option value="lambayeque">Lambayeque</option>
                  <option value="lima">Lima</option>
                  <option value="loreto">Loreto</option>
                  <option value="madre-de-dios">Madre de Dios</option>
                  <option value="moquegua">Moquegua</option>
                  <option value="pasco">Pasco</option>
                  <option value="piura">Piura</option>
                  <option value="puno">Puno</option>
                  <option value="san-martin">San Martín</option>
                  <option value="tacna">Tacna</option>
                  <option value="tumbes">Tumbes</option>
                  <option value="ucayali">Ucayali</option>
                </select>
              </div>

              {/* FECHA DESDE */}
              <div>
                <label className="block text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider mb-1">Fecha desde</label>
                <input
                  type="date"
                  value={advFechaDesde}
                  onChange={e => setAdvFechaDesde(e.target.value)}
                  className="w-full px-2.5 py-2 bg-white border border-[#DEE3EA] rounded-[4px] text-[12px] text-[#26292E] focus:outline-none focus:border-[#63c9c4] transition-colors"
                />
              </div>

              {/* FECHA HASTA */}
              <div>
                <label className="block text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider mb-1">Fecha hasta</label>
                <input
                  type="date"
                  value={advFechaHasta}
                  onChange={e => setAdvFechaHasta(e.target.value)}
                  className="w-full px-2.5 py-2 bg-white border border-[#DEE3EA] rounded-[4px] text-[12px] text-[#26292E] focus:outline-none focus:border-[#63c9c4] transition-colors"
                />
              </div>

              {/* DEPARTAMENTO */}
              <div>
                <label className="block text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider mb-1">Departamento</label>
                <select
                  value={advDepartamento}
                  onChange={e => { setAdvDepartamento(e.target.value); setAdvProvincia(''); setAdvDistrito(''); }}
                  className="w-full px-2.5 py-2 bg-white border border-[#DEE3EA] rounded-[4px] text-[12.5px] text-[#26292E] focus:outline-none focus:border-[#63c9c4] transition-colors"
                >
                  <option value="">Seleccionar</option>
                  <option value="cajamarca">Cajamarca</option>
                  <option value="lima">Lima</option>
                  <option value="piura">Piura</option>
                  <option value="la-libertad">La Libertad</option>
                  <option value="arequipa">Arequipa</option>
                </select>
              </div>

              {/* PROVINCIA */}
              <div>
                <label className="block text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider mb-1">Provincia</label>
                <select
                  value={advProvincia}
                  onChange={e => { setAdvProvincia(e.target.value); setAdvDistrito(''); }}
                  className="w-full px-2.5 py-2 bg-white border border-[#DEE3EA] rounded-[4px] text-[12.5px] text-[#26292E] focus:outline-none focus:border-[#63c9c4] transition-colors"
                  disabled={!advDepartamento}
                >
                  <option value="">Seleccionar</option>
                  {advDepartamento === 'cajamarca' && (
                    <><option value="chota">Chota</option><option value="cajamarca">Cajamarca</option><option value="santa-cruz">Santa Cruz</option><option value="cutervo">Cutervo</option></>
                  )}
                  {advDepartamento === 'lima' && (
                    <><option value="lima">Lima</option><option value="huarochiri">Huarochirí</option><option value="canta">Canta</option></>
                  )}
                  {advDepartamento === 'piura' && (
                    <><option value="piura">Piura</option><option value="sullana">Sullana</option><option value="morropon">Morropón</option></>
                  )}
                </select>
              </div>

              {/* DISTRITO */}
              <div className="sm:col-span-2">
                <label className="block text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider mb-1">Distrito</label>
                <select
                  value={advDistrito}
                  onChange={e => setAdvDistrito(e.target.value)}
                  className="w-full px-2.5 py-2 bg-white border border-[#DEE3EA] rounded-[4px] text-[12.5px] text-[#26292E] focus:outline-none focus:border-[#63c9c4] transition-colors"
                  disabled={!advProvincia}
                >
                  <option value="">Seleccionar</option>
                  {advProvincia === 'chota' && (
                    <><option value="chota">Chota</option><option value="cortegana">Cortegana</option><option value="lajas">Lajas</option><option value="tacabamba">Tacabamba</option></>
                  )}
                  {advProvincia === 'cajamarca' && (
                    <><option value="cajamarca">Cajamarca</option><option value="chetilla">Chetilla</option><option value="cospan">Cospán</option></>
                  )}
                  {advProvincia === 'lima' && (
                    <><option value="lima">Lima Cercado</option><option value="miraflores">Miraflores</option><option value="san-isidro">San Isidro</option></>
                  )}
                </select>
              </div>
            </div>

            {/* Panel footer buttons */}
            <div className="px-4 py-3 bg-[#F6F9FC] border-t border-[#DEE3EA] flex items-center justify-end gap-2">
              <button
                onClick={handleAdvancedClear}
                className="px-4 py-2 bg-white border border-[#294269] rounded-[16px] text-[12.5px] font-bold text-[#294269] hover:bg-[#63c9c4] hover:border-[#63c9c4] hover:text-white transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleAdvancedApply}
                className="flex items-center gap-1.5 px-4 py-2 bg-[#294269] text-white rounded-[16px] text-[12.5px] font-bold hover:bg-[#63c9c4] transition-colors"
              >
                <Search size={12} />
                Aplicar filtros
              </button>
            </div>
          </div>
        )}

        {/* Temas más buscados (Diseño Minimalista) */}
        <div className="w-full max-w-4xl px-4 mb-16">
          <div className="flex flex-col items-center">
            <h3 className="text-[14px] font-bold text-[#0056AC] uppercase tracking-[0.2em] mb-8 font-['Roboto',sans-serif]">
              Temas más buscados
            </h3>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {popularSearches.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate({ type: 'search-all', query: item.label })}
                  className="flex flex-col items-center gap-3 group transition-all"
                >
                  <div className="size-16 rounded-full border border-gray-200 flex items-center justify-center text-[#26292E] group-hover:border-[#294269] group-hover:text-[#294269] group-hover:bg-[#63c9c4]/10 transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <item.Icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-[13px] font-bold text-[#26292E] group-hover:text-[#294269] transition-colors text-center max-w-[100px] leading-tight font-['Roboto',sans-serif]">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search Type Buttons */}
        <div className="w-full max-w-6xl px-4 mb-12">
          <h2 className="text-2xl font-semibold text-[#294269] mb-6 text-center font-['Roboto',sans-serif]">
            Buscar por etapa del proceso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {searchButtons.map((button) => (
              <button
                key={button.label}
                onClick={() => navigate(button.page)}
                className="group relative bg-gradient-to-br from-[#294269] to-[#3F5578] text-white rounded-[8px] p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-white/20 rounded-full backdrop-blur-sm">
                    <div className="size-[40px]">
                      {button.icon === 'campaign' && (
                        <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
                          <path d={svgPaths.p26087100} fill="white" />
                          <path clipRule="evenodd" d={svgPaths.p2794ae70} fill="white" fillRule="evenodd" />
                        </svg>
                      )}
                      {button.icon === 'rule' && (
                        <svg className="size-full" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p5319ef0} fill="white" />
                        </svg>
                      )}
                      {button.icon === 'widgets' && (
                        <svg className="size-full" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p3c36e280} fill="white" />
                        </svg>
                      )}
                      {button.icon === 'contracts-menor' && (
                        <svg className="size-full" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-['Roboto',sans-serif]">
                    {button.label}
                  </h3>
                  <p className="text-sm text-white/90 font-['Roboto',sans-serif]">
                    {button.description}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-[8px] bg-white/0 group-hover:bg-white/10 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#294269] text-white py-4 px-6 text-sm font-['Roboto',sans-serif] mt-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            <span>Central de consultas: (01) 614-5656 - Opción 7</span>
            <span>Sede central: Av. Gregorio Escobedo cdra. 7 s/n Jesús María - Lima/Perú</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#e2a615] transition-colors">Formulario de contacto</a>
            <span>© Soporte</span>
            <span>25 de Agosto, 2025 | 22:09</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
