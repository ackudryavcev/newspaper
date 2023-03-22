import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import useSearch from "../hooks/useSearch";
import Footer from "../components/Footer";

// This Layout for showing it anywhere. Header and Footer

function Layout() {
  const [inputValue, setInputValue] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [handleChange, handleForm, handleDateChange] = useSearch(
    setInputValue,
    setDateStart,
    setDateEnd
  );

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
        <form
          onSubmit={(event) =>
            handleForm(event, inputValue, dateStart, dateEnd)
          }
          className="main-search-form"
        >
          <input
            type="date"
            id="date-start"
            value={dateStart}
            onChange={handleDateChange}
            className="main-search-date"
            title="start search date"
          />
          <input
            type="date"
            id="date-end"
            value={dateEnd}
            onChange={handleDateChange}
            className="main-search-date"
            title="end search date"
          />
          <input
            placeholder=" news search"
            className="main-search"
            onChange={handleChange}
            value={inputValue}
          ></input>
          <button className="main-search-button" type="submit"></button>
        </form>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
