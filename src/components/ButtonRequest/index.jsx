import { Container } from "../ButtonRequest/style";
import { IoIosPaper } from "react-icons/io";

export function ButtonRequest({ children }) {
  return (
    <Container to="/payment">
      <IoIosPaper size={26} />
      {children}
    </Container>
  );
}
