// export const BASE_URL = ' https://auth.nomoreparties.co';

// const { NODE_ENV } = process.env;

// let BASE_URL;
// if (NODE_ENV === 'production') {
//   BASE_URL = 'https://api.oleinikov.nomoreparties.co';
// } else {
//   BASE_URL = 'http://localhost:3001';
// }
export const BASE_URL = 'http://localhost:3001';


function handleReply(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function register(data) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(handleReply);
}

export function login(data) {
  console.log(data)
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(handleReply);
}

export function checkToken(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(handleReply);
}
