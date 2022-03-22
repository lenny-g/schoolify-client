// backgroundColor: '#212227', dark grey navbar

export const forms = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    padding: "20px",
    borderRadius: "15px",
  },
  errorContainer: {
    marginTop: 2,
    color: "#d32f2f",
    textAlign: "center",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    padding: "20px",
    borderRadius: "25px",
    border: "4px solid #B7CBF8",
    flexBasis: "100%",
    flex: 1,
  },
  loadingButton: { marginTop: 3, marginBottom: 2 },
};

export const item = {
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    minWidth: "160px",
  },
  btn: {
    padding: "15px",
    minWidth: "200px",
    margin: "10px",
    borderRadius: "10px",
  },
  outerContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // padding: "1rem",
  },
  errorContainer: {
    marginTop: 2,
    color: "#d32f2f",
    textAlign: "center",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    padding: "20px",
    borderRadius: "25px",
    flexBasis: "100%",
    flex: 1,
  },
  comment: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "25px",
    flexBasis: "100%",
  },
  actionButtons: {
    marginBottom: 2,
    width: "6rem",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    borderRadius: "15px",
  },

  teacherComment: {
    width: "fitContent",
    backgroundColor: "orange",
    padding: "5px",
    margin: "2px",
    borderRadius: "10px",
    width: "fitContent",
  },
  parentComment: {
    width: "fitContent",
    backgroundColor: "yellow",
    padding: "5px",
    margin: "2px",
    borderRadius: "10px",
    width: "fitContent",
  },
  ChildCardFlex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  yellow: {
    justifyContent: "center",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "#b2e2d8",
  },
};

export const largeButtons = {
  container: {
    width: "10rem",
    height: "10rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "end",
    padding: "10px",
    m: "1rem",
    borderRadius: "25px",
    backgroundColor: "#82caec82",
  },
};

export const colors = {
  container: {
    margin: "10px",
    padding: "20px",
    borderRadius: "15px",
    flexBasis: "100%",
    flex: 1,
    backgroundColor: "#e9c6d66e",
  },
  blue: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    padding: "20px",
    borderRadius: "15px",
    flexBasis: "100%",
    flex: 1,
    backgroundColor: "#82caec82",
  },
  green: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    padding: "20px",
    borderRadius: "15px",
    flexBasis: "100%",
    flex: 1,
    backgroundColor: "#81c78469",
  },
  pink: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    padding: "20px",
    borderRadius: "15px",
    flexBasis: "100%",
    flex: 1,
    backgroundColor: "#e9c6d66e",
  },
  yellow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    padding: "20px",
    borderRadius: "15px",
    flexBasis: "100%",
    flex: 1,
    backgroundColor: "#f4e4715c",
  },
  purple: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    padding: "20px",
    borderRadius: "15px",
    flexBasis: "100%",
    flex: 1,
    backgroundColor: "#b7cbf88a",
  },
};
export const brand = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    width: "5rem",
  },
};

export const headers = {
  font: {
    textAlign: "center",
    fontFamily: "'Gochi Hand', cursive,",
    letterSpacing: "2px",
  },
};

export const getContainerStyles = (isMobile) => ({
  // margin: "2rem 0",
  borderRadius: "10px",
  boxShadow: isMobile
    ? "none"
    : "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
});

export const GREEN = "#b2e2d8";

// buttons #dd9148
