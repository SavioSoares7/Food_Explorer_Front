import { Container } from "./style";
import { InputSearch } from "../InputSearch";
import { ButtonRequest } from "../ButtonRequest";

import { Link } from "react-router-dom";
import { ImExit } from "react-icons/im";

import Logo from "../../assets/Logo.png";

export function Header() {
  return (
    <Container>
      <Link to="/" id="logo">
        <img src={Logo} alt="Logo" />
        <span>food explorer</span>
      </Link>

      <Link id="favorites">Meus favoritos</Link>

      <InputSearch type="text" placeholder="Busque pelas opções de pratos" />

      <ButtonRequest>Meus pedidos (0)</ButtonRequest>

      <Link id="exit">
        <ImExit fontSize={22} />
      </Link>
    </Container>
  );
}
