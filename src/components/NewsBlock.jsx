import "./NewsBlock.css";
import LoadComponent from "./LoadComponent";
import News from "./News";
import { useEffect, useState } from "react";

// block with all the news

function NewsBlock({ title, allNews, searchQuery, fetchError, isLoading }) {
  //state for showing news
  const [renderNews, setRenderNews] = useState([]);
  //state amount showing news on the news page
  const [newsAmount, setNewsAmount] = useState(39);

  useEffect(() => {
    // in the beginning we show first 30 news
    setRenderNews(allNews.slice(0, 30));
  }, [allNews]);

  //then we can add more news on the page

  function handleShowMore() {
    if (newsAmount < allNews.length) {
      setNewsAmount(newsAmount + 9);
    }
    setRenderNews(allNews.slice(0, newsAmount));
  }

  // if we have fetch error and empty array with news we show text below

  if (fetchError && renderNews.length === 0 && !isLoading) {
    return (
      <main>
        <h2 className="news-block-title">We can't find {searchQuery}</h2>
      </main>
    );
  }

  // if we load our page and we have not received information from the server yet we show Loading component

  if (isLoading) {
    return (
      <main>
        <LoadComponent />
      </main>
    );
  }

  // else we show block with news
  return (
    <main>
      <h2 className="news-block-title">{title}</h2>
      <div className="news-block-container">
        {renderNews.map((item) => {
          return <News key={item.id} item={item} />;
        })}
      </div>

      {/* check we can show more news is yes show button if now show text No more news */}

      {newsAmount < allNews.length ? (
        <div className="news-more-block">
          <button onClick={handleShowMore} className="news-more">
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
