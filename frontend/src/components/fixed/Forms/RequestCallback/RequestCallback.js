import React, { Component } from 'react';
import './RequestCallback.css';
import Input from '../../../reusable/Input/Input';
import Button from '../../../reusable/Button/Button';
import InputRow from '../../../reusable/InputRow/InputRow';

class RequestCallback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
    };
  }

  handleInput = (name, value) => {
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.values);
  }

  handleClear = (event) => {
    event.preventDefault();
    this.setState({
      values: [],
    });
  }

  render() {
    return (
      <div className="RequestCallback">
        <form className="RequestCallback__form">
          <InputRow>
            <Input
              id="yourname"
              type="text"
              name="person_name"
              placeholder="Your Name"
              value={this.state.values['person_name'] || ''}
              onChange={(value) => this.handleInput('person_name', value)}
            />
          </InputRow>
          <InputRow>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={this.state.values['phone'] || ''}
              onChange={(value) => this.handleInput('phone', value)}
            />
          </InputRow>
          <InputRow>
            <Button
              fontColor="#fff"
              bgColor="blue"
              onClick={this.handleSubmit}
            >Send Request</Button>
            <Button
              fontColor="#fff"
              bgColor="grey"
              onClick={this.handleClear}
            >Clear</Button>
          </InputRow>
        </form>
      </div>
    );
  }

}

export default RequestCallback;
