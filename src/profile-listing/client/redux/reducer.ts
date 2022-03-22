import { FETCH_INFO } from "./constants";
import { ProfileModule } from "../helpers/typeHelper";
interface InitialStateModule {
  page: number;
  profiles: Array<ProfileModule>;
  isFetching: boolean;
}

export const initialState: InitialStateModule = {
  page: 1,
  profiles: [],
  isFetching: false
};

export default function profileListingReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case `${FETCH_INFO}_START`:
      return {
        ...state,
        isFetching: true,
      };
    case `${FETCH_INFO}_SUCCESS`:
      return {
        ...state,
        profiles: payload,
        isFetching: false,
      };
    case `${FETCH_INFO}_ERROR`:
      return {
        ...state,
        profiles: [],
        isFetching: false,
      };
  }
  return state;
}
