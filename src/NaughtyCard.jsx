import styled from "styled-components";

const NaughtyCard = styled.div`
  position: relative;
  width: 404px;
  display: flex;
  gap: 1rem;
  background-color: #922;
  // background-image: url(images/coal-svgrepo-com.svg);
  // background-size: 3rem;
  // background-repeat: no-repeat;
  // background-position: bottom -1rem right -1rem;
  color: #fffd;
  // text-decoration: line-through;
  padding: 1.5rem 2rem;
  border: 7px dotted #4a4;
  border-radius: 15px;
  box-shadow: 0px 4px 4px inset #0005, 0px -2px 3px inset #0005,
    0px -4px 6px #0005, 0px -12px 0px 0px white, 0px -4px 0px 0px white inset;

  h4 {
    margin-bottom: 0.5rem;
  }
  ul {
    padding-left: 1rem;
  }
  // animation-name: snow;
  animation-duration: 90s;
  animation-fill-mode: forwards;

  @keyframes snow {
    0% {
      box-shadow: 0px 4px 4px inset #0005, 0px -2px 3px inset #0005,
        0px 0px 0px 0px white;
    }
    100% {
      box-shadow: 0px 4px 4px inset #0005, 0px -2px 3px inset #0005,
        0px -15px 0px 0px white;
    }
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    max-width: 300px;
    gap: 1rem;
    padding: 2rem 2.5rem;
  }
`;

const NaughtyBottomRightImage = styled.img`
  position: absolute;
  width: 2.5rem;
  bottom: -1rem;
  right: -1rem;
  transform: rotate(5deg);
  filter: drop-shadow(0px 4px 4px black);
  // filter: brightness(1.1);
`;

export { NaughtyCard, NaughtyBottomRightImage };
