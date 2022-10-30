import React, { useState } from 'react'
import { tabButtonTypes } from '../../types'
import { modalTabs } from '../../utilities/statics'
import CloseModal from './CloseModal'
import CommingSoon from './CommingSoon'
import InstallLinux from './InstallLinux'
import { ModalbackgroundWrapper, ModalContainer, ModalTabsContainer } from './style'
import TabButton from './TabButton'


interface InstallModal{
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    isModalOpen: boolean
}
export default function InstallModal({ setIsModalOpen, isModalOpen }: InstallModal) {
    const [ currentTab, setCurrentTab ] = useState<tabButtonTypes>(modalTabs[0].title)

    const tabs = modalTabs.map( (tabItem, index) => <TabButton key={index} currentTab={currentTab} setCurrentTab={setCurrentTab} title={tabItem.title} /> )
    const currentComponentData = modalTabs.find( tabItem => currentTab === tabItem.title )

  return (
    <ModalbackgroundWrapper className={`${isModalOpen ? 'flex': 'hidden'}`} onClick={() => setIsModalOpen(false)}>
        <ModalContainer className='p-4 md:p-12 overflow-visible relative mt-header' onClick={e => e.stopPropagation()}>
            <CloseModal setIsModalOpen={setIsModalOpen} />
            <ModalTabsContainer className='flex justify-start items-start overflow-x-scroll md:overflow-hidden w-full'>
                { tabs }
            </ModalTabsContainer>

            { currentComponentData?.component }
        </ModalContainer>
    </ModalbackgroundWrapper>
  )
}
