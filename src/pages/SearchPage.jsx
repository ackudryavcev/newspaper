import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import NewsBlock from "../components/NewsBlock";

function SearchPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q");

  const [allNews, fetchError, isLoading] = useFetch(searchQuery, "");

  return (
    <NewsBlock
      title={`Search ${searchQuery}`}
      allNews={allNews}
      searchQuery={searchQuery}
      fetchError={fetchError}
      isLoading={isLoading}
    />
  );
}

export default SearchPage;
