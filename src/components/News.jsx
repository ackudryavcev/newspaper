import "./News.css";

function News({ item }) {
  return (
    <div className="news-item">
      <h3>{item.category[0]}</h3>
      {item.image === "None" ? (
        <></>
      ) : (
        <img src={item.image} alt={item.title} className="news-img"></img>
      )}
      <p>{item.published}</p>
      <p>{item.author}</p>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <a href={item.url} target="_blank" rel="noreferrer">
        More
      </a>
    </div>
  );
}

export default News;
