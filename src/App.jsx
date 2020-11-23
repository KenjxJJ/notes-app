import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import SinglePageNote from "./pages/SingleNotePage";
import LoginPage from "./pages/LoginPage";
import AddNewNotePage from "./pages/AddNewNotePage";
import Footer from "./components/Footer";
import Page404Error from "./pages/Page404Error";
import AuthContextProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import EditNotePage from './pages/EditNotePage';

import NotesContextProvider from "./contexts/NotesContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <>
    <ThemeContextProvider>
      <AuthContextProvider>
        <NotesContextProvider>
          <Router>
            <Navigation />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/note" component={SinglePageNote} />
              <Route path="/edit/:id" component={EditNotePage} />
              <ProtectedRoute path="/addNewNote" component={AddNewNotePage} />
              <ProtectedRoute path="/profile" component={ProfilePage} />
              <Route component={Page404Error} />
            </Switch>
          </Router>
        </NotesContextProvider>
      </AuthContextProvider>
      <Footer />
      </ThemeContextProvider>
    </>
  );
}

export default App;
