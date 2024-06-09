import React, { useEffect, useState } from 'react';

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=3ce7385a10374b70a0ce2006bd17a3be');
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid bg-light">
      {articles.map((article, index) => (
        <div className="row" key={index}>
          <div className="col-md-3 text-center">
            <img src={article.urlToImage} alt="" width="100%" height="auto" />
          </div>
          <div className="col-md-9">
            <h5>{`${index} : ${article.title}`}</h5>
            <p>{article.description}</p>
            <p>{article.content}</p>
            <div className="bg-info d-flex justify-content-between">
              <a href={article.url} target="_blank" rel="noopener noreferrer">Click here for details</a>
              <span>{new Date(article.publishedAt).toLocaleString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;