import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60rem;
  flex-direction: column;
`;
const StyledImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
`;

function Article(article) {
  console.log(article);
  return (
    <StyledDiv>
      <p>{article.article["title"]}</p>
      <div
        style={{
          display: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <StyledImg
          src={article.article["urlToImage"]}
          alt="article"
        ></StyledImg>
      </div>
      <p>{article.article["content"]}</p>
    </StyledDiv>
  );
}

export default Article;
