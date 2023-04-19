import styled from "./TaskProgress.module.css";

interface TaskProgressProps {
  taskDone: number;
  taskTotal: number;
}

export function TaskProgress({ taskDone, taskTotal }: TaskProgressProps) {
  return (
    <header className={styled.taskProgressContainer}>
      <div>
        <span>Tarefas criadas</span>
        <span>{taskTotal}</span>
      </div>

      <div>
        <span>Concluídas</span>
        <span>
          {taskDone} de {taskTotal}
        </span>
      </div>
    </header>
  );
}
