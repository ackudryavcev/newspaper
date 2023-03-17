import { useEffect, useState } from "react";

function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://api.currentsapi.services/v1/available/categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return [categories];
}

export default useCategories;
