import React from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

class HomePage extends React.Component {
  constructor() {
    super();
    const myDate = new Date();
    this.state = {
      description: '',
      amount: '',
      category: 'Category',
      show: false,
      date: `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`,
    };
    this.handleDesChange = this.handleDesChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDesChange(event) {
    this.setState({ description: event.target.value });
  }

  handleAmountChange(event) {
    this.setState({ amount: event.target.value });
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value });
  }

  handleCategoryChange(event) {
    this.setState({ category: event.target.text });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit() {
    const { date, category, description} = this.state;
    const { clearInput } = this.props;
    let { amount } = this.state;
    amount = Number(amount);
    const data = { date, category, description, amount };
    axios.post('/item', data).then(() => window.location.reload());
  }

  render() {
    const { category, description, amount, date } = this.state;
    return (
      <div>
        <img src="chars.png" id="chars" alt="" />
        <div className="dropdown">
          <button type="button" id="category" className="btn btn-success dropdown-toggle dropdown" data-toggle="dropdown">
            {category}
          </button>
          <ul className="dropdown-menu" id="categorydropdown">
            <li><a href="#" onClick={this.handleCategoryChange}>Food</a></li>
            <li><a href="#" onClick={this.handleCategoryChange}>Traffic</a></li>
            <li><a href="#" onClick={this.handleCategoryChange}>Life</a></li>
            <li><a href="#" onClick={this.handleCategoryChange}>Entertainment</a></li>
          </ul>
          <input id="dateInput" className="desInput" type="text" value={date} onChange={this.handleDateChange} />
          <input className="desInput" type="text" value={description} onChange={this.handleDesChange} placeholder=" Cost Descriptions.." onFocus={(e) => { e.target.placeholder = ''; }} onBlur={(e) => { e.target.placeholder = ' Cost Descriptions..'; }} />
          <span id="amount">$</span>
          <input id="amountInput" className="desInput" type="text" value={amount} onChange={this.handleAmountChange} placeholder=" Amount.." onFocus={(e) => { e.target.placeholder = ''; }} onBlur={(e) => { e.target.placeholder = ' Amount..'; }} />
          <button type="button" id="submit" className="btn btn-success" onClick={this.handleShow}>
            Submit
          </button>
        </div>
        <img className="photo" src="https://wisebread-killeracesmedia.netdna-ssl.com/files/fruganomics/imagecache/605x340/blog-images/family-finances-4967052-small.jpg" alt="" />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <p className="modalTitle">Summary</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Date</h4>
            <p>{date}</p>
            <h4>Category</h4>
            <p>{category}</p>
            <h4>Description</h4>
            <p>{description}</p>
            <h4>Amount</h4>
            <p>$ {amount}</p>
          </Modal.Body>
          <Modal.Footer>
          <button id="summaryButton" type="button" className="btn btn-success" onClick={this.handleSubmit}>Add it!</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default HomePage;