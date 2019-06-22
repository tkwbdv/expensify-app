import authReducer from "../../reducers/auth";

test("should set default state", () => {
  const action = { type: "DEFAULT" };
  const state = authReducer(undefined, action);
  expect(state).toEqual({});
});

test("should set login state", () => {
  const action = {
    type: "LOGIN",
    uid: "123test"
  };
  const state = authReducer(undefined, action);
  expect(state.uid).toEqual(action.uid);
});

test("should set logout state", () => {
  const action = { type: "LOGOUT" };
  const prevState = { uid: "123test" };
  const state = authReducer(prevState, action);
  expect(state).toEqual({});
});