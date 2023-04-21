import clipboardImg from "./assets/clipboard.png";

import styled from "./EmptyList.module.css";

export function EmptyList() {
  return (
    <section className={styled.emptyListContainer}>
      <img src={clipboardImg} alt="prancheta" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </section>
  );
}
