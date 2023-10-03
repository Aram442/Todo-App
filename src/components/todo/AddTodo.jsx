import React, { KeyboardEvent, useState } from "react";
import Box from "@mui/material/Box";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useAuth } from "../../AuthContext";
// import { TodoCard } from "../todo-card";

function AddTodo() {
  const [todoText, setTodoText] = useState();
  const { user } = useAuth();

  const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const inputValue = event.target.value;
      if (inputValue) {
        addDoc(collection(db, "todos"), {
          name: inputValue,
          isCompleted: false,
          userId: user?.uid,
        });
      }
    }
  };

  // --------------------------------------- RETUREN ---------------------------------------------------//
  return (
    <div>
      <h1>{user}</h1>
      <Card>
        <CardContent
          sx={{
            p: 0,
            pl: 3,
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "& .MuiInput-underline:after": { borderBottom: "none" },
            "& .MuiInput-underline:before": { borderBottom: "none" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <RadioButtonUncheckedIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              id="input-with-sx"
              fullWidth
              label="Add Todo"
              variant="standard"
              onKeyPress={onKeyPress}
            />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddTodo;
