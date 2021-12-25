import React, { useEffect, useState } from "react";
import axios from "axios";

function Newfeed() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://crypto-news15.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "crypto-news15.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  //   console.log(articles);
  const displayedArticle = articles?.slice(0, 10);

  return (
    <div className='news-feed'>
      <h2>News feed</h2>
      <div>
        {displayedArticle?.map((article) => (
          <>
            <p>{article.title}</p>
            <a href={article.url}>{article.url}</a>
          </>
        ))}
      </div>
    </div>
  );
}

export default Newfeed;
