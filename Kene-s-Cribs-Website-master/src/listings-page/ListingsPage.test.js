import React from "react";
import { shallow } from "enzyme";
import ListingsPage from "./ListingsPage";

describe("ListingsPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListingsPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
