import {
  collection,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import {db} from "../config/firebase"

// const db = getFirestore();
const serviceCollection = "user";
const userColletion = collection(db, serviceCollection);

const insertUser = async (user) => {
  return addDoc(userColletion, user)
    .then((response) => {
      return { id: response.user.id };
    })
    .catch((error) => {
      return error;
    });
};

const updateUser = async (user) => {
  const docRef = doc(db, serviceCollection, user.user.id);

  return updateDoc(docRef, user)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export {
  insertUser,
  updateUser
};
