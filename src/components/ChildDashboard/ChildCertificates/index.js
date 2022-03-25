import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ChildCertificateCard } from "./ChildCertificateCard";
import { useState } from "react";
import { modal } from "../../../styles";
import { MOBILE } from "../../../media";
import { useAuth } from "../../../context/AppProvider";

export const ChildCertificates = ({ childData, certificateImg }) => {
  const count = 500;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 10000,
  };

  const fire = (particleRatio, opts) => {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const { user } = useAuth();

  const isMobile = useMediaQuery(MOBILE);

  const isParent = () => {
    if (user.role === "parent") {
      return true;
    }
  };

  return (
    <Stack sx={{ width: "100%" }}>
      <Typography
        className="headingFont"
        variant="subtitle1"
        gutterBottom
        align="center"
      >
        Certificates:
      </Typography>
      {childData?.certificates?.length === 0 && (
        <>
          {isParent() === true ? (
            <Alert variant="outlined" severity="info">
              {childData.firstName} {childData.lastName} has no certificate yet.
            </Alert>
          ) : (
            <>
              <Alert variant="outlined" severity="info">
                {childData.firstName} {childData.lastName} has no certificate
                yet, click on the 'Create Certificate' button to submit one.
              </Alert>
              <Button
                sx={{ mt: 2, width: "100%" }}
                variant="contained"
                color="warning"
                size="small"
                onClick={() => {
                  navigate("/certificate/new", { replace: true });
                }}
              >
                Create Certificate
              </Button>
            </>
          )}
        </>
      )}
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-around"
        sx={{ width: "100%" }}
      >
        {childData?.certificates?.map((certificate, index) => {
          if (index + 1 === childData.certificates.length) {
            return (
              <ChildCertificateCard
                key={index}
                backgroundImage={certificateImg(certificate.certificateType)}
                studentName={certificate.name}
                message={certificate.message}
              />
            );
          } else {
            return <></>;
          }
        })}
      </Stack>
      {childData?.certificates?.length === 0 ? (
        <></>
      ) : (
        <Button
          sx={{ mt: 2, width: "100%" }}
          variant="contained"
          color="warning"
          size="small"
          onClick={handleOpen}
        >
          See all Certificates
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...modal.container,
            width: "fit-content",
            maxWidth: isMobile ? "60%" : "80%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {childData?.certificates?.map((certificate, index) => {
            return (
              <ChildCertificateCard
                key={index}
                backgroundImage={certificateImg(certificate.certificateType)}
                studentName={certificate.name}
                message={certificate.message}
              />
            );
          })}
        </Box>
      </Modal>
    </Stack>
  );
};
