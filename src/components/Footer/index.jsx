import { Container } from "./style";
import Logo from "../../assets/Logo.png";

import { Link } from "react-router-dom";

export function Footer() {
  return (
    <Container>
      <div>
        <Link>
          Food Explorer
          <img src={Logo} alt="" />
        </Link>

        <p>© 2022 - Todos os direitos reservados.</p>
      </div>
    </Container>
  );
}
