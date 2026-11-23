import svgPaths from "../../imports/TemplateBuscadorPublico-4/svg-muqxpbpr0o";

interface StageButtonsProps {
  activeStage: string;
  onStageChange: (stage: string) => void;
}

export function StageButtons({ activeStage, onStageChange }: StageButtonsProps) {
  const stages = [
    { id: 'planning', label: 'ActPrep', icon: 'campaign' },
    { id: 'selection', label: 'Selección', icon: 'rule' },
    { id: 'fup', label: 'EjecContrat', icon: 'widgets' },
    { id: 'contracts', label: 'Contratos', icon: 'description' }
  ];

  return (
    <div className="flex gap-4 items-center justify-center mb-6 bg-white/50 rounded-full p-2 w-fit mx-auto">
      {stages.map((stage, idx) => {
        const isActive = activeStage === stage.id;
        return (
          <div key={stage.id} className="flex items-center gap-2">
            <button
              onClick={() => onStageChange(stage.id)}
              className={`flex flex-col items-center gap-2 px-6 py-3 rounded-full transition-all ${
                isActive
                  ? 'bg-[#294269] text-white shadow-lg'
                  : 'bg-white text-[#26292E] hover:bg-gray-50'
              }`}
            >
              <div className="size-[24px]">
                {stage.icon === 'campaign' && (
                  <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
                    <path d={svgPaths.p26087100} fill={isActive ? 'white' : '#26292E'} />
                    <path clipRule="evenodd" d={svgPaths.p2794ae70} fill={isActive ? 'white' : '#26292E'} fillRule="evenodd" />
                  </svg>
                )}
                {stage.icon === 'rule' && (
                  <svg className="size-full" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p5319ef0} fill={isActive ? 'white' : '#26292E'} />
                  </svg>
                )}
                {stage.icon === 'widgets' && (
                  <svg className="size-full" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p3c36e280} fill={isActive ? 'white' : '#26292E'} />
                  </svg>
                )}
                {stage.icon === 'description' && (
                  <svg className="size-full" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p27b27400} fill={isActive ? 'white' : '#26292E'} />
                  </svg>
                )}
              </div>
              <span className="text-xs font-medium">{stage.label}</span>
            </button>
            {idx < stages.length - 1 && (
              <div className="w-8 h-0.5 bg-gray-300" />
            )}
          </div>
        );
      })}
    </div>
  );
}
