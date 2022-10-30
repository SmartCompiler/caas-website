import React, { useEffect, useRef, useState } from 'react'
import { axisTypeObject } from '../../types'
import { sphereConfigs } from '../../utilities/configs'
import { SphereRectInt } from './SphereInfo'
import { LineItem } from './style'


export interface LineSvgInt {
    endPoint: axisTypeObject | undefined,
    sphereRect: SphereRectInt | undefined
}

type lineTypes = keyof typeof sphereConfigs.linesType

export default function LineSvg({ endPoint, sphereRect }: LineSvgInt) {
    const svgContainerRef = useRef<SVGSVGElement>(null)
    const [ startPoint, setStartPoint ] = useState<{x:number, y:number}>()
    const [lineType, setLines] = useState<lineTypes>('single')
    
    useEffect( () => {
        const startPoint = {
            x: (svgContainerRef.current?.getBoundingClientRect().width || 1) /2,
            y: (svgContainerRef.current?.getBoundingClientRect().height || 1) /2,
        }
        setStartPoint(startPoint)
    }, [sphereRect])
    if( !sphereRect || !startPoint || !endPoint ) return <></>
    
    const { 
        maxFirstLineXAxis,
        maxFirstLineYAxis, 
        isEndPointOnTopSection, 
        endPointBasedSvg 
    } = getMaxFirstLineAxis({startPoint, endPoint}, sphereRect)

    const isNotBetweenMaxXAxis = (endPointBasedSvg.x < maxFirstLineXAxis && endPointBasedSvg.x < startPoint.x) || (endPointBasedSvg.x > maxFirstLineXAxis && endPointBasedSvg.x > startPoint.x) 
    const validationMoreIfOnTopSectionOfSphere = isEndPointOnTopSection && endPointBasedSvg.y < maxFirstLineYAxis && startPoint.x !== endPointBasedSvg.x && isNotBetweenMaxXAxis
    const validationMoreIfOnBottomSectionOfSphere =  !isEndPointOnTopSection && endPointBasedSvg.y > maxFirstLineYAxis && startPoint.x !== endPointBasedSvg.x && endPointBasedSvg.x < maxFirstLineXAxis
    const isEndPointMoreThanSphereHeightAndWidth = validationMoreIfOnTopSectionOfSphere || validationMoreIfOnBottomSectionOfSphere

    const validationMoreIfOnTopSectionOfSphereForlessHeight = (isEndPointOnTopSection && endPointBasedSvg.y > maxFirstLineYAxis && startPoint.x !== endPointBasedSvg.x)
    const validationMoreIfOnBottomSectionOfSphereForlessHeight = (!isEndPointOnTopSection && endPointBasedSvg.y < maxFirstLineYAxis && startPoint.x !== endPointBasedSvg.x) 
    const isEndPointLessThanSphereHeightAndLessThantWidth = validationMoreIfOnTopSectionOfSphereForlessHeight || validationMoreIfOnBottomSectionOfSphereForlessHeight

    if( isEndPointMoreThanSphereHeightAndWidth && lineType !== 'thriple' ) setLines('thriple')
    if( isEndPointLessThanSphereHeightAndLessThantWidth && lineType !== 'double' ) setLines('double')

    const linesSvg = Array.from({length: sphereConfigs.linesType[lineType]}).map((_line, index) => {
        let {x1, y1, x2, y2} = getLineData({startPoint, endPoint:endPointBasedSvg}, index)

        return <LineItem key={index} delay={index * 1000} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#F8FBF9" strokeWidth={1.5} ></LineItem>
    })

        
    function getLineData({startPoint, endPoint}:{startPoint: axisTypeObject, endPoint: axisTypeObject}, index:number){
        let lineData = getSingleLineData(startPoint, endPoint)

        if( lineType !== 'single' && index === 0 ) lineData = notSingleLineGetMaxLineData(startPoint, endPoint)

        if( lineType === 'double') lineData = getDoubleLineData(lineData, index)

        if( lineType === 'thriple') lineData = getThripleLineData(lineData, index)

        return lineData
    }

    function getSingleLineData(startPoint: axisTypeObject, endPoint: axisTypeObject){
        return {
            x1: startPoint.x,
            y1: startPoint.y,
            x2: endPoint.x,
            y2: endPoint.y
        }
    }

    function notSingleLineGetMaxLineData(startPoint: axisTypeObject, endPoint: axisTypeObject) {
        let {x1, y1} = getSingleLineData(startPoint, endPoint)
        
        const isLineTopSectionAndLessThanMaxTop = (isEndPointOnTopSection && endPoint.y <= maxFirstLineYAxis)
        const isLineBottomSectionAndLessThanMaxBottom = (!isEndPointOnTopSection && endPoint.y >= maxFirstLineYAxis)
        return {
            x1, 
            y1,
            x2: maxFirstLineXAxis,
            y2: (isLineTopSectionAndLessThanMaxTop || isLineBottomSectionAndLessThanMaxBottom)  ? maxFirstLineYAxis: endPoint.y
        }
    }

    function getDoubleLineData(lineData: {x1:number, y1:number, x2:number,y2:number}, index:number){

        const isLineTopSectionAndLessThanMaxTop = (isEndPointOnTopSection && endPointBasedSvg.y <= maxFirstLineYAxis)
        const isLineBottomSectionAndLessThanMaxBottom = (!isEndPointOnTopSection && endPointBasedSvg.y >= maxFirstLineYAxis)
        if( index === 1 ){
            lineData.x1 = maxFirstLineXAxis
            lineData.y1 = (isLineTopSectionAndLessThanMaxTop || isLineBottomSectionAndLessThanMaxBottom)  ? maxFirstLineYAxis: endPointBasedSvg.y,
            lineData.x2 = endPointBasedSvg.x
            lineData.y2 = endPointBasedSvg.y 
        }

        return lineData
    }

    function getThripleLineData(lineData: {x1:number, y1:number, x2:number,y2:number}, index:number){
        const offsetToDivision = isEndPointOnTopSection ? 4 : 2
        if( index === 1 ){
            lineData.x1 = maxFirstLineXAxis
            lineData.y1 = maxFirstLineYAxis
            lineData.x2 = endPointBasedSvg.x
            lineData.y2 = (endPointBasedSvg.y + maxFirstLineYAxis) / offsetToDivision
        }

        if( index === 2 ){
            lineData.x1 = endPointBasedSvg.x 
            lineData.y1 = (endPointBasedSvg.y + maxFirstLineYAxis) / offsetToDivision
            lineData.x2 = endPointBasedSvg.x
            lineData.y2 = endPointBasedSvg.y
        }

        return lineData
    }

  return (
    <svg ref={svgContainerRef} className='absolute overflow-visible h-full w-full'>
        {linesSvg}
    </svg>
  )
}



function getMaxFirstLineAxis({endPoint, startPoint}: {endPoint:axisTypeObject, startPoint: axisTypeObject }, sphereRect: SphereRectInt) {
    //set max y and x axis
    let maxFirstLineYAxis = sphereConfigs.maxFirstLineTop
    let maxFirstLineXAxis = sphereConfigs.maxFirstLineLeft

    //get lineType count
    const endPointBasedSvg = {
        y: endPoint.y - sphereRect.top,
        x: endPoint.x - sphereRect.left
    }

    const isEndPointOnTopSection = endPointBasedSvg.y < startPoint.y
    const isEndPointOnRightSection = endPointBasedSvg.x > startPoint.x
    if( !isEndPointOnTopSection ) maxFirstLineYAxis = sphereConfigs.maxFirstLineBottom(sphereRect);
    if( isEndPointOnRightSection ) maxFirstLineXAxis = sphereConfigs.maxFirstLineRight(sphereRect);

    return {
        maxFirstLineXAxis,
        maxFirstLineYAxis,
        isEndPointOnTopSection,
        isEndPointOnRightSection,
        endPointBasedSvg
    }
}
