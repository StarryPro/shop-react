import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail(props) {
  let { id } = useParams();
  let findShoes = props.shoesData.find(function (el) {
    return el.id === Number(id);
  });
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  });

  return (
    <div className="container">
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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
