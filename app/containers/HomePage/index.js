/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
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
import PaginationBtn from './paginationButtons';

import { changeUsername, loadRepos } from './actions';
import reducer from './reducer';
import saga from './saga';
import { stockIndexMappingMoneyControl, healthCareMarket } from './constants';

const key = 'home';

export function HomePage({ repos, fetchPriceMoneyControl }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [sectorDrop, changeSectorDrop] = useState({
    value: 'energy',
    label: 'Energy Sector',
  });
  const [pageOn, setPageOn] = useState(1);
  useEffect(() => {
    if (sectorDrop.value === 'energy') {
      if (!repos[sectorDrop.value][pageOn]) {
        Object.keys(stockIndexMappingMoneyControl[pageOn]).map(objKey =>
          fetchPriceMoneyControl(objKey, 'max', sectorDrop.value, pageOn),
        );
      }
    }
    if (sectorDrop.value === 'health') {
      if (!repos[sectorDrop.value][pageOn]) {
        Object.keys(healthCareMarket[pageOn]).map(objKey =>
          fetchPriceMoneyControl(objKey, 'max', sectorDrop.value, pageOn),
        );
      }
    }
  }, [sectorDrop.value, pageOn]);

  const getTimeStamp = myDate => {
    const myDate1 = myDate.split('-');
    const newDate = new Date(myDate1[0], myDate1[1] - 1, myDate1[2]);
    return newDate.getTime();
  };
  const mapping = {
    energy: stockIndexMappingMoneyControl,
    health: healthCareMarket,
  };
  const dataWithSymbolId = {};
  const objWithData =
    repos[sectorDrop.value][pageOn] &&
    Object.keys(mapping[sectorDrop.value][pageOn]).length ===
      Object.keys(repos[sectorDrop.value][pageOn]).length
      ? repos[sectorDrop.value]
      : {};
  // eslint-disable-next-line no-unused-expressions
  objWithData[pageOn]
    ? Object.keys(objWithData[pageOn]).forEach(key2 => {
      return (dataWithSymbolId[key2] = objWithData[pageOn][key2].g1.map(
        data => [getTimeStamp(data.date), Number(data.high)],
      ));
    })
    : null;
  const options = [
    { value: 'energy', label: 'Energy Sector' },
    { value: 'health', label: 'Healtch Care' },
  ];

  console.log(
    'dsjkfh',
    Object.keys(mapping[sectorDrop.value][pageOn]).length,
    repos[sectorDrop.value][pageOn]
      ? Object.keys(repos[sectorDrop.value][pageOn]).length
      : null,
    dataWithSymbolId,
  );
  const updatePage = val => {
    setPageOn(val);
  };
  return (
    <article>
      <div className="chartCon">
        <Select
          value={sectorDrop}
          onChange={val => {
            changeSectorDrop(val);
            setPageOn(1);
          }}
          options={options}
        />
        <div>
          <ChartWithBtn
            propsData={dataWithSymbolId}
            lengthOfStocks={
              Object.keys(mapping[sectorDrop.value][pageOn]).length
            }
            labelData={mapping[sectorDrop.value][pageOn]}
          />
        </div>
        <div>
          <PaginationBtn
            range={Object.keys(mapping[sectorDrop.value]).length}
            pgnFunc={updatePage}
          />
        </div>
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
    fetchPriceMoneyControl: (id, time, dropKey, pageOn) => {
      dispatch(loadRepos(id, time, dropKey, pageOn));
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
