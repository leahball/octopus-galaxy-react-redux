import React from "react";

import {
  NewsCard,
  NewsI,
  NewsContentWrapper,
  NewsH,
  NewsDesc,
  NewsTextWrapper,
  Byline,
} from "./NewsElements";

const NewsCards = ({ currentArticles }) => {
  return (
    <NewsCard>
      {currentArticles.map((article) => (
        <NewsContentWrapper>
          <NewsI src="../../../assets/small/backside.png"></NewsI>
          <NewsTextWrapper>
            <Byline>{article.creator}</Byline>
            <a href={article.link} target="_blank" rel="noreferrer">
              {" "}
              <NewsH>{article.title}</NewsH>
            </a>

            <NewsDesc>{article.description}</NewsDesc>
          </NewsTextWrapper>
        </NewsContentWrapper>
      ))}
    </NewsCard>
  );
};

export default NewsCards;
