import * as actions from "../../client/redux/action";
import * as commonHelper from "../../../components/common/helper/commonHelper";
import { FETCH_INFO } from "../../client/redux/constants";
import ListingPageService from "../../../services/ListingPageService";

describe("fetching profile listing actions", () => {
  test("creates FETCH_INFO action", () => {
    const sandbox = require("sinon").sandbox.create();
    const page = 1;
    const fetchApiDataInAction = sandbox.spy(
      commonHelper,
      "fetchApiDataInAction"
    );
    actions.fetchInfo(page);
    expect(
      fetchApiDataInAction.calledWith(
        FETCH_INFO,
        ListingPageService.fetchInfo(page)
      )
    ).toBe(true);
    sandbox.restore();
  });
});
