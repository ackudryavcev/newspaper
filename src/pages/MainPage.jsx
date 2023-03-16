import News from "../components/News";
import useFetch from "../hooks/useFetch";
import "./MainPage.css";
import LoadComponent from "../components/LoadComponent";

function MainPage() {
  const [allNews] = useFetch("");
  return (
    <>
      <h2>Latest news</h2>
      {allNews.length > 0 ? (
        <div className="container">
          {allNews.length > 0 &&
            allNews.map((item) => {
              return <News key={item.id} item={item} />;
            })}
        </div>
      ) : (
        <LoadComponent />
      )}
    </>
  );
}

export default MainPage;
