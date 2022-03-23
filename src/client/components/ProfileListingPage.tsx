import React, { FC, ReactElement } from "react";
import ProfileListing from "../../profile-listing";

const ProfileListingPage: FC<any> = (props): ReactElement<void> => {
  return <ProfileListing {...props} />;
};

export default ProfileListingPage;
