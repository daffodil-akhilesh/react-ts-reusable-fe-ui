import React, { FC } from 'react';
import styled from 'styled-components';
import PaginationContextProvider from './PaginationContext';
import PaginationFooter from "./PaginationFooter";

interface PaginationProps extends React.PropsWithChildren {
  pageLimit: number;
  totalEntries: number;
  uid: string;
  defaultPage?: number;
}

const Wrapper = styled.div`
`;

const Pagination: FC<PaginationProps> = ({
  children,
  pageLimit,
  totalEntries,
  uid,
  defaultPage,
}) => {

  return (
    <Wrapper>
      <PaginationContextProvider
        uid={uid}
        defaultPage={defaultPage}
        totalPages={Number(totalEntries / pageLimit)}
        pageLimit={pageLimit}
      >
          {children}
        <PaginationFooter uid={uid} />
      </PaginationContextProvider>
    </Wrapper>
  )
};

export default Pagination;
