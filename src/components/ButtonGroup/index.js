import React from "react";
import RiskButton from "./../RiskButton";
import { useDispatch, useSelector } from 'react-redux';
import { setRiskLevel } from './../../actions/risk.action';
import "./ButtonGroup.scss";

const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ButtonGroup = () => {
  const dispatch = useDispatch();
  const riskLevel = useSelector((state) => state.risk.riskLevel);

  const onClickLevel = value => {
    dispatch(setRiskLevel(value));
  };

  return (
    <div className='content-group'>
      <div className='risk-label-select'>Please Select A Risk Level For Your Investment Portfolio</div>
      <div className='statistics'>
        <div>
          <p>Low</p>
        </div>
        <div>
          <p>High</p>
        </div>
      </div>
      <div>
        <ul className="group">
          {levels.map(item => {
            return (
              <RiskButton
                value={item}
                active={riskLevel && riskLevel.Risk === item}
                key={item}
                onClickLevel={onClickLevel}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ButtonGroup;
