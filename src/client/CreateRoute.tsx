import React, { FC, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { ProfileListingPageLoader } from "../components/common/styles/Loader.style";
import NotFound from "../components/common/NotFound";

const ProfileListingPage = React.lazy(
  () => import("./components/ProfileListingPage")
);

const CreateRoute: FC = (): ReactElement<void> => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<ProfileListingPageLoader />}>
            <ProfileListingPage />
          </React.Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CreateRoute;
