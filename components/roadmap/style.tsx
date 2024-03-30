import styled from "styled-components";
import { mediaQueries } from "../../utilities/configs";

export const RoadmapSection = styled.section`
    height: 50rem;

    @media screen and (max-width: ${mediaQueries.xl}px) {
        height: 55rem;

    }
`

export const SphereContainer = styled.div`
    min-width: 370px;
    min-height: 370px;
`

interface LineItemInt {
    delay : number
}
export const LineItem = styled.line<LineItemInt>`
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;

      animation: dash 4s linear forwards;
      animation-iteration-count: 1;
      animation-delay: ${ props => props.delay}ms;
        @keyframes dash {
            to {
                stroke-dashoffset: 0;
            }
        }
`

interface WithPoseInt{
    top: number
    left: number
}
export const BulletNumber = styled.span<WithPoseInt>`
    top: ${ props => props.top}px; 
    left: ${ props => props.left}px; 
    opacity: 0;
    visibility: hidden;
    animation: fadeIn 1s linear forwards;
    animation-delay: 2s;

`


export const RoadmapDetailItem = styled.div<WithPoseInt>`
    top: ${ props => props.top}px; 
    left: ${ props => props.left}px; 
    opacity: 0;
    visibility: hidden;
    animation: fadeIn 1s linear forwards;
    animation-delay: 2s;

  
`

export const DetailList = styled.li`
    @media screen and (min-width: ${mediaQueries.lg2}px) {
        width: 13rem;
    }

    @media screen and (min-width: ${mediaQueries.xl}px) {
        width: 20rem;
    }

`

export const ResponsiveDesc = styled.div`
    margin-top: -1.8rem;
`