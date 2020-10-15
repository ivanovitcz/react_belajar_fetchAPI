import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
function App() {

 
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const APP_ID = "ca13cc68";
  const APP_KEY = "ea8fb1b439b8f27627e4ff641e9d3190";
  const API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setRecipes(data.hits);

  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className='App'>
      <form onSubmit={getSearch} action="" className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" 
          className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label + recipe.recipe.calories}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
