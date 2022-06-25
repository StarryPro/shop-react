import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// 메인바
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// 상품 카테고리
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// 상품 정보
import data from "./data";
import 작명 from "./component/shoes";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          <Col sm>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
              alt="shoes1"
            />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </Col>
          <Col sm>
            {" "}
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
              alt="shoes1"
            />
            <h4>상품명</h4>
            <p>상품경로</p>
          </Col>
          <Col sm>
            {" "}
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
              alt="shoes1"
            />
            <h4>상품명</h4>
            <p>상품경로</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
