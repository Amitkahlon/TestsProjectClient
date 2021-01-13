import { Route, BrowserRouter as Router } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/admin" component={AdminPage} />
    </Router>
  );
}

export default App;
