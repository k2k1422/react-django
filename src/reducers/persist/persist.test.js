// Test cases for alert reducer
import reducer, { initialState } from "./persist";

describe("Testing persist reducer", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should persist", () => {
    expect(
      reducer(initialState, {
        type: "persist/REHYDRATE",
      })
    ).toEqual({
      ...initialState,
      persistStatus: true,
    });
  });
});
