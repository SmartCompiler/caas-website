import React, { useEffect, useRef, useState } from 'react'
import { intersectionOption } from '../../utilities/configs'
import { medias, StaticMessges } from '../../utilities/statics'
import StaticsContainer from './StaticsContainer'
import { StatisticsWrapper } from './style'


export default function Statistics() {
    const statisticRef = useRef<HTMLElement>(null)
    const [ isComponentVisited, setIsComponentVisited ] = useState(false)

    const onVisitedCallback = (entry:IntersectionObserverEntry[]) => {
        if( entry[0].isIntersecting ) setIsComponentVisited(true)
    }
 
    useEffect( () => {
        const observer = new IntersectionObserver( onVisitedCallback, intersectionOption )

        if( statisticRef.current ) observer.observe(statisticRef.current)
    }, [])
  return (
    <StatisticsWrapper ref={statisticRef} className='w-full flex flex-col items-center justify-start mb-28 pt-4'>
        <div className='text-gray_light mx-auto text-2xl mb-6'>{ StaticMessges.statistices.title }</div>
        <StaticsContainer isVisited={isComponentVisited} />
    </StatisticsWrapper>
  )
}
