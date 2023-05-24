import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

const Food = () => {

  const [form, setForm] = useState({
    recipe: ""
  })

  const [recipe, setRecipe] = useState([])

  const appID = 65738378

  const appKEY = "07ed8726d6dc92538a20d5f0333bf7d9"

  const endpoint = `https://api.edamam.com/search?q=${form.recipe}&app_id=${appID}&from=0&to=10&app_key=${appKEY}`

  async function recipeData(e) {

    if (form.recipe === "") {
      alert("Search for a recipe!")
    } else {
      const data = await fetch(endpoint)
        .then((res) => res.json())
        .then((data) => data)

      console.log(data)

      setRecipe(data.hits)
    }
  }

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    if (name === "recipe") {
      setForm({ ...form, recipe: value })
    }
  }

  return (
    <div>
      <div>
        <input
          type='text'
          name='recipe'
          placeholder='Search for a recipe'
          onChange={(e) => handleChange(e)}
        />

        <button onClick={(e) => recipeData(e)}>
          Search!
        </button>
      </div>
      <div>
        {recipe.map(recipe => (
          <div>
            <h1>{recipe.recipe.label}</h1>

            <img src={recipe.recipe.image} alt={recipe.recipe.label} />

            <h2>{recipe.recipe.cuisineType}</h2>

            <ul>
              {recipe.recipe.ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
              ))}
            </ul>

            <p>{Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)} cal</p>

            <p>Cook time: {recipe.recipe.totalTime} minute(s)</p>

            <a href={recipe.recipe.url} target="_blank">Recipe</a>
            <br />
            <br />

            <button>Save</button>

          </div>
        ))}
      </div>
      <div>

      </div>
    </div>
  )
}

export default Food