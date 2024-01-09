import { OpenAI } from "openai";
import { useState } from "react";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
});

export const POST = async function getRecipe(req: Request, res: Response) {
    const body = await req.text()
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            `find and give me a thoroughly detailed recipe containing the following ingredients: ${body} as a JSON object: 
            {
              
                "title": '',
                "servings": '',
                "ingredients": [
                  "",
                  "",
                  ""
                ],
                "instructions": [
                  "1. ",
                  "2. ",
                  "3. ",
                ]
              
            }`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    const data = completion.choices[0].message.content;
    return Response.json(data)
  }