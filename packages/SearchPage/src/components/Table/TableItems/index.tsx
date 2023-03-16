import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { PaginationContext } from '../../Pagination/PaginationContext';

interface TableItemsProps {
  tableData: Array<any>;
  columns: string[];
  limit: number;
}

const Wrapper = styled.div`
`;

const TableItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #cdcdcd;
  &:nth-child(2n){
    background: #dadada;
  }
`;

const TableItemColumn = styled.div<{ numCols: number }>`
  height: 40px;
  width: ${({ numCols }) => `${Number((100 / numCols).toFixed(2))}%;`}
  text-align: center;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TableItems: FC<TableItemsProps> = ({
  tableData,
  columns,
  limit,
}) => {

  const _defaults = { startIndex: 0, endIndex: limit };
  let {startIndex, endIndex} = useContext(PaginationContext) || _defaults;  

  if (!tableData.length) {
    return (
      <Wrapper>
        <TableItem>
          <TableItemColumn numCols={1}>
            No Results Found!
          </TableItemColumn>
        </TableItem>
      </Wrapper>
    );
  }

  else return (
    <Wrapper>{
      tableData
        .filter((_data: any, index) => ((index >= startIndex) && (index <= endIndex)))
        .map((data: any, index) => (
          <TableItem key={index}>
            {
              columns.map((column, index) => (
                <TableItemColumn numCols={columns.length} key={index}>
                  {data[column]}
                </TableItemColumn>
              ))
            }
          </TableItem>
        ))
    }</Wrapper>
  )
};

export default TableItems;
