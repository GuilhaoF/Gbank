import { Bank } from "phosphor-react";
import FormMain from "./components/FormMain";
import { Container, Banner } from "./styles";

export default function App() {
  return (
    <Container>

      <Banner>
        <Bank size={96} weight="bold" />
        <h2>GBank</h2>
        <span>
            Bank of American ©️
        </span>
      </Banner>

      <FormMain />

    </Container>
  );
}
