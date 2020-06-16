import React, { useState } from "react";
import "./Calculator.scss";
import { Form } from "react-bootstrap";
import ActionButton from "./../ActionButton";
import { useSelector } from "react-redux";
import Recommended from "./../Recommended";
import { ToastsStore } from "react-toasts";
import { useHistory } from "react-router-dom";

const valueFields = ["Bonds", "Foreign", "Large Cap", "Mid Cap", "Small Cap"];

const Calculator = () => {
  let history = useHistory();
  const riskLevel = useSelector(state => state.risk.riskLevel);
  const [rebalance, setRebalance] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    let sum = 0;
    let rebalanceNew = [];
    const elements = event.target.elements;

    for (let i = 0; i < valueFields.length; i++) {
      sum += parseInt(event.target.elements[valueFields[i]].value);
    }

    if (riskLevel) {
      valueFields.forEach(item => {
        rebalanceNew.push({
          field: item,
          value: elements[item].value - sum * (riskLevel[`${item} %`] / 100)
        });
      });
    } else {
      ToastsStore.warning("You must select the risk level!");
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
    setRebalance(rebalanceNew);
  };

  return (
    <div className="content-calculator">
      <div>
        <Form className="form-calculator" onSubmit={e => handleSubmit(e)}>
          <Form.Row>
            <Form.Group controlId="Bonds">
              <Form.Label>Bonds</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Bonds ($)"
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="Large Cap">
              <Form.Label>Large Cap</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Large Cap ($)"
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="Mid Cap">
              <Form.Label>Mid Cap</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Mid Cap ($)"
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="Foreign">
              <Form.Label>Foreign</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Foreign ($)"
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="Small Cap">
              <Form.Label>Small Cap</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Small Cap ($)"
                required
              />
            </Form.Group>
          </Form.Row>
          <ActionButton value="Rebalance" disabled={false} />
        </Form>
      </div>
      {rebalance && rebalance.length ? (
        <div className="recommended-content">
          <span>Recommended Transfers</span>
          <Recommended rebalance={rebalance} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Calculator;
