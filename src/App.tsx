import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import { CreateTask } from "./components/CreateTask";
import { TaskList } from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";
import { EmptyTask } from "./components/EmptyTask";
import { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: uuidv4(),
      title: "Criar um novo projeto",
      state: false,
    },
    {
      id: uuidv4(),
      title: "Estudar programação",
      state: false,
    },
    {
      id: uuidv4(),
      title: "Ler um livro",
      state: false,
    },
    {
      id: uuidv4(),
      title: "Fazer exercícios",
      state: false,
    },
    {
      id: uuidv4(),
      title: "Limpar a casa",
      state: false,
    },
    {
      id: uuidv4(),
      title: "Preparar refeições para a semana",
      state: false,
    },
  ]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      state: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const updateTask = (id: string, state: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, state: state } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <section className="App">
        <img src={logo} alt="logo-ToDo" />
      </section>
      <div className="task">
        <CreateTask onAddTask={addTask} />
        {tasks.length > 0 ? (
          <TaskList
            tasks={tasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ) : (
          <EmptyTask />
        )}
      </div>
    </>
  );
}

export default App;
