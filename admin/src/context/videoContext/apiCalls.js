import axios from "axios";
import {
  createVideoFailure,
  createVideoStart,
  createVideoSuccess,
  deleteVideoFailure,
  deleteVideoStart,
  deleteVideoSuccess,
  getVideosFailure,
  getVideosStart,
  getVideosSuccess,
} from "./VideoActions";

export const getVideos = async (dispatch) => {
  dispatch(getVideosStart());
  try {
    const res = await axios.get("/videos", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getVideosSuccess(res.data));
  } catch (err) {
    dispatch(getVideosFailure());
  }
};

//create
export const createVideo = async (video, dispatch) => {
  dispatch(createVideoStart());
  try {
    const res = await axios.post("/videos", video, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createVideoSuccess(res.data));
  } catch (err) {
    dispatch(createVideoFailure());
  }
};

//delete
export const deleteVideo = async (id, dispatch) => {
  dispatch(deleteVideoStart());
  try {
    await axios.delete("/videos/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteVideoSuccess(id));
  } catch (err) {
    dispatch(deleteVideoFailure());
  }
};
