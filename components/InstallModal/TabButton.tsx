import React from 'react'
import { tabButtonTypes } from '../../types'
import { TabButtonItem } from './style'

interface TabButton{
    title: tabButtonTypes,
    currentTab: tabButtonTypes
    setCurrentTab: React.Dispatch<React.SetStateAction<tabButtonTypes>>
}
export default function TabButton({ title, currentTab, setCurrentTab }: TabButton) {
  return (
    <TabButtonItem
        isActive={ title === currentTab ? 1 : 0}
        onClick={ () => setCurrentTab(title) }
        >
        { title }
    </TabButtonItem>
  )
}
