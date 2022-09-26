import React from 'react'
import { SubscriptionButton, SubscriptionInput } from './style'

export default function Subscriptions() {
  return (
    <div className="subscribtion flex flex-col items-start">
        <div className="mb-2">Subscribe to Our newsletter</div>
        <form className='w-full flex flex-col items-start'>
            <label htmlFor="subscribtionInput" className="text-xs mb-2">Email*</label>
            <SubscriptionInput type="text" id='subscribtionInput' className='bg-transparent border-gray p-2 mb-2' />
            <SubscriptionButton className='px-3 py-2 bg-transparent hover:bg-primary hover:color-white'>Submit</SubscriptionButton>
        </form>
    </div>
  )
}
