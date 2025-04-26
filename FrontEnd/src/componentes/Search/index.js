import styled from "styled-components";
import Input from "../Input";
import { useEffect, useState } from "react";
import { getLivros } from "../../servicos/livros";
import { postFavorito } from "../../servicos/favoritos";

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;
const SearchTitle = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;
const SearchSubTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  width: 300px p {
    width: 100%;
  }

  img {
    widht: 100%;
  }

  &:hover {
    border: 1px solid white;
  }
`;

function Search() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [ livros, setLivros ] = useState([])

  async function fetchLivros() {
    const livrosDaAPI = await getLivros()
    setLivros(livrosDaAPI)
  }

  useEffect(() => {
    fetchLivros()
  }, [])

  async function insertFavorito(id) {
    await postFavorito(id)
    alert(`Livro de id: ${id} inserido`)
  }

  return (
    <SearchContainer>
      <SearchTitle>Já sabe por onde começar?</SearchTitle>
      <SearchSubTitle>Encontre seu livro em nossa estante.</SearchSubTitle>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setLivrosPesquisados(resultadoPesquisa);
        }}
      />

      {livrosPesquisados.map((livro) => (
        <Resultado onClick={() => insertFavorito(livro.id)}>
          <img src={livro.src} />
          <p>{livro.nome}</p>
        </Resultado>
      ))}
    </SearchContainer>
  );
}
export default Search;
