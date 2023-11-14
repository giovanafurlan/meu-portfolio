import axios from "axios";

const getText = async (locale, theme) => {
  return axios
    .get("/api/generateText", {
      params: {
        locale: locale,
        theme: theme,
      },
    })
    .then((e) => {
      return e.data;
    })
    .catch((e) => {
      console.log(e);
      return;
    });
};

const getImage = async (imageUrl) => {
  return axios
    .get("/api/imageText", {
      params: {
        imageUrl: imageUrl,
      },
    })
    .then((e) => {
      return e.data;
    })
    .catch((e) => {
      console.log(e);
      return;
    });
};

const getTranslation = async (locale, content) => {
  return axios
    .get("/api/translate", {
      params: {
        locale: locale,
        content: content,
      },
    })
    .then((e) => {
      return e.data;
    })
    .catch((e) => {
      console.log(e);
      return;
    });
};

export { getText, getImage, getTranslation };
