import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const TeamMemberCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
        alt="Leanne Gallagher"
      />
      <CardContent>
        <Typography variant="body" color="text.primary">
          Leanne Gallagher
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Full Stack Web Developer student with the University of Bootcamp.
        </Typography>
      </CardContent>
      <IconButton aria-label="linkedIn">
        <LinkedInIcon />
      </IconButton>
      <IconButton aria-label="gitHub">
        <GitHubIcon />
      </IconButton>
      <IconButton aria-label="portfolio">
        <LanguageIcon />
      </IconButton>
    </Card>
  );
};
