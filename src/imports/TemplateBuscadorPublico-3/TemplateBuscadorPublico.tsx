import svgPaths from "./svg-8m4xs2ngq9";

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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[3]" data-name="Menu-Header">
      <div className="bg-[#294269] h-[64px] relative shrink-0 w-full" data-name="Header">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[32px] py-[13px] relative size-full">
            <MenuContainer />
            <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[36px] overflow-clip px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Buttons">
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="account_circle">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <g id="Path">
                    <path d={svgPaths.p1a4b9600} fill="var(--fill-0, #294269)" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[17px]">Iniciar sesión</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e2a615] border-b-3 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-center min-h-[36px] min-w-[36px] overflow-clip p-[6px] relative rounded-[4px] shrink-0" data-name="Buttons">
        <div className="relative shrink-0 size-[24px]" data-name="push_fill">
          <div className="absolute left-[3px] size-[18px] top-[3px]" data-name="Path">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p1a67bc00} fill="var(--fill-0, white)" id="Path" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px py-px relative" data-name="Title_body">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19px]">Filtros de búsqueda</p>
        </div>
      </div>
    </div>
  );
}

function InputContainer() {
  return (
    <div className="bg-[#6a7b96] h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="search">
            <div className="absolute inset-[13.54%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5001">
                <path d={svgPaths.pcb6fe00} fill="var(--fill-0, white)" id="Path" />
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Tipo de procedimiento, Objeto de contratación, Descripción preliminar del requerimiento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Container />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Entidad</p>
      </div>
    </div>
  );
}

function LabelTop() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Label-Top">
      <Text />
    </div>
  );
}

function InputContainer1() {
  return (
    <div className="bg-[#6a7b96] h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Seleccionar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <LabelTop />
      <Container1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Tipo de procedimiento</p>
      </div>
    </div>
  );
}

function LabelTop1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Label-Top">
      <Text1 />
    </div>
  );
}

function InputContainer2() {
  return (
    <div className="bg-[#6a7b96] h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Seleccionar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <LabelTop1 />
      <Container2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Tipo de Objeto de Contratación</p>
      </div>
    </div>
  );
}

function LabelTop2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Label-Top">
      <Text2 />
    </div>
  );
}

function InputContainer3() {
  return (
    <div className="bg-[#6a7b96] h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Seleccionar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <LabelTop2 />
      <Container3 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Descripción preliminar del requerimiento</p>
      </div>
    </div>
  );
}

function LabelTop3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Label-Top">
      <Text3 />
    </div>
  );
}

function InputContainer4() {
  return (
    <div className="bg-[#6a7b96] h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Seleccionar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <LabelTop3 />
      <Container4 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px] overflow-hidden text-ellipsis">Año de publicación</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Label">
      <Text4 />
    </div>
  );
}

function InputContainer5() {
  return (
    <div className="bg-[#6a7b96] flex-[1_0_0] h-[36px] min-w-px relative rounded-[4px]" data-name="Input Container">
      <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Desde</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar">
            <div className="absolute inset-[9.38%_17.71%_13.54%_17.71%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 18.5">
                <path d={svgPaths.p20c7580} fill="var(--fill-0, white)" id="Path" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer6() {
  return (
    <div className="bg-[#6a7b96] flex-[1_0_0] h-[36px] min-w-px relative rounded-[4px]" data-name="Input Container">
      <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Hasta</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar">
            <div className="absolute inset-[9.38%_17.71%_13.54%_17.71%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 18.5">
                <path d={svgPaths.p20c7580} fill="var(--fill-0, white)" id="Path" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer5 />
      <InputContainer6 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Label />
      <Container5 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Body">
      <div className="content-stretch flex gap-[8px] items-start max-h-[61px] relative shrink-0 w-full" data-name="Text inputs">
        <Frame1 />
      </div>
      <div className="content-stretch flex gap-[8px] h-[61px] items-start relative shrink-0 w-full" data-name="Text inputs">
        <Frame2 />
      </div>
      <div className="content-stretch flex gap-[8px] items-start max-h-[61px] relative shrink-0 w-full" data-name="Text inputs">
        <Frame3 />
      </div>
      <div className="content-stretch flex gap-[8px] items-start max-h-[61px] relative shrink-0 w-full" data-name="Text inputs">
        <Frame4 />
      </div>
      <div className="content-stretch flex gap-[8px] items-start max-h-[61px] relative shrink-0 w-full" data-name="Text inputs">
        <Frame5 />
      </div>
      <div className="content-stretch flex flex-col items-start max-h-[61px] relative shrink-0 w-full" data-name="Text inputs">
        <Frame11 />
      </div>
    </div>
  );
}

function Switch() {
  return (
    <div className="h-[24px] min-w-[44px] relative shrink-0 w-[44px]" data-name="Switch">
      <div className="absolute inset-[-16.67%_-9.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 32">
          <g filter="url(#filter0_dd_1_29532)" id="Switch">
            <path d={svgPaths.p859f900} fill="var(--fill-0, #DEE3EA)" />
            <path clipRule="evenodd" d={svgPaths.p188ea900} fill="var(--fill-0, #E2A615)" fillRule="evenodd" id="knob" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_dd_1_29532" width="52" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="effect1_dropShadow_1_29532" />
              <feOffset />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.27451 0 0 0 0 0.483007 0 0 0 0 0.705882 0 0 0 0.2 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_29532" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect2_dropShadow_1_29532" />
              <feOffset />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend in2="effect1_dropShadow_1_29532" mode="normal" result="effect2_dropShadow_1_29532" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_29532" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Option() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Option2">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Búsqueda avanzada
      </p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[16px] items-start justify-end relative shrink-0 w-full" data-name="Buttons">
      <button className="flex-[1_0_0] min-h-[36px] min-w-px relative rounded-[4px]" data-name="Buttons">
        <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] pl-[12px] pr-[16px] py-[6px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Clean_brush">
              <div className="absolute inset-[8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0002 20.0001">
                  <g id="Path">
                    <path clipRule="evenodd" d={svgPaths.pbb20200} fill="var(--fill-0, white)" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p39d051f0} fill="var(--fill-0, white)" fillRule="evenodd" />
                    <path d={svgPaths.p34471280} fill="var(--fill-0, white)" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[17px]">Limpiar</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
      </button>
      <button className="bg-[#63c9c4] flex-[1_0_0] min-h-[36px] min-w-px relative rounded-[4px]" data-name="Buttons">
        <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] pl-[12px] pr-[16px] py-[6px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="search">
              <div className="absolute inset-[13.54%]" data-name="Path">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5001">
                  <path d={svgPaths.pcb6fe00} fill="var(--fill-0, white)" id="Path" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[17px]">Buscar</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </button>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0 size-[30px] z-[2]">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute flex inset-[26.04%_36.46%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.66659 4.33326">
                <path d={svgPaths.p16043a40} fill="var(--fill-0, white)" id="Path" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch drop-shadow-[0px_8px_14px_rgba(24,39,75,0.32),0px_18px_44px_rgba(24,39,75,0.2)] flex h-[100px] isolate items-center left-[298px] py-[30px] top-[14px] w-[32px]">
      <Frame7 />
      <div className="absolute h-[84px] left-0 top-[8px] w-[32px] z-[1]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 84">
          <path d={svgPaths.p37895f00} fill="var(--fill-0, #294269)" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Buscador de anuncios de contrataciones futuras</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[16px] items-center min-w-px relative" data-name="Container">
      <div className="bg-[#e2a615] h-[47px] relative rounded-[2px] shrink-0 w-[5px]" data-name="Divider" />
      <Container8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container7 />
    </div>
  );
}

function Buttons1() {
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
      <div aria-hidden="true" className="absolute border border-[#294269] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
    </div>
  );
}

function CardTableSwitch() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Card/table switch">
      <div className="bg-[#e9eaea] max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="Buttons">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="View/table_chart">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Path">
                <path d={svgPaths.pac966f0} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#294269] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      </div>
      <div className="bg-[#294269] max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] relative shrink-0" data-name="Buttons">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Card_id">
            <div className="absolute inset-[12.5%_4.17%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12">
                <g id="Path">
                  <path d={svgPaths.p15e69ac0} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p3ac61f00} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p2bb25100} fill="var(--fill-0, white)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#294269] border-b border-solid border-t inset-0 pointer-events-none" />
      </div>
      <Buttons1 />
    </div>
  );
}

function InputContainer7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-w-px relative" data-name="Input container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
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
        <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <CardTableSwitch />
    </div>
  );
}

function InputContainer8() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="search">
            <div className="absolute inset-[13.54%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5001">
                <path d={svgPaths.pcb6fe00} fill="var(--fill-0, #546887)" id="Path" />
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[17px] overflow-hidden text-ellipsis">Búsqueda interna</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer8 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Container10 />
    </div>
  );
}

function SearchInputContainer() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="Search input container">
      <div className="content-stretch flex gap-[8px] items-start max-h-[61px] relative shrink-0 w-[224px]" data-name="Text inputs">
        <Frame8 />
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
          <path d={svgPaths.p2475ab00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pbed1bc0} fill="var(--fill-0, #979797)" id="Vector_3" />
          <path d={svgPaths.p8276e00} fill="var(--fill-0, #BF0909)" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p2dde3100} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.pe84e680} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p5862600} fill="var(--fill-0, white)" id="Vector_7" />
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
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="PDF">
            <FileIcon />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute inset-[8.33%_8.98%_8.33%_12.5%]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.8439 20">
        <g id="Container">
          <path d={svgPaths.p19127700} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p16af5930} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2e25d880} fill="var(--fill-0, #979797)" id="Vector_3" />
          <path d={svgPaths.p516f900} fill="var(--fill-0, #1B9D6B)" id="Vector_4" />
          <g id="xlsx">
            <path d={svgPaths.p1e5f3d40} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p1e4d33c0} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p39c9cf90} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p3232cc80} fill="var(--fill-0, white)" id="Vector_8" />
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
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Excel">
            <Container11 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="Button container">
      <button className="bg-white cursor-pointer min-h-[36px] relative rounded-[4px] shrink-0" data-name="Buttons">
        <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] overflow-clip px-[12px] py-[6px] relative rounded-[inherit] size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="file_export">
            <div className="-translate-x-1/2 absolute aspect-[18/17.5] bottom-[8.33%] left-1/2 top-[8.33%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Path">
                  <path clipRule="evenodd" d={svgPaths.p2ccb2800} fill="var(--fill-0, #294269)" fillRule="evenodd" />
                  <path d={svgPaths.p12f1e180} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[17px]">Exportar avanzado</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function NumberContainer() {
  return (
    <div className="bg-[#294269] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Number Container">
      <div className="flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#bce8e6] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">01</p>
      </div>
    </div>
  );
}

function Frame60() {
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
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15px]">12345678910</p>
      </div>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Title Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-w-full overflow-hidden relative shrink-0 text-[#294269] text-[20px] text-ellipsis w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        MUNICIPALIDAD DISTRITAL DE CORTEGANA
      </p>
      <Frame60 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pb-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#8fd9d5] border-b-3 border-solid inset-0 pointer-events-none" />
      <NumberContainer />
      <TitleContainer />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha de publicación
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">14/10/2025 - 08:20:02</p>
      </div>
    </div>
  );
}

function TableBody1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tipo de Procedimiento
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function TableBody2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Objeto de Contratación
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Bien</p>
      </div>
    </div>
  );
}

function TableBody3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container14 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción preliminar del requerimiento
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">ADQUISICIÓN DE EQUIPOS DE PROTECCIÓN PERSONAL TÉCNICO Y ADMINISTRATIVO DE ELECTRO ORIENTE S.A. DOTACIÓN 2024-2025</p>
      </div>
    </div>
  );
}

function TableBody4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha aproximada de la convocatoria
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">17/121/2026</p>
      </div>
    </div>
  );
}

function TableBody5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container16 />
    </div>
  );
}

function DataContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Data Container">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame13 />
        <TableBody1 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame14 />
        <TableBody2 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame15 />
        <TableBody3 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame16 />
        <TableBody4 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame17 />
        <TableBody5 />
      </div>
    </div>
  );
}

function CardContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Card Container">
      <Frame70 />
      <DataContainer />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Button Group">
      <div className="relative shrink-0 size-[28px]" data-name="Button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 min-h-[36px] min-w-[36px] rounded-[4px] top-1/2 w-[36px]" data-name="Buttons">
          <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
              <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                  <path d={svgPaths.p1970b000} fill="var(--fill-0, #294269)" id="Path" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function NumberContainer1() {
  return (
    <div className="bg-[#294269] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Number Container">
      <div className="flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#bce8e6] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">02</p>
      </div>
    </div>
  );
}

function Frame61() {
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
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15px]">12345678910</p>
      </div>
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Title Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-w-full overflow-hidden relative shrink-0 text-[#294269] text-[20px] text-ellipsis w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        MUNICIPALIDAD DISTRITAL DE CORTEGANA
      </p>
      <Frame61 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pb-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#8fd9d5] border-b-3 border-solid inset-0 pointer-events-none" />
      <NumberContainer1 />
      <TitleContainer1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha de publicación
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">14/10/2025 - 08:20:02</p>
      </div>
    </div>
  );
}

function TableBody6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tipo de Procedimiento
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function TableBody7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Objeto de Contratación
      </p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Bien</p>
      </div>
    </div>
  );
}

function TableBody8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción preliminar del requerimiento
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">ADQUISICIÓN DE EQUIPOS DE PROTECCIÓN PERSONAL TÉCNICO Y ADMINISTRATIVO DE ELECTRO ORIENTE S.A. DOTACIÓN 2024-2025</p>
      </div>
    </div>
  );
}

function TableBody9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha aproximada de la convocatoria
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">17/121/2026</p>
      </div>
    </div>
  );
}

function TableBody10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container21 />
    </div>
  );
}

function DataContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Data Container">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame18 />
        <TableBody6 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame19 />
        <TableBody7 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame20 />
        <TableBody8 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame21 />
        <TableBody9 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame22 />
        <TableBody10 />
      </div>
    </div>
  );
}

function CardContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Card Container">
      <Frame71 />
      <DataContainer1 />
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Button Group">
      <div className="relative shrink-0 size-[28px]" data-name="Button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 min-h-[36px] min-w-[36px] rounded-[4px] top-1/2 w-[36px]" data-name="Buttons">
          <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
              <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                  <path d={svgPaths.p1970b000} fill="var(--fill-0, #294269)" id="Path" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function NumberContainer2() {
  return (
    <div className="bg-[#294269] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Number Container">
      <div className="flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#bce8e6] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">03</p>
      </div>
    </div>
  );
}

function Frame62() {
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
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15px]">12345678910</p>
      </div>
    </div>
  );
}

function TitleContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Title Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-w-full overflow-hidden relative shrink-0 text-[#294269] text-[20px] text-ellipsis w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        MUNICIPALIDAD DISTRITAL DE CORTEGANA
      </p>
      <Frame62 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pb-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#8fd9d5] border-b-3 border-solid inset-0 pointer-events-none" />
      <NumberContainer2 />
      <TitleContainer2 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha de publicación
      </p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">14/10/2025 - 08:20:02</p>
      </div>
    </div>
  );
}

function TableBody11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tipo de Procedimiento
      </p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function TableBody12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container23 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Objeto de Contratación
      </p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Bien</p>
      </div>
    </div>
  );
}

function TableBody13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción preliminar del requerimiento
      </p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">ADQUISICIÓN DE EQUIPOS DE PROTECCIÓN PERSONAL TÉCNICO Y ADMINISTRATIVO DE ELECTRO ORIENTE S.A. DOTACIÓN 2024-2025</p>
      </div>
    </div>
  );
}

function TableBody14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container25 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha aproximada de la convocatoria
      </p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">17/121/2026</p>
      </div>
    </div>
  );
}

function TableBody15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container26 />
    </div>
  );
}

function DataContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Data Container">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame23 />
        <TableBody11 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame24 />
        <TableBody12 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame25 />
        <TableBody13 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame26 />
        <TableBody14 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame27 />
        <TableBody15 />
      </div>
    </div>
  );
}

function CardContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Card Container">
      <Frame72 />
      <DataContainer2 />
    </div>
  );
}

function ButtonGroup2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Button Group">
      <div className="relative shrink-0 size-[28px]" data-name="Button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 min-h-[36px] min-w-[36px] rounded-[4px] top-1/2 w-[36px]" data-name="Buttons">
          <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
              <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                  <path d={svgPaths.p1970b000} fill="var(--fill-0, #294269)" id="Path" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[1468px]">
      <div className="bg-white flex-[1_0_0] min-h-[227px] min-w-[43px] relative rounded-[24px]" data-name="Table_Card">
        <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center min-h-[inherit] min-w-[inherit] p-[24px] relative size-full">
            <CardContainer />
            <ButtonGroup />
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-[227px] min-w-[43px] relative rounded-[24px]" data-name="Table_Card">
        <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center min-h-[inherit] min-w-[inherit] p-[24px] relative size-full">
            <CardContainer1 />
            <ButtonGroup1 />
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-[227px] min-w-[43px] relative rounded-[24px]" data-name="Table_Card">
        <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center min-h-[inherit] min-w-[inherit] p-[24px] relative size-full">
            <CardContainer2 />
            <ButtonGroup2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function NumberContainer3() {
  return (
    <div className="bg-[#294269] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Number Container">
      <div className="flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#bce8e6] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">04</p>
      </div>
    </div>
  );
}

function Frame63() {
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
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15px]">12345678910</p>
      </div>
    </div>
  );
}

function TitleContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Title Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-w-full overflow-hidden relative shrink-0 text-[#294269] text-[20px] text-ellipsis w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        MUNICIPALIDAD DISTRITAL DE CORTEGANA
      </p>
      <Frame63 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pb-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#8fd9d5] border-b-3 border-solid inset-0 pointer-events-none" />
      <NumberContainer3 />
      <TitleContainer3 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha de publicación
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">14/10/2025 - 08:20:02</p>
      </div>
    </div>
  );
}

function TableBody16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container27 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tipo de Procedimiento
      </p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function TableBody17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container28 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Objeto de Contratación
      </p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Bien</p>
      </div>
    </div>
  );
}

function TableBody18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container29 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción preliminar del requerimiento
      </p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">ADQUISICIÓN DE EQUIPOS DE PROTECCIÓN PERSONAL TÉCNICO Y ADMINISTRATIVO DE ELECTRO ORIENTE S.A. DOTACIÓN 2024-2025</p>
      </div>
    </div>
  );
}

function TableBody19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container30 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha aproximada de la convocatoria
      </p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">17/121/2026</p>
      </div>
    </div>
  );
}

function TableBody20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container31 />
    </div>
  );
}

function DataContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Data Container">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame28 />
        <TableBody16 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame29 />
        <TableBody17 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame30 />
        <TableBody18 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame31 />
        <TableBody19 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame32 />
        <TableBody20 />
      </div>
    </div>
  );
}

function CardContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Card Container">
      <Frame74 />
      <DataContainer3 />
    </div>
  );
}

function ButtonGroup3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Button Group">
      <div className="relative shrink-0 size-[28px]" data-name="Button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 min-h-[36px] min-w-[36px] rounded-[4px] top-1/2 w-[36px]" data-name="Buttons">
          <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
              <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                  <path d={svgPaths.p1970b000} fill="var(--fill-0, #294269)" id="Path" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function NumberContainer4() {
  return (
    <div className="bg-[#294269] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Number Container">
      <div className="flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#bce8e6] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">05</p>
      </div>
    </div>
  );
}

function Frame64() {
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
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15px]">12345678910</p>
      </div>
    </div>
  );
}

function TitleContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Title Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-w-full overflow-hidden relative shrink-0 text-[#294269] text-[20px] text-ellipsis w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        MUNICIPALIDAD DISTRITAL DE CORTEGANA
      </p>
      <Frame64 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pb-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#8fd9d5] border-b-3 border-solid inset-0 pointer-events-none" />
      <NumberContainer4 />
      <TitleContainer4 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha de publicación
      </p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">14/10/2025 - 08:20:02</p>
      </div>
    </div>
  );
}

function TableBody21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container32 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tipo de Procedimiento
      </p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function TableBody22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container33 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Objeto de Contratación
      </p>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Bien</p>
      </div>
    </div>
  );
}

function TableBody23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container34 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción preliminar del requerimiento
      </p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">ADQUISICIÓN DE EQUIPOS DE PROTECCIÓN PERSONAL TÉCNICO Y ADMINISTRATIVO DE ELECTRO ORIENTE S.A. DOTACIÓN 2024-2025</p>
      </div>
    </div>
  );
}

function TableBody24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container35 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha aproximada de la convocatoria
      </p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">17/121/2026</p>
      </div>
    </div>
  );
}

function TableBody25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container36 />
    </div>
  );
}

function DataContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Data Container">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame33 />
        <TableBody21 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame34 />
        <TableBody22 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame35 />
        <TableBody23 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame36 />
        <TableBody24 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame37 />
        <TableBody25 />
      </div>
    </div>
  );
}

function CardContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Card Container">
      <Frame75 />
      <DataContainer4 />
    </div>
  );
}

function ButtonGroup4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Button Group">
      <div className="relative shrink-0 size-[28px]" data-name="Button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 min-h-[36px] min-w-[36px] rounded-[4px] top-1/2 w-[36px]" data-name="Buttons">
          <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
              <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                  <path d={svgPaths.p1970b000} fill="var(--fill-0, #294269)" id="Path" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function NumberContainer5() {
  return (
    <div className="bg-[#294269] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Number Container">
      <div className="flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#bce8e6] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">06</p>
      </div>
    </div>
  );
}

function Frame65() {
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
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15px]">12345678910</p>
      </div>
    </div>
  );
}

function TitleContainer5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Title Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-w-full overflow-hidden relative shrink-0 text-[#294269] text-[20px] text-ellipsis w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        MUNICIPALIDAD DISTRITAL DE CORTEGANA
      </p>
      <Frame65 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pb-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#8fd9d5] border-b-3 border-solid inset-0 pointer-events-none" />
      <NumberContainer5 />
      <TitleContainer5 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha de publicación
      </p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">14/10/2025 - 08:20:02</p>
      </div>
    </div>
  );
}

function TableBody26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container37 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tipo de Procedimiento
      </p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function TableBody27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container38 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Objeto de Contratación
      </p>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Bien</p>
      </div>
    </div>
  );
}

function TableBody28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container39 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción preliminar del requerimiento
      </p>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">ADQUISICIÓN DE EQUIPOS DE PROTECCIÓN PERSONAL TÉCNICO Y ADMINISTRATIVO DE ELECTRO ORIENTE S.A. DOTACIÓN 2024-2025</p>
      </div>
    </div>
  );
}

function TableBody29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container40 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha aproximada de la convocatoria
      </p>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">17/121/2026</p>
      </div>
    </div>
  );
}

function TableBody30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container41 />
    </div>
  );
}

function DataContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Data Container">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame38 />
        <TableBody26 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame39 />
        <TableBody27 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame40 />
        <TableBody28 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame41 />
        <TableBody29 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame42 />
        <TableBody30 />
      </div>
    </div>
  );
}

function CardContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Card Container">
      <Frame76 />
      <DataContainer5 />
    </div>
  );
}

function ButtonGroup5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Button Group">
      <div className="relative shrink-0 size-[28px]" data-name="Button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 min-h-[36px] min-w-[36px] rounded-[4px] top-1/2 w-[36px]" data-name="Buttons">
          <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
              <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                  <path d={svgPaths.p1970b000} fill="var(--fill-0, #294269)" id="Path" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-white flex-[1_0_0] min-h-[227px] min-w-[43px] relative rounded-[24px]" data-name="Table_Card">
        <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center min-h-[inherit] min-w-[inherit] p-[24px] relative size-full">
            <CardContainer3 />
            <ButtonGroup3 />
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-[227px] min-w-[43px] relative rounded-[24px]" data-name="Table_Card">
        <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center min-h-[inherit] min-w-[inherit] p-[24px] relative size-full">
            <CardContainer4 />
            <ButtonGroup4 />
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-[227px] min-w-[43px] relative rounded-[24px]" data-name="Table_Card">
        <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center min-h-[inherit] min-w-[inherit] p-[24px] relative size-full">
            <CardContainer5 />
            <ButtonGroup5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function NumberContainer6() {
  return (
    <div className="bg-[#294269] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Number Container">
      <div className="flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#bce8e6] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">07</p>
      </div>
    </div>
  );
}

function Frame66() {
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
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15px]">12345678910</p>
      </div>
    </div>
  );
}

function TitleContainer6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Title Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-w-full overflow-hidden relative shrink-0 text-[#294269] text-[20px] text-ellipsis w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        MUNICIPALIDAD DISTRITAL DE CORTEGANA
      </p>
      <Frame66 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pb-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#8fd9d5] border-b-3 border-solid inset-0 pointer-events-none" />
      <NumberContainer6 />
      <TitleContainer6 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha de publicación
      </p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">14/10/2025 - 08:20:02</p>
      </div>
    </div>
  );
}

function TableBody31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container42 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tipo de Procedimiento
      </p>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function TableBody32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container43 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Objeto de Contratación
      </p>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Bien</p>
      </div>
    </div>
  );
}

function TableBody33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container44 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción preliminar del requerimiento
      </p>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">ADQUISICIÓN DE EQUIPOS DE PROTECCIÓN PERSONAL TÉCNICO Y ADMINISTRATIVO DE ELECTRO ORIENTE S.A. DOTACIÓN 2024-2025</p>
      </div>
    </div>
  );
}

function TableBody34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container45 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha aproximada de la convocatoria
      </p>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">17/121/2026</p>
      </div>
    </div>
  );
}

function TableBody35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container46 />
    </div>
  );
}

function DataContainer6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Data Container">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame43 />
        <TableBody31 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame44 />
        <TableBody32 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame45 />
        <TableBody33 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame46 />
        <TableBody34 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame47 />
        <TableBody35 />
      </div>
    </div>
  );
}

function CardContainer6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Card Container">
      <Frame78 />
      <DataContainer6 />
    </div>
  );
}

function ButtonGroup6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Button Group">
      <div className="relative shrink-0 size-[28px]" data-name="Button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 min-h-[36px] min-w-[36px] rounded-[4px] top-1/2 w-[36px]" data-name="Buttons">
          <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
              <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                  <path d={svgPaths.p1970b000} fill="var(--fill-0, #294269)" id="Path" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function NumberContainer7() {
  return (
    <div className="bg-[#294269] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Number Container">
      <div className="flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#bce8e6] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">08</p>
      </div>
    </div>
  );
}

function Frame67() {
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
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15px]">12345678910</p>
      </div>
    </div>
  );
}

function TitleContainer7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Title Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-w-full overflow-hidden relative shrink-0 text-[#294269] text-[20px] text-ellipsis w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        MUNICIPALIDAD DISTRITAL DE CORTEGANA
      </p>
      <Frame67 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pb-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#8fd9d5] border-b-3 border-solid inset-0 pointer-events-none" />
      <NumberContainer7 />
      <TitleContainer7 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha de publicación
      </p>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">14/10/2025 - 08:20:02</p>
      </div>
    </div>
  );
}

function TableBody36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container47 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tipo de Procedimiento
      </p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function TableBody37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container48 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Objeto de Contratación
      </p>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Bien</p>
      </div>
    </div>
  );
}

function TableBody38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container49 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción preliminar del requerimiento
      </p>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">ADQUISICIÓN DE EQUIPOS DE PROTECCIÓN PERSONAL TÉCNICO Y ADMINISTRATIVO DE ELECTRO ORIENTE S.A. DOTACIÓN 2024-2025</p>
      </div>
    </div>
  );
}

function TableBody39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container50 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha aproximada de la convocatoria
      </p>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">17/121/2026</p>
      </div>
    </div>
  );
}

function TableBody40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container51 />
    </div>
  );
}

function DataContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Data Container">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame48 />
        <TableBody36 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame49 />
        <TableBody37 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame50 />
        <TableBody38 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame51 />
        <TableBody39 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame52 />
        <TableBody40 />
      </div>
    </div>
  );
}

function CardContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Card Container">
      <Frame79 />
      <DataContainer7 />
    </div>
  );
}

function ButtonGroup7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Button Group">
      <div className="relative shrink-0 size-[28px]" data-name="Button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 min-h-[36px] min-w-[36px] rounded-[4px] top-1/2 w-[36px]" data-name="Buttons">
          <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
              <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                  <path d={svgPaths.p1970b000} fill="var(--fill-0, #294269)" id="Path" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function NumberContainer8() {
  return (
    <div className="bg-[#294269] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Number Container">
      <div className="flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#bce8e6] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">09</p>
      </div>
    </div>
  );
}

function Frame68() {
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
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3f5578] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15px]">12345678910</p>
      </div>
    </div>
  );
}

function TitleContainer8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Title Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] min-w-full overflow-hidden relative shrink-0 text-[#294269] text-[20px] text-ellipsis w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        MUNICIPALIDAD DISTRITAL DE CORTEGANA
      </p>
      <Frame68 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pb-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#8fd9d5] border-b-3 border-solid inset-0 pointer-events-none" />
      <NumberContainer8 />
      <TitleContainer8 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha de publicación
      </p>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">14/10/2025 - 08:20:02</p>
      </div>
    </div>
  );
}

function TableBody41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container52 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tipo de Procedimiento
      </p>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Licitación Pública</p>
      </div>
    </div>
  );
}

function TableBody42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container53 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Objeto de Contratación
      </p>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Bien</p>
      </div>
    </div>
  );
}

function TableBody43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container54 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción preliminar del requerimiento
      </p>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">ADQUISICIÓN DE EQUIPOS DE PROTECCIÓN PERSONAL TÉCNICO Y ADMINISTRATIVO DE ELECTRO ORIENTE S.A. DOTACIÓN 2024-2025</p>
      </div>
    </div>
  );
}

function TableBody44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container55 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha aproximada de la convocatoria
      </p>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">17/121/2026</p>
      </div>
    </div>
  );
}

function TableBody45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Table body">
      <Container56 />
    </div>
  );
}

function DataContainer8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Data Container">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame53 />
        <TableBody41 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame54 />
        <TableBody42 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame55 />
        <TableBody43 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame56 />
        <TableBody44 />
      </div>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label-Cards">
        <Frame57 />
        <TableBody45 />
      </div>
    </div>
  );
}

function CardContainer8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Card Container">
      <Frame80 />
      <DataContainer8 />
    </div>
  );
}

function ButtonGroup8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Button Group">
      <div className="relative shrink-0 size-[28px]" data-name="Button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 min-h-[36px] min-w-[36px] rounded-[4px] top-1/2 w-[36px]" data-name="Buttons">
          <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
              <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                  <path d={svgPaths.p1970b000} fill="var(--fill-0, #294269)" id="Path" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-white flex-[1_0_0] min-h-[227px] min-w-[43px] relative rounded-[24px]" data-name="Table_Card">
        <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center min-h-[inherit] min-w-[inherit] p-[24px] relative size-full">
            <CardContainer6 />
            <ButtonGroup6 />
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-[227px] min-w-[43px] relative rounded-[24px]" data-name="Table_Card">
        <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center min-h-[inherit] min-w-[inherit] p-[24px] relative size-full">
            <CardContainer7 />
            <ButtonGroup7 />
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-[227px] min-w-[43px] relative rounded-[24px]" data-name="Table_Card">
        <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center min-h-[inherit] min-w-[inherit] p-[24px] relative size-full">
            <CardContainer8 />
            <ButtonGroup8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function SlotRows() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Slot-Rows">
      <Frame69 />
      <Frame73 />
      <Frame77 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <SlotRows />
    </div>
  );
}

function TableHeadBodySlot() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table-HeadBody-Slot">
      <Frame59 />
    </div>
  );
}

function TableRows() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table-Rows">
      <TableHeadBodySlot />
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table-Body">
      <TableRows />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Total de registros: 04</p>
      </div>
    </div>
  );
}

function InputContainer9() {
  return (
    <div className="bg-white h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden="true" className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[12px] text-ellipsis text-left whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[15px] overflow-hidden text-ellipsis">10</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_down">
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

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <InputContainer9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Container57 />
    </div>
  );
}

function PageList() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[6px] relative shrink-0" data-name="Page list">
      <div className="bg-[#294269] content-stretch flex gap-[4px] items-center justify-center min-h-[28px] min-w-[31px] overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[31px]" data-name="Buttons">
        <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#f6f9fc] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15px]">1</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[28px] overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[31px]" data-name="Buttons">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#294269] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
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
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[17px]">Registros por página</p>
        </div>
        <button className="content-stretch cursor-pointer flex flex-col items-start max-h-[47px] relative shrink-0 w-[64px]" data-name="Text inputs">
          <Frame10 />
        </button>
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
          <div aria-hidden="true" className="absolute border border-[#c5cdda] border-solid inset-0 pointer-events-none rounded-[4px]" />
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
          <div aria-hidden="true" className="absolute border border-[#c5cdda] border-solid inset-0 pointer-events-none rounded-[4px]" />
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
          <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
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
          <div aria-hidden="true" className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function TableSlotArea() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Table-Slot-Area">
      <TableBody />
      <div className="bg-[#edf0f4] min-h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="pagination">
        <div aria-hidden="true" className="absolute border-[#dee3ea] border-solid border-t inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
            <Frame9 />
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
          <div className="bg-[#edf0f4] content-stretch flex h-[64px] items-center justify-between overflow-clip pl-[16px] pr-[8px] py-[12px] relative rounded-[8px] shrink-0 w-[1468px]" data-name="Title-Table">
            <InputContainer7 />
            <SearchContainer />
          </div>
          <TableSlotArea />
        </div>
      </div>
    </div>
  );
}

function BodyContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative rounded-[8px] z-[1]" data-name="Body-Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Title_body">
        <Container6 />
      </div>
      <Content />
    </div>
  );
}

function AllContent() {
  return (
    <div className="content-stretch flex gap-[24px] isolate items-start justify-center px-[32px] relative shrink-0 w-[1920px] z-[2]" data-name="All-Content">
      <div className="bg-[#294269] drop-shadow-[-7px_0px_14px_rgba(24,39,75,0.24),-15px_0px_44px_rgba(24,39,75,0.1)] relative rounded-[8px] self-stretch shrink-0 w-[300px] z-[2]" data-name="Sidebar-Filter">
        <div aria-hidden="true" className="absolute border-2 border-[#546887] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative size-full">
          <Frame />
          <Body />
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Switch">
            <Switch />
            <Option />
          </div>
          <Buttons />
          <Frame6 />
        </div>
      </div>
      <BodyContent />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-white tracking-[0.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="text-[14px]">
          <span className="font-['Roboto:Black',sans-serif] font-black leading-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Central de consultas:
          </span>
          <span className="leading-[20px]">{` `}</span>
          <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            01 6143636 - Opción 7
          </span>
        </p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-white tracking-[0.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="text-[14px]">
          <span className="font-['Roboto:Black',sans-serif] font-black leading-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Sede central:
          </span>
          <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` Av. Gregorio Escobedo cdra. 7 s/n Jesús María - Lima/Perú`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[17px] text-[14px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
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
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[17px]">Soporte</p>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-[#515458] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[24px] shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[12px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <p className="font-['Roboto:Black',sans-serif] font-black leading-[15px] relative shrink-0 text-[12px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        22:09
      </p>
    </div>
  );
}

export default function TemplateBuscadorPublico() {
  return (
    <div className="bg-[#f4f8fb] content-stretch flex flex-col gap-[24px] isolate items-center relative size-full" data-name="Template-BuscadorPublico">
      <MenuHeader />
      <AllContent />
      <div className="bg-[#26292e] relative shrink-0 w-full z-[1]" data-name="Header and footer">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[80px] items-center px-[32px] py-[13px] relative size-full">
            <Frame12 />
            <Frame58 />
          </div>
        </div>
      </div>
    </div>
  );
}