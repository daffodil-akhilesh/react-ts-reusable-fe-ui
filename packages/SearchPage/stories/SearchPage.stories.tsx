import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchPage from '../src';
import SearchBar from "../src/components/SearchBar";
import TableHeader from '../src/components/Table/TableHeader';
import TableItems from '../src/components/Table/TableItems';

export default {
  title: 'reactfe-core/SearchPage',
  component: SearchPage,
} as ComponentMeta<typeof SearchPage>;

const SearchPageComponent = () => {
  const [search, setSearch] = useState("mario");
  const onSearch = (searchText) => {
    setSearch(searchText);
  }
  return (
    <SearchPage
      url={"https://www.amiiboapi.com/api/amiibo/"}
      searchParams={[
        {
          key1: "name",
          value1: search
        },
      ]}
      responseDataKey="amiibo"
      tableColumns={['name', 'amiiboSeries', 'gameSeries', 'character']}
      singlePageRowsLimit={5}
      onSearchActive={onSearch}
      uid={"p2"}
    />
  );
}


const SearchPageTemplate: ComponentStory<typeof SearchPage> = (args) => <SearchPage {...args} />;
const SearchBarTemplate: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;
const TableHeaderTemplate: ComponentStory<typeof TableHeader> = (args) => <TableHeader {...args} />;
const TableItemsTemplate: ComponentStory<typeof TableItems> = (args) => <TableItems {...args} />;
const SearchPageComponentTemplate: ComponentStory<typeof SearchPageComponent> = () => <SearchPageComponent />;

export const PrimarySearchPage = SearchPageTemplate.bind({});
export const PrimarySearchBar = SearchBarTemplate.bind({});
export const PrimaryTableHeader = TableHeaderTemplate.bind({});
export const PrimaryTableItems = TableItemsTemplate.bind({});
export const PrimarySearchPageComponent = SearchPageComponentTemplate.bind({});

PrimarySearchPage.args = {
  url: "https://www.amiiboapi.com/api/amiibo/",
  searchParams: [
    {
      key1: "name",
      value1: "zelda"
    },
  ],
  responseDataKey: "amiibo",
  tableColumns: ['name','amiiboSeries', 'gameSeries', 'character'],
  singlePageRowsLimit: 5,
  onSearchActive: (searchText) => {
    // change your Search Text Here via Local State and pass search term 
    // through searchParams
    console.log("From Search Page", searchText);
  },
  uid:"p1",
};

PrimaryTableHeader.args = {
  columnNames: ['Details', 'Phone Number', 'Country', 'Zone'],
}

PrimaryTableItems.args = {
  tableData: [{
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
  }],
  columns: ['name', 'email', 'phone', 'country','timezone'],
  limit: 3,
}

PrimarySearchBar.args = {
  onSearchCb: (searchText) => {
    console.log("From Search Bar cb", searchText);
  }
}
