import { createContext, useContext } from "react";
import { useReducer, useEffect } from "react";
import { initialValue, mainReducer } from "../reducer/mainReducer";
import { movies } from "../db/movie";
import { ACTION_TYPE } from "../utils/constant";
export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    mainReducer,
    initialValue,
    (initialValue) => JSON.parse(localStorage.getItem("data")) || initialValue
  );

  const getData = () => {
    dispatch({ type: ACTION_TYPE.SUCCESS, payload: movies });
  };

  useEffect(() => {
    if (!localStorage.getItem("data")) getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);
  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export const useGlobalObject = () => useContext(MainContext);
