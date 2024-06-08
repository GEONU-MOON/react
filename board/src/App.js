import "./App.css";
import { useState } from "react";
import { Container, Nav, Navbar, Row, Col, Card } from "react-bootstrap";
import data from "./data.js";
import Write from "./routes/write.js";
import Edit from "./routes/edit.js";
import Detail from "./routes/detail.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { PencilSquare } from "react-bootstrap-icons";
import axios from "axios";

function App() {
  let [contents, setContents] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark" style={{ minHeight: "80px" }}>
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            React-Log
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/write">
              <PencilSquare /> 작성하기
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Row className="justify-content-center">
                {contents.map((a, i) => {
                  return <Lists contents={contents[i]}></Lists>;
                })}
              </Row>
              {/* <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((결과) => {
                      console.log(결과.data);
                      let copy = [...contents, ...결과.data];
                      setContents(copy);
                    });
                  // axios.post('/api/data', {data: contents})
                }} 
              >
                버튼
              </button> */}
            </Container>
          }
        />
        <Route path="/detail/:id" element={<Detail contents={contents} />} />
        <Route path="/write" element={<Write />} />
        <Route path="/edit/:id" element={<Edit contents={contents} />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

function Lists(props) {
  return (
    <Col xs={12} md={props.isThree ? 4 : 3}>
      <Link
        to={`/detail/${props.contents.id}`}
        className="text-decoration-none"
      >
        <Card className="dark-card">
          <Card.Body>
            <Card.Title>{props.contents.title}</Card.Title>
            <Card.Text>{props.contents.content}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default App;
