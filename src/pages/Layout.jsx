import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import useSearch from "../hooks/useSearch";
import Footer from "../components/Footer";

function Layout() {
  const [inputValue, setInputValue] = useState("");
  const [handleChange, handleKeyDown] = useSearch(setInputValue);
  const handleButtonClick = () => {
    handleKeyDown({ key: "Enter" }, inputValue);
  };

  return (
    <>
      <header className="header">
        <div className="over-header">
          <h1 className="over-title">
            Magazine and newspaper with news around the world
          </h1>
          <menu className="over-menu">
            <Link to={`/category?q=programming`} className="over-link">
              Programming
            </Link>
            <Link to={`/category?q=world`} className="over-link">
              World
            </Link>
            <Link to={`/category?q=politics`} className="over-link">
              Politics
            </Link>
            <Link to={`/category?q=celebrity`} className="over-link">
              Celebrity
            </Link>
            <Link to={`/category?q=funny`} className="over-link">
              Funny
            </Link>
          </menu>
        </div>
      </header>
      <div className="main-header">
        <h2 className="main-title">Newspaper.</h2>
        <menu className="main-menu">
          <Link to={`/`} className="main-link">
            Main
          </Link>
          <Link to={`favorites`} className="main-link">
            Favorite news
          </Link>
        </menu>
        <input
          placeholder=" news search"
          className="main-search"
          onKeyDown={(event) => handleKeyDown(event, inputValue)}
          onChange={handleChange}
          value={inputValue}
        ></input>
        <button className="main-search-button" onClick={handleButtonClick}>
          Search
        </button>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
