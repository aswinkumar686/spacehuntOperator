import spaceHuntGateway from '../../../config/service';
import userEndpoints from '../../../config/serviceEndpoints';
import types from './constants';

export const addSchoolDetails = (param) => async (dispatch) => {
    console.log(param)
  dispatch({
      type: types.POST_SCHOOLS_DETAILS_REQUESTED,
  });
  try {
      const response = await spaceHuntGateway.post(
          userEndpoints.SCHOOLS, param);
          const { success, message ,data } = await response.data;
          console.log(success)
          if (success) {
              dispatch({
              type: types.POST_SCHOOLS_DETAILS_SUCCESS,
              payload: response.data
          });
      } else {
          dispatch({
              type: types.POST_SCHOOLS_DETAILS_FAILURE,
              payload: message
          });
      }
  } catch (error) {
      dispatch({
          type: types.POST_SCHOOLS_DETAILS_FAILURE
      });
  }
};
// export const validateToken = (data) => async (dispatch) => {
//   dispatch({
//     type: types.VALIDATE_AUTH_TOKEN_REQUEST,
//   });
//   try {
//     const response = await spaceHuntGateway.post(userEndpoints.VALIDATE_TOKEN, {
//       verifyToken: true,
//     });
//     const {
//       data: { success, permissions },
//     } = response;
//     sessionStorage.setItem('roles', JSON.stringify(permissions));
//     if (success) {
//       await dispatch({
//         type: types.VALIDATE_AUTH_TOKEN_SUCCESS,
//         payload: response.data,
//       });
//     } else {
//       await dispatch({
//         type: types.VALIDATE_AUTH_TOKEN_FAILED,
//       });
//       localStorage.clear();
//       sessionStorage.clear();
//     }
//   } catch (error) {
//     dispatch({
//       type: types.VALIDATE_AUTH_TOKEN_FAILED,
//     });
//   }
// };

export const resetMessages = () => async (dispatch) => {
    dispatch({
      type: types.RESET_MESSAGES,
    });
  };
