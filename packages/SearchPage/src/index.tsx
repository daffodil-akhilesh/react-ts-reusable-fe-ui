import React, { FC } from 'react';
import styled from 'styled-components';
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
  name: "Akhilesh Kumar Pandey",
  email: "akhilesh.pandey@unthinkable.co",
  phone: "9678453221",
  country: "India",
  timezone: "IST"
}, {
  name: "Akhilesh Kumar Pandey",
  email: "akhilesh.pandey@unthinkable.co",
  phone: "9678453221",
  country: "India",
  timezone: "IST"
}, {
  name: "Akhilesh Kumar Pandey",
  email: "akhilesh.pandey@unthinkable.co",
  phone: "9678453221",
  country: "India",
  timezone: "IST"
},
{
  name: "Akhilesh Kumar Pandey",
  email: "akhilesh.pandey@unthinkable.co",
  phone: "9678453221",
  country: "India",
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
      <TableItems tableData={TableData} columns={tableColumns} limit={singlePageRowsLimit} />
    </Wrapper>
  )
};

export default SearchPage;