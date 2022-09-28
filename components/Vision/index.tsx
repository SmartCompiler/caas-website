import React from 'react'
import { sectionsTitle, StaticMessges } from '../../utilities/statics'
import PrimaryBtn from '../global/primaryBtn'
import { VisionTitleWrapper } from './style'

export default function Vision() {
  return (
    <section id={sectionsTitle[2]} className='container h-auto border-gray border-1 mx-auto flex mb-20'>
        <VisionTitleWrapper className='w-1/2 flex items-center justify-center font-bold text-2xl'>{ StaticMessges.vision.title }</VisionTitleWrapper>
        <div className='flex flex-col items-start justify-center w-1/2 py-10 px-20'>
          <p className='text-gray_light mb-6'>{ StaticMessges.vision.descripiton }</p>
          <PrimaryBtn text='LearnMore' />
        </div>
    </section>
  )
}
