import styled from "styled-components"

export const ModalbackgroundWrapper = styled.div`
height: 100vh;
width: 100vw;
position: fixed;
top: 0;
left: 0;
z-index: 10;
background: #02161396;
display: flex;
justify-content: center;
align-items: center;
` 

export const ModalContainer = styled.div`
border-radius: 10px;
width: 70vw;
height: clamp(auto, auto, 80vh);
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 3rem;
border: 1px solid #4D4D4D;
background: var(--color-bg-dark);
`

export const ModalTabs = styled.div`
    
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