import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";
import { googleAuthProvider, githubAuthProvider } from "../../firebase/firebase";

test("should render LoginPage correctly", () => {
  const wrapper = shallow(<LoginPage startLogin={() => { }} />);
  expect(wrapper).toMatchSnapshot();
});

test("should call startLogin with different authProviders on button click", () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />)
  wrapper.find('[provider="google"]').simulate("click");
  expect(startLogin).toHaveBeenLastCalledWith(googleAuthProvider);
  wrapper.find('[provider="github"]').simulate("click");
  expect(startLogin).toHaveBeenLastCalledWith(githubAuthProvider);
});

