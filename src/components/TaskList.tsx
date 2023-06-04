import "./TaskList.css";
import trash from "../assets/trash.svg";
import { FC } from "react";
import { Task } from "../types";

interface TaskListProps {
  tasks: Task[];
  updateTask: (id: string, state: boolean) => void;
  deleteTask: (id: string) => void;
}

export const TaskList: FC<TaskListProps> = ({ tasks, updateTask, deleteTask }) => {
  const handleCheck = (task: Task) => {
    updateTask(task.id, !task.state);
  };
  return (
    <div>
      <div className="container-list-task">
        <div className="list-task">
          <div className="div-tasks">
            <p className="tasks-created">Tarefas Criadas</p>
            <div className="tasks-created-number">{tasks.length}</div>
          </div>
          <div className="div-tasks">
            <p className="completed-tasks">Tarefas Concluídas</p>
            <div className="completed-tasks-number">
              {tasks.filter((task) => task.state === true).length}
            </div>
          </div>
        </div>
      </div>
      {tasks.map((task) => (
        <div className="task" key={task.id}>
          <div className="task-list">
            <div className="task-state">
              <input
                type="checkbox"
                id={task.id}
                className="checkbox"
                checked={task.state}
                onChange={() => handleCheck(task)}
              />
              <label htmlFor={task.id}></label>
            </div>
            <div className={`task-title ${task.state ? "completed" : ""}`}>
              {task.title}
            </div>
            <div className="task-actions">
              <button className="task-button" onClick={()=>deleteTask(task.id)}>
                <img src={trash} alt="delete task" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
