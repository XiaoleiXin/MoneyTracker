import React from 'react';
import { Modal } from 'react-bootstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      daily: ' ',
      monthly: ' ',
      confirm: true,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDailyChange = this.handleDailyChange.bind(this);
    this.handleMonthlyChange = this.handleMonthlyChange.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({
      show: true,
      confirm: true,
    });
  }

  handleDailyChange(event) {
    this.setState({ daily: event.target.value });
  }

  handleMonthlyChange(event) {
    this.setState({ monthly: event.target.value });
  }

  handleConfirm() {
    this.setState({ confirm: false });
  }

  render() {
    const { daily, monthly } = this.state;
    const { showHomePage, showDailyView } = this.props;
    return (
      <nav className="navbar navbar-default navbar-fixed-top bg-light" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#" onClick={showHomePage}>
              <span className="navWords glyphicon glyphicon-home" />
              <span className="navWords">
              MoneyTracker
              </span>
            </a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown" >
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <span className="navWords glyphicon glyphicon-align-left" />
                <span className="navWords">
                  Overview
                </span>
              </a>
              <ul className="dropdown-menu" id="navDropdown">
              <li><a href="#" onClick={showDailyView} >Daily Overview</a></li>
                <li><a href="#">Monthly Overview</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
