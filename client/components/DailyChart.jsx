import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';

class DailyChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.initChart = this.initChart.bind(this);
  }

  componentDidMount() {
    this.initChart();
  }

  initChart() {
    const { data } = this.props;
    const myChart = echarts.init(document.getElementById('chart'));
    myChart.setOption({
      title: {
        text: 'Daily Overview',
        left: 'center',
        textStyle: {
          fontSize: 28,
        },
      },
      series: [
        {
          name: 'ratio',
          type: 'pie',
          data: data,
          label: {
            normal: {
              formatter: '{d}% \n{b}',
              textStyle: {
                fontSize: 23,
              },
            },
          },
          itemStyle: {
            normal: {
              color: (params) => {
                const colorList = [
                  '#d0ef84', '#f4d143', '#fda831', '#de561c',
                ];
                return colorList[params.dataIndex];
              },
            },
          },
        },
      ],
    });
  }

  render() {
    return (
      <div id="chart" />
    );
  }
}

export default DailyChart;
