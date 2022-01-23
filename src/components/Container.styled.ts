import styled from 'styled-components';

type WrapperProps = {
  characterId: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color:${({characterId})=> characterId && 'black'};
`;
