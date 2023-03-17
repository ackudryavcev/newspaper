import useCategories from "../hooks/useCategories";
import { Link } from "react-router-dom";
import "./Footer.css";

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
