import { Eye, ChevronDown } from 'lucide-react';

interface ResultsTableProps {
  activeStage: string;
  onSelectItem: (id: number | string) => void;
}

// Mock data - simulates procurement records
const mockData = [
  {
    id: 1,
    code: 'LP-1234567890',
    entity: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA',
    publicationDate: '24/12/2025',
    type: 'LICITACIÓN PÚBLICA',
    object: 'BIEN',
    description: 'ADQUISICIÓN DE HOJUELAS PRECOCIDAS DE AVENA, QUINUA, KIWICHA, MACA, SOYA, LECHE ENTERA EN POLVO Y AZÚCAR',
    approxDate: '17/12/2026',
    stages: ['planning', 'selection'],
    status: 'En proceso'
  },
  {
    id: 2,
    code: 'LP-1234567891',
    entity: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA',
    publicationDate: '14/10/2025',
    type: 'LICITACIÓN PÚBLICA',
    object: 'BIEN',
    description: 'ADQUISICIÓN DE EQUIPOS DE PROTECCIÓN PERSONAL TÉCNICO Y ADMINISTRATIVO DE ELECTRO ORIENTE S.A.',
    approxDate: '17/12/2026',
    stages: ['planning', 'selection', 'fup'],
    status: 'En evaluación'
  },
  {
    id: 3,
    code: 'LP-1234567892',
    entity: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA',
    publicationDate: '14/10/2025',
    type: 'LICITACIÓN PÚBLICA',
    object: 'BIEN',
    description: 'ADQUISICIÓN, EQUIPAMIENTO, MONTAJE, PRUEBAS Y PUESTA EN SERVICIO PARA AMPLIACIÓN DE REDES SECUNDARIAS',
    approxDate: '17/12/2026',
    stages: ['planning', 'selection', 'fup', 'contracts'],
    status: 'Contrato firmado'
  },
  {
    id: 4,
    code: 'LP-1234567893',
    entity: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA',
    publicationDate: '14/10/2025',
    type: 'LICITACIÓN PÚBLICA',
    object: 'SERVICIO',
    description: 'SERVICIO DE MECA Y BAL TENSIÓN, PARA EL DEPARTAMENTO DE DISTRIBUCIÓN DE LA GERENCIA REGIONAL',
    approxDate: '17/12/2026',
    stages: ['planning'],
    status: 'Planificación'
  },
  {
    id: 5,
    code: 'LP-1234567894',
    entity: 'GOBIERNO REGIONAL DE LORETO UNIDAD EJECUTORA SALUD UCAYALI',
    publicationDate: '14/10/2025',
    type: 'LICITACIÓN PÚBLICA',
    object: 'BIEN',
    description: 'ADQUISICIÓN DE (03) TOTEM PARA LA ZONA REGISTRAL N° VI',
    approxDate: '17/12/2026',
    stages: ['planning', 'selection'],
    status: 'En selección'
  },
  {
    id: 6,
    code: 'LP-1234567895',
    entity: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA',
    publicationDate: '14/10/2025',
    type: 'LICITACIÓN PÚBLICA',
    object: 'SERVICIO',
    description: 'ADQUISICIÓN DE GRUPO ELECTRÓGENO DE 3,500 MW EN GENERACIÓN ELÉCTRICA DEL SERVICIO ELÉCTRICO',
    approxDate: '17/12/2026',
    stages: ['planning', 'selection', 'fup'],
    status: 'En FUP'
  },
  {
    id: 7,
    code: 'LP-1234567896',
    entity: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA',
    publicationDate: '14/10/2025',
    type: 'LICITACIÓN PÚBLICA',
    object: 'BIEN',
    description: 'ADQUISICIÓN DE GRUPO ELECTRÓGENO DE 1 MW EN GENERACIÓN ELÉCTRICA DEL SERVICIO ELÉCTRICO DE CAÑETE',
    approxDate: '17/12/2026',
    stages: ['planning', 'selection', 'fup', 'contracts'],
    status: 'Contrato firmado'
  },
  {
    id: 8,
    code: 'LP-1234567897',
    entity: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA',
    publicationDate: '14/10/2025',
    type: 'LICITACIÓN PÚBLICA',
    object: 'OBRA',
    description: 'ADQUISICIÓN DE POSTES DE CONCRETO ARMADO CENTRIFUGADO DE DEFICIENCIAS EN REDES',
    approxDate: '17/12/2026',
    stages: ['planning', 'selection'],
    status: 'En selección'
  },
  {
    id: 9,
    code: 'LP-1234567898',
    entity: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA',
    publicationDate: '14/10/2025',
    type: 'LICITACIÓN PÚBLICA',
    object: 'BIEN',
    description: 'ADQUISICIÓN DE UNIFORMES (2025) PARA EL PERSONAL DL 728 DE LA ZONA REGISTRAL N° VI',
    approxDate: '17/12/2026',
    stages: ['planning', 'selection', 'fup', 'contracts'],
    status: 'Contrato firmado'
  }
];

export function ResultsTable({ activeStage, onSelectItem }: ResultsTableProps) {
  const filteredData = activeStage === 'all'
    ? mockData
    : mockData.filter(item => item.stages.includes(activeStage));

  const getStageColor = (stages: string[]) => {
    if (stages.includes('contracts')) return 'bg-green-100 text-green-700';
    if (stages.includes('fup')) return 'bg-blue-100 text-blue-700';
    if (stages.includes('selection')) return 'bg-yellow-100 text-yellow-700';
    return 'bg-gray-100 text-gray-700';
  };

  const getStageBadges = (stages: string[]) => {
    const stageLabels: Record<string, string> = {
      planning: 'Plan',
      selection: 'Selec',
      fup: 'FUP',
      contracts: 'Contrato'
    };
    return stages.map(stage => stageLabels[stage]).join(' → ');
  };

  if (filteredData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-500">
        <div className="text-6xl mb-4">📋</div>
        <p className="font-['Roboto',sans-serif]">No se encontraron resultados según los criterios de búsqueda establecidos.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm font-['Roboto',sans-serif]">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="text-left p-3 font-semibold text-gray-700">
              <div className="flex items-center gap-1">
                N° <ChevronDown size={14} />
              </div>
            </th>
            <th className="text-left p-3 font-semibold text-gray-700">
              <div className="flex items-center gap-1">
                Entidad <ChevronDown size={14} />
              </div>
            </th>
            <th className="text-left p-3 font-semibold text-gray-700">
              <div className="flex items-center gap-1">
                Fecha de publicación <ChevronDown size={14} />
              </div>
            </th>
            <th className="text-left p-3 font-semibold text-gray-700">
              <div className="flex items-center gap-1">
                Tipo de Procedimiento <ChevronDown size={14} />
              </div>
            </th>
            <th className="text-left p-3 font-semibold text-gray-700">
              <div className="flex items-center gap-1">
                Objeto de Contratación <ChevronDown size={14} />
              </div>
            </th>
            <th className="text-left p-3 font-semibold text-gray-700">
              <div className="flex items-center gap-1">
                Descripción preliminar del requerimiento <ChevronDown size={14} />
              </div>
            </th>
            <th className="text-left p-3 font-semibold text-gray-700">
              <div className="flex items-center gap-1">
                Etapas <ChevronDown size={14} />
              </div>
            </th>
            <th className="text-left p-3 font-semibold text-gray-700">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, idx) => (
            <tr key={item.id} className="border-b hover:bg-gray-50 transition-colors">
              <td className="p-3">{String(idx + 1).padStart(2, '0')}</td>
              <td className="p-3">
                <div className="font-medium text-gray-700">{item.code}</div>
                <button className="text-xs text-[#0056AC] hover:underline font-medium text-left">{item.entity}</button>
              </td>
              <td className="p-3 text-gray-600">{item.publicationDate}</td>
              <td className="p-3 text-gray-600">{item.type}</td>
              <td className="p-3">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                  {item.object}
                </span>
              </td>
              <td className="p-3 text-gray-600 max-w-md">
                <div className="line-clamp-2">{item.description}</div>
              </td>
              <td className="p-3">
                <div className={`px-2 py-1 rounded text-xs font-medium inline-block ${getStageColor(item.stages)}`}>
                  {getStageBadges(item.stages)}
                </div>
              </td>
              <td className="p-3">
                <button
                  onClick={() => item.object === 'OBRA' ? onSelectItem(`obra:${item.id}`) : item.object === 'BIEN' ? onSelectItem(`bien:${item.id}`) : item.object === 'SERVICIO' ? onSelectItem(`servicio:${item.id}`) : item.stages.includes('contratos-menores') ? setOpenCMId(item.id) : onSelectItem(item.id)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="Ver detalle"
                >
                  <Eye size={18} className="text-gray-600 hover:text-[#63c9c4]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
