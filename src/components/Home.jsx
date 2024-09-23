import Articles from "./Articles";
import { styled } from "styled-components";
import SearchBar from "./SearchBar";

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  padding: 2rem;
  flex-direction: column;
  position: relative;
  margin: 10px;
`;

function Home() {
  return (
    <StyledHome>
      <Articles />
    </StyledHome>
  );
}

export default Home;
