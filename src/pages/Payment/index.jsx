import {
  Container,
  ContainerPayment,
  ContainerBuy,
  ContainerProduct,
  ContainerPay,
} from "./style";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ContainerTitle } from "../../components/ContainerTitle";
import { ContainerFood } from "../../components/ContainerFood";

import { AiOutlineCreditCard } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import { BiTime } from "react-icons/bi";

export function Payment() {
  return (
    <>
      <Header />

      <ContainerTitle title="Meu pedido" />

      <Container>
        <ContainerProduct>
          <ContainerFood qty="1x" name="Salada Radish" price="R$ 25.97" />
          <ContainerFood qty="1x" name="Salada Radish" price="R$ 25.97" />
          <ContainerFood qty="1x" name="Salada Radish" price="R$ 25.97" />
          <ContainerFood qty="1x" name="Salada Radish" price="R$ 25.97" />
        </ContainerProduct>

        <ContainerPayment>
          <p>Pagamento</p>

          <ContainerBuy>
            <button>
              <MdPayments />
              Pix
            </button>

            <button>
              <AiOutlineCreditCard />
              Crédito
            </button>
          </ContainerBuy>

          <ContainerPay>
            <BiTime />
            <p>Aguardando pagamento no caixa</p>
          </ContainerPay>
        </ContainerPayment>
      </Container>

      <Footer />
    </>
  );
}
