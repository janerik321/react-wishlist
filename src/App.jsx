// import { useState } from 'react'

import "./App.css";
import styled from "styled-components";
import Card from "./Card.jsx";
import kidsWishlist from "./kidsWishlist.js";

const CardContainer = styled.div``;

const Backdrop = styled.div`
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  gap: 5rem;
  color: #fffd;
`;

function App() {
  (async () => {
    await loadSnowPreset(tsParticles);

    await tsParticles.load({
      id: "tsparticles",
      options: {
        preset: "snow",
        background: {
          opacity: 0,
        },
        fullScreen: {
          // zIndex: -1,
        },
        particles: {
          // number: {
          //   value: 10,
          // },
          size: {
            value: {
              min: 1,
              max: 2.5,
            },
          },
          opacity: {
            value: {
              min: 0.1,
              max: 1,
            },
          },
        },
      },
    });
  })();
  return (
    <>
      <h1>Ønskelister</h1>
      <Backdrop>
        {kidsWishlist.map(({ id, name, age, wishlist, naughty }) => {
          return (
            <CardContainer key={id}>
              {Card(id, name, age, wishlist, naughty)}
            </CardContainer>
          );
        })}
      </Backdrop>
    </>
  );
}

export default App;
