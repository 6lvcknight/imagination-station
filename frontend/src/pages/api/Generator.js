// This file is used to generate the story line
const { Configuration, OpenAIApi } = require("openai");

export default async function handler(req, res) {
    const { storyLine, chName, genre, age } = req.body;
    const configuration = new Configuration({
      apiKey: "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",
    });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generateStoryline(storyLine, chName, genre, age),
    max_tokens: 400, // Increase max tokens to generate longer completions
    temperature: 0.5, // Increase temperature to get more creative responses
  });
  res.status(200).json({ story: response.data.choices[0].text });
 
  console.log(response.data.choices[0].text);
}
function generateStoryline(storyLine, chName, genre, age) {
    return ` a story about ${storyLine} with character named ${chName} with a genre of ${genre} for a ${age} years old.`;
  }
handler();


