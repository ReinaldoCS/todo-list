import { ChangeEvent, FormEvent } from "react";
import plusImg from "../assets/plus.svg";

import styled from "./NewTask.module.css";

interface NewTaskProps {
  onSubmit: (event: FormEvent) => void;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

export function NewTask({ onSubmit, onChangeInput, inputValue }: NewTaskProps) {
  return (
    <form className={styled.newTaskContainer}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={onChangeInput}
        value={inputValue}
      />
      <button type="submit" onClick={onSubmit}>
        <span>Criar</span>
        <img src={plusImg} alt="sinal de mais" />
      </button>
    </form>
  );
}
