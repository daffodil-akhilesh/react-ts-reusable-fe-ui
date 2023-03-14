import React, { FC, useContext } from 'react';
import styled from 'styled-components';

import { PaginationContext } from '../PaginationContext';

interface PaginationFooterProps {
  uid: string;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & div{
    margin: 10px;
    font-size: 16px;
  }
`;

const PaginationFooter: FC<PaginationFooterProps> = ({
  uid,
}) => {

  const { currentPage, goToNextPage, goToPrevPage } = useContext(PaginationContext);

  return (
    <Wrapper>
      <div onClick={goToPrevPage}>Prev</div>
      <div>{currentPage[uid] + 1}</div>
      <div onClick={goToNextPage}>Next</div>
    </Wrapper>
  )
};

export default PaginationFooter;