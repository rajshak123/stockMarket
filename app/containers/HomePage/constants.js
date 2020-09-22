/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const LOAD_REPOS = 'boilerplate/Home/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/Home/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/Home/LOAD_REPOS_ERROR';

export const stockIndexMappingMoneyControl = {
  ADG01: {
    label: 'Adani Gas Ltd',
    baseId: '542066',
  },
  AL9: {
    label: 'Aegis Logistics Ltd',
    baseId: '500003',
  },
};

// const formatterHighCharts = {
//   millisecond: '%H:%M:%S.%L',
//   second: '%H:%M:%S',
//   minute: '%H:%M',
//   hour: '%H:%M',
//   day: '%e. %b',
//   week: '%e. %b',
//   month: "%b '%y",
//   year: '%Y',
// };

const myDateFormat = '%e/%m/%y';
// Create graph options
export const timeSeriesChartOption = {
  chart: {
    type: 'line', // line, bar, column, etc
    // renderTo: 'graph-container', // div where my graph will be drawn
    // zoomType: 'x', // Making x-axis zoomable/scrollable
  },
  title: {
    text: '',
  },
  //   subtitle: {
  //     text:
  //       document.ontouchstart === undefined
  //         ? 'Click and drag in the plot area to zoom in'
  //         : 'Pinch the chart to zoom in',
  //   },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      millisecond: myDateFormat,
      second: myDateFormat,
      minute: myDateFormat,
      hour: myDateFormat,
      day: myDateFormat,
      week: myDateFormat,
      month: myDateFormat,
      year: myDateFormat,
    },
  },
  yAxis: {
    title: {
      text: null,
    },
  },
  scrollbar: {
    enabled: true,
  },
  series: [
    {
      name: 'Prices', // Name of the series
      // data: dataArray
    },
  ],
  exporting: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
};

export const buttonTime = [
  {
    label: 'Last 1 month',
    id: 1,
  },
  {
    label: 'Last 6 months',
    id: 6,
  },
  {
    label: 'Last 9 months',
    id: 9,
  },
  {
    label: 'Last 1 year',
    id: 12,
  },
  {
    label: 'last 2 years',
    id: 24,
  },
  {
    label: 'Last 5 years',
    id: 60,
  },
  {
    label: 'Max',
    id: 'max',
  },
];
