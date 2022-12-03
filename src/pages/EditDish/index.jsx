import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ContainerTitle } from "../../components/ContainerTitle";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";

import { Container } from "./style";

export function EditDish() {
  return (
    <>
      <Header />
      <ContainerTitle LinkTo="/" title="Editar prato" />

      <Container>
        <div>
          <Input
            labelName="Imagem do prato"
            placeholder="Selecione imagem"
            type="file"
          />

          <Input labelName="Nome" placeholder="Ex: Salada Ceasar" type="text" />
        </div>

        <div>
          <div>
            <NoteItem isNew={false} />
            <NoteItem isNew={true} />
          </div>

          <Input labelName="Preço" placeholder="R$ 00,00" type="number" />
        </div>
        <label htmlFor="">
          Descrição
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          ></textarea>
        </label>

        <input type="submit" value="Adicionar prato" />
      </Container>

      <Footer />
    </>
  );
}
