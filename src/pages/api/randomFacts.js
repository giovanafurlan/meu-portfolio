var axios = require("axios");

export default function handler(req, res) {

  var config = {
    method: "get",
    url: "https://uselessfacts.jsph.pl/api/v2/facts/random"
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
