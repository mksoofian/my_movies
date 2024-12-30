"use client";
import { createContext, useContext, useState } from "react";

// define context type
type AuthContextType = {
  user: boolean;
  loginUser: (arg0: string) => void;
  logoutUser: () => void;
};

// create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// create provider
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(false);
  const password = process.env.PIN; // This doesnt work without being assigned NEXT_PUBLIC. Either way is not secure. Should happen n

  const loginUser = (pass: string) => {
    if (password === pass) {
      setUser(true);
    }
  };

  const logoutUser = () => {
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// create/export useAuth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
