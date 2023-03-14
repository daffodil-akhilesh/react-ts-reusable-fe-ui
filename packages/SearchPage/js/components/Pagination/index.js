import React from 'react';
import styled from 'styled-components';
import PaginationContextProvider from './PaginationContext';
import PaginationFooter from "./PaginationFooter";
const Wrapper = styled.div `
`;
const Pagination = ({ children, pageLimit, totalEntries, uid, defaultPage, }) => {
    return (React.createElement(Wrapper, null,
        React.createElement(PaginationContextProvider, { uid: uid, defaultPage: defaultPage, totalPages: Number(totalEntries / pageLimit), pageLimit: pageLimit },
            children,
            React.createElement(PaginationFooter, { uid: uid }))));
};
export default Pagination;
