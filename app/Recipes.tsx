'use client'
import { useState } from "react";
import  Recipe  from './components/RecipeCard'
import RecipeCard from "./components/RecipeCard";
import { Button } from "@mui/material";

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
    const response = await fetch('/api/recipes', {
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
    <div className="h-[85vh] text-center w-8/12 items-center justify-center m-auto">
      <div className=" mt-10 mb-16">
        Welcome to Sous Chef AI, a simple, ChatGPT-powered recipe generator for all your adventurous, culinary needs! Simply enter a comma-separated list of what you've got lying around in the fridge or at home, and get inspired!
      </div>
      <div>
      <form onSubmit={getRecipe} >

        <input className="text-black border-black border-2 w-6/12" type='text' placeholder='Add your ingredients here, separated by commas!' value={ingredients} onChange={(e) => {setIngredients(e.target.value)}}/><br></br>
        {/* <button type="submit">get recipes</button><br></br> */}
        <Button className="my-3" type="submit" variant="outlined">Get Recipe!</Button>
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
