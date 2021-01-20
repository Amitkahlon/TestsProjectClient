import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ManageQuestionsPage from './pages/ManageQuestionsPage';
import AddQuestionPage from './pages/AddQuestionPage';
import LoginPage from './pages/LoginPage';
import React, { useEffect, useContext } from 'react';
import { ContextValues } from './context/AppContext';
import serverAccess from './api/serverAccess';
import QuestionPage from "./pages/QuestionPage";
import TestsPage from './pages/TestsPage';
import AddTestPage from './pages/AddTestPage';

function App() {
  const { token, setToken, setAdmin } = useContext(ContextValues)
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setToken(localStorage.getItem('token'))
      serverAccess.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
      serverAccess.get('/api/users/me').then(res => setAdmin(res.data.admin)).catch(err => console.log(err))
    }
  }, [setToken, setAdmin])

  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login"
        render={() => {
          if (token) return <Redirect to='/admin'/>
          return <LoginPage/>
        }}
      />
      <Route exact path="/questions"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <ManageQuestionsPage />
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
        }} />
      <Route exact path="/question"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <QuestionPage />
        }} />
        }}
      />
      <Route exact path="/tests"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <TestsPage />
        }}
      />
      <Route exact path="/tests/add"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <AddTestPage />
        }}
      />
    </Router>
  );
}

export default App;
