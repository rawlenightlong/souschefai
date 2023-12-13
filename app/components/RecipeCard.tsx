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
            <p>{recipe.title}</p>
            <h4>Serves: {recipe.servings}</h4>
        </div>

        <div className='text-left'>
            <h1 className="mb-2">Instructions</h1>
            <ul>
                {recipe.instructions?.map((instruction: string, index: number) => 
                <li key={index} className='py-2'>
                  <p>{instruction}</p>
                </li>)}
            </ul>
        </div>

    </div>
  )
}

export default RecipeCard