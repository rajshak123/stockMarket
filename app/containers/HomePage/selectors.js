/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectHome,
    globalState => globalState.error,
  );

const makeSelectRepos = () =>
  createSelector(
    selectHome,
    globalState => globalState.userData.repositories,
  );

export {
  selectHome,
  makeSelectUsername,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
};
