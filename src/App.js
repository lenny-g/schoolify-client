import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./components/AppRouter";
import { AppProvider } from "./context/AppProvider";

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
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppProvider>
          <AppRouter />
        </AppProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};
