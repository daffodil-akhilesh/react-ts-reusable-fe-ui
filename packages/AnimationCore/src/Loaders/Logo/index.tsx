import React, { FC } from 'react';

interface LogoLoaderProps{
  isLoading: boolean;
}

const LogoLoader: FC<LogoLoaderProps> = ({
  isLoading
}) => {
  return (
    <div>LogoLoader</div>
  )
};

export default LogoLoader;