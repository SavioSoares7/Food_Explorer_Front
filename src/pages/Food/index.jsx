import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ContainerTitle } from "../../components/ContainerTitle";
import { ButtonBuy } from "../../components/ButtonBuy";

import { Container } from "./style";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import food from "../../assets/imagem1.png";

import { useState } from "react";

export function Food() {
  return (
    <>
      <Header />
      <ContainerTitle LinkTo="/" />
      <Container>
        <img src={food} alt="" />

        <div>
          <h2>Salada Ravanello</h2>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>
          <ul>
            <li>Alface</li>
            <li>Tomate</li>
            <li>Rabanete</li>
            <li>Pão naan</li>
          </ul>

          <div>
            <span>R$25,97</span>
            <div>
              <button>
                <AiOutlinePlus />
              </button>
              <span>01</span>
              <button>
                <AiOutlineMinus />
              </button>
            </div>
            <ButtonBuy />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
