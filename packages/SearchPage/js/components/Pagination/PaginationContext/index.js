import React, { createContext, useCallback, useMemo, useState } from 'react';
export const PaginationContext = createContext(null);
const PaginationContextProvider = ({ children, uid, totalPages, pageLimit, defaultPage = 0, }) => {
    const [currentPage, setCurrentPage] = useState({ [uid]: defaultPage });
    const { startIndex, endIndex } = useMemo(() => {
        const startIndex = currentPage[uid] * pageLimit;
        const endIndex = (startIndex + pageLimit) - 1;
        return {
            startIndex,
            endIndex
        };
    }, [currentPage]);
    const goToNextPage = useCallback(() => {
        if (currentPage[uid] + 1 >= totalPages)
            return;
        setCurrentPage((prev) => (Object.assign(Object.assign({}, prev), { [uid]: prev[uid] + 1 })));
    }, [currentPage]);
    const goToPrevPage = useCallback(() => {
        if (currentPage[uid] <= 0)
            return;
        setCurrentPage((prev) => (Object.assign(Object.assign({}, prev), { [uid]: prev[uid] - 1 })));
    }, [currentPage]);
    return (React.createElement(PaginationContext.Provider, { value: { currentPage, startIndex, endIndex, goToNextPage, goToPrevPage } }, children));
};
export default PaginationContextProvider;
