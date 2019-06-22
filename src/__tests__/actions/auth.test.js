import { login, logout } from "../../actions/auth";

test("should setup login action object", () => {
  const uid = "123test";
  const action = {
    type: "LOGIN",
    uid
  };
  expect(login(uid)).toEqual(action);
});

test("should setup logout action object", () => {
  const action = { type: "LOGOUT" };
  expect(logout()).toEqual(action);
});