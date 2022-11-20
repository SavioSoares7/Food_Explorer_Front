import { Header } from "../../components/Header";

import { BoxInfo, Container, MainCourse } from "./style";

import InfoFood from "../../assets/food.png";
import { API } from "../../API";

import { BoxProduct } from "../../components/BoxProduct";

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

          <div className="container-box">
            {API.length > 0 ? (
              API.map((item) => {
                return <BoxProduct item={item}></BoxProduct>;
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
