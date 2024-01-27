import { store } from "../store.js";
import { SET_USER } from "../reducers/user.jsx";
import { fetchUser } from "../../api/user.js";

export async function setUser(currentUser) {
  try {
    const user = await fetchUser(currentUser);
    store.dispatch({
      type: SET_USER,
      payload: user,
    });
  } catch (err) {
    console.log("Cannot load user", err);
    throw err;
  }
}

// export async function set_post_img(url, type) {}
