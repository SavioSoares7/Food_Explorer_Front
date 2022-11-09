import { Container, FormSingIn } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

export function SingIn() {
  return (
    <Container>
      <div>
        <h1>Food explorer</h1>
      </div>

      <FormSingIn>
        <h5>Faça login</h5>

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

        <Button>Teste</Button>
        <Link>Criar uma conta</Link>
      </FormSingIn>
    </Container>
  );
}
