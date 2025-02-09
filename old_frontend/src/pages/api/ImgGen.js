const { Configuration, OpenAIApi } = require("openai");
export default async function generateImg(req, res) {
  const { storyLine, chName, genre, age } = req.body;
  const configuration = new Configuration({
    apiKey:"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",
  });
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
  prompt: genImgPrompt(storyLine, chName, genre, age),
  n: 1,
  size: "256x256",
});
console.log(response.data.data[0].url);
res.status(200).json({ img: response.data.data[0].url});}

function genImgPrompt(storyLine, chName, genre, age) {
  return ` a  ${storyLine} with character named ${chName} with a genre of ${genre} for a ${age} years old.`;
}
generateImg();
