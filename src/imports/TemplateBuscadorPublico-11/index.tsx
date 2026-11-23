import svgPaths from "./svg-nderntc2ec";

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

function Dato() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Dato">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="object/campaign">
        <div className="-translate-y-1/2 absolute aspect-[16/15.1201171875] left-[8.33%] right-[8.33%] top-[calc(50%-0.5px)]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
            <g id="Path">
              <path d={svgPaths.p26087100} fill="var(--fill-0, #009FC5)" />
              <path clipRule="evenodd" d={svgPaths.p2794ae70} fill="var(--fill-0, #009FC5)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Dato1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Dato">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="NoUsar_rule">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Path">
            <path d={svgPaths.p5319ef0} fill="var(--fill-0, #009FC5)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Dato2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Dato">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="widgets">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Path">
            <path d={svgPaths.p3c36e280} fill="var(--fill-0, #009FC5)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Dato3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Dato">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="description">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Path">
            <path d={svgPaths.p27b27400} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MenuPasos() {
  return (
    <div className="absolute content-stretch flex gap-[48px] inset-[6.98%_39.96%_0_39.96%] items-start justify-center px-[12px] py-[16px] rounded-bl-[24px] rounded-tl-[24px]" data-name="MenúPasos">
      <div className="content-stretch flex flex-col gap-[4px] items-center max-h-[48px] max-w-[48px] min-h-[48px] relative rounded-[8px] shrink-0 w-[48px]" data-name="Option">
        <Dato />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-center max-h-[48px] max-w-[48px] min-h-[48px] relative rounded-[8px] shrink-0 w-[48px]" data-name="Option">
        <Dato1 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-center max-h-[48px] max-w-[48px] min-h-[48px] relative rounded-[8px] shrink-0 w-[48px]" data-name="Option">
        <Dato2 />
      </div>
      <div className="bg-[#294269] content-stretch flex flex-col gap-[4px] items-center max-h-[48px] max-w-[48px] min-h-[48px] relative rounded-[48px] shrink-0 w-[48px]" data-name="Option">
        <Dato3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[32px]">Contratos</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[16px] items-center min-w-px relative" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Text container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Tab text</p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Section">
      <TextContainer />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Text container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Tab text</p>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Section">
      <TextContainer1 />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Text container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">Tab text</p>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Section">
      <TextContainer2 />
    </div>
  );
}

function TextContainer3() {
  return <div className="content-stretch flex flex-col gap-[10px] h-[37px] items-start justify-center p-[10px] relative shrink-0 w-[71px]" data-name="Text container" />;
}

function Section3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0" data-name="Section">
      <TextContainer3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[8px] h-[50px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Tabs">
        <div aria-hidden className="absolute border-[#294269] border-b-2 border-solid inset-0 pointer-events-none" />
        <Section />
      </div>
      <div className="content-stretch flex gap-[8px] h-[50px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Tabs">
        <div aria-hidden className="absolute border-[#c6c6c5] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <Section1 />
      </div>
      <div className="content-stretch flex gap-[8px] h-[50px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Tabs">
        <div aria-hidden className="absolute border-[#c6c6c5] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <Section2 />
      </div>
      <div className="flex-[1_0_0] h-[50px] min-w-px relative" data-name="Tabs">
        <div aria-hidden className="absolute border-[#c6c6c5] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
            <Section3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[28px]">Datos generales del contrato</p>
      </div>
    </div>
  );
}

function Contenedor() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="contenedor">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[2px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="text_snippet">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.p335d9b00} fill="var(--fill-0, #2CB2A9)" />
              </g>
            </svg>
          </div>
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0" data-name="Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[4px] py-[2px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Up">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Path">
                  <path d={svgPaths.p19f173c0} fill="var(--fill-0, #294269)" />
                </g>
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
    <div className="relative shrink-0 w-full" data-name="acordeon-cuaderno-padre">
      <div aria-hidden className="absolute border-[#80cfe3] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Contenedor />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="bg-[#e6f5fa] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative" data-name="Text Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7d7f82] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Entidad Convocante</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">20601938058</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center overflow-hidden relative shrink-0 text-[#26292e] text-[16px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Entidad ConvocanteGOBIERNO REGIONAL DE LORETO UNIDAD EJECUTORA SALUD UCAYALI - CONTAMANA</p>
      </div>
    </div>
  );
}

function LeadingIcon1() {
  return (
    <div className="bg-[#e6f5fa] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[9.38%_17.71%_13.54%_17.71%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 18.5">
            <path d={svgPaths.p20c7580} fill="var(--fill-0, #294269)" id="Path" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InfoContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[0] relative self-stretch shrink-0 w-[256px]" data-name="Info Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] text-[12px] tracking-[0.24px] uppercase w-[90px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">INICIO</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center min-w-px relative text-[#26292e] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">12/04/2025</p>
      </div>
    </div>
  );
}

function InfoContainer1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[0] relative self-stretch shrink-0 w-[256px]" data-name="Info Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] text-[12px] tracking-[0.24px] uppercase w-[90px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">FINAL</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center min-w-px relative text-[#26292e] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">12/04/2025</p>
      </div>
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7d7f82] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Fecha de vigencia del contrato</p>
      </div>
      <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Data Point">
        <InfoContainer />
      </div>
      <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Data Point">
        <InfoContainer1 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[18px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon />
        <TextContainer4 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Data Point-preset">
        <div className="content-stretch flex gap-[18px] items-start relative shrink-0 w-full" data-name="Data Point">
          <LeadingIcon1 />
          <TextContainer5 />
        </div>
      </div>
    </div>
  );
}

function LeadingIcon2() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="relative rounded-[8px] shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="users">
          <div className="-translate-y-1/2 absolute aspect-[19.5/14.500001907348633] left-[8.33%] right-[8.33%] top-[calc(50%-0.5px)]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
              <g id="Vector">
                <path d={svgPaths.p35e5ed00} fill="var(--fill-0, #294269)" />
                <path d={svgPaths.p1e10fc00} fill="var(--fill-0, #294269)" />
                <path d={svgPaths.p176c65c0} fill="var(--fill-0, #294269)" />
                <path d={svgPaths.p1ff41000} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-w-full relative shrink-0 text-[#7d7f82] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Contratista</p>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-[256px]">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#26292e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[19px]">INVERSIONES Y PROYECTOS LAS TORRES</p>
        </div>
        <div className="content-stretch flex items-center justify-center max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] overflow-clip p-[6px] relative rounded-[4px] shrink-0" data-name="Buttons">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
            <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                <path d={svgPaths.pea533b0} fill="var(--fill-0, #0056AC)" id="Path" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingIcon3() {
  return (
    <div className="bg-[#e6f5fa] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative" data-name="Text Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7d7f82] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Entidad Convocante</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">20601938058</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center overflow-hidden relative shrink-0 text-[#26292e] text-[16px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Entidad ConvocanteGOBIERNO REGIONAL DE LORETO UNIDAD EJECUTORA SALUD UCAYALI - CONTAMANA</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Data Point-preset">
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Data Point">
          <LeadingIcon2 />
          <Container10 />
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[18px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon3 />
        <TextContainer6 />
      </div>
    </div>
  );
}

function LeadingIcon4() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Descripción</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">GASOLINA REGULAR</p>
      </div>
    </div>
  );
}

function LeadingIcon5() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Lugar de ejecución de la prestación</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">LORETO/UCAYALI/CONTAMANA</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon4 />
        <Container11 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon5 />
        <Container12 />
      </div>
    </div>
  );
}

function LeadingIcon6() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Descripción</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">GASOLINA REGULAR</p>
      </div>
    </div>
  );
}

function LeadingIcon7() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Lugar de ejecución de la prestación</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">LORETO/UCAYALI/CONTAMANA</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon6 />
        <Container13 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon7 />
        <Container14 />
      </div>
    </div>
  );
}

function LeadingIcon8() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Descripción</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">GASOLINA REGULAR</p>
      </div>
    </div>
  );
}

function LeadingIcon9() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Lugar de ejecución de la prestación</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">LORETO/UCAYALI/CONTAMANA</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon8 />
        <Container15 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon9 />
        <Container16 />
      </div>
    </div>
  );
}

function Slot() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Slot">
      <Frame4 />
      <Frame8 />
      <Frame5 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start pb-[24px] pt-[16px] px-[24px] relative size-full">
        <Slot />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[28px]">Datos generales del contrato</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Container">
      <Container18 />
    </div>
  );
}

function Contenedor1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="contenedor">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[2px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.p335d9b00} fill="var(--fill-0, #997300)" />
              </g>
            </svg>
          </div>
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0" data-name="Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-[2px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Up">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Path">
                  <path d={svgPaths.p19f173c0} fill="var(--fill-0, #294269)" />
                </g>
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
    <div className="content-stretch flex gap-[8px] items-center py-[24px] relative shrink-0 w-full" data-name="acordeon-cuaderno-padre">
      <div aria-hidden className="absolute border-[#997300] border-b-4 border-solid inset-0 pointer-events-none" />
      <Contenedor1 />
      <Container19 />
    </div>
  );
}

function LeadingIcon10() {
  return (
    <div className="bg-[#e6f5fa] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative" data-name="Text Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7d7f82] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Entidad Convocante</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">20601938058</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center overflow-hidden relative shrink-0 text-[#26292e] text-[16px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Entidad ConvocanteGOBIERNO REGIONAL DE LORETO UNIDAD EJECUTORA SALUD UCAYALI - CONTAMANA</p>
      </div>
    </div>
  );
}

function LeadingIcon11() {
  return (
    <div className="bg-[#e6f5fa] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[9.38%_17.71%_13.54%_17.71%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 18.5">
            <path d={svgPaths.p20c7580} fill="var(--fill-0, #294269)" id="Path" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InfoContainer2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[0] relative self-stretch shrink-0 w-[256px]" data-name="Info Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] text-[12px] tracking-[0.24px] uppercase w-[90px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">INICIO</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center min-w-px relative text-[#26292e] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">12/04/2025</p>
      </div>
    </div>
  );
}

function InfoContainer3() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[0] relative self-stretch shrink-0 w-[256px]" data-name="Info Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] text-[12px] tracking-[0.24px] uppercase w-[90px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">FINAL</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center min-w-px relative text-[#26292e] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">12/04/2025</p>
      </div>
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7d7f82] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Fecha de vigencia del contrato</p>
      </div>
      <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Data Point">
        <InfoContainer2 />
      </div>
      <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Data Point">
        <InfoContainer3 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[18px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon10 />
        <TextContainer7 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Data Point-preset">
        <div className="content-stretch flex gap-[18px] items-start relative shrink-0 w-full" data-name="Data Point">
          <LeadingIcon11 />
          <TextContainer8 />
        </div>
      </div>
    </div>
  );
}

function LeadingIcon12() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="relative rounded-[8px] shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="users">
          <div className="-translate-y-1/2 absolute aspect-[19.5/14.500001907348633] left-[8.33%] right-[8.33%] top-[calc(50%-0.5px)]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
              <g id="Vector">
                <path d={svgPaths.p35e5ed00} fill="var(--fill-0, #294269)" />
                <path d={svgPaths.p1e10fc00} fill="var(--fill-0, #294269)" />
                <path d={svgPaths.p176c65c0} fill="var(--fill-0, #294269)" />
                <path d={svgPaths.p1ff41000} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-w-full relative shrink-0 text-[#7d7f82] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Contratista</p>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-[256px]">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#26292e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[19px]">INVERSIONES Y PROYECTOS LAS TORRES</p>
        </div>
        <div className="content-stretch flex items-center justify-center max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] overflow-clip p-[6px] relative rounded-[4px] shrink-0" data-name="Buttons">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
            <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                <path d={svgPaths.pea533b0} fill="var(--fill-0, #0056AC)" id="Path" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingIcon13() {
  return (
    <div className="bg-[#e6f5fa] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative" data-name="Text Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7d7f82] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Entidad Convocante</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">20601938058</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center overflow-hidden relative shrink-0 text-[#26292e] text-[16px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Entidad ConvocanteGOBIERNO REGIONAL DE LORETO UNIDAD EJECUTORA SALUD UCAYALI - CONTAMANA</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Data Point-preset">
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Data Point">
          <LeadingIcon12 />
          <Container20 />
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[18px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon13 />
        <TextContainer9 />
      </div>
    </div>
  );
}

function LeadingIcon14() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Descripción</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">GASOLINA REGULAR</p>
      </div>
    </div>
  );
}

function LeadingIcon15() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Lugar de ejecución de la prestación</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">LORETO/UCAYALI/CONTAMANA</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon14 />
        <Container21 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon15 />
        <Container22 />
      </div>
    </div>
  );
}

function LeadingIcon16() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Descripción</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">GASOLINA REGULAR</p>
      </div>
    </div>
  );
}

function LeadingIcon17() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Lugar de ejecución de la prestación</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">LORETO/UCAYALI/CONTAMANA</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon16 />
        <Container23 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon17 />
        <Container24 />
      </div>
    </div>
  );
}

function LeadingIcon18() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Descripción</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">GASOLINA REGULAR</p>
      </div>
    </div>
  );
}

function LeadingIcon19() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Lugar de ejecución de la prestación</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">LORETO/UCAYALI/CONTAMANA</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon18 />
        <Container25 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon19 />
        <Container26 />
      </div>
    </div>
  );
}

function Slot1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Slot">
      <Frame6 />
      <Frame11 />
      <Frame7 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start pb-[24px] pt-[16px] px-[24px] relative size-full">
        <Slot1 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[28px]">Datos generales del contrato</p>
      </div>
    </div>
  );
}

function Contenedor2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="contenedor">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[2px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="text_snippet">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Path">
                <path d={svgPaths.p335d9b00} fill="var(--fill-0, #2CB2A9)" />
              </g>
            </svg>
          </div>
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0" data-name="Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[4px] py-[2px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Up">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Path">
                  <path d={svgPaths.p19f173c0} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AcordeonCuadernoPadre2() {
  return (
    <div className="relative shrink-0 w-full" data-name="acordeon-cuaderno-padre">
      <div aria-hidden className="absolute border-[#80cfe3] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Contenedor2 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function LeadingIcon20() {
  return (
    <div className="bg-[#e6f5fa] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative" data-name="Text Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7d7f82] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Entidad Convocante</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">20601938058</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center overflow-hidden relative shrink-0 text-[#26292e] text-[16px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Entidad ConvocanteGOBIERNO REGIONAL DE LORETO UNIDAD EJECUTORA SALUD UCAYALI - CONTAMANA</p>
      </div>
    </div>
  );
}

function LeadingIcon21() {
  return (
    <div className="bg-[#e6f5fa] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[9.38%_17.71%_13.54%_17.71%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 18.5">
            <path d={svgPaths.p20c7580} fill="var(--fill-0, #294269)" id="Path" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InfoContainer4() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[0] relative self-stretch shrink-0 w-[256px]" data-name="Info Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] text-[12px] tracking-[0.24px] uppercase w-[90px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">INICIO</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center min-w-px relative text-[#26292e] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">12/04/2025</p>
      </div>
    </div>
  );
}

function InfoContainer5() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[0] relative self-stretch shrink-0 w-[256px]" data-name="Info Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] text-[12px] tracking-[0.24px] uppercase w-[90px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">FINAL</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center min-w-px relative text-[#26292e] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">12/04/2025</p>
      </div>
    </div>
  );
}

function TextContainer11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7d7f82] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Fecha de vigencia del contrato</p>
      </div>
      <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Data Point">
        <InfoContainer4 />
      </div>
      <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Data Point">
        <InfoContainer5 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[18px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon20 />
        <TextContainer10 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Data Point-preset">
        <div className="content-stretch flex gap-[18px] items-start relative shrink-0 w-full" data-name="Data Point">
          <LeadingIcon21 />
          <TextContainer11 />
        </div>
      </div>
    </div>
  );
}

function LeadingIcon22() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="relative rounded-[8px] shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="users">
          <div className="-translate-y-1/2 absolute aspect-[19.5/14.500001907348633] left-[8.33%] right-[8.33%] top-[calc(50%-0.5px)]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
              <g id="Vector">
                <path d={svgPaths.p35e5ed00} fill="var(--fill-0, #294269)" />
                <path d={svgPaths.p1e10fc00} fill="var(--fill-0, #294269)" />
                <path d={svgPaths.p176c65c0} fill="var(--fill-0, #294269)" />
                <path d={svgPaths.p1ff41000} fill="var(--fill-0, #294269)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-w-full relative shrink-0 text-[#7d7f82] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Contratista</p>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-[256px]">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#26292e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[19px]">INVERSIONES Y PROYECTOS LAS TORRES</p>
        </div>
        <div className="content-stretch flex items-center justify-center max-h-[28px] max-w-[28px] min-h-[28px] min-w-[28px] overflow-clip p-[6px] relative rounded-[4px] shrink-0" data-name="Buttons">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
            <div className="-translate-y-1/2 absolute aspect-[20/16] left-[7.29%] right-[9.38%] top-[calc(50%-0.25px)]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                <path d={svgPaths.pea533b0} fill="var(--fill-0, #0056AC)" id="Path" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingIcon23() {
  return (
    <div className="bg-[#e6f5fa] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative" data-name="Text Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7d7f82] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Entidad Convocante</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#294269] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[17px]">20601938058</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center overflow-hidden relative shrink-0 text-[#26292e] text-[16px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Entidad ConvocanteGOBIERNO REGIONAL DE LORETO UNIDAD EJECUTORA SALUD UCAYALI - CONTAMANA</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Data Point-preset">
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Data Point">
          <LeadingIcon22 />
          <Container29 />
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[18px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon23 />
        <TextContainer12 />
      </div>
    </div>
  );
}

function LeadingIcon24() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Descripción</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">GASOLINA REGULAR</p>
      </div>
    </div>
  );
}

function LeadingIcon25() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Lugar de ejecución de la prestación</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">LORETO/UCAYALI/CONTAMANA</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon24 />
        <Container30 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon25 />
        <Container31 />
      </div>
    </div>
  );
}

function LeadingIcon26() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Descripción</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">GASOLINA REGULAR</p>
      </div>
    </div>
  );
}

function LeadingIcon27() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Lugar de ejecución de la prestación</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">LORETO/UCAYALI/CONTAMANA</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon26 />
        <Container32 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon27 />
        <Container33 />
      </div>
    </div>
  );
}

function LeadingIcon28() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Descripción</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">GASOLINA REGULAR</p>
      </div>
    </div>
  );
}

function LeadingIcon29() {
  return (
    <div className="bg-[#f2f9ff] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Leading Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[13.54%_20.83%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.5">
            <g id="Path">
              <path d={svgPaths.pfa21200} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p15268c80} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1dbfd780} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p1b2eca52} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p14947e00} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.pbe8f480} fill="var(--fill-0, #294269)" />
              <path d={svgPaths.p16a7a200} fill="var(--fill-0, #294269)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px relative self-stretch text-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#7d7f82] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">Lugar de ejecución de la prestación</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center relative shrink-0 text-[#26292e] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">LORETO/UCAYALI/CONTAMANA</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon28 />
        <Container34 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Data Point">
        <LeadingIcon29 />
        <Container35 />
      </div>
    </div>
  );
}

function Slot2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Slot">
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start pb-[24px] pt-[16px] px-[24px] relative size-full">
        <Slot2 />
      </div>
    </div>
  );
}

function TableSlotArea() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table-Slot-Area">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[32px] relative size-full">
        <div className="relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Accordion-Slot-Area">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
            <div className="bg-white content-stretch flex flex-col h-[76px] items-start overflow-clip relative shrink-0 w-full" data-name="Accordion">
              <AcordeonCuadernoPadre />
            </div>
            <Content1 />
          </div>
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-[0_0_-1px_0] pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
        </div>
        <div className="relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Accordion-Slot-Area">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col h-[76px] items-start overflow-clip relative shrink-0 w-full" data-name="Accordion">
              <AcordeonCuadernoPadre1 />
            </div>
            <Content2 />
          </div>
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-[0_0_-1px_0] pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
        </div>
        <div className="relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Accordion-Slot-Area">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
            <div className="bg-white content-stretch flex flex-col h-[76px] items-start overflow-clip relative shrink-0 w-full" data-name="Accordion">
              <AcordeonCuadernoPadre2 />
            </div>
            <Content3 />
          </div>
          <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-[0_0_-1px_0] pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Title_body">
        <Container4 />
      </div>
      <Frame2 />
      <TableSlotArea />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[32px] relative size-full">
          <div className="h-[86px] relative shrink-0 w-[1792px]">
            <div className="absolute inset-[0_0_11.63%_0]" data-name="Subtract">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1792 76">
                <path d={svgPaths.p23972500} fill="var(--fill-0, #E9F7F7)" id="Subtract" />
              </svg>
            </div>
            <MenuPasos />
          </div>
          <Frame3 />
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

function Frame() {
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

function Frame1() {
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

export default function TemplateBuscadorPublico() {
  return (
    <div className="bg-[#f4f8fb] content-stretch flex flex-col gap-[24px] isolate items-center relative size-full" data-name="Template-BuscadorPublico">
      <MenuHeader />
      <AllContent />
      <div className="bg-[#26292e] relative shrink-0 w-full z-[1]" data-name="Header and footer">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[80px] items-center px-[32px] py-[13px] relative size-full">
            <Frame />
            <Frame1 />
          </div>
        </div>
      </div>
    </div>
  );
}