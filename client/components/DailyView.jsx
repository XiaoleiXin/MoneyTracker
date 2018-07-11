import React from 'react';
import DailyTable from './DailyTable.jsx';
import DailyChart from './DailyChart.jsx';
import DailyFetch from './DailyFetch.jsx';

const DailyView = ({ items, fetchDailyItems, showHomePage, }) => {
  const chartCalculator = () => {
    const ratio = {};
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
  };

  return (
    <div>
      <DailyChart data={chartCalculator()} />
      <DailyFetch fetchDailyItems={fetchDailyItems} showHomePage={showHomePage} />
      <DailyTable data={items} />
    </div>
  );
};

export default DailyView;
