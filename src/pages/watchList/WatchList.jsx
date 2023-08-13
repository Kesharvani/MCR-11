import "./WatchList.css";
import { useGlobalObject } from "../../context/MainContext";
import MovieCard from "../../common/movieCard/MovieCard";
export default function WatchList() {
  const { state } = useGlobalObject();
  return (
    <div className="watch_container">
      <h1>WatchList Page</h1>
      <div>
        {state.watchList?.length > 0 ? (
          <div className="moviecard_container">
            {state.watchList?.map((item) => {
              return <MovieCard movieData={item} key={item.id} />;
            })}
          </div>
        ) : (
          <h2>Seems Your Watch List is empty</h2>
        )}
      </div>
    </div>
  );
}
