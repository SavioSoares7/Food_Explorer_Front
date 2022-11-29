import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ContainerTitle } from "../../components/ContainerTitle";

import { Container } from "./style";

import { IoIosArrowDown } from "react-icons/io";

export function Request() {
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
              <td>
                <select name="status" id="stauts">
                  <option value="beggar">Pedente</option>
                  <option value="preparing">Preparando</option>
                  <option value="finished">Entregue</option>
                </select>
              </td>
              <td>0001</td>
              <td>
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </td>
              <td>20/05 às 18h00</td>
            </tr>
            <tr>
              <td>
                <select name="status" id="stauts">
                  <option value="beggar">Pedente</option>
                  <option value="preparing">Preparando</option>
                  <option value="finished">Entregue</option>
                </select>
              </td>
              <td>0001</td>
              <td>
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </td>
              <td>20/05 às 18h00</td>
            </tr>
            <tr>
              <td>
                <select name="status" id="stauts">
                  <option value="beggar">Pedente teste</option>
                  <option value="preparing">Preparando</option>
                  <option value="finished">Entregue</option>
                </select>
              </td>
              <td>0001</td>
              <td>
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </td>
              <td>20/05 às 18h00</td>
            </tr>
          </tbody>
        </table>
      </Container>
      <Footer />
    </>
  );
}
