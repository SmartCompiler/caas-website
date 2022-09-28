import styled from "styled-components";
import { medias } from "../../utilities/statics";

export const StatisticsWrapper = styled.section`
    background: linear-gradient(180deg, rgba(1, 10, 9, 0.85) 0%, rgba(1, 10, 9, 0.58) 7.29%, rgba(1, 10, 9, 0.46) 14.06%, rgba(1, 10, 9, 0.25) 20.83%, rgba(1, 10, 9, 0.12) 25%, rgba(1, 10, 9, 0) 34.38%, rgba(1, 10, 9, 0) 100%), linear-gradient(360deg, #010A09 0%, rgba(1, 10, 9, 0.92) 4.98%, rgba(1, 10, 9, 0.19) 13.83%, rgba(33, 41, 40, 0.04) 25.46%, rgba(255, 255, 255, 0) 106.25%), url(${medias.statistics});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    min-height: 32rem;
`