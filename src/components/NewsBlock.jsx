import LoadComponent from "./LoadComponent";
import News from "./News";

function NewsBlock({ title, allNews, searchQuery, fetchError }) {
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
      <h2>{title}</h2>
      <div className="container">
        {allNews.map((item) => {
          return <News key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default NewsBlock;
