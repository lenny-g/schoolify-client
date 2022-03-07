
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { AppRouter } from './components/AppRouter';

function App() {
  return (
<>
<BrowserRouter>
<Navbar/>
<AppRouter/>
</BrowserRouter>
</>
  );
}

export default App;
