import React, { FC } from 'react';
import styled from 'styled-components';

type TableDataProps = {
  name: string;
  email: string;
  profilePic?: string;
  country: string;
  phone: string;
  timezone: string;
}

interface TableItemsProps {
  tableData: Array<TableDataProps>
  columns: string[],
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
}) => {
  return (
    <Wrapper>{
      tableData.map((data: TableDataProps) => (
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
