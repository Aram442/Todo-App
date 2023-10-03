import React from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function HomePage() {
  async function getTodos() {
    const todosCol = collection(db, "todos");
    const todoSnapshot = await getDocs(todosCol);
    const todoList = todoSnapshot.docs.map((doc) => doc.data());
    return todoList;
  }

  return <div>HomePage</div>;
}

export default HomePage;
