import svgPaths from "./svg-uzzu4t0r12";

function BreadcrumbItemsCore() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="_Breadcrumb items core">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="home">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Path">
            <path d={svgPaths.p354e4f00} fill="var(--fill-0, #294269)" />
          </g>
        </svg>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="keyboard_arrow_right">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Path">
            <path d={svgPaths.p16e51a00} fill="var(--fill-0, #294269)" />
          </g>
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3c3e43] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">Gestión de requerimientos</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="keyboard_arrow_right">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Path">
            <path d={svgPaths.p16e51a00} fill="var(--fill-0, #294269)" />
          </g>
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c3e43] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">Formulación del requerimiento</p>
      </div>
    </div>
  );
}

function Frame33() {
  return <div className="content-stretch flex gap-[16px] h-[36px] items-center justify-end relative shrink-0 w-[144px]" />;
}

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

function StepShape() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_3px_rgba(24,39,75,0.15),0px_1px_1px_rgba(24,39,75,0.3)] flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Step Shape">
      <div aria-hidden className="absolute border-2 border-[#4597e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-[#0056ac] relative rounded-[8.75px] shrink-0 size-[14px]" data-name="Circle" />
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
      <StepShape />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container6 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] max-w-[200px] overflow-hidden relative shrink-0 text-[#0056ac] text-[16px] text-center text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
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

function StepShape1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Step Shape">
      <div aria-hidden className="absolute border-2 border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[12px]" />
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
      <StepShape1 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container9 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] max-w-[200px] overflow-hidden relative shrink-0 text-[#a8a9ab] text-[16px] text-center text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
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

function StepShape2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Step Shape">
      <div aria-hidden className="absolute border-2 border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[12px]" />
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
      <StepShape2 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container12 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] max-w-[200px] overflow-hidden relative shrink-0 text-[#a8a9ab] text-[16px] text-center text-ellipsis w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
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

function StepShape3() {
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
      <StepShape3 />
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

function StepShape4() {
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
      <StepShape4 />
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

function StepShape5() {
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
      <StepShape5 />
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

function StepShape6() {
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
      <StepShape6 />
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

function StepShape7() {
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
      <StepShape7 />
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

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[32px]">Formulación de requerimiento</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame27 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0">
      <Frame32 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-[86px]" data-name="chips" />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Text container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Definición de requerimiento</p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Section">
      <TextContainer />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Text container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Relación de ítems</p>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Section">
      <TextContainer1 />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Text container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Entregas</p>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Section">
      <TextContainer2 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Text container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Condiciones de contratación</p>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Section">
      <TextContainer3 />
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Text container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a1b4] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Requisitos</p>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Section">
      <TextContainer4 />
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Text container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a1b4] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Especificaciones técnicas</p>
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Section">
      <TextContainer5 />
    </div>
  );
}

function TextContainer6() {
  return <div className="content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center p-[10px] relative shrink-0 w-[71px]" data-name="Text container" />;
}

function Section6() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0" data-name="Section">
      <TextContainer6 />
    </div>
  );
}

function TabsGroup() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1338px]" data-name="tabs-group">
      <div className="content-stretch flex gap-[8px] h-[53px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="tab">
        <div aria-hidden className="absolute border-[#bebfc0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <Section />
      </div>
      <div className="content-stretch flex gap-[8px] h-[53px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="tab">
        <div aria-hidden className="absolute border-[#bebfc0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <Section1 />
      </div>
      <div className="content-stretch flex gap-[8px] h-[53px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="tab">
        <div aria-hidden className="absolute border-[#bebfc0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <Section2 />
      </div>
      <div className="content-stretch flex gap-[8px] h-[53px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="tab">
        <div aria-hidden className="absolute border-[#294269] border-b-2 border-solid inset-0 pointer-events-none" />
        <Section3 />
      </div>
      <div className="content-stretch flex gap-[8px] h-[53px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="tab">
        <div aria-hidden className="absolute border-[#bebfc0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <Section4 />
      </div>
      <div className="content-stretch flex gap-[8px] h-[53px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="tab">
        <div aria-hidden className="absolute border-[#bebfc0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <Section5 />
      </div>
      <div className="flex-[1_0_0] h-[53px] min-w-px relative" data-name="tab">
        <div aria-hidden className="absolute border-[#bebfc0] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
            <Section6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[43px] items-start justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[28px]">Lista de items</p>
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
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="search">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.p15861e40} fill="var(--fill-0, #546887)" />
              </g>
            </svg>
          </div>
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Ingresar búsqueda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#26292e] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Completados
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#546887] h-full max-h-[20px] min-h-[16px] min-w-[24px] relative rounded-[16px] shrink-0">
      <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] min-w-[inherit] px-[4px] py-[2px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#eaedf0] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[15px] overflow-hidden text-ellipsis">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contador() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-end justify-center relative shrink-0 w-[142px]" data-name="Contador">
      <div className="content-stretch flex gap-[8px] h-[24px] items-center justify-end relative rounded-[6px] shrink-0 w-full" data-name="Etiqueta">
        <Label />
        <div className="content-stretch flex h-[20px] items-center justify-center min-h-[20px] relative rounded-[6px] shrink-0" data-name="Etiqueta-Number">
          <div className="flex flex-row items-center self-stretch">
            <Frame28 />
          </div>
        </div>
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#26292e] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          de 4
        </p>
      </div>
    </div>
  );
}

function TableContentColumns() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full z-[2]" data-name="table-content-columns">
      <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[56px]" data-name="table-colum-text">
        <div className="bg-[#e8f2f7] content-stretch flex gap-[8px] items-center max-h-[56px] min-h-[46px] px-[16px] py-[11px] relative shrink-0 z-[2]" data-name="Table header">
          <div className="content-stretch flex items-center relative shrink-0 w-[170px]" data-name="Header Container">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold h-[17px] leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              N°
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col isolate items-start relative shrink-0 z-[1]" data-name="table-content-column">
          <div className="bg-[#e1f0ff] content-stretch flex items-center max-w-[56px] relative shrink-0 size-[56px] z-[4]" data-name="BodyCell-Table">
            <div className="flex-[1_0_0] h-full min-h-[56px] min-w-[50px] relative" data-name="Table body">
              <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
                <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[8px] py-[14px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-full justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[17px]">01</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center max-w-[56px] relative shrink-0 size-[56px] z-[3]" data-name="BodyCell-Table">
            <div className="bg-white flex-[1_0_0] h-full min-h-[56px] min-w-[50px] relative" data-name="Table body">
              <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
                <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[8px] py-[14px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-full justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[17px]">02</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center max-w-[56px] relative shrink-0 size-[56px] z-[2]" data-name="BodyCell-Table">
            <div className="bg-white flex-[1_0_0] h-full min-h-[56px] min-w-[50px] relative" data-name="Table body">
              <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
                <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[8px] py-[14px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-full justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[17px]">03</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center max-w-[56px] relative shrink-0 size-[56px] z-[1]" data-name="BodyCell-Table">
            <div className="bg-white flex-[1_0_0] h-full min-h-[56px] min-w-[50px] relative" data-name="Table body">
              <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[14px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-full justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[17px]">04</p>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Arrow_menu">
                    <div className="relative shrink-0 size-[16px]" data-name="Container">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 rounded-[5px] size-[16px] top-1/2" />
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="Chevron Icon">
                        <div className="absolute inset-[36.46%_26.04%]" data-name="Path">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4999 6.49989">
                            <path d={svgPaths.p3c097840} fill="var(--fill-0, #294269)" id="Path" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-w-px relative" data-name="table-column-text">
        <div className="bg-[#e8f2f7] max-h-[56px] min-h-[46px] relative shrink-0 w-full z-[2]" data-name="Table header">
          <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center max-h-[inherit] min-h-[inherit] px-[16px] py-[11px] relative size-full">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Header Container">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold h-[17px] leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Descripción
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full z-[1]" data-name="table-content-column">
          <div className="bg-[#e1f0ff] h-[56px] min-h-[56px] relative shrink-0 w-full z-[4]" data-name="cell">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[17px] overflow-hidden text-ellipsis">COMPRA DE ARROZ PILADO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-[56px] min-h-[56px] relative shrink-0 w-full z-[3]" data-name="cell">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[17px] overflow-hidden text-ellipsis">COMPRA DE AZUCAR RUBIA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-[56px] min-h-[56px] relative shrink-0 w-full z-[2]" data-name="cell">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[17px] overflow-hidden text-ellipsis">COMPRA DE LENTEJA BEBE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-[56px] min-h-[56px] relative shrink-0 w-full z-[1]" data-name="cell">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
                <div className="content-stretch flex h-full items-center relative shrink-0 w-[170px]">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[17px] overflow-hidden text-ellipsis">COMPRA DE ESPECERIAS</p>
                  </div>
                </div>
                <div className="content-stretch flex h-[20px] items-center justify-center min-h-[20px] relative rounded-[6px] shrink-0" data-name="Etiqueta-Number">
                  <div className="flex flex-row items-center self-stretch">
                    <div className="bg-[#6a7b96] h-full max-h-[20px] min-h-[16px] min-w-[24px] relative rounded-[16px] shrink-0">
                      <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] min-w-[inherit] size-full">
                        <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] min-w-[inherit] px-[4px] py-[2px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#eaedf0] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            <p className="leading-[15px] overflow-hidden text-ellipsis">2</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-w-px relative" data-name="table-column-text">
        <div className="bg-[#e8f2f7] max-h-[56px] min-h-[46px] relative shrink-0 w-full z-[2]" data-name="Table header">
          <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center max-h-[inherit] min-h-[inherit] px-[16px] py-[11px] relative size-full">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Header Container">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold h-[17px] leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Avance de condiciones
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col isolate items-center relative shrink-0 w-full z-[1]" data-name="table-content-column">
          <div className="bg-[#e1f0ff] content-stretch flex flex-col items-center justify-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[274.5px] z-[4]" data-name="Table body">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="h-[26px] relative shrink-0 w-[47px]" data-name="Progress">
              <div className="absolute h-[22px] left-[2px] top-[2px] w-[43px]" data-name="Total">
                <div className="absolute inset-[-6.82%_-3.49%_0_-3.49%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 23.5">
                    <path d={svgPaths.p1b461c18} id="Total" stroke="var(--stroke-0, #BEBFC0)" strokeWidth="3" />
                  </svg>
                </div>
              </div>
              <div className="absolute h-[22px] left-[2px] top-[2px] w-[43px]" data-name="Progress">
                <div className="absolute inset-[-6.82%_-3.49%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 25">
                    <path d={svgPaths.p1b461c18} id="Progress" stroke="var(--stroke-0, #294269)" strokeLinecap="round" strokeWidth="3" />
                  </svg>
                </div>
              </div>
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal h-[12px] leading-[15px] left-[23.5px] text-[#26292e] text-[12px] text-center top-[13px] w-[43px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                10/10
              </p>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[274.5px] z-[3]" data-name="Table body">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="h-[26px] relative shrink-0 w-[47px]" data-name="Progress">
              <div className="absolute h-[22px] left-[2px] top-[2px] w-[43px]" data-name="Total">
                <div className="absolute inset-[-6.82%_-3.49%_0_-3.49%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 23.5">
                    <path d={svgPaths.p1b461c18} id="Total" stroke="var(--stroke-0, #BEBFC0)" strokeWidth="3" />
                  </svg>
                </div>
              </div>
              <div className="absolute h-[22px] left-[2px] top-[2px] w-[43px]" data-name="Progress">
                <div className="absolute inset-[-6.82%_-3.49%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 25">
                    <path d={svgPaths.p1b461c18} id="Progress" stroke="var(--stroke-0, #294269)" strokeLinecap="round" strokeWidth="3" />
                  </svg>
                </div>
              </div>
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal h-[12px] leading-[15px] left-[23.5px] text-[#26292e] text-[12px] text-center top-[13px] w-[43px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                10/10
              </p>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[274.5px] z-[2]" data-name="Table body">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="h-[26px] relative shrink-0 w-[47px]" data-name="Progress">
              <div className="absolute h-[22px] left-[2px] top-[2px] w-[43px]" data-name="Total">
                <div className="absolute inset-[-6.82%_-3.49%_0_-3.49%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 23.5">
                    <path d={svgPaths.p1b461c18} id="Total" stroke="var(--stroke-0, #BEBFC0)" strokeWidth="3" />
                  </svg>
                </div>
              </div>
              <div className="absolute flex h-[22px] items-center justify-center left-[2px] top-[2px] w-[37.67px]">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[22px] relative w-[37.67px]" data-name="Progress">
                    <div className="absolute inset-[-6.82%_-3.98%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.6698 25">
                        <path d={svgPaths.p2338160} id="Progress" stroke="var(--stroke-0, #294269)" strokeLinecap="round" strokeWidth="3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal h-[12px] leading-[15px] left-[23.5px] text-[#26292e] text-[12px] text-center top-[13px] w-[43px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                8/10
              </p>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[274.5px] z-[1]" data-name="Table body">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="h-[26px] relative shrink-0 w-[47px]" data-name="Progress">
              <div className="absolute h-[22px] left-[2px] top-[2px] w-[43px]" data-name="Total">
                <div className="absolute inset-[-6.82%_-3.49%_0_-3.49%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 23.5">
                    <path d={svgPaths.p1b461c18} id="Total" stroke="var(--stroke-0, #BEBFC0)" strokeWidth="3" />
                  </svg>
                </div>
              </div>
              <div className="absolute flex h-[15.556px] items-center justify-center left-[2px] top-[8.44px] w-[6.444px]">
                <div className="-rotate-90 flex-none">
                  <div className="h-[6.444px] relative w-[15.556px]" data-name="Progress">
                    <div className="absolute inset-[-23.28%_-9.64%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5564 9.44365">
                        <path d={svgPaths.p1be26c80} id="Progress" stroke="var(--stroke-0, #294269)" strokeLinecap="round" strokeWidth="3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal h-[12px] leading-[15px] left-[23.5px] text-[#26292e] text-[12px] text-center top-[13px] w-[43px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                3/10
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Total de registros: 04</p>
      </div>
    </div>
  );
}

function InputContainer1() {
  return (
    <div className="bg-white h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[15px] overflow-hidden text-ellipsis">10</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron_Down">
            <div className="absolute inset-[36.46%_26.04%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.66659 4.33326">
                <path d={svgPaths.p16043a40} fill="var(--fill-0, #294269)" id="Path" />
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

function PageList() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[6px] relative shrink-0" data-name="Page list">
      <div className="bg-[#294269] content-stretch flex gap-[4px] items-center justify-center min-h-[28px] overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[28px]" data-name="Buttons">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f9fc] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[15px]">1</p>
        </div>
      </div>
    </div>
  );
}

function PaginationControls() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Pagination controls">
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Pagination">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[17px]">Registros por página</p>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[56px]" data-name="Text inputs">
          <Container29 />
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Pagination">
        <div className="bg-[#f6f9fc] max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-[4px] shrink-0" data-name="Buttons">
          <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
              <div className="absolute flex inset-[26.04%_36.46%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
                  <div className="relative size-full" data-name="Path">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.66659 4.33326">
                      <path d={svgPaths.p16043a40} fill="var(--fill-0, #A8A9AB)" id="Path" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#c5cdda] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <PageList />
        <div className="bg-white max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] opacity-50 relative rounded-[4px] shrink-0 size-[28px]" data-name="Buttons">
          <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
              <div className="absolute flex inset-[26.04%_36.46%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                  <div className="relative size-full" data-name="Path">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.66659 4.33326">
                      <path d={svgPaths.p16043a40} fill="var(--fill-0, #294269)" id="Path" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[605px]" data-name="table">
        <TableContentColumns />
      </div>
      <div className="bg-[#edf0f4] min-h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Table_pagination">
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[16px] py-[8px] relative size-full">
            <Frame1 />
            <PaginationControls />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableArea() {
  return (
    <div className="bg-white relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Table-Area">
      <div aria-hidden className="absolute border-[#bebfc0] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <Frame37 />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="bg-[#e1f0ff] content-stretch flex gap-[8px] items-center max-h-[64px] min-h-[64px] overflow-clip px-[24px] py-[16px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[637px]" data-name="Title_Column">
        <Frame36 />
        <div className="content-stretch flex flex-col gap-[8px] items-start max-h-[61px] relative shrink-0 w-[224px]" data-name="Text inputs">
          <Container28 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Contador />
        </div>
      </div>
      <TableArea />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start min-w-[400px] relative shrink-0 w-full" data-name="Body">
      <Frame38 />
    </div>
  );
}

function Nro() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center p-[12px] relative rounded-[25px] shrink-0 w-[47px]" data-name="Nro">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] relative shrink-0 text-[#294269] text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[28px]">01</p>
      </div>
    </div>
  );
}

function NameDocument() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Name-Document">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">COMPRA ARROZ PILADO</p>
      </div>
    </div>
  );
}

function TitleColumn() {
  return (
    <div className="bg-[#f2f9ff] h-[64px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Title_Column">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <Nro />
          <NameDocument />
          <div className="bg-[#294269] content-stretch flex gap-[4px] items-center justify-center min-h-[28px] min-w-[31px] overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[60px]" data-name="Buttons">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[12px] text-center text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[15px]">Replicar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="grid">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#294269] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[28px]">Adelantos</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="help_outline">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Path">
            <path d={svgPaths.pe593d70} fill="var(--fill-0, #294269)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Grid1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-w-px relative" data-name="grid">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="error">
        <div className="absolute inset-[8.33%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3591700} fill="var(--fill-0, #E2A615)" id="Path" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Up">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Path">
            <path d={svgPaths.p19f173c0} fill="var(--fill-0, #294269)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AcoordeonHeader() {
  return (
    <div className="bg-[#eaedf0] content-stretch flex items-center px-[24px] py-[16px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[639px]" data-name="acoordeon_header">
      <Grid />
      <Grid1 />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Radio button">
      <div className="absolute bg-white border-[#bebfc0] border-[1.5px] border-solid inset-[16.67%] rounded-[9999px]" data-name="Circle" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[19px] relative shrink-0 text-[#26292e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Aplica
      </p>
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Radio button">
      <div className="absolute bg-white border-[#bebfc0] border-[1.5px] border-solid inset-[16.67%] rounded-[9999px]" data-name="Circle" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[19px] relative shrink-0 text-[#26292e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        No aplica
      </p>
    </div>
  );
}

function Section7() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="section">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radio button">
        <RadioButton />
        <Frame29 />
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radio button">
        <RadioButton1 />
        <Frame30 />
      </div>
    </div>
  );
}

function AccordeonContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="accordeon_content">
      <Section7 />
    </div>
  );
}

function Accordion() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] relative shrink-0 w-[639px]" data-name="accordion">
      <div aria-hidden className="absolute border-[#bebfc0] border-b border-solid inset-0 pointer-events-none" />
      <AcoordeonHeader />
      <AccordeonContent />
    </div>
  );
}

function Grid2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="grid">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#294269] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[28px]">Fórmulas de reajuste</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="help_outline">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Path">
            <path d={svgPaths.pe593d70} fill="var(--fill-0, #294269)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[4px] py-[2px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="error">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p3591700} fill="var(--fill-0, #E2A615)" id="Path" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Down">
            <div className="absolute inset-[36.46%_26.04%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4999 6.49989">
                <path d={svgPaths.p3c097840} fill="var(--fill-0, #294269)" id="Path" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AcordeonCuadernoPadre() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="acordeon-cuaderno-padre">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <Grid2 />
          <div className="flex flex-row items-center self-stretch">
            <Container30 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Accordion1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
      <AcordeonCuadernoPadre />
    </div>
  );
}

function AccordionSlotArea() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion-Slot-Area">
      <div aria-hidden className="absolute border-[#bebfc0] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <Accordion1 />
    </div>
  );
}

function Grid3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="grid">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#294269] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[28px]">Penalidades</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="help_outline">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Path">
            <path d={svgPaths.pe593d70} fill="var(--fill-0, #294269)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[4px] py-[2px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="error">
            <div className="absolute inset-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p3591700} fill="var(--fill-0, #E2A615)" id="Path" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Down">
            <div className="absolute inset-[36.46%_26.04%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4999 6.49989">
                <path d={svgPaths.p3c097840} fill="var(--fill-0, #294269)" id="Path" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AcordeonCuadernoPadre1() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="acordeon-cuaderno-padre">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <Grid3 />
          <div className="flex flex-row items-center self-stretch">
            <Container31 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Accordion2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
      <AcordeonCuadernoPadre1 />
    </div>
  );
}

function AccordionSlotArea1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion-Slot-Area">
      <div aria-hidden className="absolute border-0 border-[#bebfc0] border-solid inset-0 pointer-events-none" />
      <Accordion2 />
    </div>
  );
}

function SlotContent() {
  return (
    <div className="relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Slot-Content">
      <div aria-hidden className="absolute border-[#bebfc0] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Accordion />
        <AccordionSlotArea />
        <AccordionSlotArea1 />
      </div>
    </div>
  );
}

function Tabla() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[677px]" data-name="Tabla_2">
      <TitleColumn />
      <SlotContent />
    </div>
  );
}

function ColumnsArea() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Columns-Area">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[637px]" data-name="Lista_Items">
        <Body />
      </div>
      <Tabla />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="bg-[#bebfc0] h-px relative shrink-0 w-full" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <button className="bg-white cursor-pointer min-h-[36px] relative rounded-[4px] shrink-0" data-name="Buttons">
        <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] overflow-clip px-[12px] py-[6px] relative rounded-[inherit] size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow_back">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.p1d45ae00} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px]">Anterior</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </button>
      <div className="bg-[#d4ddec] content-stretch flex gap-[4px] items-center justify-center min-h-[36px] overflow-clip px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Buttons">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8a94a2] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[17px]">Siguiente</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow_forward">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Path">
              <path d={svgPaths.p19e96800} fill="var(--fill-0, #8A94A2)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonsArea() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Buttons-Area">
      <Frame26 />
      <Frame25 />
    </div>
  );
}

function CursorMouse() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Cursor / Mouse">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g filter="url(#filter0_d_2293_42193)" id="Cursor / Mouse">
          <path d={svgPaths.p3df4a470} fill="var(--fill-0, white)" id="arrow border" />
          <path clipRule="evenodd" d={svgPaths.p2eeb780} fill="var(--fill-0, black)" fillRule="evenodd" id="arrow" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="27.6" id="filter0_d_2293_42193" width="27.6" x="-1.8" y="-0.8">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.9" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2293_42193" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_2293_42193" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <CursorMouse />
    </div>
  );
}

function BodyContent() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start px-[24px] py-[44px] relative rounded-[8px] shrink-0 w-[1386px]" data-name="Body-Content">
      <Header />
      <div className="content-stretch flex h-[78px] items-start relative shrink-0 w-[1338px]" data-name="Step-h">
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
        <Frame34 />
        <Frame35 />
      </div>
      <div className="content-stretch flex h-[53px] items-center relative shrink-0 w-[1338px]" data-name="tabs-step-1">
        <TabsGroup />
      </div>
      <ColumnsArea />
      <ButtonsArea />
      <div className="absolute left-[724px] rounded-[25px] size-[24px] top-[571px]" data-name="Cursor / Mouse">
        <div className="absolute left-[-7px] mix-blend-soft-light size-[39px] top-[-7px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
            <g id="Ellipse 108" opacity="0.5" style={{ mixBlendMode: "soft-light" }}>
              <circle cx="19.5" cy="19.5" fill="var(--fill-0, #AECC6B)" r="19.5" />
            </g>
          </svg>
        </div>
        <Group />
      </div>
    </div>
  );
}

function ButtonsHead() {
  return (
    <div className="content-stretch flex h-[36px] items-start justify-between relative shrink-0 w-full" data-name="Buttons-Head">
      <div className="relative shrink-0 size-[36px]" data-name="Pin">
        <div className="absolute content-stretch flex inset-0 items-center justify-center overflow-clip p-[6px] rounded-[4px]" data-name="Buttons">
          <div className="relative shrink-0 size-[24px]" data-name="Icon">
            <div className="absolute left-[3px] size-[18px] top-[3px]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <path d={svgPaths.p1a67bc00} fill="var(--fill-0, #294269)" id="Path" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center min-h-[36px] min-w-[36px] overflow-clip p-[6px] relative rounded-[4px] shrink-0" data-name="Buttons">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
          <div className="absolute inset-[8.33%]" data-name="Path">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p3a9d7c80} fill="var(--fill-0, #294269)" id="Path" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <ButtonsHead />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 398 1">
            <line id="Line 226" stroke="var(--stroke-0, #BEBFC0)" x2="398" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InfoContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[8px] h-[17px] items-center leading-[0] min-w-px relative text-[12px] tracking-[0.24px] uppercase" data-name="Info Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">Nomenclatura</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center min-w-px relative text-[#26292e]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">---</p>
      </div>
    </div>
  );
}

function InfoContainer1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[8px] h-[17px] items-center leading-[0] min-w-px relative text-[12px] tracking-[0.24px] uppercase" data-name="Info Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] w-[90px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">Código</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center min-w-px relative text-[#26292e]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">REQ-2027-0012</p>
      </div>
    </div>
  );
}

function InfoContainer2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[8px] h-[17px] items-center leading-[0] min-w-px relative text-[12px] tracking-[0.24px] uppercase" data-name="Info Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] w-[90px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">Estado</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center min-w-px relative text-[#26292e]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Pendiente</p>
      </div>
    </div>
  );
}

function InfoContainer3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[8px] h-[17px] items-center leading-[0] min-w-px relative text-[12px] tracking-[0.24px] uppercase" data-name="Info Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] w-[90px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">Usuario</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center min-w-px relative text-[#26292e]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">87654321 - Victor Adolfo Caycho Garcia</p>
      </div>
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7d7f82] text-[12px] tracking-[0.24px] uppercase w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">Creación</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data-Summary">
        <InfoContainer3 />
      </div>
    </div>
  );
}

function InfoContainer4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[8px] h-[17px] items-center leading-[0] min-w-px relative text-[12px] tracking-[0.24px] uppercase" data-name="Info Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] w-[90px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">Usuario</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center min-w-px relative text-[#26292e]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">87654321 - Victor Adolfo Caycho Garcia</p>
      </div>
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7d7f82] text-[12px] tracking-[0.24px] uppercase w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">Última Modificación</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data-Summary">
        <InfoContainer4 />
      </div>
    </div>
  );
}

function InfoContainer5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[8px] h-[17px] items-center leading-[0] min-w-px relative text-[12px] tracking-[0.24px] uppercase" data-name="Info Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">N° de Contratación:</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center min-w-px relative text-[#26292e]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">---</p>
      </div>
    </div>
  );
}

function GeneralData() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="General-Data">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[12px] relative size-full">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data-Summary">
          <InfoContainer />
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data-Summary">
          <InfoContainer1 />
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data-Summary">
          <InfoContainer2 />
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data-Summary">
          <TextContainer7 />
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data-Summary">
          <TextContainer8 />
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data-Summary">
          <InfoContainer5 />
        </div>
      </div>
    </div>
  );
}

function SummaryGeneralData() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[398px]" data-name="Summary-GeneralData">
      <GeneralData />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] relative shrink-0 text-[14px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Formulación del requerimiento
      </p>
    </div>
  );
}

function Frame31() {
  return <div className="content-stretch flex h-[17px] items-center relative shrink-0 w-[35px]" />;
}

function Frame4() {
  return (
    <div className="bg-[#294269] h-[32px] mb-[-32px] relative rounded-[8px] shrink-0 w-full z-[2]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[4px] relative size-full">
          <Frame14 />
          <Frame31 />
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Arrow_menu">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron_up">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Path">
                  <path d={svgPaths.p19f173c0} fill="var(--fill-0, white)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] overflow-hidden relative shrink-0 text-[#294269] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Formulación del requerimiento
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#eaedf0] content-stretch flex h-[32px] items-center justify-center overflow-clip pl-[16px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[398px] z-[1]">
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] relative shrink-0 text-[14px] text-white w-[382px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Estrategia de la contratación
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#a8a9ab] h-[32px] mb-[-32px] relative rounded-[8px] shrink-0 w-0 z-[2]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] overflow-hidden relative shrink-0 text-[#a8a9ab] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Estrategia de la contratación
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#e9eaea] h-[32px] relative rounded-[8px] shrink-0 w-full z-[1]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[4px] relative size-full">
          <Frame17 />
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Arrow_menu">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Chevron_Down">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g id="Path">
                  <path d={svgPaths.p91a70} fill="var(--fill-0, #A8A9AB)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] relative shrink-0 text-[14px] text-white w-[382px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Designación de evaluadores
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#a8a9ab] h-[32px] mb-[-32px] relative rounded-[8px] shrink-0 w-0 z-[2]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] overflow-hidden relative shrink-0 text-[#a8a9ab] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Designación de evaluadores
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#e9eaea] h-[32px] relative rounded-[8px] shrink-0 w-full z-[1]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[4px] relative size-full">
          <Frame19 />
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Arrow_menu">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Chevron_Down">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g id="Path">
                  <path d={svgPaths.p91a70} fill="var(--fill-0, #A8A9AB)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] relative shrink-0 text-[14px] text-white w-[382px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Aprobación de expediente
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#a8a9ab] h-[32px] mb-[-32px] relative rounded-[8px] shrink-0 w-0 z-[2]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] overflow-hidden relative shrink-0 text-[#a8a9ab] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Aprobación de expediente
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#e9eaea] h-[32px] relative rounded-[8px] shrink-0 w-full z-[1]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[4px] relative size-full">
          <Frame21 />
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Arrow_menu">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Chevron_Down">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g id="Path">
                  <path d={svgPaths.p91a70} fill="var(--fill-0, #A8A9AB)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] relative shrink-0 text-[14px] text-white w-[382px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Elaboración de las bases
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#a8a9ab] h-[32px] mb-[-32px] relative rounded-[8px] shrink-0 w-0 z-[2]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] overflow-hidden relative shrink-0 text-[#a8a9ab] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Elaboración de las bases
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#e9eaea] h-[32px] relative rounded-[8px] shrink-0 w-full z-[1]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[4px] relative size-full">
          <Frame23 />
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Arrow_menu">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Chevron_Down">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g id="Path">
                  <path d={svgPaths.p91a70} fill="var(--fill-0, #A8A9AB)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[12px] relative shrink-0 w-full" data-name="summary-content">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="accordion">
        <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Progress Bar">
          <Frame4 />
          <Frame2 />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="accordion">
        <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Progress Bar">
          <Frame3 />
          <Frame5 />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[32px] items-start relative shrink-0 w-full" data-name="accordion">
        <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Progress Bar">
          <Frame6 />
          <Frame7 />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[32px] items-start relative shrink-0 w-full" data-name="accordion">
        <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Progress Bar">
          <Frame8 />
          <Frame9 />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[32px] items-start relative shrink-0 w-full" data-name="accordion">
        <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Progress Bar">
          <Frame10 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function StepsData() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Steps-Data">
      <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="summary-tittle">
        <div aria-hidden className="absolute border-[#294269] border-b border-solid inset-0 pointer-events-none" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#294269] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[19px]">Resumen</p>
        </div>
      </div>
      <SummaryContent />
    </div>
  );
}

function SummarySteps() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Summary-Steps">
      <StepsData />
    </div>
  );
}

function Body1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Body">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] px-[24px] relative size-full">
        <SummaryGeneralData />
        <SummarySteps />
      </div>
    </div>
  );
}

function AllContent() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[977px] items-start left-0 px-[32px] top-[212px] w-[1920px]" data-name="All-Content">
      <BodyContent />
      <div className="content-stretch flex flex-col items-start max-w-[446px] min-h-[900px] overflow-clip relative rounded-[12px] shrink-0 w-[446px]" data-name="Summary-Slot-Area">
        <div className="bg-white content-stretch flex flex-col gap-[16px] items-center p-[24px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[446px]" data-name="Sidebar">
          <Frame />
          <div className="content-stretch flex items-center py-px relative shrink-0 w-full" data-name="Title_body">
            <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[19px]">Datos del requerimiento</p>
            </div>
          </div>
        </div>
        <Body1 />
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="Contact Info">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-white tracking-[0.12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="text-[14px]">
          <span className="[word-break:break-word] font-['Roboto:Black',sans-serif] font-black leading-[17px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Central de consultas:
          </span>
          <span className="leading-[20px]">{` `}</span>
          <span className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[17px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            01 6143636
          </span>
        </p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-white tracking-[0.12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="text-[14px]">
          <span className="font-['Roboto:Black',sans-serif] font-black leading-[17px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sede central:
          </span>
          <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[17px]" style={{ fontVariationSettings: '"wdth" 100' }}>{` Av. Gregorio Escobedo cdra. 7 s/n Jesús María - Lima/Perú`}</span>
        </p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[17px] text-[14px] underline" style={{ fontVariationSettings: '"wdth" 100' }}>
          Formulario de contacto
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[36px] overflow-clip px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Buttons">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Callcenter">
          <div className="absolute inset-[12.16%_8.33%_12.17%_8.33%]" data-name="Path">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.1608">
              <path d={svgPaths.p30c57cc0} fill="var(--fill-0, white)" id="Path" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[17px]">Soporte</p>
        </div>
      </div>
    </div>
  );
}

function DateAndTime() {
  return (
    <div className="bg-[#515458] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Date and Time">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[12px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        25 de agosto, 2025
      </p>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-0">
          <div className="absolute inset-[-3.33%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 16">
              <path d="M0.5 0.5V15.5" id="Vector 189" stroke="var(--stroke-0, white)" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Roboto:Black',sans-serif] font-black leading-[15px] relative shrink-0 text-[12px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        22:09
      </p>
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="content-stretch flex gap-[16px] h-[34.059px] items-center relative shrink-0" data-name="Logo container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="content-stretch flex gap-[15.237px] h-[22.936px] items-center relative" data-name="OECE">
            <div className="flex h-full items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none h-full">
                <div className="aspect-[290.2388000488281/81.75357055664062] relative size-full" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81.4268 22.9361">
                    <g id="Vector">
                      <path d={svgPaths.p1b463a00} fill="var(--fill-0, white)" />
                      <path d={svgPaths.pf24dd00} fill="var(--fill-0, white)" />
                      <path d={svgPaths.p13df1c0} fill="var(--fill-0, white)" />
                      <path d={svgPaths.p1fa84ef0} fill="#E2A615" />
                      <path d={svgPaths.p22f5fa80} fill="var(--fill-0, white)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[17.926px] relative shrink-0 w-0" data-name="linea">
        <div className="absolute inset-[-2.5%_-0.45px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.89629 18.8221">
            <path d="M0.448145 0.448145V18.3739" id="linea" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="0.89629" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="BrandLockup">
        <div className="content-stretch flex gap-[8.963px] h-[22.936px] items-center relative shrink-0" data-name="SEACE">
          <div className="aspect-[264.9114074707031/64.83055114746094] h-full relative shrink-0" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93.7216 22.9361">
              <g id="Vector">
                <path d={svgPaths.p3ddfed80} fill="var(--fill-0, white)" />
                <path d={svgPaths.p23a5eb00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p1af48f00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p126dcc80} fill="var(--fill-0, white)" />
                <path d={svgPaths.p211cd200} fill="var(--fill-0, white)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuItemsContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Menu items container">
      <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[40px] p-[8px] relative shrink-0" data-name="Header_menu_body">
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] overflow-hidden relative shrink-0 text-[14px] text-center text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Actos preparatorios
        </p>
      </div>
      <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[40px] p-[8px] relative shrink-0" data-name="Header_menu_body">
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium h-[16px] leading-[17px] overflow-hidden relative shrink-0 text-[14px] text-center text-ellipsis text-white w-[83px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Selección
        </p>
      </div>
      <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[40px] p-[8px] relative shrink-0" data-name="Header_menu_body">
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] overflow-hidden relative shrink-0 text-[14px] text-center text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Perfeccionamiento
        </p>
      </div>
      <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[40px] p-[8px] relative shrink-0" data-name="Header_menu_body">
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] overflow-hidden relative shrink-0 text-[14px] text-center text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Ejecución contractual
        </p>
      </div>
    </div>
  );
}

function MenuContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Menu container">
      <LogoContainer />
      <MenuItemsContainer />
    </div>
  );
}

function TimerContainer() {
  return (
    <div className="bg-[#294269] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[16px] shrink-0" data-name="Timer container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">15m 33s</p>
      </div>
    </div>
  );
}

function SessionTextContainer() {
  return (
    <div className="h-[28px] relative rounded-[24px] shrink-0 w-full" data-name="Session text container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[8px] pr-[4px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[15px] mr-[-7px] relative shrink-0 text-[#294269] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Cierre de sesión
          </p>
          <TimerContainer />
        </div>
      </div>
    </div>
  );
}

function TimerContainer1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[16px] shrink-0" data-name="Timer container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">15m 33s</p>
      </div>
    </div>
  );
}

function SessionTextContainer1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center pl-[8px] pr-[4px] py-[4px] relative rounded-[24px] shrink-0" data-name="Session text container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[12px] text-white w-[90.629px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Su sesión expira
      </p>
      <TimerContainer1 />
    </div>
  );
}

function SessionInfoContainer1() {
  return (
    <div className="absolute bg-[#546887] content-stretch flex flex-col h-[28px] items-start justify-center left-0 overflow-clip rounded-[24px] top-0 w-[101px]" data-name="Session info container">
      <SessionTextContainer1 />
    </div>
  );
}

function SessionInfoContainer() {
  return (
    <div className="bg-[#e8f2f7] content-stretch flex flex-col gap-[10px] items-start justify-center relative rounded-[24px] shrink-0 w-[169px]" data-name="Session info container">
      <SessionTextContainer />
      <SessionInfoContainer1 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-[#e2a615] content-stretch flex flex-col inset-[-12.5%_-12.5%_54.17%_54.17%] items-center justify-center rounded-[7px]">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px relative text-[#294269] text-[8px] text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">15</p>
      </div>
    </div>
  );
}

function NotificationIconContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0" data-name="Notification icon container">
      <div className="relative shrink-0 size-[24px]" data-name="Notification-bell">
        <div className="absolute inset-[8.33%_14.43%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.074 20">
            <g id="Path">
              <path clipRule="evenodd" d={svgPaths.p261e8580} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2171ea72} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p12e2bc00} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p21a12c00} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
        <Frame24 />
      </div>
    </div>
  );
}

function Badges() {
  return <div className="absolute contents left-0 top-0" data-name="Badges" />;
}

function UserDetailsContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center leading-[15px] relative shrink-0 text-white whitespace-nowrap" data-name="User details container">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        De la Piedra , Juan
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Centro Vacacional Huamp...
      </p>
    </div>
  );
}

function UserProfileContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end pl-[8px] pr-[2px] py-[4px] relative rounded-[8px] shrink-0" data-name="User profile container">
      <div className="bg-white relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[20px] size-[24px] text-[#294269] text-[14px] text-center top-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[17px]">JP</p>
        </div>
        <Badges />
      </div>
      <UserDetailsContainer />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Dropdown icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Path">
            <path d={svgPaths.pdde3a00} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function UserInfoContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="User info container">
      <SessionInfoContainer />
      <NotificationIconContainer />
      <UserProfileContainer />
    </div>
  );
}

function MenuContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Menu container">
      <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[40px] p-[8px] relative shrink-0" data-name="Header_menu_body">
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] overflow-hidden relative shrink-0 text-[#294269] text-[14px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Evaluación de la Segmentación
        </p>
      </div>
      <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[40px] p-[8px] relative shrink-0" data-name="Header_menu_body">
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] overflow-hidden relative shrink-0 text-[#294269] text-[14px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Anuncio de la Contratación Futura
        </p>
      </div>
      <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[40px] p-[8px] relative shrink-0" data-name="Header_menu_body">
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[17px] overflow-hidden relative shrink-0 text-[#294269] text-[14px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Gestión de Asignaciones
        </p>
      </div>
      <div className="bg-[#e6f6fa] content-stretch flex gap-[2px] items-center justify-center min-h-[40px] p-[8px] relative rounded-[6px] shrink-0" data-name="Header_menu_body">
        <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] overflow-hidden relative shrink-0 text-[#294269] text-[14px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Gestión de Requerimientos
        </p>
      </div>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-name="Header container">
      <MenuContainer1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="bg-[#294269] h-[64px] relative shrink-0 w-full" data-name="Header">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[32px] py-[13px] relative size-full">
            <MenuContainer />
            <UserInfoContainer />
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_4px_4px_rgba(24,39,75,0.15),0px_1px_1.5px_rgba(24,39,75,0.3)] flex h-[55px] items-center justify-center px-[32px] relative shrink-0 w-[1920px]" data-name="Submenu">
        <HeaderContainer />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1920px] z-[2]">
      <Frame12 />
    </div>
  );
}

function BreadcrumbItemsCore1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="_Breadcrumb items core">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Home">
        <div className="absolute inset-[17.71%_13.54%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4995 15.4996">
            <path d={svgPaths.p13082840} fill="var(--fill-0, #294269)" id="Path" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="labels-breadcrumbs">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Arrow">
          <div className="absolute flex inset-[26.04%_36.46%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
              <div className="relative size-full" data-name="Path">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4999 6.49989">
                  <path d={svgPaths.p3c097840} fill="var(--fill-0, #294269)" id="Path" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3c3e43] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[15px]">Gestión de Requerimientos</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="labels-breadcrumbs">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Arrow">
          <div className="absolute flex inset-[26.04%_36.46%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
              <div className="relative size-full" data-name="Path">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4999 6.49989">
                  <path d={svgPaths.p3c097840} fill="var(--fill-0, #294269)" id="Path" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#294269] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[15px]">Nuevo Requerimiento</p>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return <div className="content-stretch flex gap-[16px] h-[36px] items-center justify-end relative shrink-0 w-[144px]" data-name="Container" />;
}

function Header1() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-0 top-0" data-name="header">
      <Frame13 />
      <div className="bg-[#f4f8fb] min-h-[44px] relative shrink-0 w-full z-[1]" data-name="breadcrumbs">
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[32px] py-[24px] relative size-full">
            <BreadcrumbItemsCore1 />
            <Container32 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RegistroRequerimiento() {
  return (
    <div className="bg-[#f4f8fb] relative size-full" data-name="RegistroRequerimiento-01">
      <div className="absolute bg-[#f4f8fb] content-stretch flex items-center justify-between left-0 min-h-[44px] pl-[50px] pr-[32px] py-[4px] top-[144px] w-[1920px]" data-name="breadcrumbs">
        <BreadcrumbItemsCore />
        <Frame33 />
      </div>
      <AllContent />
      <div className="absolute bg-[#26292e] content-stretch flex gap-[80px] h-[57px] items-center left-0 px-[32px] py-[13px] top-[1387px] w-[1920px]" data-name="Footer">
        <ContactInfo />
        <DateAndTime />
      </div>
      <Header1 />
    </div>
  );
}