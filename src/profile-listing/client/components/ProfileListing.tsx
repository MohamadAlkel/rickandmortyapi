import React, { FC, ReactElement } from "react";
import { ProfileListingWrapper } from "./ProfileListing.style";

const ListingsList: FC = (): ReactElement<void> => {

  return (
    <ProfileListingWrapper>
      <h2>The Rick and Morty</h2>
    </ProfileListingWrapper>
  );
};

export default ListingsList;
