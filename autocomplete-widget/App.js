import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      companies: [],
      selectedCompany: {},
      hoverIndex: -1,
      value: '',
      hasFocus: true,
    }
    this.onChange = this.onChange.bind(this);
    this.onCompanyClick = this.onCompanyClick.bind(this);
    this.onCompanyKeyDown = this.onCompanyKeyDown.bind(this);
  }

  onChange(event) {
    const { value: query } = event.target;

    if (query) {
      fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${query}`)
        .then(response => response.json())
        .then(json => {
          this.setState({ companies: json });
        })
        .catch(error => {
          this.setState({ companies: [] });
        });
    } else {
      this.setState({ companies: [] });
    }

    this.setState({ value: query });
  }

  onCompanyClick(company) {
    return (event) => {
      this.setState({
        selectedCompany: company,
        value: company.name,
        companies: [],
        hoverIndex: -1,
      });
    };
  }

  onCompanyKeyDown(event) {
    const { key } = event;
    const { companies = [], hoverIndex } = this.state;
    switch (key) {
      case 'ArrowDown':
        this.setState({ hoverIndex: Math.min(hoverIndex + 1, companies.length - 1) })
        break

      case 'ArrowUp':
        this.setState({ hoverIndex: Math.max(-1, hoverIndex - 1 )})
        break

      case 'Enter':
        this.setState({
          selectedCompany: companies[hoverIndex],
          hoverIndex: -1,
          companies: [],
          value: companies[hoverIndex].name,
        })
        break;
      default:
        // console.log('other key pressed', key);
    }
  }

  autoCompleteDom = {};

  render() {
    const { companies = [], value = '', hoverIndex = null } = this.state;
    const onMouseEnter = (index) => () => {
      this.setState({ hoverIndex: index });
    }

    const suggestionsJsx = companies.map((company, index) => {
      const { name, logo, domain } = company;
      const key = `key-${index}-${name}`;
      const classNames = ['company'].concat(hoverIndex === index ? 'hover' : []);
      return (
        <div
          className={classNames.join(' ')}
          key={key}
          onMouseDown={this.onCompanyClick(company)}
          onMouseEnter={onMouseEnter(index)}
        >
          <img className="logo" src={logo} alt={`${name}`}/>
          <span className="name">{name}</span>
          <span className="domain">{domain}</span>
        </div>
      )
    });

    const suggestionsContainerJsx = this.state.hasFocus && companies.length > 0
      ? (
        <div className='suggestions'>
          {suggestionsJsx}
        </div>
      ) : null;

    const onBlur = () => {
      this.setState({
        hasFocus: false,
      });
    }

    return (
      <section>
        <input
          className="company-input"
          onChange={this.onChange}
          type="text"
          value={value}
          onKeyDown={this.onCompanyKeyDown}
          ref={(ref) => { this.autoCompleteDom = ref; }}
          onFocus={() => { this.setState({ hasFocus: true }); }}
          onBlur={onBlur}
        />
        { suggestionsContainerJsx }
      </section>
    );
  }
}

export default App;
