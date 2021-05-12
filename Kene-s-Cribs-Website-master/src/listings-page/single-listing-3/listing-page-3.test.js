import React from "react";
import { shallow } from "enzyme";
import ListingPage3 from "./listing-page-3";

describe("ListingPage3", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListingPage3 />);
    expect(wrapper).toMatchSnapshot();
  });
});
