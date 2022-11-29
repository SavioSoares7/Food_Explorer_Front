import { Container } from "./style";

import { ArrowLeft } from "../../components/ArrowLeft";
import { ArrowRight } from "../../components/ArrowRight";
import { BoxProduct } from "../../components/BoxProduct";

import { useState } from "react";

import { API } from "../../API";

export function CarroselContainer({ title, typeFood }) {
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
        {API.filter((item) => {
          console.log(typeFood);
          return item.category == typeFood;
        }).map((item) => {
          console.log(item);
          return <BoxProduct item={item} />;
        })}
      </div>
    </Container>
  );
}
