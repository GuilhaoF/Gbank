import { SignIn, SignOut, User } from "phosphor-react";
import {
  ButtonEnter,
  TitleForm,
  FormGroup,
  FormPage,
  FormButton,
} from "./styles";

export default function FormMain() {
  return (
    <>
      <FormPage>
        <form>
          <TitleForm>
            <h2>Login</h2>
          </TitleForm>
          <FormGroup>
            <input
              type="text"
              name="conta"
              placeholder="Digite Numero da Conta"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="password"
              name="password"
              placeholder="Digite sua Senha"
            />
          </FormGroup>

          <FormButton>

            <ButtonEnter>
            <User size={20} color="#fff" weight="bold" style={{ marginRight:8 }} />
              Sign In
            </ButtonEnter>

            <ButtonEnter>
            <SignOut size={20} color="#fff" weight="bold" style={{ marginRight:8 }}  />
              Sign Out
            </ButtonEnter>
            
          </FormButton>
        </form>
      </FormPage>
    </>
  );
}
