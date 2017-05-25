import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { phonenumber: '' };
  }

  render() {
    const EN_US = '(XXX) XXX - XXX'.split('X');
    const cleanString = input => input.replace(/\D/g, '');

    const formatString = (number) => {
      const formatted = number.split('').reduce((numbers, digit, index) => (
        `${index === 0 ? EN_US[0] : ''}${numbers}${digit}${EN_US[index + 1] || ''}`
      ), '');
      return formatted;
    };

    const onChange = (event) => {
      const { value = '' } = event.target;
      const cleaned = cleanString(value);
      const formatted = formatString(cleaned);
      this.setState({ phonenumber: formatted });
    };

    const onKeyDown = (event) => {
      const { keyCode, charCode } = event;
      const code = keyCode || charCode;
      const { phonenumber } = this.state;
      const cleaned = cleanString(phonenumber);

      if (code === 8) {
        event.stopPropagation();
        event.preventDefault();
      }
      const cutNumber = code === 8
        ? cleaned.slice(0, -1)
        : cleaned.slice();

      const formatted = formatString(cutNumber);

      this.setState({ phonenumber: formatted });
    };

    const { phonenumber } = this.state;

    return (
      <div>
        <input
          type="tel"
          placeholder="(555) 555 - 5555"
          inputMode="tel"
          autoComplete="tel"
          onChange={onChange}
          value={phonenumber}
          onKeyDown={onKeyDown}
        />
      </div>
    );
  }
}

export default App;
