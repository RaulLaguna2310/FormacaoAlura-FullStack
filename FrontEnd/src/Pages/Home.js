import Search from "../componentes/Search"
import UltimosLacamentos from "../componentes/UltimosLacamentos";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

function Home() {
  return (
    <HomeContainer>
      <Search/>
      <UltimosLacamentos/>
    </HomeContainer>
  );
}
export default Home;
