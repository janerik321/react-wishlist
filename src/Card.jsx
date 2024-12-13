import styled from "styled-components";
import { NaughtyCard, NaughtyBottomRightImage } from "./NaughtyCard";
import { NiceCard, Shine, BottomRightNiceImage } from "./NiceCard";
import cornerIcons from "./CornerIcons";

const CardParent = styled.div`
  position: relative;
`;

const ChristmasDecorations = styled.img`
  height: 20px;
  z-index: 1;
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
  const randomImage = Math.floor(Math.random() * cornerIcons.length);
  if (!naughty) {
    return (
      <>
        <CardParent>
          {/* <ChristmasDecorations src="images/vecteezy_wide-christmas-border-garland-fromf-fir-branches-balls_.png" /> */}
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
