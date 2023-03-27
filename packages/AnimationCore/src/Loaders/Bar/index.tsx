import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

interface BarLoaderProps {
  isLoading: boolean;
  foregroundClr?: string;
  backgroundClr?: string;
  height?: string;
}


const Displacement = keyframes`
  0%{
    transform: translateX(-10%);
  }
  33%{
    transform: translateX(100%);
  }
  66%{
    transform: translateX(200%);
  }
  100%{
    transform: translateX(300%);
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display flex;
  justify-content: center;
  align-items: center;
`;

const BarCnt = styled.div<{ barHeight: string; }>`
  position: relative;
  height: ${({ barHeight }) => barHeight};
  width: 100%;
  overflow: hidden;
`;

const BackgroundBar = styled.div<{ color: string; }>`
  position: absolute;
  z-index: 999990;
  width: 100%;
  height: 100%;
  background: ${({ color }) => color};
`;

const ForegroundBar = styled(BackgroundBar)`
  z-index: 999991;
  width: 33%;
  border-radius: 5px;
  transform-box: fill-box;
  animation: ${Displacement} 2s linear infinite;
`;

const BarLoader: FC<BarLoaderProps> = ({
  isLoading,
  foregroundClr = "#c92578",
  backgroundClr = "#c92578ab",
  height = '8px',
}) => {
  if (!isLoading) return;
  
  return (
    <Wrapper>
      <BarCnt barHeight={height}>
        <BackgroundBar color={backgroundClr} />
        <ForegroundBar color={foregroundClr} />
      </BarCnt>
    </Wrapper>
  )
};

export default BarLoader;