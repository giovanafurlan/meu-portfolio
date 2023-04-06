import { collection, getDocs, getFirestore, addDoc } from "firebase/firestore";
import { getCookie } from "cookies-next";

const db = getFirestore();

const userId = getCookie("uid");

const listContent = async (colletion) => {
  const docs = [];
  const colRef = collection(db, colletion);
  await getDocs(colRef).then(function (result) {
    result.forEach((doc) => {
      if (doc.data().userId == userId) {
        docs.push(doc.data());
      }
    });
  });
  return docs;
};

const listMidiasSociais = async (midiaSocial) => {
  const serviceCollection = "midiasSociais";
  const midiasSociaisColletion = collection(db, serviceCollection);

  return addDoc(midiasSociaisColletion, midiaSocial).catch((error) => {
    console.error(error);
  });
};

const listText = async (text) => {
  const serviceCollection = "text";
  const midiasSociaisColletion = collection(db, serviceCollection);

  return addDoc(midiasSociaisColletion, text).catch((error) => {
    console.error(error);
  });
};

export { listContent, listMidiasSociais, listText };
