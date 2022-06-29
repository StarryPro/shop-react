// eslint-disable
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
// 메인바
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// 상품 카테고리
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// 상품 정보
import data from "./data";
// detail 컴포넌트
import Detail from "./routes/Detail.js";

function App() {
  let [shoeData] = useState(data);
  // 페이지 이동 도와주는 함수
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoeData.map((a, i) => {
                    return <Shoes shoeData={shoeData[i]} i={i} key={i} />;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />}>
          <Route path="location" element={<div>멤버임</div>} />
          <Route path="member" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Shoes(props) {
  return (
    <Col sm>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
        alt={"shoes" + (props.i + 1)}
      />
      <h4>{props.shoeData.title}</h4>
      <p>{props.shoeData.price}</p>
    </Col>
  );
}

export default App;
