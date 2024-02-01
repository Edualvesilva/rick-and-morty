import styled from "styled-components";
import Head from "next/head";
export default function About() {
  return (
    <>
      <Head>
        <title>Rick & Morty - About</title>
      </Head>
      <StyledAbout>
        <p>
          Welcome to my <span>Rick and Mort Website</span>, where the exciting
          world of Rick and Morty comes to life! My name is
          <span> Eduardo</span>, and I am thrilled to share my passion for this
          animated masterpiece with you.
        </p>

        <h2>Why Rick and Morty?</h2>
        <p>
          As a fan of the show, I wanted to create a space where fellow
          enthusiasts could explore the diverse and eccentric characters that
          make Rick and Morty so unique. This website serves as a tribute to the
          creativity, humor, and imagination that the show brings to its
          audience.
        </p>

        <h2>The Journey of Creation</h2>
        <p>
          Building this website has been a labor of love. From the initial
          concept to the final design, every step was taken with the goal of
          providing an enjoyable and immersive experience. The website utilizes
          the{" "}
          <a
            href="https://rickandmortyapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rick and Morty API
          </a>{" "}
          to dynamically fetch and display information about the characters.
          This ensures that the content is always up-to-date and reflects the
          ever-expanding universe of Rick and Morty.
        </p>

        <h2>What to Expect</h2>
        <p>
          Explore the <em>Characters</em> page to discover detailed information
          about your favorite characters, from their names and species to their
          current status. The use of the API adds a dynamic touch, allowing you
          to stay connected with the latest character updates from the show.
        </p>

        <p>
          Feel free to navigate through the different sections and enjoy the
          world of Rick and Morty as it comes to life on this website. Thank you
          for joining me on this adventure, and I hope you find as much joy in
          exploring this site as I did in creating it.
        </p>
      </StyledAbout>
    </>
  );
}

const StyledAbout = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  p {
    font-size: 1.2em;
    line-height: 1.6;
    color: #ffffff;
    margin-bottom: 20px;

    span {
      font-weight: bold;
      color: #61dafb;
    }

    em {
      font-style: italic;
    }

    a {
      color: #fcba03;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  h2 {
    font-size: 1.5em;
    color: #fcba03;
    margin-bottom: 15px;
  }
`;
