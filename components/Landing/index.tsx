import React, { useState } from 'react'
import { medias, sectionsTitle, StaticMessges } from '../../utilities/statics'
import PrimaryBtn from '../global/primaryBtn'
import CodingDemo from './CodingDemo'
import InstallModal from '../InstallModal'
import { LandingWrapper } from './style'

export default function Landing() {
  const [ isModalOpen, setIsModalOpen ] = useState(false)

  return (
    <>
      <InstallModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <LandingWrapper id={sectionsTitle[0]} className='w-full pt-20 mb-0 sm:mb-28 px-10'>

        <div className='container mx-auto flex flex-col items-start'>

            <h1 className='text-2xl sm:text-4xl mb-1 sm:mb-4'>{ StaticMessges.landing.title }</h1>

            <div className='w-64 mb-4 text-sm'>{ StaticMessges.landing.description }</div>

            <PrimaryBtn text={ StaticMessges.landing.button } classNames='mb-4' onClickHandler={() => setIsModalOpen(true)}/>

            <CodingDemo />

        </div>

      </LandingWrapper>
    </>
  )
}
