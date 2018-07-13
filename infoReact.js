/*---------------------------------------------------*/
/*---------------------------------------------------*/


/*----- Элементы React ------*/
// Элемент React для представления h1 можно создать, применив метод React.createElement

React.createElement("h1", null, "Bakend Salmon");
/*  <h1>Bakend Salmon</h1>  */

React.createElement("h1", { id: "recipe-0", 'data-type': "title" }, "Bakend Salmon");
/*  <h1 id="recipe-0" data-type="title">Bakend Salmon</h1>  */

React.createElement(
  "ul",
  null,
  React.createElement("li", null, "1 lb Salmon"),
  React.createElement("li", null, "1 cup Pine Nuts"),
  React.createElement("li", null, "2 cups Butter Lettuce")
);
/*
<ul>
  <li>1 lb Salmon</li>
  <li>1 cup Pine Nuts</li>
  <li>2 cups Butter Lettuce</li>
</ul>
*/

// Конструирование элементов с данными
var items = [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce"
];

React.createElement(
  "ul",
  { className: "ingredients"},
  items.map(ingredient => 
    React.createElement("li", null, ingredient)
  )
);
/*
<ul class="ingredients">
  <li>1 lb Salmon</li>
  <li>1 cup Pine Nuts</li>
  <li>2 cups Butter Lettuce</li>
</ul>
*/
/*-----/ Элементы React /------*/


/*----- Фабрики -----*/
React.DOM.h1(null, "Baked Salmon");

React.DOM.ul({ className: "ingredients" },
  React.DOM.li(null, "1 lb Salmon"),
  React.DOM.li(null, "1 cup Pine Nuts"),
  React.DOM.li(null, "2 cups Butter Lettuce")
);
/*-----/ Фабрики /-----*/


/*---------------------------------------------------*/
/*---------------------------------------------------*/


// Три способа создания компонентов: createClass, классы ES6, функциональные компоненты(не имеющие состояния stateless)

/*----- React.createClass -----*/
const IngredientsList = React.createClass({
  displayName: "IngredientsList",
  render() {
    return React.createElement("ul", { className: "ingredients" },
      React.createElement("li", null, "1 lb Salmon"),
      React.createElement("li", null, "1 cup Pine Nuts"),
      React.createElement("li", null, "2 cups Butter Lettuce")
    )
  }
});

const list = React.createElement(IngredientsList, null, null);

ReactDOM.render(
  list,
  document.getElementById('react-container')
);
/*
<IngredientsList>
  <ul class="ingredients">
    <li>1 lb Salmon</li>
    <li>1 cup Pine Nuts</li>
    <li>2 cups Butter Lettuce</li>
  </ul>
</IngredientsList>
*/

// Данные передаются компонентам React в виде свойств
const IngredientsList = React.createClass({
  displayName: "IngredientsList",
  render() {
    return React.createElement("ul", { className: "ingredients" },
      this.props.items.map((ingredient, i) => 
        React.createElement("li", { key: i }, ingredient)
      )
    )
  }
});

const items = [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce"
];

ReactDOM.render(
  React.createElement(IngredientsList, { items }, null),
  document.getElementById('react-container')
);
/*-----/ React.createClass /-----*/


/*----- ES6 и React.Component -----*/
// Абстрактный класс React.Component нужен для создания новых компонентов React.
// Компоненты создаются путем наследования за счет расширения этого класса с помощью синтаксиса ES6

class IngredientsList extends React.Component {
  renderListItem(ingredient, i) {
    return React.createElement("li", { key: i }, ingredient)
  }

  render() {
    return React.createElement("ul", { className: "ingredients" },
      this.props.items.map(this.renderListItem)
    )
  }
}
/*-----/ ES6 и React.Component /-----*/


/*----- Функциональные компоненты, не имеющие состояния -----*/
const IngredientsList = props => 
  React.createElement("ul", { className: "ingredients" },
    props.items.map((ingredient, i) =>
      React.createElement("li", { key: i }, ingredient)
    )
  )

const IngredientsList = ({ items }) =>
  React.createElement("ul", { className: "ingredients" },
    items.map((ingredient, i) =>
      React.createElement("li", { key: i }, ingredient)
    )
  )
/*-----/ Функциональные компоненты, не имеющие состояния /-----*/