import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
}) => {
  return (
    <Card sx={{ minWidth: 275, margin: 3, backgroundColor: colorStyling }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {type}
        </Typography>
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          {name} {yearGroup}
        </Typography>
        <Typography color="text.secondary">{status}</Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {dateTime}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">EDIT</Button>
        <Button
          size="small"
          onClick={() => {
            onDelete(id, absenceRequestId);
          }}
        >
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
};
