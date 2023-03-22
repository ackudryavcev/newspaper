import { useEffect, useState } from "react";

//hook for fetching data from api

function useFetch(searchWord, categoryWord, startDate, endDate) {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [isLoading, setIsLoading] = useState(true);

  // we can use search for find news with keywords or find all news certain category or get latest news

  useEffect(() => {
    setIsLoading(true);
    //if we use keyword search

    if (searchWord && !categoryWord) {
      fetch(
        `https://api.currentsapi.services/v1/search?keywords=${searchWord}&language=en&start_date=${startDate}&end_date=${endDate}&apiKey=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setNews(data.news);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
          console.log(error);
        });
    } // if we want to get latest news
    else if (!searchWord && !categoryWord) {
      fetch(
        `https://api.currentsapi.services/v1/latest-news?page_size=200&language=en&apiKey=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setNews(data.news);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    } // if we use category search
    else {
      fetch(
        `https://api.currentsapi.services/v1/search?category=${categoryWord}&page_size=200&language=en&apiKey=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setNews(data.news);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }
  }, [searchWord, API_KEY, categoryWord, startDate, endDate]);

  return [news, error, isLoading];
}

export default useFetch;
