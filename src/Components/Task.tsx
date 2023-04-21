import { useState } from "react";
import trashImg from "../assets/trash.svg";

import styled from "./Task.module.css";

interface TaskProps {
  id: string;
  container: string;
  isComplete: boolean;
  onDeleteTask: (id: string) => void;
  onChange: (id: string) => void;
}

export function Task({ container, isComplete, onDeleteTask, onChange, id }: TaskProps) {
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
        checked={isComplete}
        onChange={handleOnChange}
      />
      <span className={isComplete ? styled.textDone : ""}>{container}</span>
      <button type="button" onClick={handleDeleteTask}>
        <img src={trashImg} alt="lixeira" />
      </button>
    </div>
  );
}
