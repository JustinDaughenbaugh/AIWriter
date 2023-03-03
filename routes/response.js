express = require('express');
const cors = require('cors');

router = express.Router();
app.use(cors());

const { urlencoded } = require('express');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "KEY",
});
const openai = new OpenAIApi(configuration);

router.post('/', async function(req, res) {
  prompt = req.body.name;
  console.log(prompt);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Explain in 200 words. ${prompt}`,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(response.data.choices[0].text);

  res.send(response.data.choices[0].text)
}
);

module.exports = router;
