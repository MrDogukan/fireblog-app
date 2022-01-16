import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, push, onValue, query } from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyA7S8DTIgXh4isIal-o5DxDsrr2dZKisto",
  authDomain: "fire-blog-my.firebaseapp.com",
  databaseURL: "https://fire-blog-my-default-rtdb.firebaseio.com",
  projectId: "fire-blog-my",
  storageBucket: "fire-blog-my.appspot.com",
  messagingSenderId: "642108357456",
  appId: "1:642108357456:web:9fae158d4a13f649200a55",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const addNewBlog = (values) => {
  const db = getDatabase();
  const userRef = ref(db, "contact");
  const newUserRef = push(userRef);
  set(newUserRef, {
    title: values.title,
    imgUrl: values.imgUrl,
    content: values.content,
  });
};

export const useFetch = () => {
  const [isLoading, setisLoading] = useState();
  const [cardList, setcardList] = useState();

  useEffect(() => {
    setisLoading(true);
    const db = getDatabase();
    const userRef = ref(db, "contact");

    onValue(query(userRef), (snapshot) => {
      const cards = snapshot.val();
      const cardsArray = [];
      for (let id in cards) {
        cardsArray.push({ id, ...cards[id] });
      }
      setcardList(cardsArray);
    });
  }, []);

  return { cardList };
};
