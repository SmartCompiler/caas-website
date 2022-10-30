import styled from "styled-components";
import { mediaQueries } from "../../utilities/configs";


export const NetworkWrapper = styled.div`
    @media screen and (max-width: ${mediaQueries.sm}px) {
        height: 24rem;
        margin-top: -5rem;    
    }
`