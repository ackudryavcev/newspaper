import { Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./components/FavoriteContext";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import CategoryPage from "./pages/CategoryPage";
import Favorites from "./pages/Favorites";

// our App page. We describe on it routing and connect context

function App() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
