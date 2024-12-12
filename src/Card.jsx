import styled from "styled-components";
import { NaughtyCard, NaughtyBottomRightImage } from "./NaughtyCard";
import { NiceCard, Shine, NiceBottomRightImage, niceImages } from "./NiceCard";

const CardParent = styled.div`
  position: relative;
`;

const List = styled.div`
  width: 60%;
  // padding: 0 2rem;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const NameAge = styled.div`
  width: 40%;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export default function Card(id, name, age, wishlist, naughty) {
  if (!naughty) {
    const randomImage = Math.floor(Math.random() * niceImages.length);
    return (
      <>
        <CardParent>
          <NiceCard>
            <Shine />
            <NameAge>
              <h2>{name}</h2>
              <h3>{age} år</h3>
            </NameAge>
            <List>
              <h4>Ønskeliste</h4>
              <ul>
                {wishlist.map((e) => {
                  return <li key={`${id}-${e}`}>{e}</li>;
                })}
              </ul>
            </List>
          </NiceCard>
          <NiceBottomRightImage
            src={`images/${niceImages[randomImage]}`}
            alt="A christmas decoration icon"
          />
        </CardParent>
      </>
    );
  } else {
    return (
      <>
        <NaughtyCard>
          <NameAge>
            <h2>{name}</h2>
            <h3>{age} år</h3>
          </NameAge>
          <List>
            <h4>Ønskeliste</h4>
            <ul>
              {wishlist.map((e) => {
                return <li key={`${id}-${e}`}>{e}</li>;
              })}
            </ul>
          </List>
          <NaughtyBottomRightImage
            src="images/coal-svgrepo-com.svg"
            alt="A coal icon"
          />
        </NaughtyCard>
      </>
    );
  }
}
