import React, { FC } from 'react';
import styled , { keyframes } from 'styled-components';

interface CircularLoaderProps{
  isLoading: boolean;
  diameter?: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display flex;
  justify-content: center;
  align-items: center;
`

const CirclesCnt = styled.div`
  position: relative;
`;

const Rotation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  25%{
    transform: rotate(90deg);
  }
  50%{
    transform: rotate(270deg);
  }
  100%{
    transform: rotate(360deg);
  }
`

const Circle = styled.div<{ diameter: string;}>`
  border-radius: 100%;
  width: ${({ diameter }) => diameter};
  height: ${({ diameter }) => diameter};
  border: 1px solid #00000b;
  box-sizing: border-box;
`;

const SemiCircle = styled(Circle)`
  border-width: 2px 2px 0px 0px;
  border-color: #ec16ab;
  animation: ${Rotation} 1s linear infinite;
`;

const CircularLoader: FC<CircularLoaderProps> = ({
  isLoading,
  diameter = "60px",
}) => {

  if (!isLoading) return;

  return (
    <Wrapper>
      <CirclesCnt>
        <SemiCircle diameter={diameter} />
      </CirclesCnt>
    </Wrapper>
  )
};

export default CircularLoader;