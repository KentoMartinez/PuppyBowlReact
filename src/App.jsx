import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerDetails from "./Components/PlayerDetails";
import Welcome from "./Components/Welcome";
import NewPlayerForm from "./Components/NewPlayerForm";
import Teams from "./Components/Teams";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FakeTabs from "./Components/FakeTabs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
        <Navbar  fixed="top" bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="justify-content-between">
              <Navbar.Brand href="/" id="main-header">
                PUPPY BOWL 2023
              </Navbar.Brand>
              <Nav.Link href="/teams">Teams</Nav.Link>
              <Nav.Link href="/newplayerform">Forms</Nav.Link>
              <Nav.Link href="/fakelink">Games</Nav.Link>
              <Nav.Link href="/fakelink">Tickets</Nav.Link>
              <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
            </Nav>
          </Container>
          </Navbar>
        </div>
        <Routes id="main-section">
          <Route path="/" element={<Welcome />} />
          <Route path="/players/:id" element={<PlayerDetails />} />
          <Route path="/newplayerform" element={<NewPlayerForm />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/fakelink" element={<FakeTabs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
