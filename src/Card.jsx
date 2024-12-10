import styled from "styled-components";

const NiceCard = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  // gap: 4rem;
  background: #c22;
  color: #fffd;
  padding: 2rem 2.5rem;
  margin: 1rem;
  border: 5px solid #fc1;
  outline: 4px solid #fe1;
  border-radius: 15px;
  box-shadow: 0px 3px 4px inset #0005, 0px -1px 3px inset #0005,
    0px 5px 10px -3px #0009;
  h4 {
    margin-bottom: 0.5rem;
  }
  ul {
    padding-left: 1rem;
  }

  overflow: hidden;
`;

const Shine = styled.div`
  // position: absolute;
  // width: 400px;
  // height: 30px;
  // background-color: white;
  // rotate: 45deg;
  // left: 0px;
  // // bottom: 0px;

  // animation-name: shine;
  // animation-duration: 5000ms;
  // animation-iteration-count: infinite;
  // // animation-delay: 2000ms;
  // // animation-fill-mode: backwards;
  // animation-timing-function: ease-in-out;

  // @keyframes shine {
  //   0% {
  //     left: 0px;
  //     bottom: 10px;
  //   }
  //   50% {
  //     left: -10px;
  //     bottom: 0px;
  //     background-color: green;
  //   }
  // }
  // // z-index: 1;
`;

const NaughtyCard = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  // gap: 4rem;
  background-color: #c22;
  color: #fffd;
  padding: 2rem 2.5rem;
  margin: 1rem;
  border: 5px solid #4a4;
  border-radius: 15px;
  box-shadow: 0px 3px 4px inset #0005, 0px -1px 3px inset #0005,
    0px 5px 10px -3px #0009;
  h4 {
    margin-bottom: 0.5rem;
  }
  ul {
    padding-left: 1rem;
  }
`;

const CardHalves = styled.div`
  width: 50%;
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
