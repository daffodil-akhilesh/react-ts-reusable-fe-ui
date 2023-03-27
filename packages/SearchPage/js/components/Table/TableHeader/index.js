import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div `
  display: flex;
  align-items: center;
  height: 40px;
  border: 1px solid #cdcdcd;
  box-shadow: 0px 2px 8px 2px #dadada;
`;
const Column = styled.div `
  background: #f7f0f0;
  color: #777777;
  width: ${({ numCols }) => `${Number((100 / numCols).toFixed(2))}%;`}
  text-align: center;
  font-weight: 500;
  padding: 10px 0px;  
`;
const TableHeader = ({ columnNames, }) => {
    return (React.createElement(Wrapper, null, columnNames.map((colName, index) => (React.createElement(Column, { numCols: columnNames.length, key: index }, colName.toUpperCase())))));
};
export default TableHeader;
