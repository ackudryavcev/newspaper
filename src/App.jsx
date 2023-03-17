import "./App.css";
import { Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./components/FavoriteContext";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import CategoryPage from "./pages/CategoryPage";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="favorites" element={<Favorites />} />
          {/*<Route path="product/:id" element={<ItemPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
