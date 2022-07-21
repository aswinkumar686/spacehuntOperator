import userEndpoints from '../../../config/serviceEndpoints';
import types from './constants';
import drecrowdGateWay, { gateWay } from '../../../config/service';
export const Supporter = (body) => async (dispatch) => {
  dispatch({
    type: types.POST_SUPPORTER_REQUEST,
  });
  try {
    const response = await drecrowdGateWay.post(userEndpoints.USER, body);
    const { data, success, message } = response.data;
    if (success) {
      dispatch({
        type: types.POST_SUPPORTER_SUCCESS,
        payload: success,
      });
    } else {
      dispatch({
        type: types.POST_SUPPORTER_FAILED,
      });
    }
  } catch (error) {
    dispatch({
      type: types.POST_SUPPORTER_FAILED,
    });
  }
};

export const getProject = (body) => async (dispatch) => {
  dispatch({
    type: types.GET_PROJECTS_REQUEST,
  });
  try {
    const response = await gateWay.get('viewCampaigns');
    const { contracts, success } = response.data;
    dispatch({
      type: types.GET_PROJECTS_SUCCESS,
      payload: contracts,
    });
  } catch (error) {
    dispatch({
      type: types.GET_PROJECTS_FAILED,
    });
  }
};

export const resetMessages = () => async (dispatch) => {
  dispatch({
    type: types.RESET_MESSAGES,
  });
};
