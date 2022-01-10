import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7S8DTIgXh4isIal-o5DxDsrr2dZKisto",
  authDomain: "fire-blog-my.firebaseapp.com",
  projectId: "fire-blog-my",
  storageBucket: "fire-blog-my.appspot.com",
  messagingSenderId: "642108357456",
  appId: "1:642108357456:web:9fae158d4a13f649200a55",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
