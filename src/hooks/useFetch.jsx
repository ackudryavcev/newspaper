import { useEffect, useState } from "react";

function useFetch(searchWord) {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (searchWord) {
      fetch(
        `https://api.currentsapi.services/v1/search?keywords=${searchWord}&language=en&apiKey=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setNews(data.news);
          console.log(data);
        })
        .catch((error) => {
          setError(error);
          console.log(error);
        });
    } else {
      fetch(
        `https://api.currentsapi.services/v1/latest-news?language=en&apiKey=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setNews(data.news))
        .catch((error) => setError(error));
    }
  }, [searchWord, API_KEY]);

  return [news, error];
}

export default useFetch;
