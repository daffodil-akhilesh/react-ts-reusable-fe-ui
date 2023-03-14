import React, { useContext } from 'react';
import styled from 'styled-components';
import { PaginationContext } from '../../Pagination/PaginationContext';
const Wrapper = styled.div `
`;
const TableItem = styled.div `
  display: flex;
  align-items: center;
  border: 1px solid #cdcdcd;
  &:nth-child(2n){
    background: #dadada;
  }
`;
const TableItemColumn = styled.div `
  height: 40px;
  width: ${({ numCols }) => `${Number((100 / numCols).toFixed(2))}%;`}
  text-align: center;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TableItems = ({ tableData, columns, limit, }) => {
    const { startIndex, endIndex } = useContext(PaginationContext);
    return (React.createElement(Wrapper, null, tableData
        .filter((_data, index) => ((index >= startIndex) && (index <= endIndex)))
        .map((data) => (React.createElement(TableItem, null,
        React.createElement(TableItemColumn, { numCols: columns.length }, data.name),
        React.createElement(TableItemColumn, { numCols: columns.length }, data.phone),
        React.createElement(TableItemColumn, { numCols: columns.length }, data.country),
        React.createElement(TableItemColumn, { numCols: columns.length }, data.timezone))))));
};
export default TableItems;
