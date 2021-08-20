import React from "react";
import { shallow, mount } from "enzyme";
import { App, handleDeathMode } from "./App";

describe("rendering components", () => {
  it("render App comonent without crashing", () => {
    shallow(<App />);
  });
  it("renders App component header without crashing", () => {
    const wrapper = shallow(<App />);
    const header = (
      <h1 className="title">
        {deathMode ? `Conway's Game Of Death` : `Conway's Game Of Life`}
      </h1>
    );
    expect(wrapper.contains(header)).toEqual(true);
  });
});
