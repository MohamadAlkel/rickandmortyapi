import { fetchApiDataInAction } from "../../../components/common/helper/commonHelper";
import { FETCH_INFO } from "./constants";
import ListingPageService from "../../../services/ListingPageService";

export function fetchInfo(page) {
  return fetchApiDataInAction(FETCH_INFO, ListingPageService.fetchInfo(page));
}
