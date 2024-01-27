import { store } from "../store.js";
import {
  FETCH_TESTIMONIAL,
  CREATE_TESTIMONIAL,
  DELETE_TESTIMONIAL,
  UPDATE_TESTIMONIAL,
  SET_SELECTED_TESTIMONIAL,
} from "../reducers/testimonial.jsx";
import {
  fetchTestimonials,
  createTestimonial,
  deleteTestimonial,
  updateTestimonial,
} from "../../api/testimonial.js";

export const fetch_testimonial = async () => {
  try {
    const response = await fetchTestimonials();
    const testimonials = response;
    store.dispatch({
      type: FETCH_TESTIMONIAL,
      payload: testimonials,
    });
  } catch (err) {
    console.log("Cannot fetch testimonial", err);
    throw err;
  }
};

export const create_testimonial = async (fullname, message) => {
  try {
    const response = await createTestimonial(fullname, message);
    const newTestimonial = response.createdTestimonial;
    console.log(newTestimonial);
    store.dispatch({
      type: CREATE_TESTIMONIAL,
      payload: newTestimonial,
    });
  } catch (err) {
    console.log("Cannot create testimonial", err);
    throw err;
  }
};

export const update_testimonial = async (testimonial) => {
  try {
    const updatedTestimonial = await updateTestimonial(testimonial);
    store.dispatch({
      type: UPDATE_TESTIMONIAL,
      payload: updatedTestimonial,
    });
  } catch (err) {
    console.log("Cannot delete testimonial", err);
    throw err;
  }
};

export const delete_Testimonial = async (_id) => {
  try {
    await deleteTestimonial(_id);
    store.dispatch({
      type: DELETE_TESTIMONIAL,
      payload: _id,
    });
  } catch (err) {
    console.log("Cannot delete testimonial", err);
    throw err;
  }
};

export const set_selected_testimonial = async (testimonial) => {
  store.dispatch({
    type: SET_SELECTED_TESTIMONIAL,
    payload: testimonial,
  });
};
