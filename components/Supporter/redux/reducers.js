import constants from './constants';

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case constants.POST_SUPPORTER_REQUEST:
      return {
        ...state,
      };
    case constants.POST_SUPPORTER_SUCCESS:
      return {
        ...state,
        successMessage: payload,
      };

    case constants.POST_SUPPORTER_FAILED:
      return {
        ...state,
      };

    case constants.RESET_MESSAGES:
      return {
        ...state,
        errorMessage: null,
        successMessage: false,
      };
    case constants.GET_PROJECTS_REQUEST:
      return {
        ...state,
        loader: true,
      };
    case constants.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loader: false,
        campaigns: action.payload,
      };
    case constants.GET_PROJECTS_FAILED:
      return {
        ...state,
        loader: false,
        campaigns: [],
      };
    default:
      return state;
  }
};
