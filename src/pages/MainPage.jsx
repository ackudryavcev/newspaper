import useFetch from "../hooks/useFetch";
import NewsBlock from "../components/NewsBlock";

// page for showing latest news. Main page

function MainPage() {
  const [allNews, fetchError, isLoading] = useFetch("", "");
  return (
    <NewsBlock
      title={`Latest news`}
      allNews={allNews}
      searchQuery=""
      fetchError={fetchError}
      isLoading={isLoading}
    />
  );
}

export default MainPage;
