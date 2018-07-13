/* Проверка свойств (propTypes) при использовании createClass */

//----------------------------------------
const Summary = createClass({
  displayName: "Summary",
  propTypes: {
    ingredients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired,
    title: PropTypes.string
  },
  render() {
    const {ingredients, steps, title} = this.props
    return (
      <div className="summary">
        <h1>{ title }</h1>
        <p>
          <span>{ ingredients.length } Ingredients |</span>
          <span>{ steps.length }</span>
        </p>
      </div>
    )
  }
});
//----------------------------------------

//----------------------------------------
import { createClass, PropTypes } from 'react';

export const Summary = createClass({
  displayName: "Summary",
  propTypes: {
    ingredients: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    title: PropTypes.string
  },
  render() {
    const {ingredients, steps, title} = this.props
    return (
      <div className="summary">
        <h1>{ title }</h1>
        <p>
          <span>{ ingredients } Ingredients |</span>
          <span>{ steps }</span>
        </p>
      </div>
    )
  }
});
//----------------------------------------


/* Свойства, используемые по умолчанию */

//----------------------------------------
const Summary = createClass({
  displayName: "Summary",
  propTypes: {
    ingredients: PropTypes.number,
    steps: PropTypes.number,
    title: PropTypes.string
  },
  getDefaultProps() {
    return {
      ingredients: 0,
      steps: 0,
      title: "[recipe]"
    }
  },
  render() {
    const {ingredients, steps, title} = this.props
    return (
      <div className="summary">
        <h1>{ title }</h1>
        <p>
          <span>{ ingredients } Ingredients |</span>
          <span>{ steps }</span>
        </p>
      </div>
    )
  }
});
//----------------------------------------


/* Настраиваемая проверка свойств. Проверка должна вернуть, либо ошибку, либо null */

//----------------------------------------
propTypes: {
  ingredients: PropTypes.number,
  steps: PropTypes.number,
  title: (props, propName) => 
    (typeof props[propName] !== 'string') ?
      new Error("A title must be a string") :
      (props[propName].length > 20) ?
        new Error(`title is over 20 characters`) :
        null
}
//----------------------------------------


/* Внедрение состояния компонента */

//----------------------------------------
const StarRating = createClass({
  displayName: 'StarRating',
  propTypes: {
    totalStars: PropTypes.number
  },
  getDefaultProps() {
    return {
      totalStars: 5
    }
  },
  getInitialState() {
    return {
      starsSelected: 0
    }
  },
  change(starsSelected) {
    this.setState({starsSelected})
  },
  render() {
    const {totalStars} = this.props;
    const {starsSelected} = this.state;
    return (
      <div className="star-rating">
        {[...Array(totalStars)].map((n, i) =>  // Создаем массив длинную на основе указанного числа(totalStars), отображаемый на элементы Star
          <Star key={i} selected={i < starsSelected} onClick={() => this.change(i+1)} />
        )}
        <p>{ starsSelected } of { totalStars } stars</p>
      </div>
    )
  }
});
//----------------------------------------


/* Инициализация состояния из свойств */

//----------------------------------------
const StarRating = createClass({
  displayName: 'StarRating',
  propTypes: {
    totalStars: PropTypes.number
  },
  getDefaultProps() {
    return {
      totalStars: 5
    }
  },
  getInitialState() {
    return {
      starsSelected: 0
    }
  },
  componentWillMount() {
    const { starsSelected } = this.props;
    if (starsSelected) {
      this.setState({starsSelected})
    }
  },
  change(starsSelected) {
    this.setState({starsSelected})
  },
  render() {
    const {totalStars} = this.props;
    const {starsSelected} = this.state;
    return (
      <div className="star-rating">
        {[...Array(totalStars)].map((n, i) =>  // Создаем массив длинную на основе указанного числа(totalStars), отображаемый на элементы Star
          <Star key={i} selected={i < starsSelected} onClick={() => this.change(i+1)} />
        )}
        <p>{ starsSelected } of { totalStars } stars</p>
      </div>
    )
  }
});

ReactDOM.render(
  <StarRating totalStars={7} starsSelected={3} />,
  document.getElementById('react-container')
);
//----------------------------------------