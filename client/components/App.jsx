import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import HomePage from './HomePage.jsx';
import DailyView from './DailyView.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      DailyView: false,
      MonthlyView: false,
      homePage: true,
      items: [],
    };

    this.showHomePage = this.showHomePage.bind(this);
    this.showDailyView = this.showDailyView.bind(this);
    this.fetchDailyItems = this.fetchDailyItems.bind(this);
  }

  componentDidMount() {
    const myDate = new Date();
    this.fetchDailyItems(`${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`);
  }

  fetchDailyItems(date) {
    axios.get(`/daily/${date}`).then(((response) => {
      this.setState({ items: response.data });
    }));
  }

  showHomePage() {
    this.setState({
      homePage: true,
      DailyView: false,
      MonthlyView: false,
    });
  }

  showDailyView() {
    this.setState({
      homePage: false,
      DailyView: true,
      MonthlyView: false,
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <NavBar showHomePage={this.showHomePage} showDailyView={this.showDailyView} />
        {this.state.homePage ? <HomePage clearInput={this.clearInput} /> : null }
        {this.state.DailyView ? <DailyView items={items} fetchDailyItems={this.fetchDailyItems} showHomePage={this.showHomePage} showDailyView={this.showDailyView} /> : null}
      </div>
    );
  }
}

export default App;
