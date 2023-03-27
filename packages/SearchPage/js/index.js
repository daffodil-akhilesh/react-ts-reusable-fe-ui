import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import TableHeader from './components/Table/TableHeader';
import TableItems from './components/Table/TableItems';
const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SearchBarContainer = styled.div `
  margin-bottom: 32px;
`;
const getURLfromSearchParamsData = (oldUrl, searchParams) => {
    let newUrl = oldUrl;
    if (searchParams.length > 0) {
        newUrl = newUrl.concat("?");
        searchParams.forEach((searchParam) => {
            const keys = Object.keys(searchParam);
            newUrl = (searchParam[keys[1]] === '' || searchParam[keys[1]] === null || searchParam[keys[1]] === undefined)
                ? newUrl
                : newUrl.concat(`${searchParam[keys[0]]}=${searchParam[keys[1]]}&`);
        });
    }
    ;
    return newUrl;
};
const SearchPage = ({ url, searchParams, responseDataKey, tableColumns, singlePageRowsLimit, onSearchActive, uid, }) => {
    const [tableData, setTableData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const newURL = getURLfromSearchParamsData(url, searchParams);
        setIsLoading(true);
        axios.get(newURL, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
            const data = !responseDataKey ? response.data : response.data[responseDataKey];
            console.log(data);
            setTableData(data);
            setIsLoading(false);
        }).catch((error) => {
            setTableData([]);
            setIsLoading(false);
        });
    }, [searchParams]);
    return (React.createElement(Wrapper, null,
        React.createElement(SearchBarContainer, null,
            React.createElement(SearchBar, { onSearchCb: onSearchActive })),
        React.createElement(TableHeader, { columnNames: tableColumns }),
        !isLoading && (React.createElement(Pagination, { pageLimit: singlePageRowsLimit, totalEntries: tableData.length, uid: uid },
            React.createElement(TableItems, { tableData: tableData, columns: tableColumns, limit: singlePageRowsLimit })))));
};
export default SearchPage;
