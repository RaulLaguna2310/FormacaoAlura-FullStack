import styled from "styled-components";
import { livros } from "./dadosUltimosLacamentos";
import { Title } from "../Title";
import CardRecomendacao from "../CardRecomendacao";
import imagemLivro from '../../imagens/livro2.png'

const UltimosLacamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function UltimosLacamentos() {
  return (
    <UltimosLacamentosContainer>
      <Title cor='#eb9b00' tamanhoFonte='36px'>Últimos Laçamentos</Title>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} />
        ))}
      </NovosLivrosContainer>
      <CardRecomendacao
        titulo='Talvez você se interesse por...'
        subtitulo='Angular 11'
        descricao='Construindo uma aplicação integrada com a plataforma Google'
        img={imagemLivro}
      />
    </UltimosLacamentosContainer>
  );
}
export default UltimosLacamentos;
