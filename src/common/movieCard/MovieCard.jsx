import "./MovieCard.css";
import { useNavigate } from "react-router-dom";
import { useGlobalObject } from "../../context/MainContext";
import { ACTION_TYPE } from "../../utils/constant";
export default function MovieCard({ movieData }) {
  const { state, dispatch } = useGlobalObject();
  const navigate = useNavigate();

  const addToWatchlistHandler = (movieData) => {
    dispatch({ type: ACTION_TYPE.ADDTOWATCHLIST, paylaod: movieData });
  };

  const removeFromWatchList = (movieData) => {
    dispatch({ type: ACTION_TYPE.REMOVEWATCHLIST, payload: movieData });
  };

  const addStarredHandler = (movieData) => {
    dispatch({ type: ACTION_TYPE.ADDSTARRED, payload: movieData });
  };

  const removeStarredHandler = (movieData) => {
    dispatch({ type: ACTION_TYPE.REMOVESTARRED, payload: movieData });
  };

  const isInStarred = state.starred?.find((item) => item.id === movieData.id);
  const isInWatchList = state.watchList?.find(
    (item) => item.id === movieData.id
  );

  return (
    <div className="card_container">
      <div style={{ height: "300px", width: "250px" }}>
        <img
          src={movieData?.imageURL}
          alt="movieImage"
          height="300px"
          width="250"
          onClick={() => navigate(`/individual/${movieData.id}`)}
        />
      </div>

      <div className="card_second">
        <h2>{movieData?.title}</h2>
        <p>{movieData?.summary}</p>
        <div className="card_btn">
          {isInStarred ? (
            <button onClick={() => removeStarredHandler(movieData)}>
              UnStar
            </button>
          ) : (
            <button onClick={() => addStarredHandler(movieData)}>Star</button>
          )}
          {isInWatchList ? (
            <button onClick={() => removeFromWatchList(movieData)}>
              Remove From Watchlist
            </button>
          ) : (
            <button onClick={() => addToWatchlistHandler(movieData)}>
              Add to Watchlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
