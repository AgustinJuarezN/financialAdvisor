import { SET_RISK_LEVEL } from './../types/risk.types';

export const setRiskLevel = (riskLevel) => {
    return {
        type: SET_RISK_LEVEL,
        payload: {
            riskLevel: riskLevel
        }
    }
}