import { Container, ContainerProduct } from "./style";

export function ContainerFood({ qty, name, price }) {
  return (
    <Container>
      <img src="https://img.freepik.com/fotos-gratis/variedade-plana-com-deliciosa-comida-brasileira_23-2148739179.jpg?w=2000" />
      <ContainerProduct>
        <div>
          <p>
            {qty} {name}
          </p>
          <span>{price}</span>
        </div>

        <a href="#">Excluir</a>
      </ContainerProduct>
    </Container>
  );
}
