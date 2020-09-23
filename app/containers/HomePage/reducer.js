/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
// import { CHANGE_USERNAME } from './constants';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  CHANGE_USERNAME,
} from './constants';
// The initial state of the App
export const initialState = {
  loading: true,
  error: false,
  // currentUser: false,
  userData: {
    repositories: {
      energy: {},
      health: {},
    },
  },
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = {
          ...draft.userData.repositories,
        };
        break;

      case LOAD_REPOS_SUCCESS:
        console.log(action);
        draft.userData.repositories = {
          ...draft.userData.repositories,
          [action.response.dropKey]: {
            ...draft.userData.repositories[action.response.dropKey],
            [action.response.pageOn]: {
              ...draft.userData.repositories[action.response.dropKey][
                action.response.pageOn
              ],
              [action.response.id]: action.response.data,
            },
          },
        };
        draft.loading = false;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default homeReducer;
