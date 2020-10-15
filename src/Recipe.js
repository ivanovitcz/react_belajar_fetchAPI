import React from 'react';
import style from './recipes.module.css'
const Recipe = ({
  title, calories, image, ingredients
}) => {
  return (
    <div className={style.recipe}>
      <h1>
        {title}
      </h1>
      <ol>
        {ingredients.map(ingredients => (
          <li>
            {ingredients.text}
          </li>
        ))}
      </ol>
      <p>
        {calories}
      </p>
      <img src={image} alt="" className={style.image}/>
    </div>
  )
};


export default Recipe;