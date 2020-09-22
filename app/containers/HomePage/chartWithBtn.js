import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import moment from 'moment';
import Chart from '../../components/Chart';

import {
  buttonTime,
  timeSeriesChartOption,
  stockIndexMappingMoneyControl,
} from './constants';
import './colors.scss';

function ChartBtn({ data, fetchPricesBasedOnTime, symbolID }) {
  const [buttonVal, setBtnState] = useState('max');
  return (
    <Fragment>
      <Button.Group>
        {buttonTime.map(ele => (
          <Button
            active={ele.id === buttonVal}
            onClick={() => {
              setBtnState(ele.id);
              fetchPricesBasedOnTime(symbolID, ele.id);
            }}
          >
            {ele.label}
          </Button>
        ))}
      </Button.Group>
      <Chart data={data} />
    </Fragment>
  );
}
ChartBtn.propTypes = {
  data: PropTypes.object,
  symbolID: PropTypes.string,
  fetchPricesBasedOnTime: PropTypes.func,
};

export function ChartWithBtn({ propsData }) {
  const [dataState, setDataState] = useState(1);
  const [staticDataState, staticSetDataState] = useState(1);
  let charts = null;
  useEffect(() => {
    setDataState(propsData);
    staticSetDataState(propsData);
  }, [propsData]);
  useEffect(() => {}, [dataState]);
  const getNearestDate = (counts, goal) =>
    counts.reduce((prev, curr) =>
      Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev,
    );
  const fetchPricesBasedOnTime = (symbolID, timeID) => {
    if (timeID !== 'max') {
      const currentDate = moment().valueOf();
      const pastDate = moment()
        .subtract(timeID, 'months')
        .valueOf();
      const permData = { ...staticDataState };
      // eslint-disable-next-line array-callback-return
      Object.keys(permData).map(key => {
        if (key === symbolID) {
          const timeDate = permData[key].map(e => e[0]);
          const nearestCurrent = getNearestDate(timeDate, currentDate);
          const nearestPastDate = getNearestDate(timeDate, pastDate);
          let symbolData = [];
          permData[key].forEach(e => {
            if (e[0] >= nearestPastDate && e[0] <= nearestCurrent) {
              symbolData = [...symbolData, e];
            }
          });
          setDataState(prevState => ({
            ...prevState,
            [symbolID]: symbolData,
          }));
        }
      });
    }
    if (timeID === 'max') {
      const permData = { ...staticDataState };
      setDataState(permData);
    }

    // const currentDate = +new Date();
  };
  charts = Object.keys(dataState).map(ele => {
    const options = {
      ...timeSeriesChartOption,
      series: [
        {
          name: stockIndexMappingMoneyControl[ele].label,
          data: [...dataState[ele]],
        },
      ],
    };
    return (
      <ChartBtn
        data={options}
        fetchPricesBasedOnTime={fetchPricesBasedOnTime}
        symbolID={ele}
      />
    );
  });

  //   });
  return <div>{charts}</div>;
}

ChartWithBtn.propTypes = {
  propsData: PropTypes.object,
  //   symbolID: PropTypes.string,
  //   fetchPricesBasedOnTime: PropTypes.func,
};

export default ChartWithBtn;
