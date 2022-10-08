import React, { useEffect, useRef, useState } from 'react'
import { StaticMessges } from '../../utilities/statics'
import StaticItem from './StaticItem'

interface StatisticContainerInterface {
    isVisited: boolean
}
export default function StaticsContainer({ isVisited }:StatisticContainerInterface) {
    const statisticItems = StaticMessges.statistices.items.map( (item, index) => (
        <StaticItem 
            isVisited={isVisited}
            key={'statistice_'+ index } 
            count={item.count} 
            title={item.title} 
            unit={item.unit} 
            index={index}
            />
    ))
  return (
    <div className='container flex justify-start md:justify-around items-end flex-wrap md:flex-nowrap'>
        { statisticItems }
    </div>
  )
}
