import React from 'react'
import { companyDetails, medias } from '../../utilities/statics'

export default function Socials() {
  return (
    <div className="socials flex flex-row md:flex-col justify-between items-center md:items-start md:justify-start justify-self-end row-start-3 md:row-start-1 col-start-1 md:col-start-auto col-span-3 w-full md:col-span-full md:pl-10 lg:pl-0">
        <div className='w-full flex flex-col items-start text-lg md:text-base '>
            <span>Follow Us On:</span>
            <ul className='w-full flex '>
                <li className='w-10 md:w-8 h-10 md:h-8'>
                    <a target={'_blank'} href={companyDetails.socials.github}>
                        <img className='w-full h-full' src={ medias.icons.gitHub } />
                    </a>
                </li>
            </ul>
        </div>

        <div className="copy-right mt-0 md:mt-5 text-xs whitespace-nowrap self-start md:self-auto">{ companyDetails.copyright }</div>
    </div>
  )
}
