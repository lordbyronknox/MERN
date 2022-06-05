import axios from "axios";
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovieActions";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVjZTNhZDE5ZmVhMDcyNDEyYjEzYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mzk5MTY1NSwiZXhwIjoxNjU0NDIzNjU1fQ.vAKEln_y5i8hXmW4kNDKy06y4I3aYFhqg95EFjyJ41s",
        // token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("/movies", movie, {
      headers: {
        token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVjZTNhZDE5ZmVhMDcyNDEyYjEzYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mzk5MTY1NSwiZXhwIjoxNjU0NDIzNjU1fQ.vAKEln_y5i8hXmW4kNDKy06y4I3aYFhqg95EFjyJ41s",
        // token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("/movies/" + id, {
      headers: {
        token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVjZTNhZDE5ZmVhMDcyNDEyYjEzYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mzk5MTY1NSwiZXhwIjoxNjU0NDIzNjU1fQ.vAKEln_y5i8hXmW4kNDKy06y4I3aYFhqg95EFjyJ41s",
        // token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};