import { useContext, createContext } from "react";
import { useState } from "react";
import type { ReactNode } from "react";

export type Task = {
  id: string;
  documentName: string;
  description: string;
  isDone: boolean;
};

type RetireContextType = {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  toggleTask: (id: string) => void;
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
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      documentName: "源泉徴収票",
      description: "次の職場で必要です！",
      isDone: true,
    },
    {
      id: "2",
      documentName: "保険証",
      description: "返却しないと！",
      isDone: false,
    },
    {
      id: "3",
      documentName: "社員証",
      description: "返却しないと！",
      isDone: false,
    },
  ]);

  const toggleTask = (id: string) => {
    setTasks((prev) => {
      const idx = prev.findIndex((t) => t.id === id);
      if (idx === -1) return prev;
      const next = [...prev];
      next[idx] = { ...next[idx], isDone: !next[idx].isDone };
      return next;
    });
  };
  return (
    <RetireContext.Provider
      value={{
        status,
        setStatus,
        todos,
        setTodos,
        tasks,
        setTasks,
        toggleTask,
      }}
    >
      {children}
    </RetireContext.Provider>
  );
};
