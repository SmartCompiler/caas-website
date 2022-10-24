import React from 'react'
import StepDetails from './StepDetails'
import { MainContentWrapper } from './style'

export default function InstallLinux() {
  const linuxDetails = [
    {
      title: 'Step 1: Update and Upgrade the System',
      description: 'To start off, log into your Ubuntu 18.04 system using SSH protocol and update & upgrade system repositories using the following command.',
      code: <div><span className='mr-4'>$</span> apt update -y && apt upgrade -y</div>
    },
    {
      title: 'Step 2: install SCAAS',
      description: 'To install SCAAS CLI tool run the following command.',
      code: <div><span className='mr-4'>$</span> sudo apt install scaas</div>
    },
    {
      title: 'Step 3: Ensure everything is ok',
      description: 'to make sure that you installed SCASS properly run the following command.',
      code: (<div className='flex flex-col'>
                <div><span className='mr-4'>$</span> scaas --version</div>
                 <div><span className='mr-4'>$</span> scaas version 1.0</div> 
            </div>)
    }
  ]

  const stepsDetails = linuxDetails.map( (data, index) => <StepDetails key={index} {...data} />)
  return (
    <MainContentWrapper className='flex flex-col'>
      { stepsDetails }
    </MainContentWrapper>
  )
}
