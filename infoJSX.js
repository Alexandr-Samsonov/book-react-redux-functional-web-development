/* Вложенные компоненты */
<IngredientsList>
  <Ingredient />
  <Ingredient />
</IngredientsList>


/* Выражения JavaScript */
<h1>{this.props.title}</h1>

<input type="checkbox" defaultChecked={false} />


/* Вычисление */
<h1>{ "Hello" + this.props.title }</h1>

<h1>{ this.props.title.toLowerCase().replace }</h1>

function appendTitle({ this.props.title }) {
  console.log(`${this.props.title} is great`)
}


/* Отображение массивов на JSX */
<ul>
  { this.props.ingredients.map((ingredient, i) =>
    <li key={i}>{ ingredient }</li>
  ) }
</ul>