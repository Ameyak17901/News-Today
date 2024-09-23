import { useEffect, useState } from "react";
import Article from "./Article";
import { getNews, getNewsBySearch } from "../services/apiSearch";
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

function Articles() {
  const [articles, setArticles] = useState([]);
  const [searchInput, setSearchInput] = useState("top-headlines");
  function handleSearch(e) {
    setSearchInput(e.target.value);
  }
  function handleClick() {
    setSearchInput(searchInput);
  }
  useEffect(() => {
    async function getNewsData() {
      const data = await getNews();
      console.log(data);
      data.articles.filter(
        (article) => article["title"] !== "" || article["title"] !== "[Removed]"
      );
      setArticles([...data.articles]);
    }
    getNewsData();
  }, [setArticles]);
  useEffect(() => {
    async function getNewsByQuery() {
      const data = await getNewsBySearch(searchInput || "top-headlines");
      console.log(searchInput);
      setArticles([data.articles]);
      data.articles.filter(
        (article) => article["title"] !== "" || article["title"] !== "[Removed]"
      );
    }
  }, [searchInput, setArticles]);
  return (
    <>
      <StyedSearchBar>
        <SearchInput type="text" onBlur={handleSearch} alt="Search here" />
        <button onClick={handleClick}>Search</button>
      </StyedSearchBar>
      <ul>
        {articles.map((article, i) => {
          return (
            <li key={i}>
              <Article article={article} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Articles;
