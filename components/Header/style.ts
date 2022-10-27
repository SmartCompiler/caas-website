import styled from 'styled-components'
import { mediaQueries } from '../../utilities/configs';
import { routesList, sectionsTitle } from '../../utilities/statics'

interface HeaderWrapperInterface {
    isShowHeader: boolean
}
export const HeaderWrapper = styled.header<HeaderWrapperInterface>`
transition: all .3s;
transform: translateY(${ props => props.isShowHeader ? '0' : "-200%"});
background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);

    @media screen and (max-width: ${mediaQueries.sm}px) {
        background: transparent ;
    }
`

type sectionsType = typeof sectionsTitle[number]
interface HeaderBtnLiInterface {
    selectedSection?: sectionsType;
    itemTitle?: sectionsType;
    currentroute: string,
    routeName: typeof routesList[ keyof typeof routesList ]

}

const isHomeAndCurrentSection = ( {currentroute,  selectedSection, itemTitle, routeName}: HeaderBtnLiInterface ) => currentroute === routeName && selectedSection === itemTitle
const isNotHomeAndCurrentPage =  ( { currentroute, routeName }:HeaderBtnLiInterface) => currentroute !== routesList.home && currentroute === routeName
export const HeaderBtnLi = styled.li<HeaderBtnLiInterface>`
    position: relative;
    &::after{
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        height: 1px;
        transition: all .3s;
        background-color: var(--color-white);
        width: ${ props => ( isHomeAndCurrentSection(props) || isNotHomeAndCurrentPage(props)) ? '100%' : '0'};
    }
`

interface ResponsiveSidebarInt {
  isSidebarOpen: boolean
}
export const HamburgerIconWrapper = styled.svg<ResponsiveSidebarInt>`
    transform: translateX(${prop => prop.isSidebarOpen ? '200%' : '0' });
    transition: all .3s;
`

export const CloseSidebarIconWrapper = styled.div<ResponsiveSidebarInt>`
    transform: translateX(${prop => prop.isSidebarOpen ? '0' : '200%' });
    transition: all .3s;
`
export const ResponsiveSidebarWrapper = styled.div<ResponsiveSidebarInt>`
    transform: translateX(${prop => prop.isSidebarOpen ? '0' : '-200%' });
    transition: all .3s;
`
