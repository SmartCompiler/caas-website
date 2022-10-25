import React from 'react'
import { ModalInstallData } from '../../utilities/statics'
import StepDetails from './StepDetails'
import { MainContentWrapper } from './style'

export default function InstallLinux() {
  

  const stepsDetails = ModalInstallData.linuxInstall.map( (data, index) => <StepDetails key={index} {...data} />)
  return (
    <MainContentWrapper className='flex flex-col'>
      { stepsDetails }
    </MainContentWrapper>
  )
}
