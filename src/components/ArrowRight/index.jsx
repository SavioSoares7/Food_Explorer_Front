import { Container } from "./style";
import { AiOutlineRight } from "react-icons/ai";

export function ArrowRight({ moveContainer }) {
  return (
    <Container onClick={moveContainer}>
      <AiOutlineRight />
    </Container>
  );
}
