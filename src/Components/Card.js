import React from "react";
const Card = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    
    return (
        <div className="card">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
                width="100px"
            />
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                
                <button  href={"https://www.themealdb.com/meal/" + idMeal} target="_blank" class="button4">Instructions</button>
            </div>
        </div>
    )
};

export default Card;