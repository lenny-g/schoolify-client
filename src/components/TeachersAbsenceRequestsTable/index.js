import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_TEACHER_STUDENTS_ABSENCE_REQUESTS } from "../../graphql/query";
import { useNavigate } from "react-router-dom";
import { TEACHER_ABSENCE_REQUEST_RESPONSE } from "../../graphql/mutations";
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

const stylingRowColor = (status) => {
  if (status == "PENDING") return "lightGray";
  if (status == "APPROVED") return "lightGreen";
  if (status == "REJECTED") return "red";
};

export const TeachersAbsenceRequestsTable = () => {
  const yearGroupId = JSON.parse(localStorage.getItem("user")).yearGroup.id;

  const { data, loading, error } = useQuery(
    GET_TEACHER_STUDENTS_ABSENCE_REQUESTS,
    {
      variables: {
        yearGroupId: yearGroupId,
      },
    }
  );

  const [
    executeTeacherResponse,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(TEACHER_ABSENCE_REQUEST_RESPONSE);

  const navigate = useNavigate();

  const onAccept = async (absenceRequestId, studentId) => {
    console.log(absenceRequestId, studentId, "accepted");

    await executeTeacherResponse({
      variables: {
        input: {
          teacherResponse: "APPROVED",
          studentId: studentId,
          absenceRequestId: absenceRequestId,
        },
      },
    });

    // navigate('/children/view', { replace: true });
  };

  const onReject = async (absenceRequestId, studentId) => {
    console.log(absenceRequestId, studentId, "rejected");

    await executeTeacherResponse({
      variables: {
        input: {
          teacherResponse: "REJECTED",
          studentId: studentId,
          absenceRequestId: absenceRequestId,
        },
      },
    });
  };

  let absenceRequestData = [];

  data?.teacherStudents
    ?.map((students) => {
      return students.absenceRequests.map((eachRequest, index) => {
        return {
          studentId: students.id,
          name: `${students.firstName} ${students.lastName}`,
          yearGroup: students.yearGroup.title,
          absenceRequestId: eachRequest.id,
          type: eachRequest.type,
          description: eachRequest.description,
          dateTime: eachRequest.dateTime,
          status: eachRequest.status,
        };
      });
    })
    .map((each) => {
      return absenceRequestData.push(...each);
    });

  if (error) {
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
                    <TableCell align="right">
                      <Button
                        onClick={() => {
                          onAccept(row.absenceRequestId, row.studentId);
                        }}
                      >
                        ACCEPT
                      </Button>
                      <Button
                        onClick={() => {
                          onReject(row.absenceRequestId, row.studentId);
                        }}
                      >
                        REJECT
                      </Button>
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
