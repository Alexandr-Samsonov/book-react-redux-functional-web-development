/* Функциональны компоненты (без состояния - stateless) */

//---------------------------
const Menu = (props) =>
  <article>
    <header>
      <h1>{props.title}</h1>
    </header>
    <div className="recipes">
      {props.recipes.map((recipe, i) =>
        <Recipe key={i} name={recipe.name} ingredients={recipe.ingredients} steps={recipe.steps} />
      )}
    </div>
  </article>
//-------------------------

//-------------------------
const Menu = ({ title, recipes }) => (
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, i) =>
        <Recipe key={i} {...recipe} />
      )}
    </div>
  </article>
)
//-------------------------

//-------------------------
const Summary = ({ ingredients, steps, title }) => {
  return <div>
    <h1>{ title }</h1>
    <p>{ ingredients } Ingredients | { steps } Steps</p>
  </div>
};

Summary.propTypes = {
  ingredients: React.PropTypes.number.isRequired,
  steps: React.PropTypes.number.isRequired
};

Summary.defaultProps = {
  ingredients: 1,
  steps: 1
};
//-------------------------

//-------------------------
const SummaryTwo = ({ ingredients=0, steps=0, title='[recipe]' }) => {
  return <div>
    <h1>{ title }</h1>
    <p>{ ingredients } Ingredients | { steps } Steps</p>
  </div>
};

SummaryTwo.propTypes = {
  ingredients: React.PropTypes.number.isRequired,
  steps: React.PropTypes.number.isRequired
};
//-------------------------


/* Ссылки (refs) */

//-------------------------
const AddColorForm = ({ onNewColor = f=>f }) => {
  let _title, _color;
  const submit = e => {
    e.preventDefault();
    onNewColor(_title.value, _color.value);
    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  };

  return (
    <form onSubmit={submit}>
      <input ref={input => _title = input} type="text" placeholder="color title..." required />
      <input ref={input => _color = input} type="text" required />
      <button>ADD</button>
    </form>
  )
}
//-------------------------


/* Обратный поток данных (двусторонняя привязка данных) */

//-------------------------
const Star = ({ selected = false, onClick = f=>f }) => 
  <div className={ (selected) ? "star  selected" : "star" } onClick={onClick}></div>

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
}
//-------------------------