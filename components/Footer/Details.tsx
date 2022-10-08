import React from 'react'
import { companyDetails } from '../../utilities/statics'

export default function Details() {
    const adresses = companyDetails.address.map( (adr, index) => (<div className='text-xs' key={`address_${index}`}> { adr }</div>))

    
  return (
    <div className="addressWrapper flex flex-col items-start row-start-1 col-start-1 col-span-1">
        <div className='mb-2 text-lg'>SCASS</div>
        <div className="text-xs tel">{ companyDetails.tel }</div>
        <div className='text-xs email'>{ companyDetails.email }</div>
        { adresses }
    </div>
  )
}
