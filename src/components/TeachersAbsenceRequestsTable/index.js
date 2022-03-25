import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import parseISO from "date-fns/parseISO";
import { useQuery, useMutation } from "@apollo/client";
import { GET_TEACHER_STUDENTS_ABSENCE_REQUESTS } from "../../graphql/query";
import { AbsenceRequestCard } from "../AbsenceRequestCard/TeacherAbsenceRequestCard";
import { TEACHER_ABSENCE_REQUEST_RESPONSE } from "../../graphql/mutations";
import { TABLET } from "../../media";
import { useMediaQuery } from "react-responsive";
import { PageTitle } from "../PageTitle";
import { PageError } from "../PageError";
import { Loading } from "../Loading";
import { ConfirmModal } from "../ConfirmModal";

import TextField from "@mui/material/TextField";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import { forms } from "../../styles";
import { useAuth } from "../../context/AppProvider";

const stylingRowColor = (status) => {
  if (status === "PENDING") return "#ead885";
  if (status === "APPROVED") return "#79d8a5";
  if (status === "REJECTED") return "#ef8080";
};

const actionButtons = (status) => {
  if (status === "PENDING") return true;
  if (status === "APPROVED") return false;
  if (status === "REJECTED") return false;
};

export const TeachersAbsenceRequestsTable = () => {
  const isTablet = useMediaQuery(TABLET);

  const { user } = useAuth();

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("studentName") || "");

  const { data, loading, error, refetch } = useQuery(
    GET_TEACHER_STUDENTS_ABSENCE_REQUESTS,
    {
      variables: {
        yearGroupId: user.yearGroup.id,
      },
      pollInterval: 1000,
    }
  );

  const [executeTeacherResponse, { error: mutationError }] = useMutation(
    TEACHER_ABSENCE_REQUEST_RESPONSE
  );

  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState();
  const handleClose = () => setOpen(false);

  const onAccept = async (absenceRequestId, studentId) => {
    await executeTeacherResponse({
      variables: {
        input: {
          teacherResponse: "APPROVED",
          studentId: studentId,
          absenceRequestId: absenceRequestId,
        },
      },
    });

    refetch();
    setOpen(false);
  };

  const onReject = async (absenceRequestId, studentId) => {
    await executeTeacherResponse({
      variables: {
        input: {
          teacherResponse: "REJECTED",
          studentId: studentId,
          absenceRequestId: absenceRequestId,
        },
      },
    });

    refetch();
    setOpen(false);
  };

  let absenceRequestData = [];

  data?.teacherStudents
    ?.map((students) => {
      return students.absenceRequests.map((eachRequest) => {
        return {
          studentId: students.id,
          name: `${students.firstName} ${students.lastName}`,
          yearGroup: students.yearGroup.title,
          absenceRequestId: eachRequest.id,
          type: eachRequest.type,
          description: eachRequest.description,
          dateTime:
            parseISO(eachRequest.dateTime).toGMTString().split("GMT")[0] ===
            "Invalid Date"
              ? eachRequest.dateTime
              : parseISO(eachRequest.dateTime).toGMTString().split("GMT")[0],
          status: eachRequest.status,
        };
      });
    })
    .map((each) => {
      return absenceRequestData.push(...each);
    });

  const handleUserSearch = () => {
    return absenceRequestData.filter(
      (each) =>
        each.name.toLowerCase().includes(search.toLowerCase()) ||
        each.status.toLowerCase().includes(search.toLowerCase())
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (!loading && error) {
    return <PageError />;
  }

  return (
    <Stack spacing={2} sx={{ alignItems: isTablet ? "center" : "normal" }}>
      <PageTitle>Student Absence Requests</PageTitle>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Please accept or reject absence requests made.
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        Please note: Absence requests work on a traffic light system, once a
        decision has been made, this will remain on record.
      </Typography>
      <TextField
        color="warning"
        label="Filter by child name"
        variant="outlined"
        style={{
          marginBottom: 20,
          maxWidth: "250px",
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {!!mutationError && (
        <Typography
          variant="subtitle2"
          gutterBottom
          component="div"
          sx={forms.errorContainer}
        >
          Failed to respond to absence request, please try again.
        </Typography>
      )}

      {absenceRequestData.length === 0 && (
        <Alert severity="info">
          No absence requests have been made by any parents
        </Alert>
      )}

      {!isTablet && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{ backgroundColor: "#5BCCB6" }}>
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
                      fontWeight: "500",
                      textAlign: "center",
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
                    <TableCell align="center">{row.name} </TableCell>
                    <TableCell align="center">{row.yearGroup}</TableCell>
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.dateTime}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">
                      {actionButtons(row.status) && (
                        <>
                          <Button
                            onClick={() => {
                              // onAccept(row.absenceRequestId, row.studentId);
                              setSelectedRow({ row: row, onAccept: true });
                              setOpen(true);
                            }}
                          >
                            <CheckIcon sx={{ color: "#06a206" }} />
                          </Button>
                          <Button
                            onClick={() => {
                              setSelectedRow({ row: row, onAccept: false });
                              setOpen(true);
                              // onReject(row.absenceRequestId, row.studentId);
                            }}
                          >
                            <CloseIcon sx={{ color: "#c13030" }} />
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {isTablet && (
        <Box>
          {handleUserSearch().map((each, index) => {
            return (
              <AbsenceRequestCard
                {...each}
                colorStyling={stylingRowColor(each.status)}
                cardButtons={actionButtons(each.status)}
                onApproved={onAccept}
                onRejected={onReject}
                key={index}
              />
            );
          })}
        </Box>
      )}
      <ConfirmModal
        open={open}
        handleClose={handleClose}
        handleReject={onReject}
        handleConfirm={onAccept}
        selectedRow={selectedRow}
        title="Approve or Reject absence request"
        message="Are you sure you want to delete your absence request?"
      />
    </Stack>
  );
};
