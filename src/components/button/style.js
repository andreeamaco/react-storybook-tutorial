import styled from 'styled-components';
import {colors, backgrounds } from '../../utilities';

export const StyledButton = styled.button`
  color: ${props => props.reverse ? colors.white : colors.primary500};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-color: ${props => props.reverse ? colors.white : colors.primary500};
  border-radius: 2rem;
  background: ${props => props.reverse ? colors.primary500 : 'transparent'};
  
  :hover {
    color: ${props => props.reverse ? colors.primary500 : colors.white};
    background-color: ${props => props.reverse ? colors.white: colors.primary500};;
    cursor: pointer;
    border-color: ${props => props.reverse ? colors.primary500 : colors.white};
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

export const ButtonBullet = styled.button`
  height: 12px;
  background-color: black;
  border: none;
  border-radius: 50%;
  position: absolute;
  bottom: -20%;
  margin: auto;
  display: block;

  &:hover {
    background-color: ${backgrounds.primary800};
  }

  &:last-of-type {
   margin-left: 15px;
  }
`