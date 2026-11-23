import svgPaths from "./svg-ifn45wxlqj";

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
      <div className="content-stretch flex h-[22.936px] items-start relative shrink-0 w-[93.722px]" data-name="BrandLockup">
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

function MenuContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Menu container">
      <LogoContainer />
    </div>
  );
}

function MenuHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[4]" data-name="Menu-Header">
      <div className="bg-[#294269] h-[64px] relative shrink-0 w-full" data-name="Header">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[32px] py-[13px] relative size-full">
            <MenuContainer />
            <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[36px] overflow-clip px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Buttons">
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="User/account_circle">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <g id="Path">
                    <path d={svgPaths.p1a4b9600} fill="var(--fill-0, #294269)" />
                  </g>
                </svg>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[17px]">Iniciar sesión</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[32px]">Buscador de anuncios de contrataciones futuras</p>
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

function Container() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#7d7f82] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        N° de documento
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#26292e] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        20490355864
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#e9f7f7] content-stretch flex gap-[8px] items-start justify-end px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[169px]">
      <div aria-hidden className="absolute border border-[#8fd9d5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame5 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Symbol/close">
        <div className="-translate-y-1/2 absolute aspect-[11.400001525878906/11.400001525878906] left-[26.25%] right-[26.25%] top-1/2" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4 11.4">
            <path d={svgPaths.p26f90800} fill="var(--fill-0, #2CB2A9)" id="Path" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[15px] overflow-hidden relative shrink-0 text-[#7d7f82] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Nombre/Razón o Denominación Social
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#26292e] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Inmobiliaria Las Torres SAC
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#e9f7f7] content-stretch flex gap-[8px] items-start justify-end px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[251px]">
      <div aria-hidden className="absolute border border-[#8fd9d5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame9 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Symbol/close">
        <div className="-translate-y-1/2 absolute aspect-[11.400001525878906/11.400001525878906] left-[26.25%] right-[26.25%] top-1/2" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4 11.4">
            <path d={svgPaths.p26f90800} fill="var(--fill-0, #2CB2A9)" id="Path" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#7d7f82] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        N° de documento
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[17px] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Juzgado Penal Colegiado Supraprovincial - Sede Central de la Corte Superior de Justicia de Piura
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#e9f7f7] content-stretch flex gap-[8px] items-start justify-end max-w-[300px] px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[300px]">
      <div aria-hidden className="absolute border border-[#8fd9d5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame11 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Symbol/close">
        <div className="-translate-y-1/2 absolute aspect-[11.400001525878906/11.400001525878906] left-[26.25%] right-[26.25%] top-1/2" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4 11.4">
            <path d={svgPaths.p26f90800} fill="var(--fill-0, #2CB2A9)" id="Path" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame4 />
      <Frame6 />
      <Frame10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame8 />
      <button className="bg-white cursor-pointer min-h-[36px] relative rounded-[4px] shrink-0" data-name="Buttons">
        <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] overflow-clip pl-[12px] pr-[16px] py-[6px] relative rounded-[inherit] size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="System/Clean_brush">
            <div className="absolute inset-[8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0002 20.0001">
                <g id="Path">
                  <path clipRule="evenodd" d={svgPaths.pbb20200} fill="var(--fill-0, #294269)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p39d051f0} fill="var(--fill-0, #294269)" fillRule="evenodd" />
                  <path d={svgPaths.p34471280} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px]">Limpiar filtro</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </button>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#e9eaea] max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0 size-[28px]" data-name="Buttons">
      <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="Path">
              <path d={svgPaths.p24a7de00} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#294269] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
    </div>
  );
}

function CardTableSwitch() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Card/table switch">
      <div className="bg-[#294269] max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="Buttons">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="View/table_chart">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Path">
                <path d={svgPaths.pac966f0} fill="var(--fill-0, white)" />
              </g>
            </svg>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#294269] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      </div>
      <a className="bg-[#e9eaea] cursor-pointer max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative shrink-0" data-name="Buttons">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Card_id">
            <div className="absolute inset-[12.5%_4.17%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12">
                <g id="Path">
                  <path d={svgPaths.p15e69ac0} fill="var(--fill-0, #294269)" />
                  <path d={svgPaths.p3ac61f00} fill="var(--fill-0, #294269)" />
                  <path d={svgPaths.p2bb25100} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#294269] border-b border-solid border-t inset-0 pointer-events-none" />
      </a>
      <Buttons />
    </div>
  );
}

function InputContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-w-px relative" data-name="Input container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[28px]">Resultados de búsqueda</p>
      </div>
      <div className="h-[36px] relative shrink-0 w-0">
        <div className="absolute inset-[-1.39%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 37">
            <path d="M0.5 0.5V36.5" id="Vector 189" stroke="var(--stroke-0, #BEBFC0)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="bg-white min-h-[36px] min-w-[36px] relative rounded-[4px] shrink-0" data-name="Buttons">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Property 1=Default">
            <div className="absolute inset-[16.67%_12.5%_16.67%_16.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
                <path d={svgPaths.pd827000} fill="var(--fill-0, #294269)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <CardTableSwitch />
    </div>
  );
}

function InputContainer1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="System/search">
            <div className="absolute inset-[13.54%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5001">
                <path d={svgPaths.pcb6fe00} fill="var(--fill-0, #546887)" id="Path" />
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Búsqueda interna</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Container4 />
    </div>
  );
}

function SearchInputContainer() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="Search input container">
      <div className="content-stretch flex gap-[8px] items-start max-h-[61px] relative shrink-0 w-[224px]" data-name="Text inputs">
        <Frame />
      </div>
    </div>
  );
}

function FileIcon() {
  return (
    <div className="absolute inset-[8.33%_8.98%_8.33%_12.5%]" data-name="File Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.8437 20">
        <g id="File Icon">
          <path d={svgPaths.p381d5100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3c9c6080} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p72cbe80} fill="var(--fill-0, #979797)" id="Vector_3" />
          <path d={svgPaths.p31703280} fill="var(--fill-0, #BF0909)" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p2dde3100} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p1daba900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p26911e80} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0" data-name="Button container">
      <div className="bg-white min-h-[36px] min-w-[36px] relative rounded-[4px] shrink-0" data-name="Buttons">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Color-icons/PDF">
            <FileIcon />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute inset-[8.33%_8.98%_8.33%_12.5%]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.844 20">
        <g id="Container">
          <path d={svgPaths.p140b6c80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p25c27400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p19a10600} fill="var(--fill-0, #979797)" id="Vector_3" />
          <path d={svgPaths.p170c9200} fill="var(--fill-0, #1B9D6B)" id="Vector_4" />
          <g id="xlsx">
            <path d={svgPaths.p2e87b520} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p37fde2f0} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p3105aef1} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p25d6900} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="content-stretch flex items-center px-[8px] relative shrink-0" data-name="Button container">
      <div className="bg-white min-h-[36px] min-w-[36px] relative rounded-[4px] shrink-0" data-name="Buttons">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Color-icons/Excel">
            <Container5 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="Button container">
      <button className="bg-white cursor-pointer min-h-[36px] relative rounded-[4px] shrink-0" data-name="Buttons">
        <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] overflow-clip px-[12px] py-[6px] relative rounded-[inherit] size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Documents/file_export">
            <div className="-translate-x-1/2 absolute aspect-[18/17.5] bottom-[8.33%] left-1/2 top-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path clipRule="evenodd" d={svgPaths.p2ccb2800} fill="var(--fill-0, #294269)" fillRule="evenodd" />
                  <path d={svgPaths.p12f1e180} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px]">Exportar avanzado</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </button>
    </div>
  );
}

function SearchContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Search container">
      <SearchInputContainer />
      <ButtonContainer />
      <ButtonContainer1 />
      <ButtonContainer2 />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Header Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        Entidad
      </p>
    </div>
  );
}

function HeaderContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Header Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        Fecha de publicación
      </p>
    </div>
  );
}

function HeaderContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Header Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tipo de Procedimiento
      </p>
    </div>
  );
}

function HeaderContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Header Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        Objeto de Contratación
      </p>
    </div>
  );
}

function HeaderContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Header Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        Descripción preliminar del requerimiento
      </p>
    </div>
  );
}

function HeaderContainer5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Header Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        Fecha aproximada de la convocatoria
      </p>
    </div>
  );
}

function SlotColumns() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[49px] items-start min-w-px relative" data-name="Slot-Columns">
      <div className="bg-[#e8f2f7] flex-[1_0_0] min-w-px relative self-stretch" data-name="HeaderCell-Table">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
            <HeaderContainer />
            <div className="relative shrink-0 size-[24px]" data-name="Double tip_table">
              <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Icon Neutral Direction">
                <div className="absolute bottom-1/4 left-[33.33%] right-[37.5%] top-1/4" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                    <g id="Path">
                      <path d={svgPaths.p9668000} fill="var(--fill-0, #294269)" />
                      <path d={svgPaths.p336cc400} fill="var(--fill-0, #294269)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e8f2f7] relative self-stretch shrink-0 w-[140px]" data-name="HeaderCell-Table">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
            <HeaderContainer1 />
            <div className="relative shrink-0 size-[24px]" data-name="Double tip_table">
              <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Icon Neutral Direction">
                <div className="absolute bottom-1/4 left-[33.33%] right-[37.5%] top-1/4" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                    <g id="Path">
                      <path d={svgPaths.p9668000} fill="var(--fill-0, #294269)" />
                      <path d={svgPaths.p336cc400} fill="var(--fill-0, #294269)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e8f2f7] relative self-stretch shrink-0 w-[200px]" data-name="HeaderCell-Table">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
            <HeaderContainer2 />
            <div className="relative shrink-0 size-[24px]" data-name="Double tip_table">
              <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Icon Neutral Direction">
                <div className="absolute bottom-1/4 left-[33.33%] right-[37.5%] top-1/4" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                    <g id="Path">
                      <path d={svgPaths.p9668000} fill="var(--fill-0, #294269)" />
                      <path d={svgPaths.p336cc400} fill="var(--fill-0, #294269)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e8f2f7] relative self-stretch shrink-0 w-[145px]" data-name="HeaderCell-Table">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
            <HeaderContainer3 />
            <div className="relative shrink-0 size-[24px]" data-name="Double tip_table">
              <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Icon Neutral Direction">
                <div className="absolute bottom-1/4 left-[33.33%] right-[37.5%] top-1/4" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                    <g id="Path">
                      <path d={svgPaths.p9668000} fill="var(--fill-0, #294269)" />
                      <path d={svgPaths.p336cc400} fill="var(--fill-0, #294269)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e8f2f7] flex-[1_0_0] min-w-px relative self-stretch" data-name="HeaderCell-Table">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
            <HeaderContainer4 />
            <div className="relative shrink-0 size-[24px]" data-name="Double tip_table">
              <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Icon Neutral Direction">
                <div className="absolute bottom-1/4 left-[33.33%] right-[37.5%] top-1/4" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                    <g id="Path">
                      <path d={svgPaths.p9668000} fill="var(--fill-0, #294269)" />
                      <path d={svgPaths.p336cc400} fill="var(--fill-0, #294269)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e8f2f7] relative self-stretch shrink-0 w-[180px]" data-name="HeaderCell-Table">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
            <HeaderContainer5 />
            <div className="relative shrink-0 size-[24px]" data-name="Double tip_table">
              <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Icon Neutral Direction">
                <div className="absolute bottom-1/4 left-[33.33%] right-[37.5%] top-1/4" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                    <g id="Path">
                      <path d={svgPaths.p9668000} fill="var(--fill-0, #294269)" />
                      <path d={svgPaths.p336cc400} fill="var(--fill-0, #294269)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContainer6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Header Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        Acciones
      </p>
    </div>
  );
}

function TableBody1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[56px] min-w-[50px] relative" data-name="Table body">
      <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[14px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-full justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px]">01</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[16px] relative shrink-0 w-[24px]" data-name="Prefix">
        <div className="-translate-x-1/2 absolute aspect-[25/10] bottom-[20.31%] left-1/2 top-[20.31%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.75 9.5">
            <g id="Vector">
              <path d={svgPaths.p2eb7bf80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3c4aea80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3ec4b500} fill="var(--fill-0, #3F5578)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">12345678910</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-name="Container">
      <Frame17 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">MUNICIPALIDAD DISTRITAL DE CORTEGANA</p>
      </div>
    </div>
  );
}

function DateContainer1() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">24</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">12</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2025</p>
      </div>
    </div>
  );
}

function DateContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer1 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px] overflow-hidden text-ellipsis">08:20:02 PM</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">bien</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">ADQUISICION DE HOJUELAS PRECOCIDAS DE AVENA, QUINUA, KIWICHA, MACA, SOYA, LECHE ENTERA EN POLVO Y AZUCAR FORTIFICADA CON VITAMINAS Y MINERALES PARA LA MUNICIPALIDAD DISTRITAL DE CORTEGANA, AÑO FISCAL 2026</p>
      </div>
    </div>
  );
}

function DateContainer3() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">17</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">12</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2026</p>
      </div>
    </div>
  );
}

function DateContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer3 />
    </div>
  );
}

function TableBody2() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[56px] min-w-[50px] relative" data-name="Table body">
      <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[14px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-full justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px]">02</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[16px] relative shrink-0 w-[24px]" data-name="Prefix">
        <div className="-translate-x-1/2 absolute aspect-[25/10] bottom-[20.31%] left-1/2 top-[20.31%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.75 9.5">
            <g id="Vector">
              <path d={svgPaths.p2eb7bf80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3c4aea80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3ec4b500} fill="var(--fill-0, #3F5578)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">12345678910</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-name="Container">
      <Frame18 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">MUNICIPALIDAD DISTRITAL DE CORTEGANA</p>
      </div>
    </div>
  );
}

function DateContainer5() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">14</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">10</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2025</p>
      </div>
    </div>
  );
}

function DateContainer4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer5 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px] overflow-hidden text-ellipsis">08:20:02 PM</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">bien</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">ADQUISICIÓN DE EQUIPOS DE PROTECCIÓN PERSONAL TÉCNICO Y ADMINISTRATIVO DE ELECTRO ORIENTE S.A. DOTACIÓN 2024-2025</p>
      </div>
    </div>
  );
}

function DateContainer7() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">17</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">12</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2026</p>
      </div>
    </div>
  );
}

function DateContainer6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer7 />
    </div>
  );
}

function TableBody3() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[56px] min-w-[50px] relative" data-name="Table body">
      <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[14px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-full justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px]">03</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[16px] relative shrink-0 w-[24px]" data-name="Prefix">
        <div className="-translate-x-1/2 absolute aspect-[25/10] bottom-[20.31%] left-1/2 top-[20.31%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.75 9.5">
            <g id="Vector">
              <path d={svgPaths.p2eb7bf80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3c4aea80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3ec4b500} fill="var(--fill-0, #3F5578)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">12345678910</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-name="Container">
      <Frame19 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">MUNICIPALIDAD DISTRITAL DE CORTEGANA</p>
      </div>
    </div>
  );
}

function DateContainer9() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">14</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">10</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2025</p>
      </div>
    </div>
  );
}

function DateContainer8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer9 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px] overflow-hidden text-ellipsis">08:20:02 PM</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">bien</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">ADQUISICIÓN, EQUIPAMIENTO, MONTAJE, PRUEBAS Y PUESTA EN SERVICIO PARA AMPLIACION DE REDES SECUNDARIAS NO SUSTANCIALES DE LA CIUDAD DE CHACHAPOYAS, DEL DISTRITO Y PROVINCIA DE CHACHAPOYAS - DEPARTAMENTO DE AMAZONAS</p>
      </div>
    </div>
  );
}

function DateContainer11() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">17</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">12</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2026</p>
      </div>
    </div>
  );
}

function DateContainer10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer11 />
    </div>
  );
}

function TableBody4() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[56px] min-w-[50px] relative" data-name="Table body">
      <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[14px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-full justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px]">04</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[16px] relative shrink-0 w-[24px]" data-name="Prefix">
        <div className="-translate-x-1/2 absolute aspect-[25/10] bottom-[20.31%] left-1/2 top-[20.31%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.75 9.5">
            <g id="Vector">
              <path d={svgPaths.p2eb7bf80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3c4aea80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3ec4b500} fill="var(--fill-0, #3F5578)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">12345678910</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-name="Container">
      <Frame20 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">MUNICIPALIDAD DISTRITAL DE CORTEGANA</p>
      </div>
    </div>
  );
}

function DateContainer13() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">14</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">10</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2025</p>
      </div>
    </div>
  );
}

function DateContainer12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer13 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px] overflow-hidden text-ellipsis">08:20:02 PM</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">bien</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">ADQUISICIÓN DE FERRETERÍA DE MEDIA Y BAJA TENSIÓN, PARA EL DEPARTAMENTO DE DISTRIBUCIÓN DE LA GERENCIA REGIONAL AMAZONAS-CAJAMARCA DE ELECTRO ORIENTE S.A.</p>
      </div>
    </div>
  );
}

function DateContainer15() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">17</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">12</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2026</p>
      </div>
    </div>
  );
}

function DateContainer14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer15 />
    </div>
  );
}

function TableBody5() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[56px] min-w-[50px] relative" data-name="Table body">
      <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[14px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-full justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px]">05</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[16px] relative shrink-0 w-[24px]" data-name="Prefix">
        <div className="-translate-x-1/2 absolute aspect-[25/10] bottom-[20.31%] left-1/2 top-[20.31%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.75 9.5">
            <g id="Vector">
              <path d={svgPaths.p2eb7bf80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3c4aea80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3ec4b500} fill="var(--fill-0, #3F5578)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">12345678910</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-name="Container">
      <Frame21 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">MUNICIPALIDAD DISTRITAL DE CORTEGANA</p>
      </div>
    </div>
  );
}

function DateContainer17() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">14</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">10</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2025</p>
      </div>
    </div>
  );
}

function DateContainer16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer17 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px] overflow-hidden text-ellipsis">08:20:02 PM</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">bien</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">ADQUISICIÓN DE EQUIPOS DE PROTECCIÓN, CONTROL Y ELEMENTOS DE CONEXIONADO DE ALUMBRADO PÚBLICO; PARA EL DEPARTAMENTO DE DISTRIBUCIÓN DE LA GERENCIA REGIONAL AMAZONAS ¿ CAJAMARCA DE ELECTRO ORIENTE S.A.</p>
      </div>
    </div>
  );
}

function DateContainer19() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">17</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">12</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2026</p>
      </div>
    </div>
  );
}

function DateContainer18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer19 />
    </div>
  );
}

function TableBody6() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[56px] min-w-[50px] relative" data-name="Table body">
      <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[14px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-full justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px]">06</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[16px] relative shrink-0 w-[24px]" data-name="Prefix">
        <div className="-translate-x-1/2 absolute aspect-[25/10] bottom-[20.31%] left-1/2 top-[20.31%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.75 9.5">
            <g id="Vector">
              <path d={svgPaths.p2eb7bf80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3c4aea80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3ec4b500} fill="var(--fill-0, #3F5578)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">12345678910</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-name="Container">
      <Frame22 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">MUNICIPALIDAD DISTRITAL DE CORTEGANA</p>
      </div>
    </div>
  );
}

function DateContainer21() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">14</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">10</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2025</p>
      </div>
    </div>
  );
}

function DateContainer20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer21 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px] overflow-hidden text-ellipsis">08:20:02 PM</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">bien</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">{`	ADQUISICIÓN DE (03) TOTEM PARA LA ZONA REGISTRAL N° VI`}</p>
      </div>
    </div>
  );
}

function DateContainer23() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">17</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">12</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2026</p>
      </div>
    </div>
  );
}

function DateContainer22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer23 />
    </div>
  );
}

function TableBody7() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[56px] min-w-[50px] relative" data-name="Table body">
      <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[14px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-full justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px]">07</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[16px] relative shrink-0 w-[24px]" data-name="Prefix">
        <div className="-translate-x-1/2 absolute aspect-[25/10] bottom-[20.31%] left-1/2 top-[20.31%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.75 9.5">
            <g id="Vector">
              <path d={svgPaths.p2eb7bf80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3c4aea80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3ec4b500} fill="var(--fill-0, #3F5578)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">12345678910</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-name="Container">
      <Frame23 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">MUNICIPALIDAD DISTRITAL DE CORTEGANA</p>
      </div>
    </div>
  );
}

function DateContainer25() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">14</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">10</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2025</p>
      </div>
    </div>
  );
}

function DateContainer24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer25 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px] overflow-hidden text-ellipsis">08:20:02 PM</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">bien</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">ADQUISICIÓN DE GRUPO ELECTRÓGENO DE 0.500 MW EN GENERACIÓN CONTINUA PARA EL SERVICIO ELÉCTRICO DE MAYORUNA</p>
      </div>
    </div>
  );
}

function DateContainer27() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">17</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">12</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2026</p>
      </div>
    </div>
  );
}

function DateContainer26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer27 />
    </div>
  );
}

function TableBody8() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[56px] min-w-[50px] relative" data-name="Table body">
      <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[14px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-full justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px]">08</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[16px] relative shrink-0 w-[24px]" data-name="Prefix">
        <div className="-translate-x-1/2 absolute aspect-[25/10] bottom-[20.31%] left-1/2 top-[20.31%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.75 9.5">
            <g id="Vector">
              <path d={svgPaths.p2eb7bf80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3c4aea80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3ec4b500} fill="var(--fill-0, #3F5578)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">12345678910</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-name="Container">
      <Frame24 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">MUNICIPALIDAD DISTRITAL DE CORTEGANA</p>
      </div>
    </div>
  );
}

function DateContainer29() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">14</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">10</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2025</p>
      </div>
    </div>
  );
}

function DateContainer28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer29 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px] overflow-hidden text-ellipsis">08:20:02 PM</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">bien</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">ADQUISICIÓN DE GRUPO ELECTRÓGENO DE 1 MW EN GENERACIÓN CONTINUA PARA EL SERVICIO ELÉCTRICO DE CABALLOCOCHA</p>
      </div>
    </div>
  );
}

function DateContainer31() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">17</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">12</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2026</p>
      </div>
    </div>
  );
}

function DateContainer30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer31 />
    </div>
  );
}

function TableBody9() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[56px] min-w-[50px] relative" data-name="Table body">
      <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[14px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-full justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px]">09</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[16px] relative shrink-0 w-[24px]" data-name="Prefix">
        <div className="-translate-x-1/2 absolute aspect-[25/10] bottom-[20.31%] left-1/2 top-[20.31%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.75 9.5">
            <g id="Vector">
              <path d={svgPaths.p2eb7bf80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3c4aea80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3ec4b500} fill="var(--fill-0, #3F5578)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">12345678910</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-name="Container">
      <Frame25 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">MUNICIPALIDAD DISTRITAL DE CORTEGANA</p>
      </div>
    </div>
  );
}

function DateContainer33() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">14</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">10</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2025</p>
      </div>
    </div>
  );
}

function DateContainer32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer33 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px] overflow-hidden text-ellipsis">08:20:02 PM</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">bien</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">ADQUISICIÓN DE POSTES DE CONCRETO ARMADO CENTRIFUGADO PARA LA SUBSANACIÓN DE DEFICIENCIAS EN LAS REDES ELÉCTRICAS POR PROCEDIMIENTO N°228-2009-OS/CD; PARA EL DEPARTAMENTO DE DISTRIBUCIÓN DE LA GERENCIA REGIONAL AMAZONAS ¿ CAJAMARCA DE ELECTRO ORIENTE S.A</p>
      </div>
    </div>
  );
}

function DateContainer35() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">17</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">12</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2026</p>
      </div>
    </div>
  );
}

function DateContainer34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer35 />
    </div>
  );
}

function TableBody10() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[56px] min-w-[50px] relative" data-name="Table body">
      <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] px-[8px] py-[14px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-full justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[17px]">10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[16px] relative shrink-0 w-[24px]" data-name="Prefix">
        <div className="-translate-x-1/2 absolute aspect-[25/10] bottom-[20.31%] left-1/2 top-[20.31%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.75 9.5">
            <g id="Vector">
              <path d={svgPaths.p2eb7bf80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3c4aea80} fill="var(--fill-0, #3F5578)" />
              <path d={svgPaths.p3ec4b500} fill="var(--fill-0, #3F5578)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">12345678910</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-name="Container">
      <Frame26 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">MUNICIPALIDAD DISTRITAL DE CORTEGANA</p>
      </div>
    </div>
  );
}

function DateContainer37() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">14</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">10</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2025</p>
      </div>
    </div>
  );
}

function DateContainer36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer37 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px] overflow-hidden text-ellipsis">08:20:02 PM</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">bien</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">ADQUISICIÓN DE UNIFORMES (2026) PARA EL PERSONAL DL 728 DE LA ZONA REGISTRAL N° VI</p>
      </div>
    </div>
  );
}

function DateContainer39() {
  return (
    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">17</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">12</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">2026</p>
      </div>
    </div>
  );
}

function DateContainer38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
      <DateContainer39 />
    </div>
  );
}

function SlotRows() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Slot-Rows">
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tabla-ACF">
        <div className="bg-[#e8f2f7] content-stretch flex items-center min-w-[56px] relative shrink-0 size-[56px]" data-name="BodyCell-Table">
          <TableBody1 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
              <Container6 />
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[140px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <DateContainer />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[200px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container7 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[145px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container8 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
              <Container9 />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-white h-full relative shrink-0 w-[180px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <DateContainer2 />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] items-center min-h-[56px] min-w-[120px] px-[16px] py-[14px] relative shrink-0 w-[180px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-l border-solid inset-0 pointer-events-none" />
          <div className="bg-white max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Buttons">
            <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="eye">
                <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                    <path d={svgPaths.pea533b0} fill="var(--fill-0, #294269)" id="Path" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tabla-ACF">
        <div className="bg-[#e8f2f7] content-stretch flex items-center min-w-[56px] relative shrink-0 size-[56px]" data-name="BodyCell-Table">
          <TableBody2 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
              <Container10 />
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[140px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <DateContainer4 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[200px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container11 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[145px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container12 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
              <Container13 />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-white h-full relative shrink-0 w-[180px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <DateContainer6 />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] items-center min-h-[56px] min-w-[120px] px-[16px] py-[14px] relative shrink-0 w-[180px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-l border-solid inset-0 pointer-events-none" />
          <div className="bg-white max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Buttons">
            <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="eye">
                <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                    <path d={svgPaths.pea533b0} fill="var(--fill-0, #294269)" id="Path" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tabla-ACF">
        <div className="bg-[#e8f2f7] content-stretch flex items-center min-w-[56px] relative shrink-0 size-[56px]" data-name="BodyCell-Table">
          <TableBody3 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
              <Container14 />
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[140px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <DateContainer8 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[200px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container15 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[145px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container16 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
              <Container17 />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-white h-full relative shrink-0 w-[180px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <DateContainer10 />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] items-center min-h-[56px] min-w-[120px] px-[16px] py-[14px] relative shrink-0 w-[180px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-l border-solid inset-0 pointer-events-none" />
          <div className="bg-white max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Buttons">
            <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="eye">
                <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                    <path d={svgPaths.pea533b0} fill="var(--fill-0, #294269)" id="Path" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tabla-ACF">
        <div className="bg-[#e8f2f7] content-stretch flex items-center min-w-[56px] relative shrink-0 size-[56px]" data-name="BodyCell-Table">
          <TableBody4 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
              <Container18 />
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[140px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <DateContainer12 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[200px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container19 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[145px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container20 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
              <Container21 />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-white h-full relative shrink-0 w-[180px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <DateContainer14 />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] items-center min-h-[56px] min-w-[120px] px-[16px] py-[14px] relative shrink-0 w-[180px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-l border-solid inset-0 pointer-events-none" />
          <div className="bg-white max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Buttons">
            <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="eye">
                <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                    <path d={svgPaths.pea533b0} fill="var(--fill-0, #294269)" id="Path" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tabla-ACF">
        <div className="bg-[#e8f2f7] content-stretch flex items-center min-w-[56px] relative shrink-0 size-[56px]" data-name="BodyCell-Table">
          <TableBody5 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
              <Container22 />
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[140px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <DateContainer16 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[200px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container23 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[145px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container24 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
              <Container25 />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-white h-full relative shrink-0 w-[180px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <DateContainer18 />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] items-center min-h-[56px] min-w-[120px] px-[16px] py-[14px] relative shrink-0 w-[180px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-l border-solid inset-0 pointer-events-none" />
          <div className="bg-white max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Buttons">
            <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="eye">
                <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                    <path d={svgPaths.pea533b0} fill="var(--fill-0, #294269)" id="Path" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tabla-ACF">
        <div className="bg-[#e8f2f7] content-stretch flex items-center min-w-[56px] relative shrink-0 size-[56px]" data-name="BodyCell-Table">
          <TableBody6 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
              <Container26 />
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[140px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <DateContainer20 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[200px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container27 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[145px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container28 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
              <Container29 />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-white h-full relative shrink-0 w-[180px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <DateContainer22 />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] items-center min-h-[56px] min-w-[120px] px-[16px] py-[14px] relative shrink-0 w-[180px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-l border-solid inset-0 pointer-events-none" />
          <div className="bg-white max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Buttons">
            <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="eye">
                <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                    <path d={svgPaths.pea533b0} fill="var(--fill-0, #294269)" id="Path" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tabla-ACF">
        <div className="bg-[#e8f2f7] content-stretch flex items-center min-w-[56px] relative shrink-0 size-[56px]" data-name="BodyCell-Table">
          <TableBody7 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
              <Container30 />
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[140px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <DateContainer24 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[200px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container31 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[145px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container32 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
              <Container33 />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-white h-full relative shrink-0 w-[180px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <DateContainer26 />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] items-center min-h-[56px] min-w-[120px] px-[16px] py-[14px] relative shrink-0 w-[180px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-l border-solid inset-0 pointer-events-none" />
          <div className="bg-white max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Buttons">
            <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="eye">
                <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                    <path d={svgPaths.pea533b0} fill="var(--fill-0, #294269)" id="Path" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tabla-ACF">
        <div className="bg-[#e8f2f7] content-stretch flex items-center min-w-[56px] relative shrink-0 size-[56px]" data-name="BodyCell-Table">
          <TableBody8 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
              <Container34 />
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[140px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <DateContainer28 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[200px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container35 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[145px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container36 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
              <Container37 />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-white h-full relative shrink-0 w-[180px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <DateContainer30 />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] items-center min-h-[56px] min-w-[120px] px-[16px] py-[14px] relative shrink-0 w-[180px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-l border-solid inset-0 pointer-events-none" />
          <div className="bg-white max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Buttons">
            <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="eye">
                <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                    <path d={svgPaths.pea533b0} fill="var(--fill-0, #294269)" id="Path" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tabla-ACF">
        <div className="bg-[#e8f2f7] content-stretch flex items-center min-w-[56px] relative shrink-0 size-[56px]" data-name="BodyCell-Table">
          <TableBody9 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
              <Container38 />
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[140px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <DateContainer32 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[200px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container39 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[145px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container40 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
              <Container41 />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-white h-full relative shrink-0 w-[180px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <DateContainer34 />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] items-center min-h-[56px] min-w-[120px] px-[16px] py-[14px] relative shrink-0 w-[180px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-l border-solid inset-0 pointer-events-none" />
          <div className="bg-white max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Buttons">
            <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="eye">
                <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                    <path d={svgPaths.pea533b0} fill="var(--fill-0, #294269)" id="Path" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tabla-ACF">
        <div className="bg-[#e8f2f7] content-stretch flex items-center min-w-[56px] relative shrink-0 size-[56px]" data-name="BodyCell-Table">
          <TableBody10 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
              <Container42 />
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[140px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <DateContainer36 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[200px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container43 />
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[145px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <Container44 />
        </div>
        <div className="bg-white flex-[1_0_0] h-[56px] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
              <Container45 />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-white h-full relative shrink-0 w-[180px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                <DateContainer38 />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] items-center min-h-[56px] min-w-[120px] px-[16px] py-[14px] relative shrink-0 w-[180px]" data-name="BodyCell-Table">
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-l border-solid inset-0 pointer-events-none" />
          <div className="bg-white max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Buttons">
            <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="eye">
                <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                    <path d={svgPaths.pea533b0} fill="var(--fill-0, #294269)" id="Path" />
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table-Rows/Default">
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-[#e8f2f7] h-full max-h-[56px] min-h-[46px] min-w-[56px] relative shrink-0 w-[56px]" data-name="HeaderCell-Table">
            <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] min-w-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] min-w-[inherit] px-[16px] py-[14px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px relative text-[#294269] text-[14px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
                  N°
                </p>
              </div>
            </div>
          </div>
        </div>
        <SlotColumns />
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-[#e8f2f7] h-full max-h-[56px] min-h-[46px] relative shrink-0 w-[180px]" data-name="HeaderCell-Table">
            <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center max-h-[inherit] min-h-[inherit] px-[16px] py-[11px] relative size-full">
                <HeaderContainer6 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SlotRows />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0">
      <div className="flex h-[6px] items-center justify-center relative shrink-0 w-[204px]">
        <div className="-rotate-90 flex-none">
          <div className="bg-[#dee3ea] content-stretch flex h-[204px] items-start justify-center relative rounded-[6px] w-[6px]" data-name="Scrollbar">
            <div className="bg-[#656a8a] h-[100px] relative rounded-[6px] shrink-0 w-[6px]" data-name="Scrollbar handle" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRows() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table-Rows">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Table-HeadBody-Slot">
        <Frame15 />
        <Frame16 />
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

function InputContainer2() {
  return (
    <div className="bg-white h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[15px] overflow-hidden text-ellipsis">10</p>
          </div>
          <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="Arrows/chevron_down">
            <div className="absolute inset-[36.46%_26.04%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4999 6.49989">
                <path d={svgPaths.p3c097840} fill="var(--fill-0, #294269)" id="Path" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Container46 />
    </div>
  );
}

function PageList() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[6px] relative shrink-0" data-name="Page list">
      <div className="bg-[#294269] content-stretch flex gap-[4px] items-center justify-center min-h-[28px] min-w-[31px] overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[31px]" data-name="Buttons">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#f6f9fc] text-[12px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[15px]">1</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[28px] overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[31px]" data-name="Buttons">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#294269] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[15px]">2</p>
        </div>
      </div>
    </div>
  );
}

function PaginationControls() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center justify-end min-w-px relative" data-name="Pagination controls">
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Pagination">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[17px]">Registros por página</p>
        </div>
        <div className="content-stretch flex flex-col items-start max-h-[47px] relative shrink-0 w-[64px]" data-name="Input-Selects">
          <Frame12 />
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Pagination">
        <div className="bg-[#f6f9fc] max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-[4px] shrink-0" data-name="Buttons">
          <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
              <div className="absolute inset-[32.29%_28.13%]" data-name="Path">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99992 5.66659">
                  <g id="Path">
                    <path d={svgPaths.p1850cf40} fill="var(--fill-0, #A8A9AB)" />
                    <path d={svgPaths.p2d2b1ff0} fill="var(--fill-0, #A8A9AB)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#c5cdda] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
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
        <div className="bg-white max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Buttons">
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
        <div className="bg-white max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Buttons">
          <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
              <div className="absolute inset-[32.29%_28.13%]" data-name="Path">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99992 5.66659">
                  <g id="Path">
                    <path d={svgPaths.p34dad00} fill="var(--fill-0, #294269)" />
                    <path d={svgPaths.p1b04f430} fill="var(--fill-0, #294269)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table-Body">
      <TableRows />
      <div className="bg-[#edf0f4] min-h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="pagination">
        <div aria-hidden className="absolute border-[#dee3ea] border-solid border-t inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
            <Frame1 />
            <PaginationControls />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[32px] relative size-full">
          <Frame7 />
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Table-Slot-Area">
            <div className="bg-[#edf0f4] h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Title-Table">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[12px] relative size-full">
                  <InputContainer />
                  <SearchContainer />
                </div>
              </div>
            </div>
            <TableBody />
          </div>
        </div>
      </div>
    </div>
  );
}

function BodyContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative rounded-[8px] z-[1]" data-name="Body-Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Title_body">
        <Container />
      </div>
      <Content />
    </div>
  );
}

function AllContent() {
  return (
    <div className="content-stretch flex gap-[24px] isolate items-start justify-center px-[32px] relative shrink-0 w-[1920px] z-[2]" data-name="All-Content">
      <BodyContent />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-white tracking-[0.12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="text-[14px]">
          <span className="[word-break:break-word] font-['Roboto:Black',sans-serif] font-black leading-[17px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Central de consultas:
          </span>
          <span className="leading-[20px]">{` `}</span>
          <span className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[17px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            01 6143636 - Opción 7
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
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Callcenter">
          <div className="absolute inset-[12.16%_8.33%_12.17%_8.33%]" data-name="Path">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.08038">
              <path d={svgPaths.p3b8c5b80} fill="var(--fill-0, white)" id="Path" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[17px]">Soporte</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#515458] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[24px] shrink-0">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[12px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        25 de Agosto, 2025
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

function TemplateBuscadorPublico() {
  return (
    <div className="absolute bg-[#f4f8fb] content-stretch flex flex-col gap-[24px] isolate items-center left-0 overflow-clip top-0 w-[1920px]" data-name="Template-BuscadorPublico">
      <MenuHeader />
      <AllContent />
      <div className="bg-[#26292e] relative shrink-0 w-full z-[1]" data-name="Header and footer">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[80px] items-center px-[32px] py-[13px] relative size-full">
            <Frame13 />
            <Frame14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <a className="content-stretch cursor-pointer flex items-center p-[8px] relative shrink-0 size-[40px] z-[2]">
      <div aria-hidden className="absolute border-[#e2a615] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="System/search">
        <div className="absolute inset-[13.54%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5001">
            <path d={svgPaths.pcb6fe00} fill="var(--fill-0, white)" id="Path" />
          </svg>
        </div>
      </div>
    </a>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch drop-shadow-[0px_8px_14px_rgba(24,39,75,0.32),0px_18px_44px_rgba(24,39,75,0.2)] flex isolate items-center left-[2px] py-[30px] top-[115px]">
      <Frame3 />
      <div className="absolute h-[100px] left-0 top-0 w-[40px] z-[1]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 100">
          <path d={svgPaths.pc6aaf0} fill="var(--fill-0, #294269)" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

export default function Frame27() {
  return (
    <div className="bg-white relative size-full">
      <TemplateBuscadorPublico />
      <Frame2 />
    </div>
  );
}