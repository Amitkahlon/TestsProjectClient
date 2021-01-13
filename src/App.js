import { Route, BrowserRouter as Router } from 'react-router-dom';
import TestComp from './components/TestComp';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
    </Router>
  );
}

export default App;
