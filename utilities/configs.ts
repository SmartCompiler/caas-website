import { SphereRectInt } from "../components/roadmap/SphereInfo"

export const intersectionOption = {
    root: null,
    rootMargin: '0px',
    threshold: [0.20]
}

export const mediaQueries = {
    sm: 640,
    md: 768,
    lg: 1024,
    lg2: 1210,
    xl: 1280,
    "2xl": 1536,
    "3xl": 1800,
    "4xl": 2150,
    "5xl": 2400
}

export const sphereConfigs = {
    maxFirstLineTop: 70,
    maxFirstLineLeft: 100,
    maxFirstLineBottom: (sphereRect: SphereRectInt) => (sphereRect.height * 5.6)/ 7,
    maxFirstLineRight: (sphereRect: SphereRectInt) => (sphereRect.width * 5.1)/ 7,
    linesType: {
        single: 1,
        double: 2,
        thriple: 3
    },
    maxEndPointBasedOnScreenWidth: {
        screen: 1400,
        "5xl": 550,
        "4xl": 650,
        "3xl": 750,
        lg2X: 880,
        lgX: 930
    }
}