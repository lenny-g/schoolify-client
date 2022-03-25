import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { ConfirmModal } from "../ConfirmModal";
import { useState } from "react";

import { forms } from "../../styles";

export const AbsenceRequestCard = ({
  onDelete,
  absenceRequestId,
  id,
  name,
  yearGroup,
  type,
  description,
  dateTime,
  status,
  colorStyling,
  cardButtons,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState();
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        ...forms.container,
        backgroundColor: colorStyling,
        maxWidth: 250,
        margin: 1,
        textAlign: "center",
      }}
    >
      <Typography variant="h3" color="text.secondary">
        {status}
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {name} {yearGroup}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        {dateTime}
      </Typography>
      <Typography variant="subtitle1">{type}</Typography>
      <Typography variant="body1">{description}</Typography>
      {cardButtons && (
        <Box>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            color="warning"
            size="small"
            onClick={() => {
              //   onDelete(id, absenceRequestId);
              const row = { absenceRequestId, id };
              setSelectedRow(row);
              setOpen(true);
            }}
          >
            <DeleteIcon sx={{ color: "#c13030" }} />
            DELETE
          </Button>
        </Box>
      )}
      <ConfirmModal
        open={open}
        handleClose={handleClose}
        handleConfirm={onDelete}
        selectedRow={selectedRow}
        title="Delete request"
        message="Are you sure you want to delete your absence request?"
      />
    </Box>
  );
};
