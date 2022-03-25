import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import homeImg from "../../assets/img/homeImg.png";
import { useMediaQuery } from "react-responsive";
import { PageTitle } from "../PageTitle";
import { useGame } from "../../context/GameProvider";
import { MOBILE, DESKTOP } from "../../media";

export const GameForm = () => {
  const isMobile = useMediaQuery(MOBILE);
  const isDesktop = useMediaQuery(DESKTOP);

  const {
    state: { category },
    dispatch,
  } = useGame();

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: "START_GAME",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={4}>
        <Box
          component="img"
          alt="Home Image"
          sx={{ width: isMobile ? "80%" : "auto" }}
          alignSelf={"center"}
          src={homeImg}
        />
        <PageTitle>Time to see if you were really listening!</PageTitle>
        <Typography sx={{ textAlign: "center" }}></Typography>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <Button fullWidth variant="contained" type="submit" color="warning">
            Start Quiz
          </Button>
        </FormControl>
      </Stack>
    </form>
  );
};
