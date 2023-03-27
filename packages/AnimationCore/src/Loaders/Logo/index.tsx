import React, { FC } from 'react';
import LOGO from "../../../../SearchPage/src/assets/discovery.png";
import styled from 'styled-components';
import CircularLoader from '../Circular';


interface LogoLoaderProps {
  isLoading: boolean;
  logoSrc?: string;
  logoDiameter?: number;
  loadingText?: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #dadada;
  opacity: 0.65;
`;

const LogoCnt = styled.div`
  display:flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.img<{ diameter: number; }>`
 position: absolute;
 width: ${({ diameter }) => `${diameter}px`};
 height: ${({ diameter }) => `${diameter}px`};
 background: #ffffff;
 border-radius: 50%;
 box-shadow: 0px 1px 4px 4px #6c6767; 
 padding: 10px;
`;

const LoadingText = styled.div<{ topShift: number; }>`
  font-size: 18px;
  font-weight: 600;
  color: #0b0b0b;
  position: absolute;
  margin-top: ${({topShift}) => `${topShift + 40}px`};
`

const LogoLoader: FC<LogoLoaderProps> = ({
  isLoading,
  logoSrc = LOGO,
  logoDiameter = 100,
  loadingText = "Fetching Data",
}) => {
  if (!isLoading) return;
  return (
    <Wrapper>
      <LogoCnt>
        <LogoImg src={logoSrc} diameter={logoDiameter} />
        <CircularLoader
          isLoading={isLoading}
          diameter={logoDiameter + 40}
        />
        <LoadingText topShift={logoDiameter + 40}>{loadingText}</LoadingText>
      </LogoCnt>
    </Wrapper>
  )
};

export default LogoLoader;