import React, { FC } from 'react';
import styled from 'styled-components';
import BarLoader from './Bar';
import CircularLoader from './Circular';
import LogoLoader from './Logo';

type LoaderType = "bar" | "circular" | "logo";

interface LoaderProps {
  isLoading: boolean;
  type: LoaderType;
  logo?: string;
  options?: { [key: string]: any };
}


const Wrapper = styled.div`
`;

const getLoaderComponent = (type: LoaderType) => {
  switch (type) {
    case "bar":
      return BarLoader;
    case "circular":
      return CircularLoader;
    case "logo":
      return LogoLoader;
    default:
      return CircularLoader;
  }
}


const Loader: FC<LoaderProps> = ({
  isLoading,
  type,
  options = {},
}) => {

  const LoaderComponent = getLoaderComponent(type);
  return <LoaderComponent isLoading={isLoading} {...options} />;
};

export default Loader;
