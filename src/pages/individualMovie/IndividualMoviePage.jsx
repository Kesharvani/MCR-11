import "./IndividualMoviePage.css";
import { useParams } from "react-router-dom";
import { useGlobalObject } from "../../context/MainContext";
import { ACTION_TYPE } from "../../utils/constant";
export default function IndividualMoviePage() {
  const { state, dispatch } = useGlobalObject();
  const { id } = useParams();

  const individualMovieItem = state.movie.find(
    (item) => item.id === Number(id)
  );

  const isInWatchList = state.watchList.find(
    (item) => item.id === individualMovieItem.id
  );

  const isInStarred = state.starred?.find(
    (item) => item.id === individualMovieItem.id
  );

  const addToWatchlistHandler = () => {
    dispatch({
      type: ACTION_TYPE.ADDTOWATCHLIST,
      paylaod: individualMovieItem
    });
  };

  const removeFromWatchList = () => {
    dispatch({
      type: ACTION_TYPE.REMOVEWATCHLIST,
      payload: individualMovieItem
    });
  };

  const addStarredHandler = () => {
    dispatch({ type: ACTION_TYPE.ADDSTARRED, payload: individualMovieItem });
  };

  const removeStarredHandler = () => {
    dispatch({ type: ACTION_TYPE.REMOVESTARRED, payload: individualMovieItem });
  };
  return (
    <div className="individual_center">
      <div className="individual_container">
        <img src={individualMovieItem?.imageURL} alt="imageMovie" />
        <div className="individual_right">
          <h2>{individualMovieItem?.title}</h2>
          <p>{individualMovieItem?.summary}</p>
          <p>year:{individualMovieItem?.year}</p>
          <p>Genre:{individualMovieItem?.genre}</p>
          <p>Rating:{individualMovieItem?.rating}</p>
          <p>Director{individualMovieItem?.director}</p>
          <p>Writer:{individualMovieItem?.writer}</p>
          <p>Cast{individualMovieItem?.cast}</p>
          <div className="individual_btn">
            {isInStarred ? (
              <button onClick={removeStarredHandler}>UnStar</button>
            ) : (
              <button onClick={addStarredHandler}>Star</button>
            )}
            {isInWatchList ? (
              <button onClick={removeFromWatchList}>
                Remove from WatchList
              </button>
            ) : (
              <button onClick={addToWatchlistHandler}>Add To WatchList</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
