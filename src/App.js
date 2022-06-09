import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home.js";
import Detail from "./views/Detail.js";
import Register from "./views/Register.js";
import About from "./views/About.js";
import ErrorPage from "./views/ErrorPage.js";
import Nav from "./components/Nav.js";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { app } from "./config";
import { Container } from "react-bootstrap";
import Login from "./views/Login";
import MyRack from "./views/MyRack";

function App() {
  const year = new Date().getFullYear().toString();

  return (
    <Container className="App">
      <AuthContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="detail/:bookid"
              element={
                <ProtectedRoute>
                  <Detail />
                </ProtectedRoute>
              }
            />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route
              path="myrack"
              element={
                <ProtectedRoute>
                  <MyRack />
                </ProtectedRoute>
              }
            />
            <Route path="about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </AuthContextProvider>

      <footer className="pt-3">© {year} Marta Podziewska</footer>
    </Container>
  );
}

export default App;
