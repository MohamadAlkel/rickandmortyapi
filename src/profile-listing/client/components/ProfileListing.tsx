import React, { useEffect, FC, ReactElement } from "react";
import { ProfileListingWrapper } from "./ProfileListing.style";
import ListingResults from "./ListingResults";
import { ListingsListProps } from "../helpers/typeHelper";

const ListingsList: FC<ListingsListProps> = (
  props: ListingsListProps
): ReactElement<void> => {
  const { page, fetchInfo } = props;

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

export default ListingsList;
