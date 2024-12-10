// import { useState } from 'react'

import "./App.css";
import styled from "styled-components";
import Card from "./Card.jsx";
import kidsWishlist from "./kidsWishlist.js";

const Backdrop = styled.div`
  width: 100%;
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: #114;
  color: #fffd;
`;

function App() {
  return (
    <>
      <h1>Ønskelister</h1>
      <Backdrop>
        {kidsWishlist.map(({ id, name, age, wishlist, naughty }) => {
          // if (!naughty) {
          // console.log(naughty);
          // }
          return <>{Card(id, name, age, wishlist, naughty)}</>;
        })}
      </Backdrop>
    </>
  );
}

export default App;
