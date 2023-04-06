import {
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  setDoc,
  where,
  getDocs,
  getFirestore,
  addDoc,
} from "firebase/firestore";
import { firestore } from "../config/firebase";

const db = getFirestore();
const serviceCollection = collection(db, "user");

function userSubscribe(uid, setUser) {
  const q = query(serviceCollection, where("uid", "==", uid));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const user = [];
    snapshot.forEach((doc) => {
      user.push({ ...doc.data(), id: doc.id });
    });
    setUser(user[0]);
    return () => {
      unsubscribe();
    };
  });
}

const queryUserById = async (userId) => {
  const docRef = doc(firestore, "user", userId);
  return getDoc(docRef)
    .then((doc) => {
      if (doc.exists()) {
        const user = { ...doc.data(), id: doc.id };
        return user;
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

const getUserByEmail = async (email) => {
  // console.log("getUserByEmail: ", email);
  const q = query(serviceCollection, where("email", "==", email));
  return await getDocs(q)
    .then((response) => {
      const users = [];
      response.forEach((u) => users.push({ id: u.id, ...u.data() }));
      return users[0] || null;
    })
    .catch((err) => console.log("getUserByEmail error: ", err));
};

const getAllUsers = async () => {
  return getDocs(serviceCollection)
    .then((res) => {
      const users = [];
      res.forEach((user) => users.push({ id: user.id, ...user.data() }));
      return users;
    })
    .catch((err) => console.log(err));
};

const migrationInsert = async (user) => {
  // addDoc(collection(firestore, "user"), user);
};

const insertUser = async (user) => {
  return new Promise(async (resolve, reject) => {
    const userExists = await getUserByEmail(user.email);
    if (!userExists)
      if (user.uid) {
        const docRef = doc(firestore, "user", user.uid);
        delete user.uid;
        return setDoc(docRef, user)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            console.log("insertUser error: ", error);
            reject(error);
          });
      } else {
        // console.log(user);
        return addDoc(serviceCollection, user)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            console.log("insertUser addDoc: ", error);
            return error;
          });
      }
    else {
      console.log("Usuário já existe.");
      resolve("Usuário já existe.");
    }
  });
};

const deleteUser = async (userId) => {
  const docRef = doc(firestore, "user", userId);

  return deleteDoc(docRef)
    .then((e) => {
      return e;
    })
    .catch((e) => {
      return e;
    });
};

const updateUser = async (user) => {
  // console.log(user);
  const docRef = doc(firestore, "user", user.id);

  delete user["id"];

  return updateDoc(docRef, user)
    .then((e) => {
      return e;
    })
    .catch((e) => {
      return e;
    });
};

async function updateUserByEmail(email, filedsToUpdate) {
  console.log("updateUserByEmaildata ", email, filedsToUpdate);
  const q = query(serviceCollection, where("email", "==", email));
  // console.log("q", q);
  return await getDocs(q)
    .then((users) => {
      const user = [];
      users.forEach((u) => user.push({ id: u.id, ...u.data() }));
      if (user[0]) {
        // console.log("user[0]: ", user[0]);
        const docRef = doc(firestore, "user", user[0].id);
        return updateDoc(docRef, filedsToUpdate).catch((error) => {
          console.log("updateUserByEmail error ", error);
          return error;
        });
      }
    })
    .catch((error) => {
      throw new Error("updateUserByEmail getDocs error: ", error);
    });
}

export {
  insertUser,
  deleteUser,
  updateUser,
  updateUserByEmail,
  userSubscribe,
  queryUserById,
  getUserByEmail,
  getAllUsers,
  migrationInsert,
};
