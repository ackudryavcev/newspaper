import { useEffect, useState } from "react";

function useFetch(searchWord, categoryWord, startDate, endDate) {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
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
    } else if (!searchWord && !categoryWord) {
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
    } else {
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
