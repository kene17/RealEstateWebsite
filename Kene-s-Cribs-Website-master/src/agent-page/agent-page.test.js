import React from "react";
import { shallow } from "enzyme";
import AgentPage from "./agent-page";

describe("AgentPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AgentPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
