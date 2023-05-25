import React, { useEffect, useState } from 'react';
import cooking from '../assets/cooking.jpeg'


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
    <div style={{
      padding: '10px',
      fontSize: '30px',
      textAlign: 'center',
      marginTop: '20px',
      marginBottom: '20px',
      maxWidth: '1200px'
    }}>
      Fit by Me allows you to search from thousands of
      healthy recipes to <br />
      keep your
       health journey on track and help you reach your goals.
      <br />
      <br />
      Start by simply typing an ingredient or cuisine and get to cooking!
      <br />
      <br />
      ⭐ Pro tip: If you love the recipe don't forget to add it to your tracker ⭐
      <div>
        <input
          type='text'
          name='recipe'
          placeholder='Search for a recipe'
          onChange={(e) => handleChange(e)}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid gray',
            margin: '30px',
            fontSize: '15px',
          }}
        />


<button
  onClick={(e) => recipeData(e)}
  style={{
    backgroundColor: 'white',
    color: 'black',
    padding: '10px 10px',
    borderRadius: '5px',
    border: '1px solid gray',
    fontSize: '15px',
  }}
>
Yummy Hunt
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


            <button
                style={{
                  backgroundColor: 'lightgrey',
                  color: 'black',
                  padding: '10px 10px',
                  borderRadius: '5px',
                  border: '1px solid gray',
                  fontSize: '15px',
                  marginBottom: "15px"
                }}
            >Save to my Tracker 😋</button>



          </div>
          
        ))}
      </div>
      <div>
      <img style={{ width: 1400, height: 800 }} src={cooking} alt="cooking" />

      </div>
    </div>
  )
}


export default Food
