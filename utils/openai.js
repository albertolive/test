import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const processNews = async (text) => {
  const response = await openai.createCompletion({
    model: "gpt-4",
    prompt: `Reescribe y mejora este artículo: ${text}`,
    max_tokens: 500,
  });
  return response.data.choices[0].text;
};

export { processNews };
