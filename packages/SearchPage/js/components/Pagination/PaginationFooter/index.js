import React, { useContext } from 'react';
import styled from 'styled-components';
import { PaginationContext } from '../PaginationContext';
;
const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  & div{
    margin: 10px;
    font-size: 16px;
  }
`;
const PaginationFooter = ({ uid, }) => {
    const { currentPage, goToNextPage, goToPrevPage } = useContext(PaginationContext);
    return (React.createElement(Wrapper, null,
        React.createElement("div", { onClick: goToPrevPage }, "Prev"),
        React.createElement("div", null, currentPage[uid] + 1),
        React.createElement("div", { onClick: goToNextPage }, "Next")));
};
export default PaginationFooter;
