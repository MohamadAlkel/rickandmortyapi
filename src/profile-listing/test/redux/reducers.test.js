import reducer from "../../client/redux/reducer";
import { FETCH_INFO } from "../../client/redux/constants";

describe("Listings-list reducer", () => {
  const initalState = {
    profiles: "initial",
  };

  test("should return passed state by default", () => {
    const action = {
      type: "",
      payload: {},
    };
    expect(reducer(initalState, action)).toEqual(initalState);
  });

  test("should returen initial state ", () => {
    const action = {
      type: "",
      payload: {},
    };
    expect(reducer(undefined, action)).toEqual({
      page: 1,
      profiles: [],
    });
  });

  test("should handle FETCH_INFO_START", () => {
    const action = {
      type: `${FETCH_INFO}_START`,
    };
    expect(reducer(initalState, action)).toEqual({
      profiles: "initial",
      isFetching: true,
    });
  });

  test("should handle FETCH_INFO_SUCCESS", () => {
    const action = {
      type: `${FETCH_INFO}_SUCCESS`,
      payload: {
        value: "changed",
      },
    };
    expect(reducer(initalState, action)).toEqual({
      profiles: {
        value: "changed",
      },
      isFetching: false,
    });
  });

  it("should handle FETCH_INFO_ERROR", () => {
    const action = {
      type: `${FETCH_INFO}_ERROR`,
      payload: {
        value: "error",
      },
    };
    expect(reducer(initalState, action)).toEqual({
      profiles: [],
      isFetching: false,
    });
  });
});
