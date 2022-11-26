import { Container } from "./style";
import { AiOutlineLeft } from "react-icons/ai";

export function ArrowLeft({ moveContainer }) {
  return (
    <Container onClick={moveContainer}>
      <AiOutlineLeft />
    </Container>
  );
}
