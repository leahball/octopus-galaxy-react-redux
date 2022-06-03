import React, { useEffect, useState } from "react";
import axios from "axios";
import * as X2JS from "x2js";
import NewsCards from "./NewsCard";
console.log(X2JS);

//  content: {_medium: 'image', _url: 'https://www.dubaiweek.ae/wp-content/uploads/2022/0…ls-itself-after-mating-Did-scientists-finally.jpg', __prefix: 'media'}
// creator: "Dubai Week"
// description: "The seas and oceans are full of secret worlds, many creatures that science has not..."
// guid: {_isPermaLink: 'false', __text: 'a9e78b4d2b77fed30a3c6d44db484484', toString: ƒ}
// link: "https://www.dubaiweek.ae/octopus-tortures-and-kills-itself-after-mating-did-scientists-finally-explain-this-phenomenon/"
// pubDate: "Wed, 25 May 2022 20:33:52 GMT"
// title: "Octopus tortures and kills itself after mating ... Did scientists finally explain this phenomenon?"

const News = () => {
  const [currentArticles, setCurrentArticles] = useState({});

  useEffect(() => {
    axios
      .get("https://rss.app/feeds/Zh7rUn5XnuPxC0en.xml")
      .then((value) => {
        const document = new X2JS().xml2js(value.data);
        setCurrentArticles(document.rss.channel);
      })
      .catch();
  }, []);

  return (
    <>
      <NewsCards currentArticles={currentArticles} />
    </>
  );
};

export default News;
