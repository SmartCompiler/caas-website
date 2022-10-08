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
    <StatisticsWrapper ref={statisticRef} className='relative h-auto sm:h-96 w-full flex flex-col items-center justify-start mb-10 sm:mb-28 pt-4'>
        <div className='text-gray_light mx-auto text-xl sm:text-2xl mb-6'>{ StaticMessges.statistices.title }</div>
        <StaticsContainer isVisited={isComponentVisited} />
        <div className='w-full h-40 sm:h-64 overflow-hidden flex justify-center items-end'>
          <img src={medias.statistics} className="object-cover w-full h-full" alt="dotted line network" />
        </div>
    </StatisticsWrapper>
  )
}
