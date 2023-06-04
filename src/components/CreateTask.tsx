import { ChangeEvent, useState, FC, MouseEvent } from "react";
import icon from "../assets/icon-button.svg";

interface CreateTaskProps {
  onAddTask: (title: string) => void;
}

export const CreateTask: FC<CreateTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleAddTask = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (title.trim() === "") return;
    onAddTask(title);
    setTitle("");
  };

  return (
    <section className="new-task">
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="input-task"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <button className="bnt-add" onClick={handleAddTask}>
        Criar <img src={icon} alt="icone com o sinal de adição" />
      </button>
    </section>
  );
};
