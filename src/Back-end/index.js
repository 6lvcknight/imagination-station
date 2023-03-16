// 

// import { Configuration, OpenAIApi } from "openai";
//if something goes wrong  switch 
const { Configuration, OpenAIApi } = require("openai");
const express = require ('express')
const configuration = new Configuration({
    organization: "org-n4hILtafh5QmXJiFPrBgFN3j",
    // replace with the env file 
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();


const app = express()
const port = 3001

app.post('/',async (req, res )=> {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
      console.log(response.data.choices[0].text)
      res.json({ data:response.data })
});

app.listen(port,() => {
    console.log(`app is listening at http: //localhost:${port}`)
});

