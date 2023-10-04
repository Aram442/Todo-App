import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import Header from "./header/Header";
import AddTodo from "./todo/AddTodo";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

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
    <div key={String(todo.id)}>
      <ListItem>
        <ListItemButton>
          <ListItemText>
          {todo.title}
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </div> // key={String(todo.id)} to fix (Warning: Each child in a list should have a unique "key" prop.)
  ));

  // --------------------------------------- RETUREN ---------------------------------------------------//
  return (
    <div>
      <AddTodo />
      <Card>
        <CardContent>{todoItems}</CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
export default HomePage;
