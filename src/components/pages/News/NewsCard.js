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
  console.log(currentArticles);
  return (
    <NewsCard>
      {currentArticles?.item?.map((article) => (
        <NewsContentWrapper>
          <NewsI src={article.content._url}></NewsI>
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
