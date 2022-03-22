import React, { FC, ReactElement } from "react";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ProfileListingPageLoader } from "./common/styles/Loader.style";
import MyErrorBoundary from "./common/MyErrorBoundary";
import CreateRoute from "../client/CreateRoute";

const App: FC<any> = (props): ReactElement<void> => {
  // Create Redux store with state injected by the server
  const store = configureStore({ initialState: props.initialState });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyErrorBoundary>
          <React.Suspense fallback={<ProfileListingPageLoader />}>
            <CreateRoute />
          </React.Suspense>
        </MyErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
