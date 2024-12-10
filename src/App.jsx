// import { useState } from 'react'

// import "./App.css";
import Card from "./Card.jsx";
import kidsWishlist from "./kidsWishlist.js";

function App() {
  return (
    <>
      <h1>Ønskelister</h1>
      {kidsWishlist.map(({ name, age, wishlist, naughty }) => {
        // if (!naughty) {

        // }
        return <>{Card(name, age, wishlist, naughty)}</>;
      })}
    </>
  );
}

export default App;
