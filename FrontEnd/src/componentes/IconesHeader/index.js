import styled from "styled-components";
import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";

const icones = [perfil, sacola];
const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`;
const IconesContainer = styled.ul`
    display: flex;
    align-items: center;
`;

function IconesOpcoes() {
  return (
    <IconesContainer>
      {icones.map((icone) => (
        <Icone>
          <img src={icone}></img>
        </Icone>
      ))}
    </IconesContainer>
  );
}
export default IconesOpcoes;
