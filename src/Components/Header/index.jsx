import { Container, HeaderContainer } from "./styles";

const Header = ({ children }) => {
  return (
    <Container>
      <HeaderContainer>
        <h1>DuBairro</h1>
        {children}
      </HeaderContainer>
    </Container>
  );
};

export default Header;
