/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render } from "@testing-library/react";
import ListingResults from "../client/components/ListingResults";
import { Provider } from "react-redux";
import { createMockStore } from "redux-test-utils";
import "@testing-library/jest-dom";

describe("<ListingResults /> and <Card/>", () => {
  const mockStoreBase = {
    profileListing: {
      profiles: [
        {
          created: "2017-11-04T18:48:46.250Z",
          episode: ["https://rickandmortyapi.com/api/episode/1"],
          gender: "Male",
          id: 1,
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          location: {
            id: 3,
            name: "Citadel of Ricks",
            type: "Space station",
            dimension: "unknown",
            residents: Array(101),
          },
          name: "Rick Sanchez",
          nameOfChapter: "Pilot",
          origin: {
            name: "Earth (C-137)",
            url: "https://rickandmortyapi.com/api/location/1",
          },
          species: "Human",
          status: "Alive",
          type: "",
          url: "https://rickandmortyapi.com/api/character/1",
        },
      ],
      isFetching: false,
    },
  };

  const component = (mockStore) => {
    const store = createMockStore(mockStore ? mockStore : mockStoreBase);
    return render(
      <Provider store={store}>
        <ListingResults />
      </Provider>
    );
  };

  test("should render ListingResults component  ", () => {
    component();
    expect(screen.getByTestId("listing-results")).toBeTruthy();
  });

  test("should render ListingResults component with 6 Skeleton cards while it fetching data", () => {
    const mockStore = {
      profileListing: {
        profiles: [],
        isFetching: true,
      },
    };
    component(mockStore);
    expect(screen.getByTestId("listing-results").childElementCount).toEqual(6);
  });

  test("should render ListingResults component without any card and with friendly error meesage ", () => {
    const mockStore = {
      profileListing: {
        profiles: [],
        isFetching: false,
      },
    };
    component(mockStore);
    expect(screen.getByTestId("listing-results")).toHaveTextContent(
      "Oops! something Wrong happen!"
    );
  });

  test("should render ListingResults component with 1 card only from store after fetching data and check all content data", () => {
    component();
    expect(screen.getByTestId("listing-results").childElementCount).toEqual(1);
    expect(screen.getByAltText(/profile image/i)).toBeTruthy();
  });
});
