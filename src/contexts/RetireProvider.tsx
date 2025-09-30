import { useContext, createContext } from "react";
import { useState } from "react";
import type { ReactNode } from "react";

type RetireContextType = {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
};

export const RetireContext = createContext<RetireContextType | undefined>(
  undefined
);

export const useRetireContext = () => {
  const context = useContext(RetireContext);
  if (!context) {
    throw new Error("");
  }
  return context;
};

export const RetireProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  return (
    <RetireContext.Provider value={{ status, setStatus, todos, setTodos }}>
      {children}
    </RetireContext.Provider>
  );
};
