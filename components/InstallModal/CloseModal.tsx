import Image from 'next/image'
import React from 'react'
import { CloseModalButon } from './style'

interface CloseModalInt{
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function CloseModal({setIsModalOpen}: CloseModalInt) {
    const handleClickCloseModal = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsModalOpen(false)
    }
  return (
    <CloseModalButon className='md:hidden absolute right-2' onClick={handleClickCloseModal} >
        <Image width={20} height={20} src='/Close.png' alt='close modal' />
    </CloseModalButon>
  )
}
