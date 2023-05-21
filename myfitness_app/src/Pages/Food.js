import React, { useState } from 'react'

const Food = () => {

  const [form, setForm] = useState({
    recipe: ""
  })

  const appID = 65738378

  const appKEY = "07ed8726d6dc92538a20d5f0333bf7d9"

  const endpoint = `https://api.edamam.com/search?q=${form.recipe}&app_id=${appID}&from=10&app_key=${appKEY}`

  async function recipeData(e) {
    e.preventDefault();

    if (form.recipe === "") {
      alert("Search for a recipe!")
    } else {
      const data = await fetch(endpoint)
        .then((res) => res.json())
        .then((data) => console.log(data))
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
  )
}

export default Food