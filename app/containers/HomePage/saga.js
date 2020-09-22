/**
 * Gets the repositories of the user from Github
 */

import {
  call,
  put,
  // select,
  //  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import request from 'utils/request';
import { reposLoaded, repoLoadingError } from './actions';

import { LOAD_REPOS } from './constants';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos(evt) {
  const { payload, time } = evt;
  // Select username from store
  // const username = yield select(makeSelectUsername());
  const requestURL = `https://www.moneycontrol.com/mc/widget/basicchart/get_chart_value?classic=true&sc_did=${payload}&dur=${time}`;

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(reposLoaded(data, payload));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeEvery(LOAD_REPOS, getRepos);
}
