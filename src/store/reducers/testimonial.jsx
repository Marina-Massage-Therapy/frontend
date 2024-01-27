export const FETCH_TESTIMONIAL = "FETCH_TESTIMONIAL";
export const CREATE_TESTIMONIAL = "CREATE_TESTIMONIAL";
export const DELETE_TESTIMONIAL = "DELETE_TESTIMONIAL";
export const UPDATE_TESTIMONIAL = "UPDATE_TESTIMONIAL";
export const SET_SELECTED_TESTIMONIAL = "SET_SELECTED_TESTIMONIAL";

const initialState = {
  testimonials: [],
  currentTestimonial: null,
};

export function testimonialReducer(state = initialState, action) {
  var newState = state;

  switch (action.type) {
    case FETCH_TESTIMONIAL:
      newState = { ...state, testimonials: action.payload };
      break;
    case CREATE_TESTIMONIAL:
      newState = {
        ...state,
        testimonials: [...state.testimonials, action.payload],
      };
      break;
    case DELETE_TESTIMONIAL:
      newState = {
        ...state,
        testimonials: state.testimonials.filter(
          (t) => t._id !== action.payload
        ),
      };
      break;
    case UPDATE_TESTIMONIAL:
      newState = {
        ...state,
        testimonials: state.testimonials.map((testimonial) => {
          return testimonial._id === action.payload._id
            ? action.payload
            : testimonial;
        }),
      };
      break;
    case SET_SELECTED_TESTIMONIAL:
      newState = {
        ...state,
        currentTestimonial: action.payload,
      };
    default:
      return newState;
  }
  return newState;
}
