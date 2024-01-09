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
    <div className="p-6 rounded-xl bg-[#1976d2] overflow-scroll h-[60vh] text-white">
      <div className=" mb-4">
        <Typography variant="h5">
          <p className="italic mb-2">{recipe.title}</p>
        </Typography>
        <Typography variant="subtitle1">
          Serves: {recipe.servings}
        </Typography>
        <Typography variant="subtitle2">
          <ul>
            {recipe.ingredients?.map((ingredient: string, index: number) => (
              <li key={index}>~ {ingredient}</li>
            ))}
          </ul>
          {/* {recipe.ingredients?.join(", ")} */}
        </Typography>
      </div>

      <h3 className="mb-2 underline italic">Instructions</h3>

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
            <Button variant="contained" sx={{"&:hover": {backgroundColor: "white", color: "#1976d2"}}}  style={{
              backgroundColor: "#1976d2",
               color: "white", 
               borderColor: "white",
               }}>Save This Recipe!</Button>
               
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RecipeCard;
