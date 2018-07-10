import React from 'react';

class DailyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
    this.Total = this.Total.bind(this);
    this.ChooseCategory = this.ChooseCategory.bind(this);
  }

  Total() {
    const { data } = this.state;
    let total = 0;
    data.forEach((item) => {
      total += item[3];
    });
    return total;
  }

  ChooseCategory(key) {
    const { data } = this.props;
    const result = [];
    data.forEach((item) => {
      if (item.includes(key)) {
        result.push(item);
      }
    });
    this.setState({ data: result });
  }

  render() {
    const { data } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th>
              <button id="tableHeader" type="button" className="btn btn-success" onClick={() => this.ChooseCategory('Food')}>Food</button>
            </th>
            <th>
              <button id="tableHeader" type="button" className="btn btn-success" onClick={() => this.ChooseCategory('Traffic')}>Traffic</button>
            </th>
            <th>
              <button id="tableHeader" type="button" className="btn btn-success" onClick={() => this.ChooseCategory('Life')}>Life</button>
            </th>
            <th>
              <button id="tableHeader" type="button" className="btn btn-success" onClick={() => this.ChooseCategory('Entertainment')}>Entertainment</button>
            </th>
          </tr>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index}>
                {row.map((item, index) => {
                  return (
                    <td key={index}>{item}</td>
                  );
                })}
              </tr>
            );
          })}
          <tr>
            <th />
            <th />
            <th>Total</th>
            <th>{this.Total()}</th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default DailyTable;
