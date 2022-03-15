import React, { useState, useEffect } from "react";
import parseISO from "date-fns/parseISO";
import { GET_ALL_PARENT_ABSENCE_REQUESTS } from "../../graphql/query";
import { useQuery } from "@apollo/client";
import { AbsenceRequestCard } from "../AbsenceRequestCard/parentAbsenceRequestCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

const stylingRowColor = (status) => {
  if (status == "PENDING") return "lightGray";
  if (status == "APPROVED") return "lightGreen";
  if (status == "REJECTED") return "red";
};

export const ParentsAbsenceRequestTable = () => {
  const [search, setSearch] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { data, loading, error } = useQuery(GET_ALL_PARENT_ABSENCE_REQUESTS, {
    pollInterval: 1000,
  });

  let absenceRequestData = [];

  data?.parentsChildren?.children
    ?.map((child) => {
      return child.absenceRequests.map((eachRequest, index) => {
        return {
          id: child.id,
          name: `${child.firstName} ${child.lastName}`,
          yearGroup: child.yearGroup.title,
          type: eachRequest.type,
          description: eachRequest.description,
          dateTime: `   ${
            parseISO(eachRequest.dateTime).toGMTString().split("GMT")[0]
          }  `,
          status: eachRequest.status,
        };
      });
    })
    .map((each) => {
      return absenceRequestData.push(...each);
    });

  const handleUserSearch = () => {
    return absenceRequestData.filter((each) =>
      each.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  if (error) {
    return <div>ERROR</div>;
  }

  if (loading) {
    return <LinearProgress style={{ backgroundColor: "purple" }} />;
  }

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ textAlign: "center" }}
      >
        Absence Requests
      </Typography>

      <TextField
        label="Enter Child Name"
        variant="outlined"
        style={{ marginBottom: 20, width: "100%" }}
        onChange={(e) => setSearch(e.target.value)}
      />

      {windowWidth > 800 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{ backgroundColor: "#EEBC1D" }}>
              <TableRow>
                {[
                  "Name",
                  "Year Group",
                  "Type",
                  "Description",
                  "Date & time",
                  "Status",
                ].map((head) => (
                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontFamily: "Montserrat",
                    }}
                    align={head === "Name" ? "left" : "right"}
                    key={head}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {handleUserSearch()?.map((row, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ backgroundColor: stylingRowColor(row.status) }}
                  >
                    <TableCell align="left">{row.name} </TableCell>
                    <TableCell align="right">{row.yearGroup}</TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.dateTime}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Grid container>
          {handleUserSearch().map((each, index) => {
            return (
              <AbsenceRequestCard
                {...each}
                colorStyling={stylingRowColor(each.status)}
                key={index}
              />
            );
          })}
        </Grid>
      )}
    </Box>
  );
};
