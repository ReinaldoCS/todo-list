import styled from "./TaskList.module.css";

interface TaskListProps {
  children: React.ReactNode;
}

export function TaskList({ children }: TaskListProps) {
  return <section className={styled.taskListContainer}>{children}</section>;
}
