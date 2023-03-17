import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import NewsBlock from "../components/NewsBlock";

function CategoryPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q");
  const [allNews, fetchError] = useFetch("", searchQuery);

  return (
    <NewsBlock
      title={`Category ${searchQuery}`}
      allNews={allNews}
      searchQuery={searchQuery}
      fetchError={fetchError}
    />
  );
}

export default CategoryPage;
