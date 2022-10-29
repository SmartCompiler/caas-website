export const intersectionOption = {
    root: null,
    rootMargin: '0px',
    threshold: [0.20]
}

export const mediaQueries = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536 
}

// interface sphereConfigsInt {
//     linesType: {single:1, double:2, thriple:3}
//     maxFirstLineTop: number,
//     maxFirstLineLeft: number,
//     maxFirstLineBottom: (sphereRect: DOMRect) => number,
//     maxFirstLineRight: (sphereRect: DOMRect) => number,
// }
export const sphereConfigs = {
    maxFirstLineTop: 70,
    maxFirstLineLeft: 100,
    maxFirstLineBottom: (sphereRect: DOMRect) => (sphereRect.height * 5.6)/ 7,
    maxFirstLineRight: (sphereRect: DOMRect) => (sphereRect.width * 5.6)/ 7,
    linesType: {
        single: 1,
        double: 2,
        thriple: 3
    }
}