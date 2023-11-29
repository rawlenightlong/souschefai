import React from 'react'

export type RecipeProps = {
    title: string;
    servings: string;
    ingredients: string[];
    instructions: string[]
  }

const RecipeCard: React.FC<RecipeProps> = (recipe: RecipeProps) => {

  return (
    <div className='p-10'>
        <div className="mb-4">
            <h1>Recipe Name</h1>
            <h3>{recipe.title}</h3>
            <h4>Serves: {recipe.servings}</h4>
        </div>


        <div>
            <h1 className="mb-2">Instructions</h1>
            <ul>
                {recipe.instructions?.map((instruction: string, index: number) => <li key={index}>{index + 1}. {instruction}</li>)}
            </ul>
        </div>

    </div>
  )
}

export default RecipeCard