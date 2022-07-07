import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let findShoes = props.shoesData.find(function (el) {
    return el.id === Number(id);
  });
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);
  let [load, setLoad] = useState("");

  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  });

  useEffect(() => {
    setLoad("end");
    return () => {
      setLoad("");
    };
  }, []);

  return (
    <div className={`container start ${load}`}>
      {alert ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes1.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findShoes.title}</h4>
          <p>{findShoes.content}</p>
          <p>{findShoes.price}</p>

          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(
                addItem({
                  id: findShoes.id,
                  name: findShoes.content,
                  count: findShoes.price,
                })
              );
              navigate("/cart");
            }}
          >
            주문하기
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}

function TabContent({ tab }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 10);

    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [tab]);

  return (
    <div className={`state ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}

export default Detail;
