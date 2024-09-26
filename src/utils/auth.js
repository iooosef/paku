export function signInUser(userID) {
    sessionStorage.setItem('signedInUser', userID);
  }
  
  export function getSignedInUser() {
    return sessionStorage.getItem('signedInUser');
  }
  
  export function signOutUser() {
    sessionStorage.removeItem('signedInUser');
  }

  export function getUserID(email) {
    return JSON.parse(localStorage.getItem('users')).find(user => user.email === email).userID;
  }

  export function getUser(userID) {
    return JSON.parse(localStorage.getItem('users')).find((u) => u.userID == userID)
  }

  export function authenticatePassword(userID, password) {
    let foundUser = JSON.parse(localStorage.getItem('users')).find((u) => u.userID === userID)
    return foundUser.password === password;
  }