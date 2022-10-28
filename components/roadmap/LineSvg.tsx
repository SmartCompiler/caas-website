import React from 'react'

interface LineSvgInt {
    startPoint: {
        x: number,
        y: number
    },
    endPoint: {
        x: number,
        y: number
    },
    sphereRect: {
        top: number,
        bottom: number,
        left: number
    } | undefined
}
export default function LineSvg({startPoint, endPoint, sphereRect}: LineSvgInt) {
    if( !sphereRect ) return <></>

    const maxFirstLineTop = (sphereRect.top * 6)/ 7
    const maxFirstlineX = (sphereRect.left * 6)/ 7
    //get lines count
    let lines = 1

    const isEndPointMoreThanSphereHeightAndWidth = endPoint.y > maxFirstLineTop && startPoint.x !== endPoint.x
    const isEndPointLessThanSphereHeightAndLessThantWidth = endPoint.y < maxFirstLineTop && startPoint.x !== endPoint.x
    if( isEndPointMoreThanSphereHeightAndWidth ) lines = 3
    if( isEndPointLessThanSphereHeightAndLessThantWidth ) lines = 2
    
    const linesSvg = Array.from({length: lines}).map((_line, index) => {
        let x1 = startPoint.x;
        let y1 = startPoint.y;
        let x2 = endPoint.x;
        let y2 = endPoint.y;

        //check lines count 
        if( lines !== 1 && index === 0 ){
            x2 = maxFirstlineX
            y2 = maxFirstLineTop
        }

        if( lines === 2 && index === 1){
            x1 = maxFirstlineX
            y1 = maxFirstLineTop
            x2 = endPoint.x
            y2 = endPoint.y
        }
        //get max y befor height of sphere
        

        return <line x1={x1} y1={startPoint.x} x2={x2} y2={y2} stroke="white" strokeWidth={5}></line>
    })
  return (
    <svg className='absolute'>
        {linesSvg}
    </svg>
  )
}
