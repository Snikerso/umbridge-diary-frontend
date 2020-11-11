function reducerAuth(state, action) {

  switch (action.type) {
    case 'LOGOUT':
      localStorage.setItem('token', '')
      window.location.href = "/login";
      return {
        ...state,
        username: state.username = '',
        token: state.token = ''
      }
    case 'LOGIN':
      return {
        ...state,
        username: action.username,
        isLogin: state.isLogin = true,
        token: state.token = ''
      }
    case 'REGISTER':
      return {
        ...state,
        username: state.username = '',
        isLogin: state.isLogin = false,
        token: state.token = ''
      }
    default:
      throw new Error();
  }
}


export default reducerAuth