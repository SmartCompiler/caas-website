import React from 'react'
import Networks from '../components/global/Networks'
import ResponsiveRoadmap from '../components/roadmap/ResponsiveRoadmap'
import SphereInfo from '../components/roadmap/SphereInfo'
import { routesTitle } from '../utilities/statics'

export default function Roadmap() {
  return (
    <>
      <main className="container mx-auto overflow-visible mt-header relative z-10 mb-0 lg:mb-20 2xl:mb-32">
        <h2 className='ml-4 lg:ml-0 title text-3xl'>{routesTitle.roadmap}</h2>
        <SphereInfo />
        <ResponsiveRoadmap />
      </main>
      <Networks />

    </>
  )
}
