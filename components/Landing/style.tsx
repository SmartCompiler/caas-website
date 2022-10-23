import styled from "styled-components";
import { mediaQueries } from "../../utilities/configs";
import { medias } from "../../utilities/statics";

export const LandingWrapper = styled.section`
    background: linear-gradient(360deg, #010A09 0%, rgba(1, 7, 7, 0.92) 4.98%, rgba(1, 7, 7, 0.19) 13.83%, rgba(33, 41, 40, 0.04) 25.46%, rgba(255, 255, 255, 0) 106.25%), url(/landing.svg);
    background-repeat: no-repeat;
    background-size: cover;
    height: calc( 100vh - 10rem );
    background-position: center;

    @media only screen and (max-width: ${mediaQueries.sm}px) {
        height: calc( 100vh - 1rem ) !important;
    }
    
`
