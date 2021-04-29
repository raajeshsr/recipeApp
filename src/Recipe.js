import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title,calories,imageurl,ingredients})=>{
    
    return(
            <div className={style.recipe}> 
                <p className={style.title}>{title}</p>    
                <p className={style.calories}>calories : {Math.round(calories)}</p>
                <img className={style.image} src={imageurl} alt=""/>
                <h4>Ingredients</h4>
                <ol>
                    {ingredients.map(ingredient =>(
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
            </div>
            
    );
}

export default Recipe;
