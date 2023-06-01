import React, { useState } from 'react';
import cooking from '../assets/cooking.jpeg'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';


const Food = () => {


  const [form, setForm] = useState({
    recipe: ""
  })


  const [recipe, setRecipe] = useState([])


  const appID = 65738378


  const appKEY = "07ed8726d6dc92538a20d5f0333bf7d9"


  const endpoint = `https://api.edamam.com/search?q=${form.recipe}&app_id=${appID}&from=0&to=100&app_key=${appKEY}`


  async function recipeData(e) {


    if (form.recipe === "") {
      alert("Search for a recipe!")
    } else {
      const data = await fetch(endpoint)
        .then((res) => res.json())
        .then((data) => data)

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
      fontSize: '20px',
      textAlign: 'center',
      marginTop: '20px',
      marginBottom: '20px',
    }}>
      Search from thousands of healthy recipes to keep your wellness journey on track and help you reach your goals.
      <br />
      <br />
      Start by simply typing an ingredient or cuisine and get to cooking!
      <br />
      <br />
      ⭐ Don't forget to add your meal to the tracker ⭐
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
        <Button
          variant="outlined"
          color="error"
          onClick={(e) => recipeData(e)}
        >
          Yummy hunt
        </Button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', justifyContent: 'center' }}>
        {recipe.map((recipe, index) => (
          <Card key={index} style={{ width: '100%', height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image={recipe.recipe.image}
              alt={recipe.recipe.label}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                {recipe.recipe.label}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {recipe.recipe.cuisineType}
              </Typography>
              <ul>
                {recipe.recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.text}</li>
                ))}
              </ul>
              <Typography variant="body1" color="text.secondary">
                {Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)} cal
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Cook time: {recipe.recipe.totalTime} minute(s)
              </Typography>
              <Button
                variant="outlined"
                color="error"
                href={recipe.recipe.url}
                target="_blank"
                rel="noopener"
              >
                Recipe
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div>
        <img style={{ width: 1000, height: 600, padding: '20px' }} src={cooking} alt="cooking" />
      </div>
    </div>
  );
};

export default Food;