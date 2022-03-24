import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { GameProvider, useGame } from "../context/GameProvider";
import { GameForm } from "../components/Quiz/GameForm";
import { Quiz } from "../components/Quiz/Quiz";

export const Game = () => {
  const { state } = useGame();
  const layoutStyles = { p: "20px", mt: "20px" };

  return (
    <Container maxWidth="lg">
      {!state.gameInProgress && (
        <Box component="section" sx={{ ...layoutStyles }}>
          <GameForm />
        </Box>
      )}
      {state.gameInProgress && (
        <Box
          component="section"
          sx={{
            display: "absolute",
            backgroundColor: "white",
            flexDirection: "column",
            margin: "10px",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <Quiz />
        </Box>
      )}
    </Container>
  );
};

export const QuizGame = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
};
