import React, { useState } from 'react'
import CommingSoon from './CommingSoon'
import InstallLinux from './InstallLinux'
import { ModalbackgroundWrapper, ModalContainer, ModalTabs } from './style'
import TabButton from './TabButton'

export type tabButtonTypes = 'linux'|'mac'|'windows'|'android'|'ios'|'web'

export default function InstallModal() {

    const tabsData:{ title: tabButtonTypes, component: JSX.Element}[] = [
        {
            title: 'linux',
            component: <InstallLinux />
        },
        {
            title: 'mac',
            component: <CommingSoon />
        },
        {
            title: 'windows',
            component: <CommingSoon />
        },
        {
            title: 'android',
            component: <CommingSoon />
        },
        {
            title: 'ios',
            component: <CommingSoon />
        },
        {
            title: 'web',
            component: <CommingSoon />
        },
    ]
    
    const [ currentTab, setCurrentTab ] = useState<tabButtonTypes>(tabsData[0].title)
    

    const tabs = tabsData.map( (tabItem, index) => <TabButton key={index} currentTab={currentTab} setCurrentTab={setCurrentTab} title={tabItem.title} /> )
  return (
    <ModalbackgroundWrapper>
        <ModalContainer>
            <ModalTabs className='flex justify-start items-start'>
                { tabs }
            </ModalTabs>
        </ModalContainer>
    </ModalbackgroundWrapper>
  )
}
