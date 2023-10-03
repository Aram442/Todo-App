import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// Create a provider component to wrap your app with
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // You can define any other functions or state values related to authentication here

  return (
    <AuthContext.Provider
      value={{ user, email, password, setUser, setEmail, setPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
}
