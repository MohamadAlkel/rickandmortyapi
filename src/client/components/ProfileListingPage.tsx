import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import ProfileListing from "../../profile-listing";
import { fetchInfo } from "../../profile-listing/client/redux/action";

const ProfileListingPage: FC<any> = (props): ReactElement<void> => {
  return <ProfileListing {...props} />;
};

const mapStateToProps = (state) => ({
  profiles: state.profileListing.profiles,
  page: state.profileListing.page,
  isFetching: state.profileListing.isFetching,
});

const mapDispatchToProps = {
  fetchInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileListingPage);
