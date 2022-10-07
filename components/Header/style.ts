import styled from 'styled-components'
import { sectionsTitle } from '../../utilities/statics'

interface HeaderWrapperInterface {
    isShowHeader: boolean
}
export const HeaderWrapper = styled.header<HeaderWrapperInterface>`
transition: all .3s;
transform: translateY(${ props => props.isShowHeader ? '0' : "-200%"});
background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
`

interface HeaderBtnLiInterface {
    selectedSection: typeof sectionsTitle[number];
    itemTitle: typeof sectionsTitle[number];
}
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
        width: ${ props => props.selectedSection === props.itemTitle ? '100%' : '0'};
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
