import styled from 'styled-components'
import { mediaQueries } from '../../utilities/configs';

export const SubscriptionInput = styled.input`
 border-radius: 3px;
`

export const SubscriptionButton = styled.button`
    border: 1px solid var(--color-primary);
    border-radius: 3px;
    transition: all .2s;
`;

export const FooterWrapper = styled.footer`
    grid-template-columns: repeat(4, auto);

    @media only screen and (max-width: ${mediaQueries.md}px) {
        grid-template-columns: 70% 1fr 5rem;
        grid-template-rows: repeat(3, auto);
        row-gap: 2rem;
    }
`