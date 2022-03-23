import React, { ReactElement, FC } from "react";
import { ResultsContainer, EmptyList } from "./ListingResults.style";
import { CardsSkeleton } from "./Card.style";
import Card from "./Card";
import { connect } from "react-redux";
import { ListingResultsProps } from "../helpers/typeHelper";

const ListingResults: FC<ListingResultsProps> = ({
  profiles,
  isFetching,
}: ListingResultsProps): ReactElement<void> => {
  return (
    <ResultsContainer data-testid="listing-results">
      {isFetching && <CardsSkeleton />}

      {!isFetching && !profiles?.length && (
        <EmptyList>Oops! something Wrong happen!</EmptyList>
      )}

      {profiles?.map((profile: any, index) => (
        <div key={index}>
          <Card profile={profile} />
        </div>
      ))}
    </ResultsContainer>
  );
};

const mapStateToProps = (state) => ({
  profiles: state.profileListing.profiles,
  isFetching: state.profileListing.isFetching,
});

export default connect(mapStateToProps)(ListingResults);
