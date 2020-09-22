/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
  makeSelectUsername,
} from './selectors';
import ChartWithBtn from './chartWithBtn';
// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
// import Form from './Form';
// import Input from './Input';
// import Section from './Section';
// import messages from './messages';
// import { loadRepos } from '../App/actions';
import { changeUsername, loadRepos } from './actions';

import reducer from './reducer';
import saga from './saga';
import { stockIndexMappingMoneyControl } from './constants';

const key = 'home';

export function HomePage({ repos, fetchPriceMoneyControl }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    Object.keys(stockIndexMappingMoneyControl).map(objKey =>
      fetchPriceMoneyControl(objKey, 'max'),
    );
  }, []);

  const getTimeStamp = myDate => {
    const myDate1 = myDate.split('-');
    const newDate = new Date(myDate1[0], myDate1[1] - 1, myDate1[2]);
    return newDate.getTime();
  };

  const dataWithSymbolId = {};
  Object.keys(repos).forEach(
    // eslint-disable-next-line no-return-assign
    key2 =>
      // dataWithSymbolId[key2] = {
      //   data: repos[key2].g1.map(data => [
      //     getTimeStamp(data.date),
      //     Number(data.high),
      //   ]),
      //   // minDate: repos[key2].g1[0].date,
      //   // maxDate: repos[key2].g1[repos[key2].g1.length - 1].date,
      // };
      (dataWithSymbolId[key2] = repos[key2].g1.map(data => [
        getTimeStamp(data.date),
        Number(data.high),
      ])),
  );

  return (
    <article>
      <div>
        <ChartWithBtn propsData={dataWithSymbolId} />
      </div>
    </article>
  );
}

HomePage.propTypes = {
  repos: PropTypes.object,
  fetchPriceMoneyControl: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    fetchPriceMoneyControl: (id, time) => {
      dispatch(loadRepos(id, time));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
