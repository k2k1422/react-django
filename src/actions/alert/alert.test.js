import * as testUtils from "../test-utils";
import * as actions from "./alert";

describe("test for alert actions", () => {
  let store;
  beforeEach(() => {
    store = testUtils.mockStore({});
  });

  it(`should dispatch ${actions.ADD_ALERT} when addAlert is called`, () => {
    store.dispatch(actions.addAlert({ message: "alert message" }));
    expect(store.getActions()[0]).toEqual({
      type: actions.ADD_ALERT,
      payload: { message: "alert message" },
    });
  });

  it(`should dispatch ${actions.CLOSE_ALERT} when closeAlert is called`, () => {
    store.dispatch(actions.closeAlert());
    expect(store.getActions()[0]).toEqual({
      type: actions.CLOSE_ALERT,
    });
  });
});
