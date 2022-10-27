import styled from "styled-components"
import { mediaQueries } from "../../utilities/configs"

const responsiveTabHeight = '3rem';

export const ModalbackgroundWrapper = styled.div`
height: 100vh;
width: 100vw;
position: fixed;
top: 0;
left: 0;
z-index: 10;
background: #02161396;
justify-content: center;
align-items: center;
` 

export const ModalContainer = styled.div`
    border-radius: 10px;
    width: clamp(50vw, 70vw, 60rem);
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid #4D4D4D;
    background: var(--color-bg-dark);

    @media screen and (max-width: ${mediaQueries.sm}px) {
        width: 90vw;
        max-height: 90vh;
    }
`

export const ModalTabsContainer = styled.div`
    height: 2rem;
    @media screen and (max-width: ${mediaQueries.md}px) {
        height: ${responsiveTabHeight};
    }
`

interface TabButtonItem{
    isActive: 1|0
}
export const TabButtonItem = styled.button<TabButtonItem>`
    transition: all .2s;
    position: relative;

    &:not(:last-child){
        margin-right: 2rem;
    }

    &::after{
        content: '';
        position: absolute;
        top: 110%;
        left: 50%;
        transform: translateX(-50%);
        width: ${ props => props.isActive ? '120%' : 0 };
        height: 2.5px;
        background: var(--color-primary);
        transition: all .2s;
    }
`

export const MainContentWrapper = styled.div`
    min-height: 50vh;
    padding-left: 1rem;
    padding-top: 2rem;

    @media screen and (max-width: ${mediaQueries.sm}px) {
        height: calc( 100% - ${responsiveTabHeight} );
        overflow-y: auto;
        padding-left: 0;
        padding-right: .5rem;
        padding-top: 0;

    }
`

export const CodeContainer = styled.div`
    background: var(--color-gray);
    border-radius: 5px;
    padding: .5rem;
    margin-left: 13px;
    border: 1px solid #4D4D4D;
    @media screen and (max-width: ${mediaQueries.sm}px) {
        padding-right: 1.7rem;
    }
`

export const CopiedToClipboadMessage = styled.span`
    position: absolute;
    bottom: 110%;
    right: -2px;
`

export const CloseModalButon = styled.button`
    top: -1.5rem;
`