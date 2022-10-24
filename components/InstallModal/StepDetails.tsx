import React from 'react'
import { CodeContainer } from './style'
import Image from 'next/image'

interface StepDetails{
    title: string
    description?: string
    code: JSX.Element
}
export default function StepDetails({ title, description, code }: StepDetails) {
  return (
    <div className='flex flex-col mb-10'>
        <div className='mb-2 text-lg'>{ title }</div>
        <p className='pl-4 mb-2 w-3/4'>{description}</p>
        <CodeContainer className='pl-4 flex justify-between relative'>
            { code }
            <button className='absolute right-2'>
                <Image width={16} height={16} src='/icons/copy.svg' alt="copy icon" />     
            </button>
        </CodeContainer>
    </div>
  )
}
