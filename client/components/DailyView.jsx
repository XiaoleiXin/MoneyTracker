import React from 'react';
import DailyTable from './DailyTable.jsx';
import DailyChart from './DailyChart.jsx';

class DailyView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    };
    this.chartCalculator = this.chartCalculator.bind(this);
  }

  chartCalculator() {
    const ratio = {};
    const { items } = this.state;
    const percentage = [];
    let total = 0;
    items.forEach((item) => {
      total += item[3];
      if (ratio[item[1]] === undefined) {
        ratio[item[1]] = item[3];
      } else {
        ratio[item[1]] += item[3];
      }
    });
    const keys = Object.keys(ratio);
    keys.forEach((key) => {
      percentage.push({ value: ratio[key] / total, name: key });
    });
    return percentage;
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <DailyChart data={this.chartCalculator()} />
        <DailyTable data={items} />
      </div>
    );
  }
}

export default DailyView;
