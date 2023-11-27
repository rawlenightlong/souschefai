'use client'
import { openai } from "./components/openai";
import { useState } from "react";



const Recipes = () => {

  const [ingredients, setIngredients] = useState('')
  const [numberOfIngredients, setNumberOfIngredients] = useState([1])
  const [count, setCount] = useState(1)
  const [recipe, setRecipe ] = useState('')
  let ingredientList = {}

  const main = async function main(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            `give me a recipe with the following ingredients: ${ingredients}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    const data = completion.choices[0].message.content;
  if (data){
    setRecipe(data)
    setIngredients('')
  }
  }

  return (
    <>
    <div>
      <div>

      </div>
   
      
      <form onSubmit={main} >
        <input className=" bg-blue-600 text-black" type='text' placeholder='add your ingredients' value={ingredients} onChange={(e) => {setIngredients(e.target.value)}}/>
        {/* <button onClick={() => {
          setCount(count+1)
          }}>add an ingredient</button><br></br> */}
        <button type="submit">get recipes</button>
      </form>

      <div>
        {recipe}
        </div>
    </div>
    </>
  );
};

export default Recipes;
