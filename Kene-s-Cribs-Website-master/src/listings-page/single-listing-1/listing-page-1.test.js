import React from "react";
import { shallow } from "enzyme";
import ListingPage1 from "./listing-page-1";

describe("ListingPage1", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListingPage1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
