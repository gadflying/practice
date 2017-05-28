import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { stars: 0, starsOver: 0 };
    this.starClick = this.starClick.bind(this);
    this.starOver = this.starOver.bind(this);
    this.starOut = this.starOut.bind(this);
  }

  starClick(event) {
    const { value: nextStars } = event.target;
    const { stars } = this.state;

    const starValue = +nextStars === stars ? 0 : +nextStars;
    this.setState({ stars: starValue });
  }

  starOver(star) {
    return (event) => {
      this.setState({ starsOver: star });
    }
  }

  starOut() {
    this.setState({ starsOver: 0 });
  }

  render() {
    const { stars = 0, starsOver = 0 } = this.state;
    const starsJsx = [...Array(4).keys()].map(num => num + 1).map((star) => {
      const starId = `star-${star}`;
      const starClass = star <= stars ? 'fa-star' : 'fa-star-o';
      const starStyle = star <= starsOver ? { color: '#f2e56f' } : { color: '#f4a742' };
      return (
        <span className="star-container" key={starId}>
          <label
            className="full"
            htmlFor={starId}
            title={`${star} stars`}
            onMouseOver={this.starOver(star)}
          >
            <i className={`fa ${starClass}`} aria-hidden="true" style={starStyle} />
          </label>
          <input
            id={starId}
            type="radio"
            value={star}
            name="stars"
            onClick={this.starClick}
          />
        </span>
      );
    });

    return (
      <section>
        <legend>How was it?</legend>
        <fieldset className="rating" onMouseLeave={this.starOut}>
          {starsJsx}
        </fieldset>
      </section>
    );
  }
}

export default App;
