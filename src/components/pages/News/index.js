import React from "react";
// import { useEffect } from "react/cjs/react.production.min";
import { NewsH, NewsWrapper } from "./NewsElements";
// import axios from "axios";

const News = () => {
  // useEffect(() => {
  //   axios
  //     .get("https://rss.app/feeds/tqycU6KPIsWNlYBp.xml")
  //     .then((value) => {
  //       console.log(value);
  //     })
  //     .catch();
  // }, []);

  return (
    <>
      <NewsWrapper>
        <NewsH>Octopuses in the News </NewsH>
      </NewsWrapper>
    </>
  );
};

export default News;
