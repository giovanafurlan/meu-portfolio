import axios from "axios";

const getDescriptionsAds = async (
  locale,
  company,
  resume,
  audience,
  keywords,
  avoidKeywords,
  midiaSocial
) => {
  return axios
    .get("/api/adsDescriptions", {
      params: {
        locale: locale,
        company: company,
        resume: resume,
        audience: audience,
        keywords: keywords,
        avoidKeywords: avoidKeywords,
        midiaSocial: midiaSocial,
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

const getTitlesAds = async (
  locale,
  company,
  resume,
  audience,
  keywords,
  avoidKeywords,
  midiaSocial
) => {
  return axios
    .get("/api/adsTitles", {
      params: {
        locale: locale,
        company: company,
        resume: resume,
        audience: audience,
        keywords: keywords,
        avoidKeywords: avoidKeywords,
        midiaSocial: midiaSocial,
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

const getDescriptionsProduct = async (
  locale,
  company,
  product,
  keywords,
  productDescription,
  tom
) => {
  return axios
    .get("/api/productDescriptions", {
      params: {
        locale: locale,
        company: company,
        product: product,
        keywords: keywords,
        productDescription: productDescription,
        tom: tom,
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

const getTitlesProduct = async (
  locale,
  company,
  product,
  keywords,
  productDescription,
  tom
) => {
  return axios
    .get("/api/productTitles", {
      params: {
        locale: locale,
        company: company,
        product: product,
        keywords: keywords,
        productDescription: productDescription,
        tom: tom,
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

const getTitle = async (locale, keywords, type) => {
  return axios
    .get("/api/generateTitle", {
      params: {
        locale: locale,
        keywords: keywords,
        type: type,
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

const getDescription = async (locale, keywords, type) => {
  return axios
    .get("/api/generateDescription", {
      params: {
        locale: locale,
        keywords: keywords,
        type: type,
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

const getText = async (
  locale,
  theme
) => {
  return axios
    .get("/api/generateText", {
      params: {
        locale: locale,
        theme: theme
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

const getSocialMedia = async (
  locale,
  caracteres,
  name,
  topic,
  keywords,
  midiaSocial
) => {
  return axios
    .get("/api/generateSocialMedia", {
      params: {
        locale: locale,
        caracteres: caracteres,
        name: name,
        topic: topic,
        keywords: keywords,
        midiaSocial: midiaSocial,
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

export {
  getTitlesAds,
  getDescriptionsAds,
  getTitlesProduct,
  getDescriptionsProduct,
  getDescription,
  getTitle,
  getText,
  getSocialMedia,
};
