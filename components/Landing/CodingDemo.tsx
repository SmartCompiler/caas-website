import React from 'react'
import { medias } from '../../utilities/statics'

export default function CodingDemo() {
  return (
    <div className='hidden md:block h-80 overflow-hidden rounded-sm shadow-2xl shadow-black'>
        <img src={medias.landingCodeDemo} className='h-full' alt="code smaple" />
    </div>
  )
}
