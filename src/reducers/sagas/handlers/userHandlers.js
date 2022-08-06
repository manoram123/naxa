import { call, put } from "redux-saga/effects";
import { setUser } from "../../../actions/actions";
import { requestGetData } from "../requests/dataRequests";

export function* handleGetData(action) {
    try {
        const response = yield call(requestGetData);
        const { data } = response;
        yield put(setUser(data));
    } catch (error) {
        console.log(error);
    }
}