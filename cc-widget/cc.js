const CARDS = {
  visa: {
    name: 'Visa',
    prefix: 4,
    template: '#### - #### - #### - ####'.split('#'),
    length: 16,
    id: 'visa',
  },
  mastercard: {
    name: 'Mastercard',
    prefix: 5,
    template: '#### - #### - #### - ####'.split('#'),
    length: 16,
    id: 'mastercard',
  },
  discover: {
    name: 'Discover',
    prefix: 6,
    template: '#### - #### - #### - ####'.split('#'),
    length: 16,
    id: 'discover',
  },
  amex: {
    name: 'American Express',
    prefix: 3,
    template: '#### - #### - #### - ###'.split('#'),
    length: 15,
    id: 'amex',
  },
};

class CC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cc: '',
      card: {},
    }

    this.cleanData = this.cleanData.bind(this);
    this.onCCChange = this.onCCChange.bind(this);
    this.onCCKeyDown = this.onCCKeyDown.bind(this);
    this.formatData = this.formatData.bind(this);
    this.getCardsJsx = this.getCardsJsx.bind(this);
    this.getCard = this.getCard.bind(this);
  }

  // Clean input
  cleanData(data = '', card = {}) {
    const { cc } = this.state;
    const cleaned = data.replace(/\D/g, '').slice(0, card.length || 16);
    return cleaned;
  }

  onCCChange(event) {
    const { value } = event.target;
    const card = this.getCard(value);
    const cleaned = this.cleanData(value, card);
    this.setState({ cc: cleaned, card });
  }

  onCCKeyDown(event) {
    const { key, target: { value } } = event;
    const { cc } = this.state;

    switch (key) {
      case 'Backspace':
        event.preventDefault();
        this.setState({ cc: cc.slice(0, -1) });
        break;
      default:
        break;
    }
  }

  getCard(value = ' ') {
    const foundCard = Object.keys(CARDS).find((cardKey) => {
      const card = CARDS[cardKey];
      return card.prefix === +value[0];
    });

    return CARDS[foundCard] || {
      name: '',
      template: '#### - #### - #### - ####'.split('#'),
      length: 16,
    };
  }

  // Format input
  formatData(data = '', card = {}) {
    const TEMPLATE = card.template || '#### - #### - #### - ####'.split('#');
    const formatted = data.split('').slice().reduce((stream, number, index) => {
      return stream.concat(number, TEMPLATE[index + 1]);
    }, '');
    return formatted;
  }

  getCardsJsx() {
    const cardJsx = Object.keys(CARDS).reduce((jsx, cardKey) => {
      const card = CARDS[cardKey];
      const { name } = card;
      const cardId = `cc-${cardKey}`;

      const classes = ['card'];
      classes.push(cardKey);
      if (cardKey === this.state.card.id) {
        classes.push('selected');
      }

      return jsx.concat(
        <span id={cardKey} key={cardKey} className={classes.join(' ')}>{name}</span>
      );
    }, []);
    return cardJsx;
  }

  // Highlight card type
  render() {
    const { cc = '', card } = this.state;
    const formatted = this.formatData(cc, card);
    return (
      <div>
        <div>
          {this.getCardsJsx()}
        </div>
        <input
          onChange={this.onCCChange}
          onKeyDown={this.onCCKeyDown}
          value={formatted}
          placeholder={'#### - #### - #### - ####'}
        />
      </div>
    );
  }
}

ReactDOM.render(<CC />, document.getElementById('main'));
