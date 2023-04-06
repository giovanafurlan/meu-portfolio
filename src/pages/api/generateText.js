var axios = require("axios");

export default function handler(req, res) {
  const locale = req.query.locale;
  const theme = req.query.theme;

  var prompt = "";

  if (locale == "en") {
    prompt = `Write a 4-paragraph essay about the ${theme}`;
  } else if (locale == "es") {
    prompt = `Escribe un ensayo de 4 párrafos sobre el ${theme}`;
  } else {
    prompt = `Escreva um ensaio de 4 parágrafos sobre o ${theme}`;
  }

  var data = JSON.stringify({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.29,
    max_tokens: 1894,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  var config = {
    method: "post",
    url: "https://api.openai.com/v1/completions",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "OpenAI-Organization": process.env.OPENAI_API_KEY_ORG,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      res.status(200).json(response.data);
      console.log(JSON.stringify(response.data));
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
      if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
          error: {
            message: "An error occurred during your request.",
          },
        });
      }
    });
}
