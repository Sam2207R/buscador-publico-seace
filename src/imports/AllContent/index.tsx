import svgPaths from "./svg-s6pva4awz1";

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[32px]">Gestión de requerimientos</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[16px] items-center min-w-px relative" data-name="Container">
      <div className="bg-[#e2a615] h-[47px] relative rounded-[2px] shrink-0 w-[5px]" data-name="Divider" />
      <Container2 />
    </div>
  );
}

function ButtonsContainer() {
  return <div className="content-stretch flex gap-[22px] h-[36px] items-center justify-end relative shrink-0 w-[210px]" data-name="Buttons-Container" />;
}

function Container() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <ButtonsContainer />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0 w-full" data-name="header">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Title_body">
        <Container />
      </div>
    </div>
  );
}

function Container5() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-name="Container" />;
}

function StepSuccess() {
  return (
    <div className="bg-[#126b49] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Step Success">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Check">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Path">
            <path d={svgPaths.pcbbaa00} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <div className="bg-[#dee3ea] h-[2px] relative rounded-br-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container5 />
      </div>
      <StepSuccess />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container6 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] max-w-[200px] overflow-hidden relative shrink-0 text-[#294269] text-[16px] text-center text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Formulación del requerimiento</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-name="Container">
      <div className="bg-[#dee3ea] h-[2px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function StepSuccess1() {
  return (
    <div className="bg-[#126b49] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Step Success">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Check">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Path">
            <path d={svgPaths.pcbbaa00} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <div className="bg-[#dee3ea] h-[2px] relative rounded-br-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container8 />
      </div>
      <StepSuccess1 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container9 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] max-w-[200px] overflow-hidden relative shrink-0 text-[#294269] text-[16px] text-center text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Estrategia interacción con el mercado</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-name="Container">
      <div className="bg-[#dee3ea] h-[2px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function StepShape() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(24,39,75,0.15),0px_1px_1px_rgba(24,39,75,0.3)] flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Step Shape">
      <div aria-hidden className="absolute border-2 border-[#4597e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-[#0056ac] relative rounded-[8.75px] shrink-0 size-[14px]" data-name="Circle" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <div className="bg-[#dee3ea] h-[2px] relative rounded-br-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container11 />
      </div>
      <StepShape />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container12 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] max-w-[200px] overflow-hidden relative shrink-0 text-[#0056ac] text-[16px] text-center text-ellipsis w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] mb-0">{`Estrategia `}</p>
        <p className="leading-[19px]">cronograma</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-name="Container">
      <div className="bg-[#dee3ea] h-[2px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function StepShape1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Step Shape">
      <div aria-hidden className="absolute border-2 border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <div className="bg-[#dee3ea] h-[2px] relative rounded-br-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container14 />
      </div>
      <StepShape1 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container15 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] max-w-[200px] overflow-hidden relative shrink-0 text-[#a8a9ab] text-[16px] text-center text-ellipsis w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] mb-0">{`Estrategia `}</p>
        <p className="leading-[19px]">presupuesto</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-name="Container">
      <div className="bg-[#dee3ea] h-[2px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function StepShape2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Step Shape">
      <div aria-hidden className="absolute border-2 border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <div className="bg-[#dee3ea] h-[2px] relative rounded-br-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container17 />
      </div>
      <StepShape2 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container18 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] max-w-[200px] overflow-hidden relative shrink-0 text-[#a8a9ab] text-[16px] text-center text-ellipsis w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] mb-0">{`Estrategia `}</p>
        <p className="leading-[19px]">análisis de variables</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-name="Container">
      <div className="bg-[#dee3ea] h-[2px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function StepShape3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Step Shape">
      <div aria-hidden className="absolute border-2 border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <div className="bg-[#dee3ea] h-[2px] relative rounded-br-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container20 />
      </div>
      <StepShape3 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container21 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] max-w-[200px] overflow-hidden relative shrink-0 text-[#a8a9ab] text-[16px] text-center text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Designación de evaluadores</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-name="Container">
      <div className="bg-[#dee3ea] h-[2px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function StepShape4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Step Shape">
      <div aria-hidden className="absolute border-2 border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <div className="bg-[#dee3ea] h-[2px] relative rounded-br-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container23 />
      </div>
      <StepShape4 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container24 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] max-w-[200px] overflow-hidden relative shrink-0 text-[#a8a9ab] text-[16px] text-center text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Aprobación de expediente</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-name="Container">
      <div className="bg-[#dee3ea] h-[2px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function StepShape5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Step Shape">
      <div aria-hidden className="absolute border-2 border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container27() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Container" />;
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container26 />
      </div>
      <StepShape5 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container27 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] max-w-[200px] overflow-hidden relative shrink-0 text-[#a8a9ab] text-[16px] text-center text-ellipsis w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] mb-0">{`Elaboración de `}</p>
        <p className="leading-[19px]">las bases</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[32px]">Estrategia cronograma de la contratación</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0">
      <Frame17 />
    </div>
  );
}

function Chips() {
  return (
    <div className="bg-[#fff9e8] h-full relative rounded-[100px] shrink-0" data-name="chips">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#997300] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Pendiente
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="content-stretch flex items-start relative shrink-0" data-name="chips">
        <div className="content-stretch flex h-[28px] items-center justify-center min-h-[36px] relative rounded-[100px] shrink-0" data-name="chips">
          <div className="flex flex-row items-center self-stretch">
            <Chips />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <div className="content-stretch flex h-[15px] items-center overflow-clip relative rounded-[8px] shrink-0" data-name="Cronograma-Leyenda">
        <div className="bg-[#4597e8] h-full relative shrink-0 w-[10px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Convocatoria</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] items-start left-[14px] px-[16px] py-[8px] top-[-17.34px]" data-name="Title">
      <Frame39 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Forma de ejecución
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative">
      <Frame />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] min-w-px relative text-[#26292e] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Por la entidad
      </p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de inicio</p>
      </div>
    </div>
  );
}

function InputContainer() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">​</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de fin</p>
      </div>
    </div>
  );
}

function InputContainer1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">​</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer1 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row1">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label />
        <Container28 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label1 />
        <Container29 />
      </div>
    </div>
  );
}

function Col() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[311px]" data-name="Col1">
      <Row1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#515458] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N° de Días
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[66px]">
      <Frame1 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[36px] justify-end leading-[0] relative shrink-0 text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">00</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="h-[43px] relative shrink-0 w-[200px]">
      <div className="absolute inset-[0_-1.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 205.333 43">
          <g id="Frame 1984078253">
            <path d={svgPaths.p284ad800} fill="var(--stroke-0, #555869)" id="Line 1" />
            <path d={svgPaths.p87ec180} fill="var(--fill-0, #0056AC)" id="Usage" />
            <path d={svgPaths.p1a293f00} fill="var(--stroke-0, #8A94A2)" id="Line 2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-end self-stretch">
        <Frame20 />
      </div>
      <div className="bg-[#e9eaea] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[4px] items-start justify-end max-h-[4px] min-w-px relative rounded-[24px]" data-name="Timeline">
        <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-start justify-center relative shrink-0 text-[10px] text-black w-full" data-name="Cronograma-TimeBack">
          <div className="flex flex-[1_0_0] flex-col h-[15px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Ene</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col h-[12px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Feb</p>
          </div>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Mar
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Abr
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            May
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jun
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jul
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Ago
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sep
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Oct
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Nov
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Dic
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="TimeLine-Sector">
          <Frame47 />
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-0 text-[#555869] text-[12px] top-[-12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            10/01/2026
          </p>
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-[137px] text-[#8a94a2] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            20/02/2026
          </p>
        </div>
      </div>
    </div>
  );
}

function Col1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Col2">
      <Row />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Content">
      <Col />
      <Col1 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <div className="content-stretch flex h-[15px] items-center overflow-clip relative rounded-[8px] shrink-0" data-name="Cronograma-Leyenda">
        <div className="bg-[#4597e8] h-full relative shrink-0 w-[10px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Registro de participaciones</p>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] items-start left-[14px] px-[16px] py-[8px] top-[-17.34px]" data-name="Title">
      <Frame40 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Forma de ejecución
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative">
      <Frame2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] min-w-px relative text-[#26292e] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Electrónico
      </p>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de inicio</p>
      </div>
    </div>
  );
}

function InputContainer2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` `}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de fin</p>
      </div>
    </div>
  );
}

function InputContainer3() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` `}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer3 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row1">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label2 />
        <Container30 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label3 />
        <Container31 />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Hora de inicio</p>
      </div>
    </div>
  );
}

function InputContainer4() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">00:02:03</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="watch_later">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.p3bc65b00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Hora de fin</p>
      </div>
    </div>
  );
}

function InputContainer5() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">23:59:00</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="watch_later">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.p3bc65b00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer5 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row2">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label4 />
        <Container32 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label5 />
        <Container33 />
      </div>
    </div>
  );
}

function Col2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[311px]" data-name="Col1">
      <Row2 />
      <Row3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#515458] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N° de Días
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[66px]">
      <Frame3 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[36px] justify-end leading-[0] relative shrink-0 text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">00</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="h-[43px] relative shrink-0 w-[93px]">
      <div className="absolute inset-[0_-2.87%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.3333 43">
          <g id="Frame 1984078253">
            <path d={svgPaths.p284ad800} fill="var(--stroke-0, #555869)" id="Line 1" />
            <path d={svgPaths.p1d1c3680} fill="var(--fill-0, #0056AC)" id="Usage" />
            <path d={svgPaths.p2c116e80} fill="var(--stroke-0, #8A94A2)" id="Line 2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-end self-stretch">
        <Frame22 />
      </div>
      <div className="bg-[#e9eaea] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[4px] items-center justify-end min-w-px relative rounded-[24px]" data-name="Timeline">
        <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-start justify-center relative shrink-0 text-[10px] text-black w-full" data-name="Cronograma-TimeBack">
          <div className="flex flex-[1_0_0] flex-col h-[15px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Ene</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col h-[12px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Feb</p>
          </div>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Mar
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Abr
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            May
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jun
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jul
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Ago
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sep
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Oct
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Nov
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Dic
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-end justify-center relative shrink-0" data-name="TimeLine-Sector">
          <Frame48 />
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-0 text-[#555869] text-[12px] top-[-12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            10/01/2026
          </p>
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-[29px] text-[#8a94a2] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            20/02/2026
          </p>
        </div>
      </div>
    </div>
  );
}

function Col3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Col2">
      <Row4 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Content">
      <Col2 />
      <Col3 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <div className="content-stretch flex h-[15px] items-center overflow-clip relative rounded-[8px] shrink-0" data-name="Cronograma-Leyenda">
        <div className="bg-[#4597e8] h-full relative shrink-0 w-[10px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Formulación de consultas y observaciones</p>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] items-start left-[14px] px-[16px] py-[8px] top-[-17.34px]" data-name="Title">
      <Frame41 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Forma de ejecución
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative">
      <Frame4 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] min-w-px relative text-[#26292e] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Electrónico
      </p>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de inicio</p>
      </div>
    </div>
  );
}

function InputContainer6() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` `}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer6 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de fin</p>
      </div>
    </div>
  );
}

function InputContainer7() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` `}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer7 />
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row1">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label6 />
        <Container34 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label7 />
        <Container35 />
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Hora de inicio</p>
      </div>
    </div>
  );
}

function InputContainer8() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">00:02:03</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="watch_later">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.p3bc65b00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer8 />
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Hora de fin</p>
      </div>
    </div>
  );
}

function InputContainer9() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">23:59:00</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="watch_later">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.p3bc65b00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer9 />
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row2">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label8 />
        <Container36 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label9 />
        <Container37 />
      </div>
    </div>
  );
}

function Col4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[311px]" data-name="Col1">
      <Row5 />
      <Row6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#515458] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N° de Días
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[66px]">
      <Frame5 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[36px] justify-end leading-[0] relative shrink-0 text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">00</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="h-[43px] relative shrink-0 w-[93px]">
      <div className="absolute inset-[0_-2.87%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.3333 43">
          <g id="Frame 1984078253">
            <path d={svgPaths.p284ad800} fill="var(--stroke-0, #555869)" id="Line 1" />
            <path d={svgPaths.p1d1c3680} fill="var(--fill-0, #0056AC)" id="Usage" />
            <path d={svgPaths.p2c116e80} fill="var(--stroke-0, #8A94A2)" id="Line 2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-end self-stretch">
        <Frame24 />
      </div>
      <div className="bg-[#e9eaea] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[4px] items-start justify-end max-h-[4px] min-w-px relative rounded-[24px]" data-name="Timeline">
        <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-start justify-center relative shrink-0 text-[10px] text-black w-full" data-name="Cronograma-TimeBack">
          <div className="flex flex-[1_0_0] flex-col h-[15px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Ene</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col h-[12px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Feb</p>
          </div>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Mar
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Abr
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            May
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jun
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jul
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Ago
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sep
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Oct
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Nov
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Dic
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="TimeLine-Sector">
          <Frame49 />
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-0 text-[#555869] text-[12px] top-[-12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            10/01/2026
          </p>
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-[29px] text-[#8a94a2] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            20/02/2026
          </p>
        </div>
      </div>
    </div>
  );
}

function Col5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Col2">
      <Row7 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Content">
      <Col4 />
      <Col5 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <div className="content-stretch flex h-[15px] items-center overflow-clip relative rounded-[8px] shrink-0" data-name="Cronograma-Leyenda">
        <div className="bg-[#4597e8] h-full relative shrink-0 w-[10px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Absolución de consultas y observaciones</p>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] items-start left-[14px] px-[16px] py-[8px] top-[-17.34px]" data-name="Title">
      <Frame42 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Forma de ejecución
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative">
      <Frame6 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] min-w-px relative text-[#26292e] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Por la entidad
      </p>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de inicio</p>
      </div>
    </div>
  );
}

function InputContainer10() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` `}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer10 />
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de fin</p>
      </div>
    </div>
  );
}

function InputContainer11() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` `}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer11 />
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row1">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label10 />
        <Container38 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label11 />
        <Container39 />
      </div>
    </div>
  );
}

function Col6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[311px]" data-name="Col1">
      <Row8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#515458] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N° de Días
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[66px]">
      <Frame7 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[36px] justify-end leading-[0] relative shrink-0 text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">00</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="h-[43px] relative shrink-0 w-[200px]">
      <div className="absolute inset-[0_-1.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 205.333 43">
          <g id="Frame 1984078253">
            <path d={svgPaths.p284ad800} fill="var(--stroke-0, #555869)" id="Line 1" />
            <path d={svgPaths.p87ec180} fill="var(--fill-0, #0056AC)" id="Usage" />
            <path d={svgPaths.p1a293f00} fill="var(--stroke-0, #8A94A2)" id="Line 2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-end self-stretch">
        <Frame26 />
      </div>
      <div className="bg-[#e9eaea] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[4px] items-start justify-end max-h-[4px] min-w-px relative rounded-[24px]" data-name="Timeline">
        <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-start justify-center relative shrink-0 text-[10px] text-black w-full" data-name="Cronograma-TimeBack">
          <div className="flex flex-[1_0_0] flex-col h-[15px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Ene</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col h-[12px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Feb</p>
          </div>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Mar
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Abr
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            May
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jun
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jul
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Ago
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sep
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Oct
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Nov
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Dic
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="TimeLine-Sector">
          <Frame50 />
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-0 text-[#555869] text-[12px] top-[-12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            10/01/2026
          </p>
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-[137px] text-[#8a94a2] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            20/02/2026
          </p>
        </div>
      </div>
    </div>
  );
}

function Col7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Col2">
      <Row9 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Content">
      <Col6 />
      <Col7 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <div className="content-stretch flex h-[15px] items-center overflow-clip relative rounded-[8px] shrink-0" data-name="Cronograma-Leyenda">
        <div className="bg-[#4597e8] h-full relative shrink-0 w-[10px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Integración de las Bases</p>
      </div>
    </div>
  );
}

function Title4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] items-start left-[14px] px-[16px] py-[8px] top-[-19.34px]" data-name="Title">
      <Frame43 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Forma de ejecución
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative">
      <Frame8 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] min-w-px relative text-[#26292e] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Por la entidad
      </p>
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de inicio</p>
      </div>
    </div>
  );
}

function InputContainer12() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` `}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer12 />
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de fin</p>
      </div>
    </div>
  );
}

function InputContainer13() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` `}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer13 />
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row1">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label12 />
        <Container40 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label13 />
        <Container41 />
      </div>
    </div>
  );
}

function Col8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[311px]" data-name="Col1">
      <Row10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#515458] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N° de Días
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[209px]">
      <Frame9 />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Bold',sans-serif] font-bold justify-end leading-[0] min-h-px relative text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">00</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="h-[43px] relative shrink-0 w-[200px]">
      <div className="absolute inset-[0_-1.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 205.333 43">
          <g id="Frame 1984078253">
            <path d={svgPaths.p284ad800} fill="var(--stroke-0, #555869)" id="Line 1" />
            <path d={svgPaths.p87ec180} fill="var(--fill-0, #0056AC)" id="Usage" />
            <path d={svgPaths.p1a293f00} fill="var(--stroke-0, #8A94A2)" id="Line 2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex gap-[24px] h-[55px] items-end relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0" data-name="Dato">
        <Frame28 />
      </div>
      <div className="bg-[#e9eaea] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[4px] items-start justify-end max-h-[4px] min-w-px relative rounded-[24px]" data-name="Timeline">
        <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-start justify-center relative shrink-0 text-[10px] text-black w-full" data-name="Cronograma-TimeBack">
          <div className="flex flex-[1_0_0] flex-col h-[15px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Ene</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col h-[12px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Feb</p>
          </div>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Mar
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Abr
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            May
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jun
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jul
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Ago
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sep
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Oct
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Nov
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Dic
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="TimeLine-Sector">
          <Frame51 />
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-0 text-[#555869] text-[12px] top-[-12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            10/01/2026
          </p>
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-[137px] text-[#8a94a2] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            20/02/2026
          </p>
        </div>
      </div>
    </div>
  );
}

function Col9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Col2">
      <Row11 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Content">
      <Col8 />
      <Col9 />
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Lugar</p>
      </div>
    </div>
  );
}

function InputContainer14() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Ingresar lugar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer14 />
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Departamento</p>
      </div>
    </div>
  );
}

function InputContainer15() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Seleccionar</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron_Down">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.pbe35b00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer15 />
    </div>
  );
}

function Label16() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Provincia</p>
      </div>
    </div>
  );
}

function InputContainer16() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Seleccionar</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.pdde3a00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer16 />
    </div>
  );
}

function Label17() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Distrito</p>
      </div>
    </div>
  );
}

function InputContainer17() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` Seleccionar`}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron_Down">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.pbe35b00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer17 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="5">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label15 />
        <Container43 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label16 />
        <Container44 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label17 />
        <Container45 />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[625px]">
      <Component />
    </div>
  );
}

function Place() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Place">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label14 />
        <Container42 />
      </div>
      <Frame36 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <div className="content-stretch flex h-[15px] items-center overflow-clip relative rounded-[8px] shrink-0" data-name="Cronograma-Leyenda">
        <div className="bg-[#4597e8] h-full relative shrink-0 w-[10px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Presentación de ofertas</p>
      </div>
    </div>
  );
}

function Title5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] items-start left-[14px] px-[16px] py-[8px] top-[-17.34px]" data-name="Title">
      <Frame44 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Forma de ejecución
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative">
      <Frame10 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] min-w-px relative text-[#26292e] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Electrónico
      </p>
    </div>
  );
}

function Label18() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de inicio</p>
      </div>
    </div>
  );
}

function InputContainer18() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` `}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer18 />
    </div>
  );
}

function Label19() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de fin</p>
      </div>
    </div>
  );
}

function InputContainer19() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` `}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer19 />
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row1">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label18 />
        <Container46 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label19 />
        <Container47 />
      </div>
    </div>
  );
}

function Label20() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Hora de inicio</p>
      </div>
    </div>
  );
}

function InputContainer20() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">00:02:03</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="watch_later">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.p3bc65b00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer20 />
    </div>
  );
}

function Label21() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Hora de fin</p>
      </div>
    </div>
  );
}

function InputContainer21() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">23:59:00</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="watch_later">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.p3bc65b00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer21 />
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row2">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label20 />
        <Container48 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label21 />
        <Container49 />
      </div>
    </div>
  );
}

function Col10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[311px]" data-name="Col1">
      <Row12 />
      <Row13 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#515458] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N° de Días
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[66px]">
      <Frame11 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[36px] justify-end leading-[0] relative shrink-0 text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">00</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="h-[43px] relative shrink-0 w-[200px]">
      <div className="absolute inset-[0_-1.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 205.333 43">
          <g id="Frame 1984078253">
            <path d={svgPaths.p284ad800} fill="var(--stroke-0, #555869)" id="Line 1" />
            <path d={svgPaths.p87ec180} fill="var(--fill-0, #0056AC)" id="Usage" />
            <path d={svgPaths.p1a293f00} fill="var(--stroke-0, #8A94A2)" id="Line 2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-end self-stretch">
        <Frame30 />
      </div>
      <div className="bg-[#e9eaea] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[4px] items-start justify-end max-h-[4px] min-w-px relative rounded-[24px]" data-name="Timeline">
        <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-start justify-center relative shrink-0 text-[10px] text-black w-full" data-name="Cronograma-TimeBack">
          <div className="flex flex-[1_0_0] flex-col h-[15px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Ene</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col h-[12px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Feb</p>
          </div>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Mar
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Abr
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            May
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jun
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jul
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Ago
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sep
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Oct
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Nov
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Dic
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="TimeLine-Sector">
          <Frame52 />
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-0 text-[#555869] text-[12px] top-[-12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            10/01/2026
          </p>
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-[137px] text-[#8a94a2] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            20/02/2026
          </p>
        </div>
      </div>
    </div>
  );
}

function Col11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Col2">
      <Row14 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Content">
      <Col10 />
      <Col11 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <div className="content-stretch flex h-[15px] items-center overflow-clip relative rounded-[8px] shrink-0" data-name="Cronograma-Leyenda">
        <div className="bg-[#4597e8] h-full relative shrink-0 w-[10px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Evaluación y calificación</p>
      </div>
    </div>
  );
}

function Title6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] items-start left-[14px] px-[16px] py-[8px] top-[-19.34px]" data-name="Title">
      <Frame45 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Forma de ejecución
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative">
      <Frame12 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] min-w-px relative text-[#26292e] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Por la entidad
      </p>
    </div>
  );
}

function Label22() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de inicio</p>
      </div>
    </div>
  );
}

function InputContainer22() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` `}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer22 />
    </div>
  );
}

function Label23() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de fin</p>
      </div>
    </div>
  );
}

function InputContainer23() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` `}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer23 />
    </div>
  );
}

function Row15() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row1">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label22 />
        <Container50 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label23 />
        <Container51 />
      </div>
    </div>
  );
}

function Col12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[311px]" data-name="Col1">
      <Row15 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#515458] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N° de Días
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[209px]">
      <Frame13 />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Bold',sans-serif] font-bold justify-end leading-[0] min-h-px relative text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">00</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="h-[43px] relative shrink-0 w-[200px]">
      <div className="absolute inset-[0_-1.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 205.333 43">
          <g id="Frame 1984078253">
            <path d={svgPaths.p284ad800} fill="var(--stroke-0, #555869)" id="Line 1" />
            <path d={svgPaths.p87ec180} fill="var(--fill-0, #0056AC)" id="Usage" />
            <path d={svgPaths.p1a293f00} fill="var(--stroke-0, #8A94A2)" id="Line 2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Row16() {
  return (
    <div className="content-stretch flex gap-[24px] h-[55px] items-end relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0" data-name="Dato">
        <Frame32 />
      </div>
      <div className="bg-[#e9eaea] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[4px] items-start justify-end max-h-[4px] min-w-px relative rounded-[24px]" data-name="Timeline">
        <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-start justify-center relative shrink-0 text-[10px] text-black w-full" data-name="Cronograma-TimeBack">
          <div className="flex flex-[1_0_0] flex-col h-[15px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Ene</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col h-[12px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Feb</p>
          </div>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Mar
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Abr
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            May
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jun
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jul
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Ago
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sep
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Oct
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Nov
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Dic
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="TimeLine-Sector">
          <Frame53 />
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-0 text-[#555869] text-[12px] top-[-12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            10/01/2026
          </p>
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-[137px] text-[#8a94a2] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            20/02/2026
          </p>
        </div>
      </div>
    </div>
  );
}

function Col13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Col2">
      <Row16 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Content">
      <Col12 />
      <Col13 />
    </div>
  );
}

function Label24() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Lugar</p>
      </div>
    </div>
  );
}

function InputContainer24() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Ingresar lugar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer24 />
    </div>
  );
}

function Label25() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Departamento</p>
      </div>
    </div>
  );
}

function InputContainer25() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Seleccionar</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron_Down">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.pbe35b00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer25 />
    </div>
  );
}

function Label26() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Provincia</p>
      </div>
    </div>
  );
}

function InputContainer26() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Seleccionar</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.pdde3a00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer26 />
    </div>
  );
}

function Label27() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Distrito</p>
      </div>
    </div>
  );
}

function InputContainer27() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` Seleccionar`}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron_Down">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.pbe35b00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer27 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="5">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label25 />
        <Container53 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label26 />
        <Container54 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label27 />
        <Container55 />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[625px]">
      <Component1 />
    </div>
  );
}

function Place1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Place">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label24 />
        <Container52 />
      </div>
      <Frame37 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <div className="content-stretch flex h-[15px] items-center overflow-clip relative rounded-[8px] shrink-0" data-name="Cronograma-Leyenda">
        <div className="bg-[#4597e8] h-full relative shrink-0 w-[10px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Otorgamiento de la Buena Pro</p>
      </div>
    </div>
  );
}

function Title7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] items-start left-[14px] px-[16px] py-[8px] top-[-19.34px]" data-name="Title">
      <Frame46 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Forma de ejecución
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative">
      <Frame14 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] min-w-px relative text-[#26292e] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Por la entidad
      </p>
    </div>
  );
}

function Label28() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de inicio</p>
      </div>
    </div>
  );
}

function InputContainer28() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` `}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer28 />
    </div>
  );
}

function Label29() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha de fin</p>
      </div>
    </div>
  );
}

function InputContainer29() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` `}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path d={svgPaths.p19839300} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer29 />
    </div>
  );
}

function Row17() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row1">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label28 />
        <Container56 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label29 />
        <Container57 />
      </div>
    </div>
  );
}

function Label30() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Hora de inicio</p>
      </div>
    </div>
  );
}

function InputContainer30() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">00:02:03</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="watch_later">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.p3bc65b00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer30 />
    </div>
  );
}

function Label31() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Hora de fin</p>
      </div>
    </div>
  );
}

function InputContainer31() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">23:59:00</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="watch_later">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.p3bc65b00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer31 />
    </div>
  );
}

function Row18() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row2">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label30 />
        <Container58 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label31 />
        <Container59 />
      </div>
    </div>
  );
}

function Col14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[311px]" data-name="Col1">
      <Row17 />
      <Row18 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#515458] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N° de Días
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[209px]">
      <Frame15 />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Bold',sans-serif] font-bold justify-end leading-[0] min-h-px relative text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">00</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="h-[43px] relative shrink-0 w-[93px]">
      <div className="absolute inset-[0_-2.87%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.3333 43">
          <g id="Frame 1984078253">
            <path d={svgPaths.p284ad800} fill="var(--stroke-0, #555869)" id="Line 1" />
            <path d={svgPaths.p1d1c3680} fill="var(--fill-0, #0056AC)" id="Usage" />
            <path d={svgPaths.p2c116e80} fill="var(--stroke-0, #8A94A2)" id="Line 2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Row19() {
  return (
    <div className="content-stretch flex gap-[24px] h-[55px] items-end relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0" data-name="Dato">
        <Frame34 />
      </div>
      <div className="bg-[#e9eaea] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[4px] items-start justify-end max-h-[4px] min-w-px relative rounded-[24px]" data-name="Timeline">
        <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-start justify-center relative shrink-0 text-[10px] text-black w-full" data-name="Cronograma-TimeBack">
          <div className="flex flex-[1_0_0] flex-col h-[15px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Ene</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col h-[12px] justify-center leading-[0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[12px]">Feb</p>
          </div>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Mar
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Abr
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            May
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jun
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Jul
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Ago
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sep
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Oct
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Nov
          </p>
          <p className="flex-[1_0_0] h-[12px] leading-[12px] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
            Dic
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="TimeLine-Sector">
          <Frame54 />
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-0 text-[#555869] text-[12px] top-[-12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            10/01/2026
          </p>
          <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-[29px] text-[#8a94a2] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            20/02/2026
          </p>
        </div>
      </div>
    </div>
  );
}

function Col15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Col2">
      <Row19 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Content">
      <Col14 />
      <Col15 />
    </div>
  );
}

function Label32() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Lugar</p>
      </div>
    </div>
  );
}

function InputContainer32() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Ingresar lugar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer32 />
    </div>
  );
}

function Label33() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Departamento</p>
      </div>
    </div>
  );
}

function InputContainer33() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Seleccionar</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron_Down">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.pbe35b00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer33 />
    </div>
  );
}

function Label34() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Provincia</p>
      </div>
    </div>
  );
}

function InputContainer34() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Seleccionar</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.pdde3a00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer34 />
    </div>
  );
}

function Label35() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Distrito</p>
      </div>
    </div>
  );
}

function InputContainer35() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">{` Seleccionar`}</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron_Down">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.pbe35b00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer35 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="5">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label33 />
        <Container61 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label34 />
        <Container62 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label35 />
        <Container63 />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[625px]">
      <Component2 />
    </div>
  );
}

function Place2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Place">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
        <Label32 />
        <Container60 />
      </div>
      <Frame38 />
    </div>
  );
}

function BodyContent() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start pb-[44px] px-[24px] relative rounded-[8px] shrink-0 w-[1393px]" data-name="Body-Content">
      <Header />
      <div className="content-stretch flex h-[78px] items-start relative shrink-0 w-[1354px]" data-name="Step-h">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative" data-name="p-step">
          <Container4 />
          <Text />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative" data-name="p-step">
          <Container7 />
          <Text1 />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative" data-name="p-step">
          <Container10 />
          <Text2 />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative" data-name="p-step">
          <Container13 />
          <Text3 />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative" data-name="p-step">
          <Container16 />
          <Text4 />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative" data-name="p-step">
          <Container19 />
          <Text5 />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative" data-name="p-step">
          <Container22 />
          <Text6 />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative" data-name="p-step">
          <Container25 />
          <Text7 />
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Título-Step">
        <Frame18 />
        <Frame35 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-center p-[32px] relative rounded-[6px] shrink-0 w-[1338px]" data-name="Ficha-Cronograma">
        <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Title />
        <div className="content-stretch flex gap-[10px] h-[19px] items-center relative shrink-0 w-[374px]" data-name="Dato">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame19 />
          </div>
        </div>
        <Content />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-center p-[32px] relative rounded-[6px] shrink-0 w-[1338px]" data-name="Ficha-Cronograma">
        <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Title1 />
        <div className="content-stretch flex gap-[10px] h-[19px] items-center relative shrink-0 w-[374px]" data-name="Dato">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame21 />
          </div>
        </div>
        <Content1 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-center p-[32px] relative rounded-[6px] shrink-0 w-[1338px]" data-name="Ficha-Cronograma">
        <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Title2 />
        <div className="content-stretch flex gap-[10px] h-[19px] items-center relative shrink-0 w-[374px]" data-name="Dato">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame23 />
          </div>
        </div>
        <Content2 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-center p-[32px] relative rounded-[6px] shrink-0 w-[1338px]" data-name="Ficha-Cronograma">
        <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Title3 />
        <div className="content-stretch flex gap-[10px] h-[19px] items-center relative shrink-0 w-[374px]" data-name="Dato">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame25 />
          </div>
        </div>
        <Content3 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[32px] relative rounded-[6px] shrink-0 w-[1338px]" data-name="Ficha-Cronograma">
        <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Title4 />
        <div className="content-stretch flex gap-[10px] h-[19px] items-center relative shrink-0 w-[374px]" data-name="Dato">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame27 />
          </div>
        </div>
        <Content4 />
        <Place />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-center p-[32px] relative rounded-[6px] shrink-0 w-[1338px]" data-name="Ficha-Cronograma">
        <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Title5 />
        <div className="content-stretch flex gap-[10px] h-[19px] items-center relative shrink-0 w-[374px]" data-name="Dato">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame29 />
          </div>
        </div>
        <Content5 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[32px] relative rounded-[6px] shrink-0 w-[1338px]" data-name="Ficha-Cronograma">
        <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Title6 />
        <div className="content-stretch flex gap-[10px] h-[19px] items-center relative shrink-0 w-[374px]" data-name="Dato">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame31 />
          </div>
        </div>
        <Content6 />
        <Place1 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[32px] relative rounded-[6px] shrink-0 w-[1338px]" data-name="Ficha-Cronograma">
        <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Title7 />
        <div className="content-stretch flex gap-[10px] h-[19px] items-center relative shrink-0 w-[374px]" data-name="Dato">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame33 />
          </div>
        </div>
        <Content7 />
        <Place2 />
      </div>
    </div>
  );
}

export default function AllContent() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="All-Content">
      <BodyContent />
    </div>
  );
}