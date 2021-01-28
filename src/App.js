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
import ViewQuestionPage from "./pages/ViewQuestionPage";
import TestsPage from './pages/TestsPage';
import AddTestPage from './pages/AddTestPage';
import EditTestPage from './pages/EditTestPage';
import UserFormPage from './pages/UserFormPage';
import EditQuestionPage from './pages/EditQuestionPage';
import UserTestPage from './pages/UserTestPage';
import ReportsPage from './pages/ReportsPage';
import TestReportsPage from './pages/TestReportsPage';
import StudentReportsPage from './pages/StudentReportsPage';

function App() {
  const { token, setToken, setAdmin, user } = useContext(ContextValues)
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
          if (token) return <Redirect to='/admin' />
          return <LoginPage />
        }}
      />
      <Route exact path="/questions"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <ManageQuestionsPage />
        }} />
      <Route exact path="/questions/add"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <AddQuestionPage />
        }} />
      <Route exact path="/questions/edit"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <EditQuestionPage />
        }} />
      <Route exact path="/admin"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <AdminPage />
        }} />
      <Route exact path="/questions/view"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <ViewQuestionPage />
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
      <Route exact path="/tests/edit"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <EditTestPage />
        }}
      />
      <Route exact path="/sign/:id" component={UserFormPage}/>
      <Route exact path="/test"
        render={() => {
          if(!user) return <Redirect to='/'/>
          return <UserTestPage />
      />
      <Route exact path="/reports"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <ReportsPage />
        }}
      />
      <Route exact path="/reports/test"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <TestReportsPage />
        }}
      />
      <Route exact path="/reports/student"
        render={() => {
          if (!token) return <Redirect to='/login' />
          return <StudentReportsPage />
        }}
      />
    </Router>
  );
}

export default App;
