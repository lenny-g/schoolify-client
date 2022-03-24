import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { item } from "../../styles.js";

export const RequestAbsenceButton = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/absenceRequest/new", { replace: true });
  };
  return (
    <Box>
      <Button
        variant="contained"
        sx={item.btn}
        onClick={handleSubmit}
        color="warning"
      >
        Request Absence
      </Button>
    </Box>
  );
};
