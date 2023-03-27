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
    const _defaults = { startIndex: 0, endIndex: limit };
    let { startIndex, endIndex } = useContext(PaginationContext) || _defaults;
    if (!tableData.length) {
        return (React.createElement(Wrapper, null,
            React.createElement(TableItem, null,
                React.createElement(TableItemColumn, { numCols: 1 }, "No Results Found!"))));
    }
    else
        return (React.createElement(Wrapper, null, tableData
            .filter((_data, index) => ((index >= startIndex) && (index <= endIndex)))
            .map((data, index) => (React.createElement(TableItem, { key: index }, columns.map((column, index) => (React.createElement(TableItemColumn, { numCols: columns.length, key: index }, data[column]))))))));
};
export default TableItems;
