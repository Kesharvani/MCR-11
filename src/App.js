import "./styles.css";
import { Routes, Route } from "react-router-dom";
import MovieListingPage from "./pages/movielisting/MovieListingpage";
import Header from "./common/header/Header";
import IndividualMoviePage from "./pages/individualMovie/IndividualMoviePage";
import WatchList from "./pages/watchList/WatchList";
import StarredPage from "./pages/starred/StarredPage";
import AddMovie from "./pages/addMovie/AddMovie";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MovieListingPage />} />
        <Route path="/individual/:id" element={<IndividualMoviePage />} />
        <Route path="/watch" element={<WatchList />} />
        <Route path="/starred" element={<StarredPage />} />
        <Route path="/addmovie" element={<AddMovie />} />
      </Routes>
    </>
  );
}
