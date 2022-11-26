import { Container } from "./style";

import { ArrowLeft } from "../../components/ArrowLeft";
import { ArrowRight } from "../../components/ArrowRight";
import { BoxProduct } from "../../components/BoxProduct";

import { useState } from "react";

import { TbMoodEmpty } from "react-icons/tb";

import { API } from "../../API";

export function CarroselContainer({ title }) {
  const [scrollMove, setScrollMove] = useState(0);

  const handleLeftMove = () => {
    if (scrollMove >= 0) {
      return;
    }
    setScrollMove((i) => {
      return i + 155;
    });
  };
  const handleRightMove = () => {
    let count = API.length * 200;

    setScrollMove((i) => {
      return i - 155;
    });
  };

  return (
    <Container>
      <span>{title}</span>
      <ArrowLeft moveContainer={handleLeftMove} />

      <ArrowRight moveContainer={handleRightMove} />

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
    </Container>
  );
}
