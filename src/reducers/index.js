import { combineReducers } from "redux";
import SummaryReducer from "./summary";
import TransactionReducer from "./transaction";

export default combineReducers({
  SummaryReducer,
  TransactionReducer,
});
