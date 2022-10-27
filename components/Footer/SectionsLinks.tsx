import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { BaseFooterInt } from '.'
import { routesList, routesTitle, sectionsTitle } from '../../utilities/statics'

export default function SectionsLinks({selectedSection, setSelectedSection}: BaseFooterInt) {
    const router = useRouter()

    const sectionBtns = sectionsTitle.map( ( title, index ) => (
        <li 
            className={` transition-all ${router.pathname === routesList.home && selectedSection === title ? 'text-lg' : ''}`}
            key={`seciton_footer_${index}`}
            >
            <a 
                onClick={ () => setSelectedSection(title)} href={`${routesList.home}#${title}`}
                >
                    {title}
            </a>
        </li>
    ))

  return (
    <ul className="Navigations flex flex-col sm:items-start md:row-start-1 col-start-3 md:col-start-2 col-span-1 md:col-span-auto">
        <li 
            className={` transition-all ${router.pathname === routesList.roadmap ? 'text-lg' : ''}`}
            >
            <Link
                href={routesList.roadmap} 
                >
                    {routesTitle.roadmap}
            </Link>
        </li>
        { sectionBtns }
    </ul>
  )
}
