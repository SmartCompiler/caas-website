import React from 'react'
import { medias, sectionsTitle, StaticMessges } from '../../utilities/statics'
import FeatureItem from './FeatureItem'
import { FeatureItemContainer, FeaturesDescWrapper } from './style'

export default function Features() {
    
    const featurItems = StaticMessges.features.featureItem.map(( item, index ) => {
        const left_row_start = index === 0 ? 1 : 3
        const right_row_start = index === 2 ? 2 : 4

        const row_start = index < 2 ? left_row_start : right_row_start

        const left_or_right_row_last = index < 2 ? 5 : 6 
        const left_or_right_row_first = index < 2 ? 3 : 4 
        
        const row_end = index === 0 || index === 2  ? left_or_right_row_first : left_or_right_row_last

        const col_start = index < 2 ? 1 : 2
        const col_end = index < 2 ? 2 : 3
        return <FeatureItem 
                    key={ 'feature_item' + index }
                    col_end={col_end}
                    col_start={col_start}
                    row_start={row_start}
                    row_end={row_end}
                    name={item.name} 
                    title={item.title}
                    description={item.description}
                    img={medias.icons[item.name]}
                    />
})
  return (
    <section id={sectionsTitle[1]} className='container flex mx-auto border-1 rounded-md border-gray overflow-visible h-96 md:mb-64 lg:mb-48 xl:mb-36'>
        <FeaturesDescWrapper className='h-full w-1/2 flex flex-col items-start justify-center px-12'>
            <div className='font-bold w-11/12 mb-7'>{ StaticMessges.features.title }</div>
            <div className='w-11/12'>{ StaticMessges.features.description }</div>
        </FeaturesDescWrapper>
        <div className='w-1/2 px-7'>
            <FeatureItemContainer className='relative mx-auto px-2 grid'>
                { featurItems }
            </FeatureItemContainer>
        </div>
        
    </section>
  )
}
