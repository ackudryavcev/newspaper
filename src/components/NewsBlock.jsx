import "./NewsBlock.css";
import LoadComponent from "./LoadComponent";
import News from "./News";

function NewsBlock({ title, allNews, searchQuery, fetchError, isLoading }) {
  if (fetchError && allNews.length === 0 && !isLoading) {
    return (
      <main>
        <h2 className="news-block-title">We can't find {searchQuery}</h2>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main>
        <LoadComponent />
      </main>
    );
  }

  return (
    <main>
      <h2 className="news-block-title">{title}</h2>
      <div className="news-block-container">
        {allNews.map((item) => {
          return <News key={item.id} item={item} />;
        })}
      </div>
    </main>
  );
}

export default NewsBlock;
