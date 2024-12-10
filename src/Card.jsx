import styled from "styled-components";

const StyledCard = styled.div`
  background: #cc4444;
  color: #fffc;
  padding: 0.5rem 1.5rem;
  margin: 1rem 0;
  h4 {
    margin-bottom: 0;
  }
`;

export default function Card(name, age, wishlist, naughty) {
  return (
    <>
      <StyledCard>
        <h2>{name}</h2>
        <h3>{age} år</h3>
        <h4>Ønskeliste</h4>
        <ul>
          {wishlist.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </StyledCard>
    </>
  );
}
