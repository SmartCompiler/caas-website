import React from 'react'
import { medias, sectionsTitle, StaticMessges } from '../../utilities/statics'
import PrimaryBtn from '../global/primaryBtn'
import CodingDemo from './CodingDemo'
import { LandingWrapper } from './style'

export default function Landing() {
  return (
    <LandingWrapper id={sectionsTitle[0]} className='w-full pt-20 mb-28'>

      <div className='container mx-auto flex flex-col items-start'>

          <h1 className='text-4xl mb-4'>{ StaticMessges.landing.title }</h1>

          <div className='w-64 mb-4'>{ StaticMessges.landing.description }</div>

          <PrimaryBtn text={ StaticMessges.landing.button } classNames='mb-4' />

          <CodingDemo />

      </div>

    </LandingWrapper>
  )
}
