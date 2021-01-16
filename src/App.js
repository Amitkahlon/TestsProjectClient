import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
<<<<<<< Updated upstream
=======
import QuestionPage from './pages/QuestionsPage';
import AddQuestionPage from './pages/AddQuestionPage';
import LoginPage from './pages/LoginPage';
<<<<<<< Updated upstream
=======
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ContextValues } from './context/AppContext';
>>>>>>> Stashed changes

>>>>>>> Stashed changes

function App() {
  const {token, setToken} = useContext(ContextValues)
  useEffect(() => {
    if(localStorage.getItem('token') !== null)
    {
      setToken(localStorage.getItem('token'))
    }
  })
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={HomePage} />
<<<<<<< Updated upstream
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/admin" component={AdminPage} />
<<<<<<< Updated upstream
=======
      <Route exact path="/questions" component={QuestionPage} />
      <Route exact path="/addquestion" component={AddQuestionPage} />
>>>>>>> Stashed changes
=======
      <Route exact path="/admin" 
        render={() => {
          if(!token) return <Redirect to='/login'/>
          return <AdminPage/>
        }} 
      />
      <Route exact path="/questions" component={QuestionPage} />
      <Route exact path="/addQuestion" component={AddQuestionPage} />
      <Route exact path="/login" component={LoginPage} />
>>>>>>> Stashed changes
    </Router>
  );
}

export default App;
