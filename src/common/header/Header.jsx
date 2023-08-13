import "./Header.css";
import { NavLink } from "react-router-dom";
import { useGlobalObject } from "../../context/MainContext";
import { ACTION_TYPE } from "../../utils/constant";
export default function Header() {
  const { dispatch } = useGlobalObject();
  const searchHandler = (e) => {
    dispatch({ type: ACTION_TYPE.SEARCH, payload: e.target.value });
  };
  return (
    <header className="header">
      <h2>
        <NavLink style={{ color: "white", textDecoration: "none" }} to="/">
          IMDB
        </NavLink>
      </h2>
      <input
        type="search"
        placeholder="Search Movie by title cast and director..."
        onChange={searchHandler}
      />
      <div className="header_right">
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "white"
            };
          }}
          to="/"
        >
          Movie
        </NavLink>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "white"
            };
          }}
          to="watch"
        >
          Watch List
        </NavLink>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "white"
            };
          }}
          to="/starred"
        >
          Starred Movie
        </NavLink>
      </div>
    </header>
  );
}
