import svgPaths from "./svg-cxu3m0l5va";
type TablaAcfItemCantProps = {
  className?: string;
  propiedad1?: "Head" | "Body" | "Propiedad 13";
};

function TablaAcfItemCant({ className, propiedad1 = "Head" }: TablaAcfItemCantProps) {
  const isBody = propiedad1 === "Body";
  const isBodyOrPropiedad13 = ["Body", "Propiedad 13"].includes(propiedad1);
  const isHead = propiedad1 === "Head";
  const isPropiedad13 = propiedad1 === "Propiedad 13";
  return (
    <div className={className || "content-stretch flex items-center relative w-[1415px]"}>
      {isBodyOrPropiedad13 && (
        <>
          <div className="bg-white content-stretch flex items-center min-h-[56px] min-w-[56px] relative shrink-0 w-[56px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
              {isBody && (
                <button className="content-stretch cursor-pointer flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                  <div className="relative shrink-0 size-[24px]" data-name="Checkbox">
                    <div className="absolute bg-[#294269] inset-[16.67%] rounded-[4px]" data-name="Box" />
                    <div className="absolute inset-[16.67%]" data-name="Icon">
                      <div className="absolute inset-[31.25%_21.88%]" data-name="check-alternative">
                        <div className="absolute inset-[-12.5%_-8.33%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 7.5">
                            <path d={svgPaths.p7494760} id="check-alternative" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              )}
              {isPropiedad13 && (
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                  <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="Checkbox">
                    <div className="absolute bg-white border-[#bebfc0] border-[1.5px] border-solid inset-[16.67%] rounded-[4px]" data-name="Box" />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white content-stretch flex gap-[4px] items-center max-h-[56px] min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[140px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[17px]">{isPropiedad13 ? "236" : isBody ? "234" : ""}</p>
              </div>
            </div>
          </div>
          <div className="bg-white flex-[1_0_0] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[17px]">Materiales de escritorio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex gap-[8px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[100px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Objeto">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={isPropiedad13 ? "0 0 24 24" : "0 0 16 16"}>
                <g id="Path">
                  <path d={isPropiedad13 ? svgPaths.p3c36e280 : svgPaths.p3036fb80} fill="var(--fill-0, #294269)" />
                </g>
              </svg>
            </div>
            <div className="flex flex-row items-center self-stretch">
              <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[17px]">1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white flex-[1_0_0] min-h-[56px] min-w-px relative" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center min-h-[inherit] px-[16px] py-[14px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[17px]">{isPropiedad13 ? "folder manila" : isBody ? "Lapicero color azul" : ""}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[125px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[17px]">{isPropiedad13 ? "300" : isBody ? "500" : ""}</p>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex gap-[4px] items-center min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[130px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[17px]">unidad</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <div className="bg-white h-full relative shrink-0 w-[180px]" data-name="BodyCell-Table">
              <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Date Container">
                    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-full" data-name="Date Container">
                      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[17px]">12</p>
                      </div>
                      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
                          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
                        </svg>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[17px]">02</p>
                      </div>
                      <div className="h-[10px] relative shrink-0 w-[5px]" data-name="Separator">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
                          <path d={svgPaths.p3bc52b00} fill="var(--fill-0, #26292E)" id="Separator" />
                        </svg>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[17px]">2027</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex gap-[4px] items-center max-h-[56px] min-h-[56px] px-[16px] py-[14px] relative shrink-0 w-[150px]" data-name="BodyCell-Table">
            <div aria-hidden className="absolute border-[#dee3ea] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] h-[28px] items-center min-w-px relative" data-name="Container">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[17px]">{isPropiedad13 ? "cmn" : isBody ? "seace" : ""}</p>
              </div>
            </div>
          </div>
        </>
      )}
      {isHead && (
        <>
          <div className="bg-[#e8f2f7] content-stretch flex items-center px-[16px] py-[8px] relative shrink-0 size-[56px]" data-name="HeaderCell-Table">
            <button className="content-stretch cursor-pointer flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
              <div className="relative shrink-0 size-[24px]" data-name="Checkbox">
                <div className="absolute bg-[#294269] inset-[16.67%] rounded-[4px]" data-name="Box" />
                <div className="absolute inset-[16.67%]" data-name="Icon">
                  <div className="absolute inset-[31.25%_21.88%]" data-name="check-alternative">
                    <div className="absolute inset-[-12.5%_-8.33%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 7.5">
                        <path d={svgPaths.p7494760} id="check-alternative" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <div className="bg-[#e8f2f7] h-full max-h-[56px] min-h-[46px] relative shrink-0 w-[140px]" data-name="Table header">
              <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center max-h-[inherit] min-h-[inherit] px-[16px] py-[11px] relative size-full">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
                      N° de Referencia
                    </p>
                  </div>
                  <div className="relative shrink-0 size-[24px]" data-name="Double tip_table">
                    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Double tip">
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
          <div className="bg-[#e8f2f7] flex-[1_0_0] h-[56px] min-w-px relative" data-name="Table header">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Descripción
                  </p>
                </div>
                <div className="relative shrink-0 size-[24px]" data-name="Double tip_table">
                  <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Double tip">
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
          <div className="bg-[#e8f2f7] content-stretch flex gap-[8px] h-[56px] items-center px-[16px] py-[11px] relative shrink-0 w-[100px]" data-name="Table header">
            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
                N° de Ítem
              </p>
            </div>
            <div className="relative shrink-0 size-[24px]" data-name="Double tip_table">
              <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Double tip">
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
          <div className="bg-[#e8f2f7] flex-[1_0_0] h-[56px] min-w-px relative" data-name="Table header">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Descripción del Ítem
                  </p>
                </div>
                <div className="relative shrink-0 size-[24px]" data-name="Double tip_table">
                  <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Double tip">
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
          <div className="bg-[#e8f2f7] content-stretch flex gap-[8px] h-[56px] items-center px-[16px] py-[11px] relative shrink-0 w-[125px]" data-name="Table header">
            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
                Cantidad
              </p>
            </div>
            <div className="relative shrink-0 size-[24px]" data-name="Double tip_table">
              <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Double tip">
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
          <div className="bg-[#e8f2f7] content-stretch flex gap-[8px] h-[56px] items-center px-[16px] py-[11px] relative shrink-0 w-[130px]" data-name="Table header">
            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
                Unidad de medida
              </p>
            </div>
            <div className="relative shrink-0 size-[24px]" data-name="Double tip_table">
              <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Double tip">
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
          <div className="bg-[#e8f2f7] content-stretch flex gap-[8px] h-[56px] items-center px-[16px] py-[11px] relative shrink-0 w-[180px]" data-name="Table header">
            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
                Fecha aprox de la convocatoria
              </p>
            </div>
            <div className="relative shrink-0 size-[24px]" data-name="Double tip_table">
              <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Double tip">
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
          <div className="flex flex-row items-center self-stretch">
            <div className="bg-[#e8f2f7] h-full max-h-[56px] min-h-[46px] relative shrink-0 w-[150px]" data-name="HeaderCell-Table">
              <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center max-h-[inherit] min-h-[inherit] px-[16px] py-[11px] relative size-full">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Header Container">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[17px] min-w-px overflow-hidden relative text-[#294269] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Origen
                    </p>
                  </div>
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
        </>
      )}
    </div>
  );
}

function IcoPlus({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white overflow-clip relative size-[40px]"} data-name="ico_plus">
      <div className="absolute inset-[5%_17.5%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 36">
          <g id="Vector">
            <path d={svgPaths.p1df9080} fill="#294269" />
            <path d={svgPaths.pd43bb00} fill="var(--fill-0, #E2A615)" />
            <path d={svgPaths.p20381280} fill="var(--fill-0, #E2A615)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function AcfModalCrearPublicar({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[960px]"} data-name="ACF-Modal-CrearPublicar">
      <div className="bg-white content-stretch flex items-center pb-[16px] pt-[24px] px-[24px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[960px]" data-name="Dialog">
        <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="title">
          <IcoPlus className="bg-white overflow-clip relative shrink-0 size-[40px]" />
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px relative text-[#294269] text-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[32px]">Creación y Publicación del ACF</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Close button">
            <div className="-translate-y-1/2 absolute aspect-[11.400001525878906/11.400001525878906] left-[26.25%] right-[26.25%] top-1/2" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4 11.4">
                <path d={svgPaths.p26f90800} fill="var(--fill-0, #7D7F82)" id="Path" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Modal-Content">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
          <div className="relative rounded-[16px] shrink-0 w-full" data-name="cabecera-data">
            <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] relative size-full">
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Row">
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Col1">
                    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Dato">
                      <div className="bg-[#eaedf0] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="business">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="Path">
                              <path d={svgPaths.pa678c80} fill="var(--fill-0, #294269)" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0 w-[267px]">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Nombre de Entidad
                          </p>
                        </div>
                        <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] relative shrink-0 text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                          000000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative self-stretch" data-name="Col2">
                    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Dato">
                      <div className="bg-[#eaedf0] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="business">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="Path">
                              <path d={svgPaths.pa678c80} fill="var(--fill-0, #294269)" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0 w-[267px]">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Cod de ACF
                          </p>
                        </div>
                        <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] relative shrink-0 text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                          2027
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Dato">
                      <div className="bg-[#eaedf0] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="business">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="Path">
                              <path d={svgPaths.pa678c80} fill="var(--fill-0, #294269)" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0 w-[267px]">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Procedimiento de selección
                          </p>
                        </div>
                        <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] relative shrink-0 text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Licitación Pública
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Row">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-name="Col1">
                    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start min-w-px relative" data-name="Dato">
                      <div className="bg-[#eaedf0] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="business">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="Path">
                              <path d={svgPaths.pa678c80} fill="var(--fill-0, #294269)" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Objeto
                          </p>
                        </div>
                        <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] relative shrink-0 text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Obra
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start min-w-px relative" data-name="Dato">
                      <div className="bg-[#eaedf0] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="business">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="Path">
                              <path d={svgPaths.pa678c80} fill="var(--fill-0, #294269)" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0 w-[267px]">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Alcance
                          </p>
                        </div>
                        <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] relative shrink-0 text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Lima
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative self-stretch" data-name="Col2">
                    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start min-w-px relative" data-name="Dato">
                      <div className="bg-[#eaedf0] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="business">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="Path">
                              <path d={svgPaths.pa678c80} fill="var(--fill-0, #294269)" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Año
                          </p>
                        </div>
                        <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] relative shrink-0 text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                          2027
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Dato">
                      <div className="bg-[#eaedf0] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="business">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="Path">
                              <path d={svgPaths.pa678c80} fill="var(--fill-0, #294269)" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0 w-[267px]">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Plazo de entrega/ejecución
                          </p>
                        </div>
                        <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] relative shrink-0 text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                          3 meses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Row">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-name="Col1">
                    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start min-w-px relative" data-name="Dato">
                      <div className="bg-[#eaedf0] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="business">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="Path">
                              <path d={svgPaths.pa678c80} fill="var(--fill-0, #294269)" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#515458] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Descripción preliminar del requerimiento
                          </p>
                        </div>
                        <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[19px] relative shrink-0 text-[#26292e] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                          EJECUCIÓN DE OBRA: MEJORAMIENTO DEL CAMINO VECINAL EMP. PE-1N ¿ VICHAYITO ¿ PEÑA MALA ¿ EMP. PE-1N (MANCORA); EMP. PI-500 (VICHAYITO) ¿ BALNEARIO VICHAYITO SUR ¿ DISTRITO DE LOS ORGANOS ¿ PROVINCIA DE TALARA ¿ DEPARTAMENTO DE PIURA, CUI 2451032
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0 w-full" data-name="Filtro">
            <div aria-hidden className="absolute border border-[#bfc7d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-col justify-end size-full">
              <div className="content-stretch flex flex-col gap-[32px] items-start justify-end px-[32px] py-[40px] relative size-full">
                <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-[571px]" data-name="2">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text inputs">
                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#26292e] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[17px] overflow-hidden text-ellipsis">Objeto de contratación</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
                        <div aria-hidden className="absolute border border-[#294269] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#26292e] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[17px] overflow-hidden text-ellipsis">Seleccione</p>
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
                    </div>
                  </div>
                  <div className="bg-[#d4ddec] content-stretch flex gap-[4px] items-center justify-center min-h-[36px] overflow-clip px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Buttons">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="Path">
                          <path d={svgPaths.p21cef280} fill="var(--fill-0, #8A94A2)" />
                        </g>
                      </svg>
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8a94a2] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[17px]">Agregar</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="4">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Tipo de procedimiento">
                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[17px] overflow-hidden text-ellipsis">Tipo de procedimiento</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start relative shrink-0 w-full">
                      <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[4px] w-full" data-name="Input Container">
                        <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        <div className="content-stretch flex gap-[8px] items-start p-[8px] relative size-full">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-w-px relative text-[#7d7f82] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            <p className="leading-[17px]">Seleccione</p>
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
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Plazo de entrega/ejecución">
                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[17px] overflow-hidden text-ellipsis">Plazo de entrega/ejecución (días)</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start relative shrink-0 w-full">
                      <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[4px] w-full" data-name="Input Container">
                        <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        <div className="content-stretch flex gap-[8px] items-start p-[8px] relative size-full">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-w-px relative text-[#7d7f82] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            <p className="leading-[17px]">{` `}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="3">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[100px] items-start min-w-px relative rounded-[8px]" data-name="Text inputs">
                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[17px] overflow-hidden text-ellipsis">Descripción preliminar del requerimiento</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px relative w-full">
                      <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[4px] w-full">
                        <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
                          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-h-px relative text-[#7d7f82] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{` `}</p>
                          <div className="content-stretch flex items-end justify-end relative shrink-0 w-full">
                            <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center leading-[normal] relative shrink-0 text-[#979797] text-[10px] whitespace-nowrap">
                              <p className="overflow-hidden relative shrink-0 text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
                                0
                              </p>
                              <p className="overflow-hidden relative shrink-0 text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
                                /500
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[100px] items-start min-w-px relative rounded-[8px]" data-name="Alcance">
                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#3c3e43] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[17px] overflow-hidden text-ellipsis">Alcance</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px relative w-full">
                      <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[4px] w-full">
                        <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
                          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[17px] min-h-px relative text-[#7d7f82] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{` `}</p>
                          <div className="content-stretch flex items-end justify-end relative shrink-0 w-full">
                            <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center leading-[normal] relative shrink-0 text-[#979797] text-[10px] whitespace-nowrap">
                              <p className="overflow-hidden relative shrink-0 text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
                                0
                              </p>
                              <p className="overflow-hidden relative shrink-0 text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
                                /1500
                              </p>
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
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Table-Area">
            <div className="bg-[#edf0f4] relative rounded-[8px] shrink-0 w-full" data-name="Title_body">
              <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start justify-between pl-[16px] pr-[8px] py-[12px] relative size-full">
                  <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-w-px relative" data-name="Input container">
                    <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[28px]">Cantidad de ítems por contratación</p>
                    </div>
                    <div className="h-[36px] relative shrink-0 w-0">
                      <div className="absolute inset-[-1.39%_-0.5px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 37">
                          <path d="M0.5 0.5V36.5" id="Vector 189" stroke="var(--stroke-0, #BEBFC0)" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Search container">
                    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="Search input container">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[224px]" data-name="Text inputs">
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
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
                                  <p className="leading-[17px] overflow-hidden text-ellipsis">Búsqueda interna</p>
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
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table-Container">
              <TablaAcfItemCant className="content-stretch flex items-center relative shrink-0 w-[1808px]" />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tabla-ACF-ItemCant-Body">
                <TablaAcfItemCant className="content-stretch flex items-center relative shrink-0 w-[1808px]" propiedad1="Body" />
                <TablaAcfItemCant className="content-stretch flex items-center relative shrink-0 w-[1808px]" propiedad1="Body" />
                <div className="bg-[#edf0f4] relative rounded-[6px] shrink-0 w-full" data-name="Table Pagination">
                  <div aria-hidden className="absolute border-[#dee3ea] border-solid border-t inset-0 pointer-events-none rounded-[6px]" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] w-[191px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[17px]">Total de registros: 0</p>
                      </div>
                      <div className="content-center flex flex-wrap gap-[24px] items-center justify-end relative shrink-0">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Pagination">
                          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#26292e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            <p className="leading-[17px]">Registros por página</p>
                          </div>
                          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[56px]" data-name="Text inputs">
                            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                              <div className="bg-white h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Input Container">
                                <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#7d7f82] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      <p className="leading-[15px] overflow-hidden text-ellipsis">10</p>
                                    </div>
                                    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron_Down">
                                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                        <g id="Path">
                                          <path d={svgPaths.p127a9a80} fill="var(--fill-0, #294269)" />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Pagination">
                          <div className="bg-[#f6f9fc] min-h-[28px] relative rounded-[4px] shrink-0" data-name="Buttons">
                            <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
                              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_left">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                  <g id="Path">
                                    <path d={svgPaths.pbe08c80} fill="var(--fill-0, #A8A9AB)" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div aria-hidden className="absolute border border-[#c5cdda] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          </div>
                          <div className="content-stretch flex items-center justify-center overflow-clip px-[6px] relative shrink-0" data-name="Page list">
                            <div className="bg-[#294269] content-stretch flex gap-[4px] items-center justify-center min-h-[28px] overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[28px]" data-name="Buttons">
                              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f9fc] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                <p className="leading-[15px]">1</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#f6f9fc] min-h-[28px] relative rounded-[4px] shrink-0" data-name="Buttons">
                            <div className="content-stretch flex items-center justify-center min-h-[inherit] overflow-clip p-[6px] relative rounded-[inherit] size-full">
                              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                  <g id="Path">
                                    <path d={svgPaths.pb3d1df0} fill="var(--fill-0, #A8A9AB)" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div aria-hidden className="absolute border border-[#c5cdda] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] h-[61px] items-start relative shrink-0 w-[296px]" data-name="Año">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#515458] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[17px] overflow-hidden text-ellipsis">Fecha aproximada de la convocatoria</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start relative shrink-0 w-full">
              <div className="bg-[#eaedf0] flex-[1_0_0] min-h-px relative rounded-[4px] w-full" data-name="Input Container">
                <div aria-hidden className="absolute border border-[#bebfc0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[8px] py-[6px] relative size-full">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-w-px overflow-hidden relative text-[#515458] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[17px] overflow-hidden text-ellipsis">{` `}</p>
                    </div>
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_today">
                      <div className="absolute inset-[8.33%]" data-name="Path">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Path">
                            <path d={svgPaths.p19839300} fill="var(--fill-0, #8A94A2)" />
                          </g>
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
      <div className="bg-[#dee3ea] content-stretch flex items-center justify-between min-w-[650px] p-[24px] relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-[960px]" data-name="Modal_Body">
        <button className="bg-white cursor-pointer min-h-[36px] relative rounded-[4px] shrink-0" data-name="Buttons">
          <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] overflow-clip px-[12px] py-[6px] relative rounded-[inherit] size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[17px]">Cancelar</p>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </button>
        <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="group-actions">
          <button className="content-stretch cursor-pointer flex gap-[16px] items-center justify-end relative shrink-0" data-name="group-actions">
            <div className="bg-white min-h-[36px] relative rounded-[4px] shrink-0" role="button" tabIndex="0" data-name="Buttons">
              <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] overflow-clip px-[12px] py-[6px] relative rounded-[inherit] size-full">
                <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#294269] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[17px]">Guardar</p>
                </div>
              </div>
              <div aria-hidden className="absolute border border-[#6a7b96] border-solid inset-0 pointer-events-none rounded-[4px]" />
            </div>
            <div className="bg-[#294269] content-stretch flex gap-[4px] items-center justify-center min-h-[36px] overflow-clip px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Buttons">
              <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f6f9fc] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[17px]">Publicar</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}