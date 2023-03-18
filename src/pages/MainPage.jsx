import useFetch from "../hooks/useFetch";
import NewsBlock from "../components/NewsBlock";

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
