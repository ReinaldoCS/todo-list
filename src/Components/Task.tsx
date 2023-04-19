import { useState } from "react";
import trashImg from "../assets/trash.svg";

import styled from "./Task.module.css";

interface TaskProps {
  id: string;
  container: string;
  onDeleteTask: (id: string) => void;
  onChange: (id: string) => void;
}

export function Task({ container, onDeleteTask, onChange, id }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleOnChange() {
    onChange(id);
  }

  return (
    <div className={styled.taskContainer}>
      <input
        type="checkbox"
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        onChange={handleOnChange}
      />
      <span className={isChecked ? styled.textDone : ""}>{container}</span>
      <button type="button" onClick={handleDeleteTask}>
        <img src={trashImg} alt="lixeira" />
      </button>
    </div>
  );
}
