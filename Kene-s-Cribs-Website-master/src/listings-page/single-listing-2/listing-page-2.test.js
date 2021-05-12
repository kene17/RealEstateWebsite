import React from "react";
import { shallow } from "enzyme";
import ListingPage2 from "./listing-page-2";

describe("ListingPage2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListingPage2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
