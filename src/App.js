import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import QuestionPage from './pages/QuestionsPage';
import AddQuestionPage from './pages/AddQuestionPage';
import LoginPage from './pages/LoginPage';
import React, { useEffect, useContext } from 'react';
import { ContextValues } from './context/AppContext';
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
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/questions" component={QuestionPage} />
      <Route exact path="/addquestion" component={AddQuestionPage} />
      <Route exact path="/admin" 
        render={() => {
          if(!token) return <Redirect to='/login'/>
          return <AdminPage/>
        }} 
      />
    </Router>
  );
}

export default App;
