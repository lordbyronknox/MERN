import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
        token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVjZTNhZDE5ZmVhMDcyNDEyYjEzYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mzk5MTY1NSwiZXhwIjoxNjU0NDIzNjU1fQ.vAKEln_y5i8hXmW4kNDKy06y4I3aYFhqg95EFjyJ41s",
        // token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/lists", list, {
      headers: {
        token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVjZTNhZDE5ZmVhMDcyNDEyYjEzYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mzk5MTY1NSwiZXhwIjoxNjU0NDIzNjU1fQ.vAKEln_y5i8hXmW4kNDKy06y4I3aYFhqg95EFjyJ41s",
        // token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("/lists/" + id, {
      headers: {
        token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVjZTNhZDE5ZmVhMDcyNDEyYjEzYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mzk5MTY1NSwiZXhwIjoxNjU0NDIzNjU1fQ.vAKEln_y5i8hXmW4kNDKy06y4I3aYFhqg95EFjyJ41s",
        // token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};