import React, { FC } from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import TableHeader from './components/Table/TableHeader';
import TableItems from './components/Table/TableItems';

interface SearchPageProps {
  url: string;
  tableColumns: string[];
  singlePageRowsLimit: number;
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
    singlePageRowsLimit
  }
) => {
  return (
    <Wrapper>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <TableHeader columnNames={tableColumns} />
      <TableItems tableData={TableData} columns={tableColumns} />
    </Wrapper>
  )
};

export default SearchPage;