import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  <>
    <Head>
      <title>I'm a Website morty</title>
      <meta name="description" content="A Website about Rick and Morty" />
      <meta name="keywords" content="Rick and Morty" />
    </Head>
    <StyledHome>
      <h1>Welcome to Rick and Morty Website</h1>
      <p>here you can see the characters and Some "facts about them"</p>
    </StyledHome>
  </>;
}

const StyledHome = styled.div`
  --primary-color: #61dafb; /* Rick and Morty blue color */
  --text-color: #ffffff; /* White text color */

  text-align: center;
  padding: 20px;

  h1 {
    font-size: 2em;
    color: var(--primary-color);
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2em;
    color: var(--text-color);
  }
`;
