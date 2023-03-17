import useFetch from "../hooks/useFetch";
import "./MainPage.css";
import NewsBlock from "../components/NewsBlock";

function MainPage() {
  const [allNews, fetchError] = useFetch("", "");
  return (
    <NewsBlock
      title={`Latest news`}
      allNews={allNews}
      searchQuery=""
      fetchError={fetchError}
    />
  );
}

export default MainPage;
