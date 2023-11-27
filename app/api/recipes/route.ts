import { openai } from "@/app/components/openai";
import OpenAI from "openai";

export const POST = async function main(req: Request, res: Response) {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            `give me a recipe with the following ingredients: chicken, soy sauce, rice, cabbage`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    const data = completion.choices[0].message.content;
    console.log(data)

  }