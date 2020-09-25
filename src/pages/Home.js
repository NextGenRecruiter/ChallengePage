import React from "react";
import Header from './Header';
import Body from './body';
import NAV from './nav';
import { Container, Box, BoxTitle, BoxText, BoxImage} from "./HomeStyle";

export default function Home({boxData}) {
  return (
    <>
    <Header/>
    <Body/>
    <Container>
      {boxData.map(box => (
        <Box key={box.id}>
          <BoxImage src={box.image} alt={box.description}/>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Container>
    <NAV/>
    </>
  );
}