import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container maxWidth="sm">
      <BrowserRouter>
        <Routes>
          <Route index element={<Header />} />
          <Route path="/">
            <Route path="home" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
