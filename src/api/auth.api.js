export const fakeAuth = (login, password) => {
  if (login === 'User1' && password === 'Password1') {
    return true;
  }

  return false;
};
