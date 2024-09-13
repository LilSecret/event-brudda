// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { expect, it } from "vitest";
import { isEmailValid, isStrongPassword } from "./validations";

it("should return true you send a valid email", () => {
  const email = "chuck@gmail.com";
  const result = isEmailValid(email);

  expect(result).toBeTruthy();
});

it("should return false if invalid email was sent", () => {
  const invalidEmail = "chuck@example";
  const result = isEmailValid(invalidEmail);

  expect(result).toBeFalsy();
});

it("should throw an error if typeOf email is not string", () => {
  const object = {};
  const array = [];
  const number = 1;

  const objectResult = () => isEmailValid(object);
  const arrayResult = () => isEmailValid(array);
  const numberResult = () => isEmailValid(number);

  expect(objectResult).toThrow();
  expect(arrayResult).toThrow();
  expect(numberResult).toThrow();
});

it("should return true if password is strong", () => {
  const strongPassword = "Password1";
  const result = isStrongPassword(strongPassword);

  expect(result).toBeTruthy();
});

it("should return false if password isn't strong enough", () => {
  const weakPassword = "password";
  const result = isStrongPassword(weakPassword);

  expect(result).toBeFalsy();
});

it("should throw an error if password does not have type of string", () => {
  const object = {};
  const array = [];
  const number = 1;

  const objectResult = () => isStrongPassword(object);
  const arrayResult = () => isStrongPassword(array);
  const numberResult = () => isStrongPassword(number);

  expect(objectResult).toThrow();
  expect(arrayResult).toThrow();
  expect(numberResult).toThrow();
});
