import Head from "next/head";
import styled from "styled-components";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`https://rickandmortyapi.com/api/character`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.staus} - ${resposta.statusText}`);
    }

    return {
      props: { dados },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return { notFound: true };
  }
}
export default function Characters({ dados }) {
  console.log(dados);
  if (!dados || !dados.results) {
    return <p>Loading...</p>;
  }

  const { results } = dados;

  if (!results || results.length === 0) {
    return <p>No characters found.</p>;
  }

  return (
    <>
      <Head>
        <title>Rick & Morty - Characters</title>
      </Head>
      <StyledCharacters>
        <h1>Characters</h1>
        {results.map((character) => (
          <div key={character.id} className="character-card">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.image} />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
          </div>
        ))}
      </StyledCharacters>
    </>
  );
}

const StyledCharacters = styled.div`
  text-align: center;
  padding: 20px;

  h1 {
    font-size: 2em;
    color: #61dafb; /* Rick and Morty blue color */
    margin-bottom: 20px;
  }

  .character-card {
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    text-align: left;

    h2 {
      font-size: 1.8em;
      color: #fcba03;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2em;
      color: #2ecc71;
      margin: 5px 0;
    }

    &:nth-child(even) {
      background-color: #2c3e50;
    }

    &:nth-child(odd) {
      background-color: #34495e;
    }
  }
`;
