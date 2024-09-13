export const isEmailValid = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (typeof email !== "string") {
    throw new Error("isEmailValid email is not typeof string");
  }

  return regex.test(email);
};

export const isStrongPassword = (password: string) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

  if (typeof password !== "string") {
    throw new Error("isEmailValid email is not typeof string");
  }

  return regex.test(password);
};
