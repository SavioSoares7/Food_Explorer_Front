import { Container, ContainerMenu } from "./style";
import { InputSearch } from "../InputSearch";
import { ButtonRequest } from "../ButtonRequest";

import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";
import { ImExit } from "react-icons/im";

import Logo from "../../assets/Logo.png";

function toggleMenu() {
  const menu = document.querySelector("header div");
  menu.classList.toggle("toggle");
}

export function Header() {
  return (
    <Container>
      <Link to="/" id="logo">
        <img src={Logo} alt="Logo" />
        <span>food explorer</span>
      </Link>

      <ContainerMenu>
        <Link id="favorites" to="/favorites">
          Meus favoritos
        </Link>

        <InputSearch type="text" placeholder="Busque pelas opções de pratos" />

        <ButtonRequest>Meus pedidos (0)</ButtonRequest>

        <Link id="exit" to="/login">
          <ImExit fontSize={22} />
        </Link>
      </ContainerMenu>
      <GiHamburgerMenu fontSize={22} onClick={() => toggleMenu()} />
    </Container>
  );
}
