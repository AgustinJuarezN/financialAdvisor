import React from "react";
import { useSelector } from "react-redux";
import DonutChart from "react-donut-chart";
import "./RiskDonutChart.scss";

const RiskDonutChart = () => {
  const risk = useSelector(state => state.risk);

  return (
    <div>
      {
        risk.riskLevel 
      ? <DonutChart
          data={[
            {
              label: "Bonds",
              value: risk.riskLevel["Bonds %"]
            },
            {
              label: "Large Cap",
              value: risk.riskLevel["Large Cap %"]
            },
            {
              label: "Mid Cap",
              value: risk.riskLevel["Mid Cap %"]
            },
            {
              label: "Foreign",
              value: risk.riskLevel["Foreign %"]
            },
            {
              label: "Small Cap",
              value: risk.riskLevel["Small Cap %"]
            }
          ]}
          legend={false}
          className='donut'
          colors={['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c']}
        />
      : <DonutChart
        data={[
          {
            label: "Select risk level",
            value: 0
          }]}
          legend={false}
          className='donut'
        />
      }
    </div>
  );
};

export default RiskDonutChart;
