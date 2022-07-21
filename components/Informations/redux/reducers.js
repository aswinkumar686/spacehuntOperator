import constants from "./constants";

const initialState = {
  successMessage:false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case constants.POST_SCHOOLS_DETAILS_REQUESTED:
      return {
        ...state,
        loader: true,
        
      };
    case constants.POST_SCHOOLS_DETAILS_SUCCESS:
      return {
        ...state,
        loader: false,
        successMessage:payload.success
      };
    case constants.POST_SCHOOLS_DETAILS_FAILURE:

      return {
        ...state,
        loader: false,
        successMessage:false
      };

    default:
      return state;
  }
};
