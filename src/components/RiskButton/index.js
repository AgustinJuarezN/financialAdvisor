import React from 'react';
import { useSelector } from 'react-redux';
import './RiskButton.scss';

const RiskButton = ({value, active, onClickLevel}) => {

    const risk = useSelector(state => state.risk);
    let riskSelected;

    if (risk) {
        riskSelected = risk.riskTable[value - 1];
    }

    return (
        <li className={`risk-button ${active && 'active-button'}`} onClick={() => {onClickLevel(riskSelected)}}>
            { value }
        </li>
    );
}

export default RiskButton;