import logoImg from "../assets/logo.svg";

import styled from "./Header.module.css";

export function Header() {
  return (
    <header className={styled.header}>
      <img src={logoImg} alt="Logotipo" />
    </header>
  );
}
