import "./StarredPage.css";
import { useGlobalObject } from "../../context/MainContext";
import MovieCard from "../../common/movieCard/MovieCard";
export default function StarredPage() {
  const { state } = useGlobalObject();
  return (
    <div className="watch_container">
      <h1>WatchList Page</h1>
      <div>
        {state.starred?.length > 0 ? (
          <div className="moviecard_container">
            {state.starred?.map((item) => {
              return <MovieCard movieData={item} key={item.id} />;
            })}
          </div>
        ) : (
          <h2>Seems Your Starred list is empty</h2>
        )}
      </div>
    </div>
  );
}
