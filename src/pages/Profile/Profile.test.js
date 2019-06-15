import React from "react";
import { shallow } from "enzyme";
import ProfilePage from "./index";

describe("Profile Page", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProfilePage />);
  });

  it("renders the profile page component without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

