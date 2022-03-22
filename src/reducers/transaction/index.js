import { GET_LIST_TRANSACTION } from "../../actions/TransactionAction";

const initialState = {
  listTransactionResult: false,
  listTransactionLoading: false,
  listTransactionError: false,
};

const TransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_TRANSACTION:
      return {
        ...state,
        listTransactionResult: action.payload.data,
        listTransactionLoading: action.payload.loading,
        listTransactionError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default TransactionReducer;
