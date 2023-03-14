import React, { createContext, FC, useCallback, useMemo, useState } from 'react';

interface PaginationContextProviderProps extends React.PropsWithChildren {
  uid: string;
  totalPages: number;
  pageLimit: number;
  defaultPage?: number;
}

export const PaginationContext = createContext(null);

const PaginationContextProvider: FC<PaginationContextProviderProps> = ({
  children,
  uid,
  totalPages,
  pageLimit,
  defaultPage = 0,
}) => {

  const [currentPage, setCurrentPage] = useState({ [uid]: defaultPage });
  
  const { startIndex, endIndex } = useMemo(() => {
    const startIndex = currentPage[uid] * pageLimit;
    const endIndex = (startIndex + pageLimit) - 1;
    return {
      startIndex,
      endIndex
    }
  }, [currentPage])

  const goToNextPage = useCallback(() => {
    if (currentPage[uid] + 1 >= totalPages) return;
    setCurrentPage((prev) => ({...prev, [uid]: prev[uid] + 1 }));
  }, [currentPage]);

  const goToPrevPage = useCallback(() => {
    if (currentPage[uid] <= 0) return;
    setCurrentPage((prev) => ({...prev, [uid]: prev[uid] - 1 }));
  }, [currentPage]);

  return (
    <PaginationContext.Provider value={{currentPage,startIndex, endIndex, goToNextPage, goToPrevPage}}>
      {children}
    </PaginationContext.Provider>
  )
}

export default PaginationContextProvider;