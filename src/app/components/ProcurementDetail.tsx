import { useState } from 'react';
import { X, Building2, Calendar, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import svgPaths from "../../imports/TemplateBuscadorPublico-4/svg-muqxpbpr0o";

interface ProcurementDetailProps {
  itemId: number;
  onClose: () => void;
}

export function ProcurementDetail({ itemId, onClose }: ProcurementDetailProps) {
  const [activeTab, setActiveTab] = useState<'planning' | 'selection' | 'fup' | 'contracts'>('planning');
  const [expandedSection, setExpandedSection] = useState<string | null>('general');

  // Mock detailed data
  const detailData = {
    id: itemId,
    code: '20601958064',
    entity: 'INVERSIONES Y PROYECTOS LAS TORRES',
    entityCode: '20601958064',
    entityConvocante: 'GOBIERNO REGIONAL DE LORETO UNIDAD EJECUTORA SALUD UCAYALI - CONTAMANA',
    contractor: 'INVERSIONES Y PROYECTOS LAS TORRES',
    description: 'GASOLINA REGULAR',
    location: 'LORETO/UCAYALI/CONTAMANA',
    publicationDate: '12/04/2025',
    stages: {
      planning: {
        available: true,
        date: '12/04/2025',
        data: [
          { label: 'Entidad Convocante', value: '20601958064', icon: Building2 },
          { label: 'Entidad Convocante', value: 'GOBIERNO REGIONAL DE LORETO UNIDAD EJECUTORA SALUD UCAYALI - CONTAMANA...', icon: Building2 },
          { label: 'Contratista', value: 'INVERSIONES Y PROYECTOS LAS TORRES', icon: Building2 },
          { label: 'Descripción', value: 'GASOLINA REGULAR', icon: FileText },
          { label: 'Ítem', value: 'GASOLINA REGULAR', icon: FileText },
          { label: 'Descripción', value: 'GASOLINA REGULAR', icon: FileText },
          { label: 'Lugar de ejecución de la prestación', value: 'LORETO/UCAYALI/CONTAMANA', icon: Building2 },
          { label: 'Año', value: '2025', icon: Calendar }
        ]
      },
      selection: {
        available: true,
        date: '15/05/2025',
        data: [
          { label: 'Proceso de selección', value: 'LP-001-2025', icon: FileText },
          { label: 'Estado', value: 'En evaluación', icon: FileText },
          { label: 'Monto referencial', value: 'S/ 150,000.00', icon: FileText },
          { label: 'Fecha de presentación', value: '15/05/2025', icon: Calendar }
        ]
      },
      fup: {
        available: true,
        date: '20/06/2025',
        data: [
          { label: 'Número FUP', value: 'FUP-2025-001234', icon: FileText },
          { label: 'Estado', value: 'Aprobado', icon: FileText },
          { label: 'Fecha de aprobación', value: '20/06/2025', icon: Calendar }
        ]
      },
      contracts: {
        available: true,
        date: '12/07/2025',
        data: [
          { label: 'Número de contrato', value: 'C-2025-789', icon: FileText },
          { label: 'Fecha de suscripción', value: '12/07/2025', icon: Calendar },
          { label: 'Monto contratado', value: 'S/ 148,500.00', icon: FileText },
          { label: 'Plazo de ejecución', value: '90 días', icon: FileText }
        ]
      }
    }
  };

  const tabs = [
    { id: 'planning', label: 'Planificación y ACF', icon: 'campaign' },
    { id: 'selection', label: 'Procedimientos de selección', icon: 'rule' },
    { id: 'fup', label: 'FUP', icon: 'widgets' },
    { id: 'contracts', label: 'Contratos', icon: 'description' }
  ];

  const currentStageData = detailData.stages[activeTab];

  return (
    <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden font-['Roboto',sans-serif]">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-5 border-b flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#294269]">
          Detalle del Procedimiento
        </h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/50 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Stage Tabs - Horizontal Menu */}
      <div className="bg-gradient-to-b from-cyan-50/30 to-transparent p-6 border-b">
        <div className="flex items-center justify-center gap-3">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === tab.id;
            const isAvailable = detailData.stages[tab.id as keyof typeof detailData.stages].available;

            return (
              <div key={tab.id} className="flex items-center">
                <button
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  disabled={!isAvailable}
                  className={`flex flex-col items-center gap-2 px-8 py-4 rounded-full transition-all min-w-[120px] ${
                    isActive
                      ? 'bg-[#294269] text-white shadow-lg scale-105'
                      : isAvailable
                      ? 'bg-white text-[#26292E] hover:bg-gray-50 border border-gray-200'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <div className="size-[28px]">
                    {tab.icon === 'campaign' && (
                      <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
                        <path d={svgPaths.p26087100} fill={isActive ? 'white' : '#26292E'} />
                        <path clipRule="evenodd" d={svgPaths.p2794ae70} fill={isActive ? 'white' : '#26292E'} fillRule="evenodd" />
                      </svg>
                    )}
                    {tab.icon === 'rule' && (
                      <svg className="size-full" fill="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p5319ef0} fill={isActive ? 'white' : '#26292E'} />
                      </svg>
                    )}
                    {tab.icon === 'widgets' && (
                      <svg className="size-full" fill="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p3c36e280} fill={isActive ? 'white' : '#26292E'} />
                      </svg>
                    )}
                    {tab.icon === 'description' && (
                      <svg className="size-full" fill="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p27b27400} fill={isActive ? 'white' : '#26292E'} />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-center whitespace-nowrap">
                    {tab.label}
                  </span>
                </button>
                {idx < tabs.length - 1 && (
                  <div className="w-6 h-0.5 bg-gray-300 mx-1" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-h-[600px] overflow-y-auto">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-6 border-b">
          <button className="px-4 py-2 border-b-2 border-[#294269] text-[#26292E] font-medium">
            Tab text
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
            Tab text
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
            Tab text
          </button>
        </div>

        {/* Collapsible Section */}
        <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'general' ? null : 'general')}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-2">
              <FileText className="text-[#26292E]" size={20} />
              <span className="font-semibold text-[#294269]">Datos generales del contrato</span>
            </div>
            <ChevronDown
              size={20}
              className={`text-gray-400 transition-transform ${expandedSection === 'general' ? 'rotate-180' : ''}`}
            />
          </button>

          {expandedSection === 'general' && (
            <div className="p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentStageData.data.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="p-2 bg-blue-50 rounded flex-shrink-0">
                        <Icon size={16} className="text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                        <div className="text-sm font-medium text-gray-800 break-words">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column Info */}
              <div className="mt-6 pt-4 border-t grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded flex-shrink-0">
                    <Calendar size={16} className="text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 mb-1">Fecha de vigencia del contrato</div>
                    <div className="text-sm font-medium text-gray-800">
                      <div>INICIO: {currentStageData.date}</div>
                      <div>FINAL: {currentStageData.date}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded flex-shrink-0">
                    <Building2 size={16} className="text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 mb-1">Entidad Convocante</div>
                    <div className="text-sm font-medium text-gray-800 break-words">
                      {detailData.entityCode}
                    </div>
                    <div className="text-xs text-gray-600 mt-1 break-words">
                      {detailData.entityConvocante}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional sections */}
        <div className="border border-gray-200 rounded-lg mb-4">
          <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-2">
              <FileText className="text-[#26292E]" size={20} />
              <span className="font-semibold text-[#294269]">Documentos adjuntos</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>

        <div className="border border-gray-200 rounded-lg">
          <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-2">
              <FileText className="text-[#26292E]" size={20} />
              <span className="font-semibold text-[#294269]">Historial de cambios</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
