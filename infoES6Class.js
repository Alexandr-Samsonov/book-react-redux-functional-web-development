/* Классы ES6 не имеющие состояния */

//-----------------------------------
class Summary extends React.Component {
  render() {
    const { ingredients, steps, title } = this.props
    return (
      <div className="summary">
        <h1>{title}</h1>
        <p>
          <span>{ingredients} Ingredients | </span>
          <span>{steps}</span>
        </p>
      </div>
    )
  }
};

Summary.propTypes = {
  ingredients: PropTypes.number,
  steps: PropTypes.number,
  title: (props, propName) =>
    (typeof props[propName] !== 'string') ?
      new Error("A title must be a string") :
      (props[propName].length > 20) ?
        new Error(`title is over 20 characters`) :
        null
}

Summary.defaultProps = {
  ingredients: 0,
  steps: 0,
  title: "[recipe]"
}
//-----------------------------------


/* Статические свойства класса */

//-----------------------------------
class SummaryTwo extends React.Component {

  static propTypes = {
    ingredients: PropTypes.number,
    steps: PropTypes.number,
    title: (props, propName) => 
      (typeof props[propName] !== 'string') ?
        new Error("A title must be a string") :
        (props[propName].length > 20) ?
          new.Error(`title is over 20 characters`) :
          null
  };

  static defaultProps = {
    ingredients: 0,
    steps: 0,
    title: "[recipe]"
  }

  render() {
    const { ingredients, steps, title } = this.props;
    return (
      <div className="summary">
        <h1>{title}</h1>
        <p>
          <span>{ingredients} Ingredients | </span>
          <span>{steps} Steps</span>
        </p>
      </div>
    )
  }

};
//-----------------------------------


/* Ссылки (refs) */

//-----------------------------------
import { Component } from 'react';
 
class AddColorForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    const { _title, _color } = this.refs;
    e.preventDefault();
    alert(`New Color: ${_title.value} ${_color.value}`);
    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input ref="_title" type="text" placeholder="color title..." required />
        <input ref="_color" type="text" required />
        <button>ADD</button>
      </form>
    )
  }
};
//-----------------------------------


/* Обратный поток данных (двусторонняя привязка данных) */

//-----------------------------------
const logColor = (title, color) => console.log(`New Color: ${title} | ${value}`);

<AddColorForm onNewColor={logColor} />

submit() {
  const {_title, _color} = this.refs;
  if (this.props.onNewColor) {  /* Проверка, передано ли что-то */
    this.props.onNewColor(_title.value, _color.value);
  }
  _title.value = '';
  _color.value = '#000000';
  _title.focus();
}


<AddColorForm onNewColor={(title, color) => {
  console.log(`TODO: add new ${title} and ${color} to the list`)
  console.log(`TODO: render UI with new Color`)
}} />

// Еще более лучшая проверка, передано ли что-то
AddColorForm.propTypes = {
  onNewColor: PropTypes.func
};

AddColorForm.defaultProps = {
  onNewColor: f => f
};
//-----------------------------------


/* Внедрение состояния компонента */

//-----------------------------------
class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: 0
    };
    this.change = this.change.bind(this);
  }

  change(starsSelected) {
    this.setState({starsSelected});
  }

  render() {
    const { totalStars } = this.props;
    const { starsSelected } = this.state;
    return (
      <div className="star-rating">
        {[...Array(totalStars)].map((n, i) =>  // Создаем массив длинную на основе указанного числа(totalStars), отображаемый на элементы Star
          <Star key={i} selected={i < starsSelected} onClick={() => this.change(i+1)} />
        )}
        <p>{starsSelected} of {totalStars} stars</p>
      </div>
    )
  }
}

StarRating.propTypes = {
  totalStars = PropTypes.number
}

StarRating.defaultProps = {
  totalStars: 5
}
//-----------------------------------


/* Инициализация состояния из свойств */

//-----------------------------------
constructor(props) {
  super(props);
  this.state = {
    starsSelected: props.starsSelected || 0
  };
  this.change = this.change.bind(this)
}
//-----------------------------------