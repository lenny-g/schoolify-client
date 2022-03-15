import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { AppRouter } from "./components/AppRouter";
import { AppNavigationBar } from "./components/NavigationBar/AppNavigationBar";
import { AppProvider } from "./context/AppProvider";

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

function App() {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <AppNavigationBar />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppProvider>
    </ApolloProvider>
  );
}

export default App;
