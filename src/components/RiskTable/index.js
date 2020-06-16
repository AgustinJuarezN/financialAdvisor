import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import "./RiskTable.scss";

export const labels = ["Bonds", "Large Cap", "Mid Cap", "Foreign", "Small Cap"];
export const riskLabel = "Risk";

const RiskTable = () => {
  const risk = useSelector(state => state.risk);

  return (
    <Table striped bordered  className="risk-table">
      <thead>
        <tr>
          <th>{riskLabel}</th>
          {labels.map(item => {
            return <th key={item}>{item} %</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {risk.riskTable.map(item => {
          return (
            <tr
              key={"items-rows-" + Math.random()}
              className={`${risk.riskLevel && risk.riskLevel.Risk === item[riskLabel] &&
                "active-row"}`}
            >
              {Object.keys(item).map(key => {
                return <td key={key}>{item[key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default RiskTable;
