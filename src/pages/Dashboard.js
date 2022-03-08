import { Modal } from "@mui/material";
import { Button } from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { AddChild } from "../components/AddChild/AddChild";

export const Dashboard = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ textAlign: "center" }}
      >
        Dashboard
      </Typography>
      {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
      <AddChild />
    </Container>
  );
};
