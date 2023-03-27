import React from 'react';
import styled from 'styled-components';
import BarLoader from './Bar';
import CircularLoader from './Circular';
import LogoLoader from './Logo';
const Wrapper = styled.div `
`;
const getLoaderComponent = (type) => {
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
};
const Loader = ({ isLoading, type, options = {}, }) => {
    const LoaderComponent = getLoaderComponent(type);
    return React.createElement(LoaderComponent, Object.assign({ isLoading: isLoading }, options));
};
export default Loader;
