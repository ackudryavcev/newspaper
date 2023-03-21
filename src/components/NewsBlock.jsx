import "./NewsBlock.css";
import LoadComponent from "./LoadComponent";
import News from "./News";
import { useEffect, useState } from "react";

function NewsBlock({ title, allNews, searchQuery, fetchError, isLoading }) {
  const [renderNews, setRenderNews] = useState([]);
  const [newsAmount, setNewsAmount] = useState(39);

  useEffect(() => {
    setRenderNews(allNews.slice(0, 30));
  }, [allNews]);

  function handleFetchMore() {
    if (newsAmount < allNews.length) {
      setNewsAmount(newsAmount + 9);
    }
    setRenderNews(allNews.slice(0, newsAmount));
  }

  if (fetchError && renderNews.length === 0 && !isLoading) {
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
        {renderNews.map((item) => {
          return <News key={item.id} item={item} />;
        })}
      </div>
      {newsAmount < allNews.length ? (
        <div className="news-more-block">
          <button onClick={handleFetchMore} className="news-more">
            Load more news
          </button>
        </div>
      ) : (
        <div className="news-more-block">
          <p className="news-more-text">
            No more news. Refresh page later or use search or category news
          </p>
        </div>
      )}
    </main>
  );
}

export default NewsBlock;
