import {
  Container,
  ContainerPayment,
  ContainerBuy,
  ContainerProduct,
  ContainerPay,
  PaymentCash,
  PaymentPix,
  PaymentCard,
  PaymentAccepted,
  PaymentFinished,
} from "./style";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ContainerTitle } from "../../components/ContainerTitle";
import { ContainerFood } from "../../components/ContainerFood";
import { Input } from "../../components/Input";
import { ButtonRequest } from "../../components/ButtonRequest";

import { AiOutlineCreditCard } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { ImQrcode } from "react-icons/im";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CiForkAndKnife } from "react-icons/ci";

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
          <ContainerFood qty="1x" name="Salada Radish" price="R$ 25.97" />

          <p>Total: R$ 103,88</p>
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
            <PaymentCash style={{ display: "none" }}>
              <BiTime />
              <p>Aguardando pagamento no caixa</p>
            </PaymentCash>

            <PaymentPix style={{ display: "none" }}>
              <ImQrcode />
            </PaymentPix>

            <PaymentCard style={{ display: "none" }}>
              <Input
                placeholder="0000 0000 0000 0000"
                labelName="Número do Cartão"
                type="number"
              />
              <div>
                <Input placeholder="04/25" labelName="Validade" type="number" />
                <Input placeholder="04/25" labelName="CVC" type="number" />
              </div>

              <ButtonRequest children="Finalizar o pagamento" />
            </PaymentCard>

            <PaymentAccepted style={{ display: "none" }}>
              <AiOutlineCheckCircle />
              <p>Pagamento aprovado!</p>
            </PaymentAccepted>

            <PaymentFinished>
              <CiForkAndKnife />
              <p>Pedido Entregue!</p>
            </PaymentFinished>
          </ContainerPay>
        </ContainerPayment>
      </Container>

      <Footer />
    </>
  );
}
