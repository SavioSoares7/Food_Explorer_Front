import { Container } from "./style";

import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export function ContainerTitle({ title, LinkTo }) {
  return (
    <Container>
      {LinkTo ? (
        <Link to={LinkTo}>
          <AiOutlineLeft size={20} />
          Voltar
        </Link>
      ) : null}
      <span> {title} </span>
    </Container>
  );
}
