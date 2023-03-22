/* eslint-disable jsx-a11y/anchor-is-valid */
import useCategories from "../hooks/useCategories";
import { Link } from "react-router-dom";
import "./Footer.css";

//Footer component. We load all possible categories with api and render them on the page

function Footer() {
  const [categories] = useCategories();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div>
        <h4 className="footer-title">All Categories</h4>
      </div>
      <a href="#" className="footer-link-up">
        ⬆︎
      </a>
      <div className="footer-links">
        {categories.length > 0 &&
          categories.map((category, index) => {
            return (
              <Link
                to={`/category?q=${category}`}
                className="footer-link"
                key={index}
                onClick={handleClick}
              >
                {category}
              </Link>
            );
          })}
      </div>
    </footer>
  );
}

export default Footer;
