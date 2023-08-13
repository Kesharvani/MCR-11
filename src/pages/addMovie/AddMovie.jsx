import "./AddMovie.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useGlobalObject } from "../../context/MainContext";
import { ACTION_TYPE } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
export default function AddMovie() {
  const navigate = useNavigate();
  const { dispatch } = useGlobalObject();
  const uniqueId = uuidv4();

  const [formData, setFormData] = useState({
    id: uniqueId,
    title: "",
    year: "",
    genre: [],
    rating: "",
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
  });
  const submit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION_TYPE.MOVIEADDED, payload: formData });
    navigate("/");
    console.log("submitted");
  };

  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: name === "year" || name === "rating" ? Number(value) : value
    }));
  };
  return (
    <div className="form_container">
      <form onSubmit={submit} className="form">
        <div className="lable_input">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            required
            onChange={(e) => formHandler(e)}
          />
        </div>

        <div className="lable_input">
          <label htmlFor="">year</label>
          <input
            type="number"
            name="year"
            min="1990"
            max="2023"
            required
            onChange={(e) => formHandler(e)}
          />
        </div>

        {/* <label htmlFor="">Genre</label>
        <input type="checkbox" name="genre" /> */}
        <div className="lable_input">
          <label htmlFor="">Rating</label>
          <input
            type="number"
            name="rating"
            min="0"
            max="10"
            required
            onChange={(e) => formHandler(e)}
          />
        </div>

        <div className="lable_input">
          <label htmlFor="">Director</label>
          <input
            type="text"
            name="director"
            required
            onChange={(e) => formHandler(e)}
          />
        </div>

        <div className="lable_input">
          <label htmlFor="">Writer</label>
          <input
            type="text"
            name="writer"
            required
            onChange={(e) => formHandler(e)}
          />
        </div>

        <div className="lable_input">
          <label htmlFor="">Cast</label>
          <input
            type="text"
            name="cast"
            required
            onChange={(e) => formHandler(e)}
          />
        </div>

        <div className="lable_input">
          <label htmlFor="">Summary</label>
          <textarea
            type="text-area"
            name="summary"
            required
            onChange={(e) => formHandler(e)}
          />
        </div>

        <div className="lable_input">
          <label htmlFor="">imageURL</label>
          <input type="text" name="imageURL" onChange={(e) => formHandler(e)} />
        </div>

        <input type="submit" className="btn_submit" />
      </form>
    </div>
  );
}
