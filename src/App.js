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

import axios from "axios";

function App() {
  let [shoesData, setShoesData] = useState(data);
  let [count, setCount] = useState(2);
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
                  {shoesData.map((a, i) => {
                    return <Shoes shoesData={shoesData[i]} i={i} key={i} />;
                  })}
                </Row>
              </Container>
              <button
                onClick={() => {
                  // 로딩 중 UI 띄우기
                  axios
                    .get(
                      `https://codingapple1.github.io/shop/data${count}.json`
                    )
                    .then((결과) => {
                      setShoesData([...shoesData, ...결과.data]);
                      // 로딩 중 UI 지우기
                    })
                    .catch(() => {
                      // 로딩 중 UI 지우기
                    });

                  setCount(count + 1);
                  if (count > 4) {
                    alert("상품이 더 이상 존재하지 않습니다.");
                  }
                }}
              >
                버튼
              </button>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoesData={shoesData} />} />

        <Route path="/about" element={<About />}>
          <Route path="location" element={<div>멤버임</div>} />
          <Route path="member" element={<div>회사위치</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>첫 주문시 양배추즙 서비스</p>} />
        </Route>
      </Routes>
    </div>
  );
}
function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function About() {
  return (
    <div>
      <Outlet></Outlet>
      <h4>회사정보임</h4>
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
      <h4>{props.shoesData.title}</h4>
      <p>{props.shoesData.price}</p>
    </Col>
  );
}

export default App;
