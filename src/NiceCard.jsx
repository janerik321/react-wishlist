import styled from "styled-components";

const NiceCard = styled.div`
  position: relative;
  width: 400px;
  display: flex;
  gap: 1rem;
  background: #b22;
  color: #fffd;
  padding: 1.5rem 2rem;
  border: 5px solid #fb0;
  outline: 4px solid #fe1;
  border-radius: 15px;
  box-shadow: 0px 3px 4px inset #0005, 0px -1px 3px inset #0005,
    0px 0px 6px 4px #0005, 0px 5px 10px -3px #0009, 0px -15px 0px 4px white,
    0px -5px 0px 0px white inset;

  h4 {
    margin-bottom: 0.5rem;
  }
  ul {
    padding-left: 1rem;
  }

  overflow: hidden;

  animation-name: shine2, snow2;
  animation-duration: 4s, 60s;
  animation-iteration-count: infinite, 1;
  animation-timing-function: ease, linear;

  @keyframes shine2 {
    0% {
      background: #b22;
    }
    7% {
      background: #b22;
    }
    12% {
      background: #f77;
    }
    17% {
      background: #b22;
    }
  }
  @keyframes snow2 {
    0% {
      box-shadow: 0px 3px 4px inset #0005, 0px -1px 3px inset #0005,
        0px 0px 0px 4px #0005, 0px 5px 10px -3px #0009, 0px 0px 0px 4px white,
        0px 0px 0px 0px white inset;
    }
    100% {
      box-shadow: 0px 3px 4px inset #0005, 0px -1px 3px inset #0005,
        0px 0px 6px 4px #0005, 0px 5px 10px -3px #0009, 0px -15px 0px 4px white,
        0px -5px 0px 0px white inset;
    }
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    max-width: 300px;
    gap: 1rem;
    padding: 2rem 2.5rem;

    // Removing certain animations at smaller screens to increase performance
    animation: none;
  }
`;

const Shine = styled.div`
  position: absolute;
  width: 30px;
  height: 100%;
  background-color: white;
  transform-origin: bottom;
  transform: skew(45deg);
  top: 0;
  left: 600px;
  //   left: calc(400px + height: 100%);

  animation-name: shine;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes shine {
    0% {
      left: -30px;
    }
    20% {
      left: 600px;
    
  }
  @media screen and (max-width: 450px) {
    animation: none;
    display: none;
  }
`;

const BottomRightNiceImage = styled.img`
  position: absolute;
  width: 3rem;
  bottom: -1rem;
  right: -1.2rem;
  transform: rotate(15deg);
  filter: drop-shadow(3px 4px 4px black);
`;

export { NiceCard, Shine, BottomRightNiceImage };
