import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import TableHeader from './components/Table/TableHeader';
import TableItems from './components/Table/TableItems';

interface SearchPageProps {
  url: string;
  searchParams: Array<{ [key: string]: string }>;
  responseDataKey: string | null | undefined;
  tableColumns: string[];
  singlePageRowsLimit: number;
  onSearchActive: (args: any) => any;
  uid: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SearchBarContainer = styled.div`
  margin-bottom: 32px;
`;

const getURLfromSearchParamsData = (oldUrl: string, searchParams: Array<{ [key: string]: string }>) => {
  let newUrl = oldUrl;
  if (searchParams.length > 0) {
    newUrl = newUrl.concat("?");
    searchParams.forEach((searchParam) => {
      const keys = Object.keys(searchParam);
      newUrl = (searchParam[keys[1]] === '' || searchParam[keys[1]] === null || searchParam[keys[1]] === undefined)
        ? newUrl
        : newUrl.concat(`${searchParam[keys[0]]}=${searchParam[keys[1]]}&`);
    });
  };
  return newUrl;
}

const SearchPage: FC<SearchPageProps> = (
  {
    url,
    searchParams,
    responseDataKey,
    tableColumns,
    singlePageRowsLimit,
    onSearchActive,
    uid,
  }
) => {

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
    })
  }, [searchParams]);

  return (
    <Wrapper>
      <SearchBarContainer>
        <SearchBar onSearchCb={onSearchActive} />
      </SearchBarContainer>
      <TableHeader columnNames={tableColumns} />
      {
        !isLoading && (
          <Pagination
            pageLimit={singlePageRowsLimit}
            totalEntries={tableData.length}
            uid={uid}>
            <TableItems
              tableData={tableData}
              columns={tableColumns}
              limit={singlePageRowsLimit}
            />
          </Pagination>
        )
      }
    </Wrapper>
  )
};

export default SearchPage;