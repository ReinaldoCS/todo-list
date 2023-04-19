import logo from "../assets/logo.svg";

import styled from "./header.module.css";

export function Header() {
  return (
    <header className={styled.header}>
      <img src={logo} alt="Logotipo" />
    </header>
  );
}
