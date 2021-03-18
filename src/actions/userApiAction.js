export const allUserData = setUsers => async dispatch => {
    const { status, data, apiErrors } = await get('https://randomuser.me/api/');
  
    if (status && status === 200) {
      setUsers(data.results);
      dispatch({
        type: types.ALL_USERS,
        payload: data
      });
    }
  
    if (status && status === 422 && apiErrors) {
      failedResponse(data);
    }
  }