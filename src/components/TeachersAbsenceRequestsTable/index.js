import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TEACHER_STUDENTS_ABSENCE_REQUESTS } from "../../graphql/query";

import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";

export const TeachersAbsenceRequestsTable = () => {
  const yearGroupId = JSON.parse(localStorage.getItem("user")).yearGroup.id;

  const { data, loading, errors } = useQuery(
    GET_TEACHER_STUDENTS_ABSENCE_REQUESTS,
    {
      variables: {
        yearGroupId: yearGroupId,
      },
    }
  );

  let absenceRequestData = [];

  data?.teacherStudents
    ?.map((students) => {
      return students.absenceRequests.map((eachRequest, index) => {
        return {
          id: students.id,
          name: `${students.firstName} ${students.lastName}`,
          yearGroup: students.yearGroup.title,
          type: eachRequest.type,
          description: eachRequest.description,
          dateTime: eachRequest.dateTime,
        };
      });
    })
    .map((each) => {
      return absenceRequestData.push(...each);
    });

  if (errors) {
    return <div>ERROR</div>;
  }

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ textAlign: "center" }}
      >
        Absence Requests Made
      </Typography>

      <TableContainer component={Paper}>
        {loading ? (
          <LinearProgress style={{ backgroundColor: "purple" }} />
        ) : (
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
                  "Action",
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
              {absenceRequestData?.map((row, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="left">{row.name} </TableCell>
                    <TableCell align="right">{row.yearGroup}</TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.dateTime}</TableCell>
                    <TableCell align="right">PENDING</TableCell>
                    <TableCell align="right">
                      <Button>ACCEPT</Button>
                      <Button>REJECT</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Box>
  );
};
