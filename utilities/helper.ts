export const checkMinMaxMediaQuery = (size:number,type: 'min'|'max' ) => window.matchMedia(`(${type}-width: ${size}px)`).matches

export const copyClipBoard = (text:string) => {
    const isEs5Copy = navigator.clipboard
    if( !isEs5Copy ) document.execCommand('copy', true, text);

    return navigator.clipboard.writeText(text)
}