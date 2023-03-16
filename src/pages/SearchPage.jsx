import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import News from "../components/News";
import LoadComponent from "../components/LoadComponent";

function SearchPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q");

  const [allNews, fetchError] = useFetch(searchQuery);

  if (fetchError && allNews.length === 0) {
    return (
      <>
        <h2>We can't find {searchQuery}</h2>
      </>
    );
  }

  if (allNews.length === 0) {
    return <LoadComponent />;
  }

  return (
    <>
      <h2>Search {searchQuery}</h2>
      <div className="container">
        {allNews.map((item) => {
          return <News key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default SearchPage;
