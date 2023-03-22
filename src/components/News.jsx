import React, { useContext } from "react";
import "./News.css";
import { FavoriteContext } from "./FavoriteContext";
import plusGray from "../assets/plus-square-gray.svg";
import plusBlack from "../assets/plus-square-black.svg";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

//News Item Card Component

function News({ item }) {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // add or remove from favorites

  const handleFavorite = (item) => {
    const tempFavorites = favorites.filter((favorite) => {
      return favorite.id !== item.id;
    });
    if (tempFavorites.length === favorites.length) {
      setFavorites([item, ...favorites]);
    } else {
      setFavorites(tempFavorites);
    }
  };

  return (
    //show all categories

    <div className="news-item">
      <h3>
        {item.category.map((itemCategory, index) => (
          <Link
            className="news-category"
            key={index}
            to={`/category?q=${itemCategory}`}
            onClick={handleClick}
          >
            {itemCategory}
          </Link>
        ))}
      </h3>

      {/*  check that we have img link and render it */}

      {item.image === "None" ? (
        <></>
      ) : (
        <img src={item.image} alt={item.title} className="news-img"></img>
      )}

      {/*  add plus for adding news to favorite or remove it from favorites */}

      <img
        src={
          favorites.find((favorite) => favorite.id === item.id) !== undefined
            ? plusBlack
            : plusGray
        }
        title="add to favorites"
        alt="plus"
        className="news-plus"
        onClick={() => {
          handleFavorite(item);
        }}
      />

      {/*  add rest news information */}

      <p className="news-published">{item.published.substring(0, 10)}</p>
      <p className="news-author">{item.author}</p>
      <h4 className="news-title">{item.title}</h4>
      <p className="news-description">{item.description}</p>
      <a href={item.url} target="_blank" rel="noreferrer" className="news-link">
        More information
      </a>

      {/* add share links for news */}

      <div className="news-share">
        <FacebookShareButton url={item.url} title="Share news in Facebook">
          <FacebookIcon round={true} size={30} />
        </FacebookShareButton>
        <TwitterShareButton url={item.url} title="Share news in Twitter">
          <TwitterIcon round={true} size={30} />
        </TwitterShareButton>
        <TelegramShareButton url={item.url} title="Share news in Telegram">
          <TelegramIcon round={true} size={30} />
        </TelegramShareButton>
        <WhatsappShareButton url={item.url} title="Share news in Whatsapp">
          <WhatsappIcon round={true} size={30} />
        </WhatsappShareButton>
      </div>
    </div>
  );
}

export default News;
