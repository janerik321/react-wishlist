import styled from "styled-components";
import { NaughtyCard, NaughtyBottomRightImage } from "./NaughtyCard";
import { NiceCard, Shine, BottomRightNiceImage } from "./NiceCard";
import cornerIcons from "./CornerIcons";

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

const CornerPine = styled.img`
  width: 150px;
  position: absolute;
  transform: scaleX(-1);
  left: -1.8rem;
  bottom: -1.4rem;
  // filter: drop-shadow(0px -1px);
`;

export default function Card(id, name, age, wishlist, naughty) {
  const randomImage = Math.floor(Math.random() * cornerIcons.length);
  if (!naughty) {
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
          <CornerPine src="images/[CITYPNG.COM]HD Holidays Christmas Garland Pine Branch Corner PNG - 200x200.png" />
          <BottomRightNiceImage
            src={`images/${cornerIcons[randomImage]}`}
            alt="A christmas decoration icon"
          />
        </CardParent>
      </>
    );
  } else {
    return (
      <>
        <NaughtyCard>
          <CornerPine src="images/[CITYPNG.COM]HD Holidays Christmas Garland Pine Branch Corner PNG - 200x200.png" />
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
            src={`images/${cornerIcons[randomImage]}`}
            alt="A coal icon"
          />
        </NaughtyCard>
      </>
    );
  }
}
