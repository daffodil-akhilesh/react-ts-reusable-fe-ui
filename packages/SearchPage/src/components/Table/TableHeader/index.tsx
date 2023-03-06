import React, { FC } from 'react';
import styled from 'styled-components';

interface TableHeaderProps {
  columnNames: Array<string>;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border: 1px solid #cdcdcd;
  box-shadow: 0px 2px 8px 2px #dadada;
`;
const Column = styled.div<{ numCols: number }>`
  background: #f7f0f0;
  color: #777777;
  width: ${({ numCols }) => `${Number((100 / numCols).toFixed(2))}%;`}
  text-align: center;
  font-weight: 500;
  padding: 10px 0px;  
`;


const TableHeader: FC<TableHeaderProps> = ({
  columnNames,
}: TableHeaderProps) => {
  return (
    <Wrapper>{
      columnNames.map((colName: string) => (
        <Column numCols={columnNames.length}>
          {colName}
        </Column>
      ))
    }</Wrapper>
  );
};

export default TableHeader;
