import React, { useEffect, FC, ReactElement } from "react";
import { ProfileListingWrapper } from "./ProfileListing.style";
import ListingResults from "./ListingResults";
import { ListingsListProps } from "../helpers/typeHelper";
import { connect } from "react-redux";
import { fetchInfo } from "../redux/action";

const ListingsList: FC<ListingsListProps> = ({
  page,
  fetchInfo,
}: ListingsListProps): ReactElement<void> => {
  useEffect(() => {
    fetchInfo(page);
  }, [page]);

  return (
    <ProfileListingWrapper>
      <h2>The Rick and Morty</h2>

      <ListingResults />
    </ProfileListingWrapper>
  );
};

const mapStateToProps = (state) => ({
  page: state.profileListing.page,
});

const mapDispatchToProps = {
  fetchInfo: fetchInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingsList);
