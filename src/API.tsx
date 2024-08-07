const BASE_URL = "http://localhost:3000";

// users
const getAllUsers = () => {
  return fetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

// const createUser = () => {

// }

export const API_USERS = {
  getAllUsers,
};

const getAllEvents = () => {
  return fetch(`${BASE_URL}/events`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const API_EVENTS = {
  getAllEvents,
};
