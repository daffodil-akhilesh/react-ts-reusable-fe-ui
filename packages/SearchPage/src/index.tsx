import React, { FC } from 'react';
import styled from 'styled-components';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import TableHeader from './components/Table/TableHeader';
import TableItems from './components/Table/TableItems';

interface SearchPageProps {
  url: string;
  tableColumns: string[];
  singlePageRowsLimit: number;
  onSearchActive: (args: any) => any;
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
const TableData = [{
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

const SearchPage: FC<SearchPageProps> = (
  {
    url,
    tableColumns,
    singlePageRowsLimit,
    onSearchActive,
  }
) => {
  return (
    <Wrapper>
      <SearchBarContainer>
        <SearchBar onSearchCb={onSearchActive} />
      </SearchBarContainer>
      <TableHeader columnNames={tableColumns} />
      <Pagination
        pageLimit={singlePageRowsLimit}
        totalEntries={TableData.length}
        uid={"p1"}>
        <TableItems
          tableData={TableData}
          columns={tableColumns}
          limit={singlePageRowsLimit}
        />
      </Pagination>
    </Wrapper>
  )
};

export default SearchPage;