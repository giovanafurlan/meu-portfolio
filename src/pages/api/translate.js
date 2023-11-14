export default function handler(req) {
  const locale = req.query.locale;
  const content = req.query.content;

  fetch("https://pt.libretranslate.com/translate", {
    method: "POST",
    body: JSON.stringify({
      q: content,
      source: "auto",
      target: locale,
      format: "text",
      api_key: "",
    }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    console.log(res.json());
    res.status(200).json(res);
  });
}
