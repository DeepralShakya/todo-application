import React, { createContext, useState, ReactNode } from 'react';

interface TodoContextProps {
  children: ReactNode;
}

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoContextValue {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoContext = createContext<TodoContextValue | undefined>(undefined);

export const TodoProvider: React.FC<TodoContextProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const value: TodoContextValue = { todos, setTodos };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};