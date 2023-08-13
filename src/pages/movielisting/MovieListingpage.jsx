import { useGlobalObject } from "../../context/MainContext";
import "./MovieListingPage.css";
import MovieCard from "../../common/movieCard/MovieCard";
import { useNavigate } from "react-router-dom";
import { ACTION_TYPE } from "../../utils/constant";
export default function MovieListingPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalObject();

  const uniqueGenre = [
    ...new Set(["All Genre", ...state.movie?.map((item) => item.genre).flat()])
  ];
  const uniqueYears = [
    ...new Set(["Release Year", ...state.movie?.map((item) => item.year)])
  ];

  const uniqueRating = [
    ...new Set(["Rating", ...state.movie?.map((item) => item?.rating)])
  ];

  const genreHandler = (e) => {
    const value = e.target.value;
    dispatch({ type: ACTION_TYPE.GENRE, payload: value });
  };

  const yearHandler = (e) => {
    const value = e.target.value;
    dispatch({ type: ACTION_TYPE.YEAR, payload: value });
  };

  const ratingHandler = (e) => {
    const value = e.target.value;
    dispatch({ type: ACTION_TYPE.RATING, payload: value });
  };

  const searchFilter = state.movie?.filter(
    (item) =>
      item?.title.includes(state.searchTerm) ||
      item?.director.includes(state.searchTerm) ||
      item?.cast.includes(state.searchTerm)
  );

  const genreFilter =
    state.genre === "All Genre"
      ? searchFilter
      : searchFilter.filter((item) => item.genre.includes(state.genre));

  const yearFilter =
    state.year === "Release Year"
      ? genreFilter
      : genreFilter.filter((item) => item.year === Number(state.year));

  const ratingFilter =
    state.rating === "Rating"
      ? yearFilter
      : yearFilter.filter((item) => item.rating === Number(state.rating));

  return (
    <>
      <div className="movie_listing_container">
        <button
          className="clear_btn"
          onClick={() => dispatch({ type: ACTION_TYPE.CLEARFILTER })}
        >
          Clear Filter
        </button>
        <div className="movie_top_bar">
          <h3>Movie</h3>
          <select
            name="genre"
            id="genre"
            value={state.genre}
            onChange={(e) => genreHandler(e)}
          >
            {uniqueGenre?.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <select
            name="year"
            id="year"
            value={state.year}
            onChange={(e) => yearHandler(e)}
          >
            {uniqueYears?.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <select
            name="rating"
            id="rating"
            value={state.rating}
            onChange={(e) => ratingHandler(e)}
          >
            {uniqueRating?.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <button onClick={() => navigate("/addmovie")}>Add To Movie</button>
        </div>
        <div className="movieListing_center">
          <div className="moviecard_container">
            {ratingFilter?.map((item) => {
              return <MovieCard movieData={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
