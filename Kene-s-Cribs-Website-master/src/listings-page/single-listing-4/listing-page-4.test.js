import React from "react";
import { shallow } from "enzyme";
import ListingPage4 from "./listing-page-4";

describe("ListingPage4", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListingPage4 />);
    expect(wrapper).toMatchSnapshot();
  });
});
