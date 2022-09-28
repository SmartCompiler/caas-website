import React from 'react'
import { companyDetails, medias } from '../../utilities/statics'

export default function Socials() {
  return (
    <div className="socials flex flex-col items-start justify-self-end">
        <div className='w-full flex flex-col items-start'>
            <span>Follow Us On:</span>
            <ul className='w-full '>
                <li className='w-8 h-8'>
                    <a target={'_blank'} href={companyDetails.socials.github}>
                        <img className='w-full h-full' src={ medias.icons.gitHub } />
                    </a>
                </li>
            </ul>

            <div className="copy-right mt-5 text-xs">@ 2023 SCAAS</div>
        </div>
    </div>
  )
}