/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export function PaginationBtn({ range, pgnFunc }) {
  //   const [end, setEnd] = useState(10);
  //   const [last, setLast] = useState(10);
  //   const moveIndex = type => {
  //     if (type === 1) {
  //       setEnd(10);
  //       //   this.setState({
  //       //     end: 10,
  //       //   });
  //     }
  //     if (type === 2 && end >= 10) {
  //       let end1 = end - 10;
  //       if (end1 < 10) {
  //         end1 = 10;
  //       }
  //       setEnd(end1);
  //       //   this.setState({
  //       //     end: end1,
  //       //   });
  //     }
  //     if (type === 3 && end <= last) {
  //       let end1 = end + 10;
  //       if (end1 > last) {
  //         end1 = last;
  //       }
  //       setEnd(end1);
  //       //   this.setState({
  //       //     end: end1,
  //       //   });
  //     }
  //     if (type === 4) {
  //       setEnd(last);
  //       //   this.setState({
  //       //     end: this.state.last,
  //       //   });
  //     }
  //   };
  return (
    <Button.Group className="pagBtn">
      <Button>Start</Button>
      {_.range(range).map(e => (
        <Button onClick={() => pgnFunc(e + 1)}>{e + 1}</Button>
      ))}
      <Button>Last</Button>
    </Button.Group>
  );
}

PaginationBtn.propTypes = {
  range: PropTypes.number,
  pgnFunc: PropTypes.func,
};

export default PaginationBtn;
