import { Header } from "../../components/Header";

import { BoxInfo, Container, MainCourse } from "./style";

import InfoFood from "../../assets/food.png";
import { API } from "../../API";

import { TbMoodEmpty } from "react-icons/tb";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <BoxInfo>
          <img src={InfoFood} alt="Comida" />

          <div>
            <span>Sabores inigualáveis</span>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </BoxInfo>

        <MainCourse>
          <span>Pratos principais</span>

          <div>
            {API.length > 0 ? (
              API.map((item) => {
                return (
                  <div className="box-product">
                    <img src={item.img} />
                    <h6> {item.name} </h6>
                    <p>{item.description}</p>
                    <span> {item.Price} </span>
                  </div>
                );
              })
            ) : (
              <div className="empty">
                <TbMoodEmpty />
                <h1>Nenhum prato adicionado</h1>
              </div>
            )}
          </div>
        </MainCourse>
      </Container>
    </>
  );
}
