import { useEffect, useState } from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  display: flex;
  border-radius: 10px;
  min-width: 15rem;
  width: fit-content;
  padding: 2px;
  margin: 2px 2px;
`;
const StyedSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function SearchBar() {
  const [searchItem, setSearchItem] = useState("");

  function handleSearch(e) {
    setSearchItem(e.target.value);
  }

  // function handleClick() {
  //   async function searchQuery()
  // }

  return (
    <StyedSearchBar>
      <SearchInput type="text" onChange={handleSearch} alt="Search here" />
      {/* <button onClick={handleClick}>Search</button> */}
    </StyedSearchBar>
  );
}

export default SearchBar;
