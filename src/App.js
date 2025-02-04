import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import AdminPage from './pages/admin/AdminPage';
import HomePage from './pages/ui/HomePage';
import Navbar from './components/ui/Navbar';
import ManageQuestionsPage from './pages/questions/ManageQuestionsPage';
import AddQuestionPage from './pages/questions/AddQuestionPage';
import LoginPage from './pages/ui/LoginPage';
import React, { useEffect, useContext } from 'react';
import { ContextValues } from './context/AppContext';
import serverAccess from './api/serverAccess';
import ViewQuestionPage from "./pages/questions/ViewQuestionPage";
import TestsPage from './pages/tests/TestsPage';
import AddTestPage from './pages/tests/AddTestPage';
import EditTestPage from './pages/tests/EditTestPage';
import UserFormPage from './pages/ui/UserFormPage';
import EditQuestionPage from './pages/questions/EditQuestionPage';
import UserTestPage from './pages/ui/UserTestPage';
import ReportsPage from './pages/reports/ReportsPage';
import TestReportsPage from './pages/reports/TestReportsPage';
import StudentReportsPage from './pages/reports/StudentReportsPage';
import UserTestResults from './pages/ui/UserTestResults';
import ExamReportPage from './pages/reports/ExamReportPage';
import FieldsPage from './pages/fields/FieldsPage';

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
      <Route exact path="/sign/:id" component={UserFormPage} />
      <Route exact path="/test"
        render={() => {
          if (!user) return <Redirect to='/' />
          return <UserTestPage />
        }}
      />
      <Route exact path="/test/results"
        render={() => {
          if (!user || user.exam.grade < 0) return <Redirect to='/' />
          return <UserTestResults />
        }}
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
      <Route exact path="/reports/exam/:id"
        render={(props) => {
          if (!token) return <Redirect to='/login' />
          return <ExamReportPage {...props} />
        }}
      />
      <Route exact path='/fields'
        render={() => {
          if(!token) return <Redirect to='/login' />
          return <FieldsPage />
        }}
      />
    </Router>
  );
}

export default App;
