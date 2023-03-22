import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import NewsBlock from "../components/NewsBlock";

// page for showing certain category

function CategoryPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q");
  const [allNews, fetchError, isLoading] = useFetch("", searchQuery);

  return (
    <NewsBlock
      title={`Category ${searchQuery}`}
      allNews={allNews}
      searchQuery={searchQuery}
      fetchError={fetchError}
      isLoading={isLoading}
    />
  );
}

export default CategoryPage;
