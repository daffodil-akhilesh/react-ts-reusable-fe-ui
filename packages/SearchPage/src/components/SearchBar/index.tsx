import React, { FC, useRef, useState } from 'react';
import styled from 'styled-components';
import constants from '../../constants';

interface SearchBarProps {
  width?: string,
  height?: string,
}

const Wrapper = styled.div<{ width: string; height: string; }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dadada;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 2px 2px 8px 4px #dadada;
`

const SearchImg = styled.img <{ isActive: boolean; }>`
  height: 100%;
  width: auto;
  margin-right: 10px;
  opacity: 0.5;
  ${({ isActive }) => isActive && "opacity:1;"}
`;
const SearchInput = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  padding: 0;
  text-align: center;
  font-size: 16px;
  &:focus-visible{
    border: none
  }
`;

const SearchBar: FC<SearchBarProps> = ({
  width = "100%",
  height = "60px",
}) => {
  const { searchBarImg } = constants;
  const imgRef = useRef();
  const inputRef = useRef();
  const [isInputActive, setInputActive] = useState(false);
  const onFocusHandler = () => {
    setInputActive(true);
  }
  const onBlurHandler = () => {
    setInputActive(false);
  }
  return (
    <Wrapper width={width} height={height}>
      <SearchImg
        src={searchBarImg}
        ref={imgRef}
        isActive={isInputActive} />
      <SearchInput
        placeholder={"Search By Name"}
        ref={inputRef}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler} />
    </Wrapper>
  )
};

export default SearchBar;
