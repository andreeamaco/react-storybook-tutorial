import styled from 'styled-components';
import { backgrounds } from '../../utilities';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 0.25em 1em;
  border-radius: 5px;
  width: 960px;
  height: 240px;
`;

export const WrapperLight = styled(Wrapper)`
  background-color: ${backgrounds.primary100};
`

export const WrapperDark = styled(Wrapper)`
  background-color: ${backgrounds.info800};
`

export const WrapperImage = styled.img`
  max-height: 240px;
  width: 960px;
  object-fit: cover;
`