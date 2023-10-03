import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import Header from "./header/Header";
import AddTodo from "./todo/AddTodo";

function HomePage() {
  const [todos, setTodos] = useState(null);

  const q = query(collection(db, "todos"), where("userId", "==", "user?.uid"));
  useEffect(() => {
    const unsub = onSnapshot(q, (querySnapshot) => {
      const todos = [];
      querySnapshot.forEach((doc) => {
        todos.push(doc.data());
      });
      setTodos(todos);
    });
    return unsub;
  }, []);

  const todoItems = todos?.map((todo) => (
    <span key={String(todo.id)}>{todo.title}</span> // key={String(todo.id)} to fix (Warning: Each child in a list should have a unique "key" prop.)
  ));

  return (
    <div>
      <h1>Hello This is home page</h1>
      <Header />
      <AddTodo />
      {todoItems}
    </div>
  );
}
export default HomePage;
