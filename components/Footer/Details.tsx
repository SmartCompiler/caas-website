import React from 'react'
import { companyDetails } from '../../utilities/statics'

export default function Details() {
    const adresses = companyDetails.address.map( (adr, index) => (<div key={`address_${index}`}> { adr }</div>))

    
  return (
    <div className="addressWrapper flex flex-col items-start">
        <div className='mb-2 text-lg'>SCASS</div>
        <div className="text-xs tel">{ companyDetails.tel }</div>
        <div className='text-xs email'>{ companyDetails.email }</div>
        <div className='text-xs address whitespace-pre w-full flex flex-col'>
            { adresses }
        </div>
    </div>
  )
}
