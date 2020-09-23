import React from "react";
import { Container, Box, BoxTitle, BoxText, BoxImage} from "./HomeStyle";

export default function Home({ boxData }) {
  return (
    <Container>
      {boxData.map(box => (
        <Box key={box.id} bgColor={box.bgColor}>
          <BoxImage src={box.image} alt={box.description}/>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Container>
  );
}