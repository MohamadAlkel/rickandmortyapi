/**
 * @jest-environment jsdom
 */

import React from "react";
import renderer from "react-test-renderer";
import { screen, render } from "@testing-library/react";
import ListingsList from "../client/components/ProfileListing";
import { Provider } from "react-redux";
import { createMockStore } from "redux-test-utils";
import "@testing-library/jest-dom";

describe("<ListingsList />", () => {
  const mockStore = {
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
      isFetching: true,
    },
  };

  const baseProps = {
    fetchInfo: (_) => new Promise((_) => _),
  };

  const store = createMockStore(mockStore);

  const component = () =>
    render(
      <Provider store={store}>
        <ListingsList {...baseProps} />
      </Provider>
    );

  beforeEach(() => {
    component();
  });

  test("should render ListingsList component correctly by matching snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ListingsList {...baseProps} />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("should render ListingsList component with correct title and listing results ", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("The Rick and Morty");
    expect(screen.getByTestId("listing-results")).toBeTruthy();
  });
});
