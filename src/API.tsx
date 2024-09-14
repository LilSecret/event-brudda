import { TUser } from "./types";

const BASE_URL = "http://localhost:3000";

// users
const getAllUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);

  if (!response.ok) {
    throw new Error("Failed to fetch users.");
  }
  const data = await response.json();

  return data as TUser[];
};

const postUser = async (user: Omit<TUser, "id">) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to add new user.");
  }

  return response;
};

const getUserInfo = async (username: string) => {
  const allUsers = await getAllUsers();
  const matchedUser = allUsers.find((user: TUser) => user.username === username);

  return matchedUser;
};

export const API_USERS = {
  getAllUsers,
  getUserInfo,
  postUser,
};

const getAllEvents = async () => {
  const response = await fetch(`${BASE_URL}/events`);

  if (!response.ok) {
    throw new Error("Failed to get events.");
  }

  const data = await response.json();
  return data;
};

export const API_EVENTS = {
  getAllEvents,
};
