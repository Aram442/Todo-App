import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import Header from "./header/Header";

function HomePage() {
  const [todos, setTodos] = useState(null);

  async function getTodos() {
    const todosCol = collection(db, "todos");
    try {
      const todoSnapshot = await getDocs(todosCol);
      const todoList = todoSnapshot.docs.map((doc) => doc.data());
      setTodos(todoList);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  const todoItems = todos?.map((todo) => (
    <span key={String(todo.id)}>{todo.title}</span> // key={String(todo.id)} to fix (Warning: Each child in a list should have a unique "key" prop.)
  ));

  return (
    <div>
      <h1>Hello This is home page</h1>
      <Header />
      {todoItems}
    </div>
  );
}

export default HomePage;
