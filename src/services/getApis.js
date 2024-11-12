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

const getImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  return axios
    .post("/api/imageText", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
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
