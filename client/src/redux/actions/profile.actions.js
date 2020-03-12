import axios from 'axios';
import { setAlert } from './alert.actions';
import { GET_PROFILE, PROFILE_ERROR } from './actions.types';

// get current profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.statusText,
      status: err.response.status
    });
  }
};