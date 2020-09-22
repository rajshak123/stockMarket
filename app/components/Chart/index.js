import React from 'react';
import PropTypes from 'prop-types';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsExport from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';

HighchartsExport(Highcharts);
HighchartsExportData(Highcharts);
Highcharts.setOptions({
  time: {
    useUTC: false,
  },
});
const Chart = ({ data }) => (
  <div className="stats-graph">
    <HighchartsReact highcharts={Highcharts} options={data} />
  </div>
);

Chart.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Chart;
