import { openai } from "./components/openai";

export default async function main() {
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
  return data;
}
