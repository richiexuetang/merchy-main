import {
  loadUserFail,
  loadUserSuccess,
  loginFail,
  loginSuccess,
  registerSuccess,
  removeAuthLoading,
  setAuthLoading,
} from '../store/auth/auth.slice';

export const loadUser = () => async (dispatch) => {
  try {
    const res = await fetch('/api/account/user', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const data = await res.json();

    if (res.status === 200) {
      dispatch(loadUserSuccess(data));
    }
  } catch (err) {
    dispatch(loadUserFail());
  }
};

export const checkAuthStatus = () => async (dispatch) => {
  try {
    const res = await fetch('/api/account/verify', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.status === 200) {
      dispatch(loginSuccess());
      dispatch(loadUser());
    }
  } catch (err) {
    dispatch(loginFail());
  }
};

export const requestRefresh = () => async (dispatch) => {
  try {
    const res = await fetch('/api/account/refresh', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.status === 200) {
      dispatch(checkAuthStatus());
    }
  } catch (err) {
    console.log(err);
  }
};

export const register = (email, password, re_password) => async (dispatch) => {
  const body = JSON.stringify({
    email,
    password,
    re_password,
  });

  dispatch(setAuthLoading());

  try {
    const res = await fetch('/api/account/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: body,
    });

    if (res.status === 201) {
      dispatch(registerSuccess());
    }
  } catch (err) {
    console.log(err);
  }

  dispatch(removeAuthLoading);
};

export const resetRegisterSuccess = () => (dispatch) => {
  dispatch(resetRegisterSuccess());
};

export const login = (username, password) => async (dispatch) => {
  const body = JSON.stringify({
    username,
    password,
  });

  dispatch(setAuthLoading());

  try {
    const res = await fetch('/api/account/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: body,
    });

    if (res.status === 200) {
      dispatch(loginSuccess());
      dispatch(loadUser());
    }
  } catch (err) {
    console.log(err);
  }

  dispatch(removeAuthLoading());
};

export const logout = () => async (dispatch) => {
  try {
    await fetch('/api/account/logout', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    });
  } catch (err) {
    console.log(err);
  }
};
