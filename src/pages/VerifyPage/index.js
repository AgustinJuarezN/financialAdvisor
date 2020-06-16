import React from "react";
import { useSelector } from "react-redux";
import "./VerifyPage.scss";
import { Container, Row } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { labels, riskLabel } from "./../../components/RiskTable";
import Calculator from './../../components/Calculator';

const VerifyPage = () => {
  const riskLevel = useSelector(state => state.risk.riskLevel);

  return (
    <Container className="verify">
      <Row className="select">
        <div className="subtitle">
          <h2>Personalized Portfolio</h2>
        </div>
          <div className="level">
            {
              riskLevel ?
              <>
              <div>
              <span>Risk Level {riskLevel.Risk}</span>
            </div>
            <div className="level-table">
              <Table striped bordered className="risk-table">
                <thead>
                  <tr>
                    <th>{riskLabel}</th>
                    {labels.map(item => {
                      return <th key={item}>{item} %</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr key={"items-rows-" + Math.random()}>
                    {Object.keys(riskLevel).map(key => {
                      return <td key={key}>{riskLevel[key]}</td>;
                    })}
                  </tr>
                </tbody>
              </Table>
            </div>
              </>
              :
              <> <span>Risk Level: -</span> </>
            }
            
          </div>
        <div className='current'>
            <span>Please Enter Your Current Portfolio</span>
        </div>
        <Calculator />
      </Row>
    </Container>
  );
};

export default VerifyPage;
