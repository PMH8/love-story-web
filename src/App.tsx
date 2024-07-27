import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem p="3px" area={"nav"} bg="pink">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GenresList></GenresList>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
