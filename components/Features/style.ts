import styled from "styled-components";
import { mediaQueries } from "../../utilities/configs";
import { medias } from "../../utilities/statics";


export const FeaturesDescWrapper = styled.div`
    background: url(${medias.features});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
`
export const FeatureItemContainer = styled.ul`
    grid-template-rows: 3rem auto 3rem auto 3rem;
    grid-template-columns: repeat(2, minmax(auto, 40%));
    grid-row-gap: 10px;
    grid-column-gap: 30px;
    margin-top: -2rem;
    justify-content: center;

    @media only screen and (max-width: ${mediaQueries.md}px) {
        grid-template-columns: repeat(2, minmax(auto, 1fr));
        grid-column-gap: 5px;

    }

    @media only screen and (max-width: ${mediaQueries.md}px) {
        display: flex;
        flex-wrap: wrap;
    } 
`

interface featureItemWrapperInterface {
    row_start: number
    row_end: number
    col_start: number,
    col_end: number
}

export const FeatureItemWrapper = styled.li<featureItemWrapperInterface>`
    grid-column: ${props => props.col_start}/${props=> props.col_end};
    grid-row: ${props => props.row_start}/${props=> props.row_end};

    @media only screen and (max-width: ${mediaQueries.md}px) {
        width: 49%;
    } 
`

export const FeatureWrapper = styled.section`
    transform: translateY( -4rem );
`