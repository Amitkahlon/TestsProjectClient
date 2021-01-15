import { Route, BrowserRouter as Router } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
<<<<<<< Updated upstream
=======
import QuestionPage from './pages/QuestionsPage';
import AddQuestionPage from './pages/AddQuestionPage';
import LoginPage from './pages/LoginPage';

>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/admin" component={AdminPage} />
<<<<<<< Updated upstream
=======
      <Route exact path="/questions" component={QuestionPage} />
      <Route exact path="/addquestion" component={AddQuestionPage} />
>>>>>>> Stashed changes
    </Router>
  );
}

export default App;
