import Axios from "../config/axios.js";

export const fetchTestimonials = async () => {
  try {
    const response = await Axios.get(`/testimonials/fetchTestimonials`);
    return response.data;
  } catch (error) {
    console.error("Error in fetch testimonial:", error);
    throw error;
  }
}

export const createTestimonial = async (fullname, message) => {
  try {
    const response = await Axios.post(`/testimonials/createTestimonial`, { fullname: fullname, message: message });
    return response.data;
  } catch (error) {
    console.error("Error in create testimonial:", error);
    throw error;
  }
}

export const updateTestimonial = async (testimonial) => {
  try {
    const response = await Axios.patch(`/testimonials/updateTestimonial`, { testimonial });
    return response.data;
  } catch (error) {
    console.error("Error in create testimonial:", error);
    throw error;
  }
}

export const deleteTestimonial = async (_id) => {
  try {
    const response = await Axios.patch(`/testimonials/deleteTestimonial`, { _id });
    return response.data;
  } catch (error) {
    console.error("Error in create testimonial:", error);
    throw error;
  }
}

