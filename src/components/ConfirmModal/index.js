import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { GREEN, modal } from "../../styles";
import { useAuth } from "../../context/AppProvider";

export const ConfirmModal = ({
  open,
  handleClose,
  title,
  message,
  selectedRow,
  handleConfirm,
  handleReject,
}) => {
  const { user } = useAuth();

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...modal.container,
            backgroundColor: GREEN,
          }}
        >
          {user.role === "parent" && (
            <>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                align="center"
              >
                {title}
              </Typography>
              <Typography
                align="center"
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                {message}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flex: "wrap",
                  marginTop: "5px",
                }}
              >
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => {
                    handleConfirm(selectedRow.id, selectedRow.absenceRequestId);
                  }}
                >
                  Delete
                </Button>
                <Button
                  sx={{ marginLeft: 2 }}
                  variant="contained"
                  color="warning"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Box>
            </>
          )}

          {user.role === "teacher" && (
            <>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                align="center"
              >
                {selectedRow?.onAccept ? "Approve Request" : "Reject Request"}
              </Typography>
              <Typography
                align="center"
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                Are you sure you want to
                {selectedRow?.onAccept ? "  Approve " : "   Reject "} the
                absence request?
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flex: "wrap",
                  marginTop: "5px",
                }}
              >
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => {
                    selectedRow?.onAccept
                      ? handleConfirm(
                          selectedRow.row.absenceRequestId,
                          selectedRow.row.studentId
                        )
                      : handleReject(
                          selectedRow.row.absenceRequestId,
                          selectedRow.row.studentId
                        );
                  }}
                >
                  {selectedRow?.onAccept ? "Approve" : "Reject"}
                </Button>

                <Button
                  sx={{ marginLeft: 2 }}
                  variant="contained"
                  color="warning"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};
