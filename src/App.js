import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { useMediaQuery } from "react-responsive";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter } from "react-router-dom";
import Box from "@mui/material/Box";

import { AppRouter } from "./components/AppRouter";
import { AppProvider } from "./context/AppProvider";
import { TopNavbar } from "./components/NavigationBar/TopNavbar";
import { SideNavbar } from "./components/NavigationBar/SideNavbar";
import { MOBILE } from "./media";

import "./App.css";

const link = createHttpLink({
  uri: "http://localhost:4000/",
  credentials: "same-origin",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

export const App = () => {
  const isMobile = useMediaQuery(MOBILE);

  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Box
          sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
        >
          {isMobile ? <TopNavbar /> : <SideNavbar />}
          <BrowserRouter>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <AppRouter />
            </Box>
          </BrowserRouter>
        </Box>
      </AppProvider>
    </ApolloProvider>
  );
};
