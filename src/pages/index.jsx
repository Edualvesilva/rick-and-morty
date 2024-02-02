import Head from "next/head";
import styled from "styled-components";
export default function Home() {
  return (
    <>
      <Head>
        <title>I'm a Website morty</title>
        <meta name="description" content="A Website about Rick and Morty" />
        <meta name="keywords" content="Rick and Morty" />
      </Head>
      <StyledHome>
        <h1>Welcome to Rick and Morty Website</h1>
        <p>
          Explore the World of Rick and Morty and learn interesting facts about
          them
        </p>

        <section>
          <h2>Fun Facts</h2>
          <ul>
            <li>
              Rick and Morty is an animated science fiction sitcom created by
              Justin Roiland and Dan Harmon.
            </li>
            <li>The show first premiered on Adult Swim in December 2013.</li>
          </ul>
        </section>

        <div className="iframeContainer">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/I1Q4FQNSb5c?si=pi0DYZHc3bYelesP"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <p className="rights">
          © 2024 Rick and Morty Website. All rights reserved.
        </p>
      </StyledHome>
    </>
  );
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

  ul {
    list-style: none;
    color: #2ecc71;
  }

  .iframeContainer {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`;
