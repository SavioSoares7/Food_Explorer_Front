import { Container } from "./style";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ContainerTitle } from "../../components/ContainerTitle";

export function Order() {
  return (
    <>
      <Header />
      <ContainerTitle title="Pedidos" />
      <Container>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pedente</td>
              <td>00000004</td>
              <td>
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </td>
              <td>20/05 ás 18:00</td>
            </tr>
          </tbody>
        </table>
      </Container>
      <Footer />
    </>
  );
}
