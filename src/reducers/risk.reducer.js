import { SET_RISK_LEVEL } from "./../types/risk.types";
import { riskTable } from "./../data/riskTable_mock";

const initialState = {
  riskTable: riskTable,
  riskLevel: null
};

export function risk(state = initialState, action) {
  switch (action.type) {
    case SET_RISK_LEVEL:
      return {
        ...state,
        riskLevel: action.payload.riskLevel
      };
      
    default:
      return state;
  }
}
