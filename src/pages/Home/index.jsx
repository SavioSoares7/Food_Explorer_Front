import { BoxInfo } from "./style";

import { Header } from "../../components/Header";
import { CarroselContainer } from "../../components/CarroselContainer";

import { API } from "../../API";

import InfoFood from "../../assets/food.png";
import { useState } from "react";

export function Home() {
  return (
    <>
      <Header />
      <BoxInfo className="Container">
        <img src={InfoFood} alt="Comida" />

        <div>
          <span>Sabores inigualáveis</span>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </BoxInfo>

      <CarroselContainer title="Pratos principais" />
    </>
  );
}
