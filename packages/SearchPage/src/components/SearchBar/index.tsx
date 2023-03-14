import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import constants from '../../constants';


interface SearchBarProps {
  width?: string;
  height?: string;
  debounceDelay?: number;
  onSearchCb: (args: any) => void;
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
  onSearchCb,
  debounceDelay = 1,
}) => {
  const { searchBarImg } = constants;
  const imgRef = useRef();
  const inputRef = useRef(null);
  const [isInputActive, setInputActive] = useState(false);
  const [searchText, setSearchText] = useState('');

  const onFocusHandler = () => {
    setInputActive(true);
  }
  const onBlurHandler = () => {
    setInputActive(false);
  }
  const onSearchInputChange = () => {
    const target = inputRef.current;
    setSearchText(target.value);
  }
  // SEARCH DEBOUNCE with 1s delay default
  useEffect(() => {
    if(inputRef.current.timer) clearTimeout(inputRef.current.timer);
    inputRef.current.timer = setTimeout(() => {
      onSearchCb(searchText);
      clearTimeout(inputRef.current.timer);
    }, debounceDelay * 1000);
  },[searchText])

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
        onBlur={onBlurHandler}
        onChange={onSearchInputChange}
      />
    </Wrapper>
  )
};

export default SearchBar;
