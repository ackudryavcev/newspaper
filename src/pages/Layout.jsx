import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import useSearch from "../hooks/useSearch";

function Layout() {
  const [inputValue, setInputValue] = useState("");
  const [handleChange, handleKeyDown] = useSearch(setInputValue);
  return (
    <>
      <header className="header">
        <div className="over-header">
          <h1 className="over-title">
            Magazine and newspaper with news around the world
          </h1>
          <menu className="over-menu">
            <Link to={`/`} className="over-link">
              Contacts
            </Link>
            <Link to={`favorites`} className="over-link">
              Private Policy
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
            Favorites
          </Link>
        </menu>
        <input
          placeholder=" news search"
          className="main-search"
          onKeyDown={(event) => handleKeyDown(event, inputValue)}
          onChange={handleChange}
          value={inputValue}
        ></input>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
