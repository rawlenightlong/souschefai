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
    console.log(jsonrecipe)
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
    <div className="h-dvh text-center w-[90vw] items-center justify-center m-auto">
      <div className=" mt-10 mb-10 text-sm border border-black rounded-md p-2 bg-[#1976d2] text-white">
        Welcome to Sous Chef AI, a simple, ChatGPT-powered recipe generator for all your culinary needs! 
        Enter a comma-separated list of what you&apos;ve got lying around at home, and get inspired!
      </div>
      <div>
        <form onSubmit={getRecipe} >

          <div>
            <input className="text-black  w-[75vw] text-center rounded-md" type='text' placeholder='Add your ingredients here!' value={ingredients} onChange={(e) => {setIngredients(e.target.value)}}/>
          </div>
        
          <div className="my-3">
            <Button type="submit" variant="outlined" style={{backgroundColor: "#1976d2", color: "white"}}>Get Recipe!</Button>
          </div>
        
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
      {isLoading===2 && recipe ? <div className="text-white">loading </div> : null}
      {isLoading===3 && recipe ? <RecipeCard title={recipe.title} servings={recipe.servings} ingredients={recipe.ingredients} instructions={recipe.instructions}/> : null}

    </div>
    </>
  );
};

export default Recipes;
