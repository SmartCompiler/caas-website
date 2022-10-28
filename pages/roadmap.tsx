import React from 'react'
import SphereInfo from '../components/roadmap/SphereInfo'
import { routesTitle } from '../utilities/statics'

export default function Roadmap() {
  return (
    <main className="container mx-auto overflow-x-hidden mt-header">
      <h2 className='title text-3xl'>{routesTitle.roadmap}</h2>
      <SphereInfo />
    </main>
  )
}
