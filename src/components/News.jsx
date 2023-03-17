import React, { useContext } from "react";
import "./News.css";
import { FavoriteContext } from "./FavoriteContext";
import plusGray from "../assets/plus-square-gray.svg";
import plusBlack from "../assets/plus-square-black.svg";

function News({ item }) {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  function handleFavorite(item) {
    const tempFavorites = favorites.filter((favorite) => {
      return favorite.id !== item.id;
    });
    if (tempFavorites.length === favorites.length) {
      setFavorites([...favorites, item]);
    } else {
      setFavorites(tempFavorites);
    }
  }

  return (
    <div className="news-item">
      <h3>{item.category[0]}</h3>
      {item.image === "None" ? (
        <></>
      ) : (
        <img src={item.image} alt={item.title} className="news-img"></img>
      )}
      <img
        src={
          favorites.find((favorite) => favorite.id === item.id) !== undefined
            ? plusBlack
            : plusGray
        }
        alt="plus"
        className="news-plus"
        onClick={() => {
          handleFavorite(item);
        }}
      />
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
