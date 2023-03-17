import React, { useContext } from "react";
import NewsBlock from "../components/NewsBlock";
import { FavoriteContext } from "../components/FavoriteContext";

function Favorites() {
  const { favorites } = useContext(FavoriteContext);
  return (
    <NewsBlock
      title={`Favorites`}
      allNews={favorites}
      searchQuery=""
      fetchError="null"
    />
  );
}

export default Favorites;
