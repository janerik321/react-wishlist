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
    0px 0px 6px 4px #0005, 0px 5px 10px -3px #0009, 0px -12px 0px 4px white,
    0px -4px 0px 0px white inset;

  h4 {
    margin-bottom: 0.5rem;
  }
  ul {
    padding-left: 1rem;
  }

  overflow: hidden;

  animation-name: shine2; //snow2;
  animation-duration: 4s, 90s;
  animation-iteration-count: infinite, 1;
  animation-fill-mode: none, forwards;

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
        0px 5px 10px -3px #0009, 0px 0px 0px 4px white;
    }
    100% {
      box-shadow: 0px 3px 4px inset #0005, 0px -1px 3px inset #0005,
        0px 5px 10px -3px #0009, 0px -15px 0px 4px white;
    }
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    max-width: 300px;
    gap: 1rem;
    padding: 2rem 2.5rem;
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
  @media screen and (max-width: 450px) {
    width: 550px;
  }
`;

const NiceBottomRightImage = styled.img`
  position: absolute;
  width: 3rem;
  bottom: -1rem;
  right: -1rem;
  transform: rotate(15deg);
  filter: drop-shadow(3px 4px 4px black);
`;

const niceImages = [
  "bauble-svgrepo-com.svg",
  "candy-cane-svgrepo-com.svg",
  "christmas-sock-sock-svgrepo-com.svg",
  "christmas-tree-svgrepo-com.svg",
  "christmas-wreath-svgrepo-com.svg",
  "gingerbread-man-gingerbread-svgrepo-com.svg",
  "star-svgrepo-com.svg",
];

export { NiceCard, Shine, NiceBottomRightImage, niceImages };
