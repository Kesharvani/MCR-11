import { ACTION_TYPE } from "../utils/constant";

export const initialValue = {
  movie: [],
  searchTerm: "",
  watchList: [],
  starred: [],
  genre: "All Genre",
  year: "Release Year",
  rating: "Rating"
};

export const mainReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        movie: action.payload
      };
    case ACTION_TYPE.SEARCH:
      return {
        ...state,
        searchTerm: action.payload
      };
    case ACTION_TYPE.MOVIEADDED:
      return {
        ...state,
        movie: [...state.movie, action.payload]
      };
    case ACTION_TYPE.ADDTOWATCHLIST:
      return {
        ...state,
        watchList: [...state?.watchList, action.paylaod]
      };
    case ACTION_TYPE.REMOVEWATCHLIST:
      return {
        ...state,
        watchList: state?.watchList?.filter(
          (item) => item.id !== action.payload?.id
        )
      };
    case ACTION_TYPE.ADDSTARRED:
      return {
        ...state,
        starred: [...state?.starred, action.payload]
      };

    case ACTION_TYPE.REMOVESTARRED:
      return {
        ...state,
        starred: state?.starred?.filter(
          (item) => item.id !== action.payload?.id
        )
      };
    case ACTION_TYPE.GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ACTION_TYPE.YEAR:
      return {
        ...state,
        year: action.payload
      };
    case ACTION_TYPE.RATING:
      return {
        ...state,
        rating: action.payload
      };
    case ACTION_TYPE.CLEARFILTER:
      return {
        ...state,
        genre: "All Genre",
        year: "Release Year",
        rating: "Rating"
      };
    default:
      return {
        ...state
      };
  }
};
