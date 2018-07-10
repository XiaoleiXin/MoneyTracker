import React from 'react';

class DailyFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
  }

  handleDateChange(e) {
    this.setState({ date: e.target.value });
  }

  handleFetch() {
    const { fetchDailyItems, showHomePage, showDailyView } = this.props;
    const { date } = this.state;
    showHomePage();
    fetchDailyItems(date);
    this.setState({ date: '' });
  }

  render() {
    const { date } = this.state;
    return (
      <div id="dailyFetch">
        <input id="amountInput" className="desInput" type="text" value={date} onChange={this.handleDateChange} placeholder=" Date.." onFocus={(e) => { e.target.placeholder = ''; }} onBlur={(e) => { e.target.placeholder = ' Date..'; }} />
        <button type="button" id="go" className="btn btn-success" onClick={this.handleFetch}>Go</button>
      </div>
    );
  }
}

export default DailyFetch;
