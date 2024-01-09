import React from "react";
import { Button, Typography } from "@mui/material";

export type RecipeProps = {
  title: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
};

const RecipeCard: React.FC<RecipeProps> = (recipe: RecipeProps) => {
  return (
    <div className="p-6 rounded-xl bg-orange-400 drop-shadow-lg mb-2 border-4 border-black">
      <div className="">
        <Typography variant="h6">
          <p>{recipe.title}</p>
        </Typography>
        <Typography variant="subtitle1">
          <h4>Serves: {recipe.servings}</h4>
        </Typography>
        <Typography variant="subtitle1">
          <ul>
            {recipe.ingredients?.map((ingredient: string, index: number) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Typography>
      </div>

      <h1 className="mb-2">Instructions</h1>

      <div className="text-left">
        <ul>
          {recipe.instructions?.map((instruction: string, index: number) => (
            <li key={index} className="py-2">
              <p>{instruction}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {recipe ? (
          <div className="mt-4">
            <Button variant="outlined">Save This Recipe</Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RecipeCard;
