import styled from "styled-components";

const NaughtyCard = styled.div`
  position: relative;
  width: 404px;
  display: flex;
  gap: 1rem;
  background-color: #922;
  color: #fffd;

  padding: 1.5rem 2rem;
  border: 7px dotted #4a4;
  border-radius: 15px;
  box-shadow: 0px 4px 4px inset #0005, 0px -2px 3px inset #0005,
    0px -4px 6px #0005, 0px -15px 0px 0px white, 0px -5px 0px 0px white inset;

  h4 {
    margin-bottom: 0.5rem;
  }
  ul {
    padding-left: 1rem;
  }
  animation-name: snow;
  animation-duration: 60s;
  animation-timing-function: linear;

  @keyframes snow {
    0% {
      box-shadow: 0px 4px 4px inset #0005, 0px -2px 3px inset #0005,
        0px 0px 6px #0005, 0px 0px 0px 0px white, 0px 0px 0px 0px white inset;
    }
    100% {
      box-shadow: 0px 4px 4px inset #0005, 0px -2px 3px inset #0005,
        0px -4px 6px #0005, 0px -15px 0px 0px white,
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

const NaughtyBottomRightImage = styled.img`
  position: absolute;
  width: 3rem;
  bottom: -1rem;
  right: -1.2rem;
  transform: rotate(15deg);
  filter: drop-shadow(0px 4px 4px black);
  // filter: brightness(1.1);
`;

export { NaughtyCard, NaughtyBottomRightImage };
