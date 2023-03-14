import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchPage from '../src';
import SearchBar from "../src/components/SearchBar";
import TableHeader from '../src/components/Table/TableHeader';
import TableItems from '../src/components/Table/TableItems';

export default {
  title: 'reactfe-core/SearchPage',
  component: SearchPage,
} as ComponentMeta<typeof SearchPage>;


const SearchPageTemplate: ComponentStory<typeof SearchPage> = (args) => <SearchPage {...args} />;
const SearchBarTemplate: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;
const TableHeaderTemplate: ComponentStory<typeof TableHeader> = (args) => <TableHeader {...args} />;
const TableItemsTemplate: ComponentStory<typeof TableItems> = (args) => <TableItems {...args} />;

export const PrimarySearchPage = SearchPageTemplate.bind({});
export const PrimarySearchBar = SearchBarTemplate.bind({});
export const PrimaryTableHeader = TableHeaderTemplate.bind({});
export const PrimaryTableItems = TableItemsTemplate.bind({});

PrimarySearchPage.args = {
  url: "",
  tableColumns: ['Details', 'Phone Number', 'Country', 'Zone'],
  singlePageRowsLimit: 2,
  onSearchActive: (searchText) => {
    console.log("From Search Page", searchText); 
  } 
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
  columns: ['Details', 'Phone Number', 'Country', 'Zone'],
}

PrimarySearchBar.args = {
  onSearchCb: (searchText) => {
    console.log("From Search Bar cb", searchText);
  }
}
