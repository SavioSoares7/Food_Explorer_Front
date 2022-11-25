import { BoxInfo, MainCourse } from "./style";

import { Header } from "../../components/Header";
import { BoxProduct } from "../../components/BoxProduct";
import { ArrowLeft } from "../../components/ArrowLeft";
import { ArrowRight } from "../../components/ArrowRight";

import { API } from "../../API";

import InfoFood from "../../assets/food.png";
import { TbMoodEmpty } from "react-icons/tb";
import { useState } from "react";

export function Home() {
  const [scrollMove, setScrollMove] = useState(0);

  const handleLeftMove = () => {
    if (scrollMove >= 0) {
      return;
    }
    setScrollMove((i) => {
      return i + 155;
    });
  };
  const handleRightMove = (API) => {
    let count = API.length * 200;

    setScrollMove((i) => {
      return i - 155;
    });
  };

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

      <MainCourse>
        <span>Pratos principais</span>
        <ArrowLeft />

        <ArrowRight />

        <div
          className="container-box"
          style={{
            marginLeft: scrollMove,
          }}
        >
          {API.length > 0 ? (
            API.map((item) => {
              if (item.category == "food") {
                return <BoxProduct item={item}></BoxProduct>;
              }
            })
          ) : (
            <div className="empty">
              <TbMoodEmpty />
              <h1>Nenhum prato adicionado</h1>
            </div>
          )}
        </div>
      </MainCourse>
    </>
  );
}
