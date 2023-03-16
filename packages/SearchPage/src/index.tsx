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
  responseDataKey: string;
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

// for now
let TableData = [{
  name: "1. Akhilesh Kumar Pandey",
  email: "akhilesh.pandey@unthinkable.co",
  phone: "9678453221",
  country: "India, Delhi",
  timezone: "IST"
}, {
  name: "2. Akshay Mann",
  email: "akshay.mann@gmail.com",
  phone: "8670013221",
  country: "India, Chennai",
  timezone: "IST"
}, {
  name: "3. Abhishek Mittal ",
  email: "mittal.dude@gmail.com",
  phone: "9638527410",
  country: "India, Bangalore",
  timezone: "IST"
},
{
  name: "4. Rohit Jhangra",
  email: "rohit.janghra@gmail.com",
  phone: "7894561230",
  country: "India, Mumbai",
  timezone: "IST"
},
];

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
      setTableData(response.data[responseDataKey]);
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