import React, { useContext, ReactElement, FC } from "react";
import { ReactReduxContext } from "react-redux";
import { ResultsContainer, EmptyList } from "./ListingResults.style";
import { CardsSkeleton } from "./Card.style";
import Card from "./Card";

const ListingResults: FC = (): ReactElement<void> => {
  const { store } = useContext(ReactReduxContext);
  const { profiles, isFetching } = store.getState().profileListing;

  return (
    <ResultsContainer data-testid="listing-results">
      {isFetching && <CardsSkeleton />}

      {!isFetching && !profiles?.length && (
        <EmptyList>Oops! something Wrong happen!</EmptyList>
      )}

      {profiles?.map((profile, index) => (
        <div key={index}>
          <Card profile={profile} />
        </div>
      ))}
    </ResultsContainer>
  );
};

export default ListingResults;
