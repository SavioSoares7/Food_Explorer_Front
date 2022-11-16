import { Container, FormSingUp } from "./style";

import { Input } from "../../components/Input";
import { ButtonForm } from "../../components/ButtonForm";

import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.png";

export function SingUp() {
  return (
    <Container>
      <div>
        <h1>
          <img src={Logo} />
          Food explorer
        </h1>
      </div>

      <FormSingUp>
        <h5>Crie sua conta</h5>

        <Input
          placeholder="Exemplo: Maria da Silva"
          labelName="Seu nome"
          type="text"
        />

        <Input
          placeholder="Exemplo: exmplo@exemplo.com.br"
          labelName="Email"
          type="email"
        />
        <Input
          placeholder="No mínimo 6 caracteres"
          labelName="Senha"
          type="password"
        />

        <ButtonForm>Criar conta</ButtonForm>
        <Link to="/login">Já tenho uma conta</Link>
      </FormSingUp>
    </Container>
  );
}
