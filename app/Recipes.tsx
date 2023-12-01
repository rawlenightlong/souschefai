'use client'
import { useState } from "react";
import  Recipe  from './components/RecipeCard'
import RecipeCard from "./components/RecipeCard";

interface Recipe {
  title: string;
  servings: string;
  ingredients: string[];
  instructions: string[]
}

type Props = {
  data: Recipe
}

const Recipes = () => {

  const [ingredients, setIngredients] = useState('')
  const [recipe, setRecipe ] = useState({    
    title: "",
    servings: "",
    ingredients: [],
    instructions: []
  })

  const [ingredientList, setIngredientList] = useState('')
  const [isLoading, setIsLoading] = useState(1)
  

  const getRecipe = async function getRecipe(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setIngredientList(ingredients)
    setIsLoading(2)
    const response = await fetch('https://souschefai.onrender.com/api/recipes', {
      method: 'POST',
      body: ingredients
    })
    const gptrecipe = await response.json()
    const jsonrecipe = JSON.parse(gptrecipe)
    if (jsonrecipe){
      setIsLoading(3)
      setRecipe({title: jsonrecipe.title,
                servings: jsonrecipe.servings,
                ingredients: jsonrecipe.ingredients,
                instructions: jsonrecipe.instructions
    })
      setIngredients('')
    }
  }

  return (
    <>
    <div>

      <div>
      <form onSubmit={getRecipe} >
        <input className=" bg-blue-600 text-black" type='text' placeholder='add your ingredients' value={ingredients} onChange={(e) => {setIngredients(e.target.value)}}/>
        <button type="submit">get recipe</button>
      </form>
      </div>

      {/* <div>
        <h1>Ingredients List</h1>
        {ingredientList}
      </div> */}

      {/* <div>
        {isLoading===2 && !recipe ? "loading" : recipe}
      </div> */}

      {/* <RecipeCard title={recipe.title} servings={recipe.servings} ingredients={recipe.ingredients} instructions={recipe.instructions}/> */}
      {isLoading===2 && recipe ? 'loading' : null}
      {isLoading===3 && recipe ? <RecipeCard title={recipe.title} servings={recipe.servings} ingredients={recipe.ingredients} instructions={recipe.instructions}/> : null}

    </div>
    </>
  );
};

export default Recipes;
