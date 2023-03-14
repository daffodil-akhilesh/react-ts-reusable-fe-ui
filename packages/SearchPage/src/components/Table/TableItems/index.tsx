import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { PaginationContext } from '../../Pagination/PaginationContext';

type TableDataProps = {
  name: string;
  email: string;
  profilePic?: string;
  country: string;
  phone: string;
  timezone: string;
}

interface TableItemsProps {
  tableData: Array<TableDataProps>;
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

  const { startIndex, endIndex } = useContext(PaginationContext);

  return (
    <Wrapper>{
      tableData
        .filter((_data: TableDataProps, index) => ((index >= startIndex) && (index <= endIndex)))
        .map((data: TableDataProps) => (
          <TableItem>
            <TableItemColumn numCols={columns.length}>
              {data.name}
            </TableItemColumn>
            <TableItemColumn numCols={columns.length}>
              {data.phone}
            </TableItemColumn>
            <TableItemColumn numCols={columns.length}>
              {data.country}
            </TableItemColumn>
            <TableItemColumn numCols={columns.length}>
              {data.timezone}
            </TableItemColumn>
          </TableItem>
        ))
    }</Wrapper>
  )
};

export default TableItems;
