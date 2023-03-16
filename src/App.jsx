import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="search" element={<SearchPage />} />
        {/*<Route path="favorites" element={<Favorites />} />
        <Route path="product/:id" element={<ItemPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
