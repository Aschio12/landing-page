"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { AuthModal } from "./AuthModal";

interface AuthContextType {
  openModal: (mode: "signin" | "signup") => void;
  closeModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  const openModal = (newMode: "signin" | "signup") => {
    setMode(newMode);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <AuthContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AuthModal isOpen={isOpen} mode={mode} onClose={closeModal} setMode={setMode} />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
