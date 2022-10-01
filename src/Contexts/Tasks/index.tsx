import { useState, createContext } from "react";

type TaskModel = {
  name: string;
  completed: boolean;
  key: number;
}

type TaskContext = {
  tasks: TaskModel[];
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
}

type TasksProvider = {
  children: React.ReactNode;
}

export const TasksContext = createContext({} as TaskContext);

export function TasksProvider({ children }: TasksProvider){
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  return(
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}
