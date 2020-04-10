import styled from 'styled-components';
import { backgrounds} from '../../utilities';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 0.25em 1em;
  background-color: ${backgrounds.primary100};
  border-radius: 5px;
  width: 960px;
  height: 240px;
`;

export const Image = styled.img`
    background: url(xxx);
    background-repeat: no-repeat;
    background-size: cover;
`;
