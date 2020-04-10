import styled from 'styled-components';
import {colors} from '../../utilities';

export const StyledButton = styled.button`
  color: ${colors.primary500};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${colors.primary500};
  border-radius: 2rem;
  background: transparent;
  
  :hover {
    color: ${colors.white};
    background-color: ${colors.primary500};
    cursor: pointer;
   }
`;

export const StyledButtonSuccess = styled(StyledButton)`
    color: ${colors.success500};
    border: 2px solid ${colors.success500};
    :hover {
        color: ${colors.white};
        background-color: ${colors.success500};
        cursor: pointer;
    }
`

export const StyledButtonDanger = styled(StyledButton)`
    color: ${colors.danger500};
    border: 2px solid ${colors.danger500};
    :hover {
        color: ${colors.white};
        background-color: ${colors.danger500};
        cursor: pointer;
    }
`