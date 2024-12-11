import styled from "styled-components";

const NiceCard = styled.div`
  position: relative;
  width: 400px;
  display: flex;
  justify-content: center;
  // gap: 4rem;
  background: #c22;
  font-family: "Gochi Hand";
  color: #fffd;
  padding: 2rem 2.5rem;
  margin: 1rem;
  border: 5px solid #fc1;
  outline: 4px solid #fe1;
  border-radius: 15px;

  h4 {
    margin-bottom: 0.5rem;
  }
  ul {
    padding-left: 1rem;
  }

  overflow: hidden;

  animation-name: shine2, snow2;
  animation-duration: 4s, 90s;
  animation-iteration-count: infinite, 1;
  animation-fill-mode: none, forwards;

  @keyframes shine2 {
    0% {
      background: #c22;
    }
    7% {
      background: #c22;
    }
    12% {
      background: #f77;
    }
    17% {
      background: #c22;
    }
  }
  @keyframes snow2 {
    0% {
      box-shadow: 0px 3px 4px inset #0005, 0px -1px 3px inset #0005,
        0px 5px 10px -3px #0009, 0px 0px 0px 4px white;
    }
    100% {
      box-shadow: 0px 3px 4px inset #0005, 0px -1px 3px inset #0005,
        0px 5px 10px -3px #0009, 0px -15px 0px 4px white;
    }
  }
`;

const Shine = styled.div`
  position: absolute;
  width: 100%;
  height: 30px;
  background-color: white;
  transform-origin: bottom left;
  transform: rotate(45deg);
  top: -30px;

  animation-name: shine;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  // animation-delay: 2000ms;
  // animation-fill-mode: backwards;
  animation-timing-function: ease-in-out;

  @keyframes shine {
    0% {
      left: -270px;
    }
    20% {
      left: 400px;
    }
    100% {
      left: 400px;
    }
  }
`;

const NaughtyCard = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  background-color: #b22;
  font-family: "Gochi Hand";
  color: #fffd;
  padding: 2rem 2.5rem;
  margin: 1rem;
  border: 5px dotted #4a4;
  border-radius: 15px;
  
  h4 {
    // font-weight: 500;
    margin-bottom: 0.5rem;
  }
  ul {
    padding-left: 1rem;
  }
  animation-name: snow;
  animation-duration: 90s;
  animation-fill-mode: forwards;

  @keyframes snow {
    0% {
      box-shadow: 0px 4px 4px inset #0005, 0px -2px 3px inset #0005, 0px 0px 0px 0px white;
    }
    100% {
      box-shadow: 0px 4px 4px inset #0005, 0px -2px 3px inset #0005, 0px -15px 0px 0px white;
    }

    }
    @media screen and (max-width: 450px) {
  flex-direction: column;
  max-width: 300px;
  gap: 1rem;
`;

const CardHalves = styled.div`
  width: 50%;
  // padding: 0 2rem;
`;

const NameAge = styled.div;

export default function Card(id, name, age, wishlist, naughty) {
  if (!naughty) {
    return (
      <>
        <NiceCard>
          <Shine />
          <CardHalves>
            <h2>{name}</h2>
            <h3>{age} år</h3>
          </CardHalves>
          <CardHalves>
            <h4>Ønskeliste</h4>
            <ul>
              {wishlist.map((e) => {
                // console.log(`${id}-${e}`);
                return <li key={`${id}-${e}`}>{e}</li>;
              })}
            </ul>
          </CardHalves>
        </NiceCard>
      </>
    );
  } else {
    return (
      <>
        <NaughtyCard>
          <CardHalves>
            <h2>{name}</h2>
            <h3>{age} år</h3>
          </CardHalves>
          <CardHalves>
            <h4>Ønskeliste</h4>
            <ul>
              {wishlist.map((e) => {
                // console.log(`${id}-${e}`);
                return <li key={`${id}-${e}`}>{e}</li>;
              })}
            </ul>
          </CardHalves>
        </NaughtyCard>
      </>
    );
  }
}
