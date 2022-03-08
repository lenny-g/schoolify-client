import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './components/AppRouter';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
} from '@apollo/client';

const client = new ApolloClient({
	uri: '"http://localhost:4000/"',
	cache: new InMemoryCache(),
});

function App() {
	return (
			<ApolloProvider client={client}>
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</ApolloProvider>
	);
}

export default App;
