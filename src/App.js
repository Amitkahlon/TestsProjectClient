import { Route, BrowserRouter as Router } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import QuestionPage from './pages/QuestionsPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/admin" component={AdminPage} />
      <Route exact path="/questions" component={QuestionPage} />
    </Router>
  );
}

export default App;
