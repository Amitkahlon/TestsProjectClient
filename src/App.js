import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import QuestionPage from './pages/QuestionsPage';
import AddQuestionPage from './pages/AddQuestionPage';
import LoginPage from './pages/LoginPage';
import React, { useEffect, useContext } from 'react';
import { ContextValues } from './context/AppContext';
<<<<<<< Updated upstream
=======
import serverAccess from './api/serverAccess';
>>>>>>> Stashed changes

function App() {
  const { token, setToken, setAdmin } = useContext(ContextValues)
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setToken(localStorage.getItem('token'))
      serverAccess.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
      serverAccess.get('/api/users/me').then(res => setAdmin(res.data.admin)).catch(err => console.log(err))
    }
  }, [])
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/questions"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <QuestionPage />
        }} />
      <Route exact path="/addquestion"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <AddQuestionPage />
        }} />
      <Route exact path="/admin"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <AdminPage />
        }}
      />
    </Router>
  );
}

export default App;
