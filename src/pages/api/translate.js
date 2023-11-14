var axios = require("axios");

export default function handler(req, res) {
  const locale = req.query.locale;
  const content = req.query.content;

  var body = JSON.stringify({
    q: content,
    source: "en",
    target: locale === "pt-br" ? "pt" : locale,
  });

  var config = {
    method: "post",
    url: "https://libretranslate.de/translate",
    body: body,
  };

  axios(config)
    .then(function (response) {
      res.status(200).json(response.data);
    //   console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
