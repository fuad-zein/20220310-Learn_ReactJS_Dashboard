import {
  GET_LIST_TRANSACTION,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  DETAIL_TRANSACTION,
  UPDATE_TRANSACTION,
} from "../../actions/TransactionAction";

const initialState = {
  listTransactionResult: false,
  listTransactionLoading: false,
  listTransactionError: false,

  addTransactionResult: false,
  addTransactionLoading: false,
  addTransactionError: false,

  deleteTransactionResult: false,
  deleteTransactionLoading: false,
  deleteTransactionError: false,

  detailTransactionResult: false,

  updateTransactionResult: false,
  updateTransactionLoading: false,
  updateTransactionError: false,
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

    case ADD_TRANSACTION:
      return {
        ...state,
        addTransactionResult: action.payload.data,
        addTransactionLoading: action.payload.loading,
        addTransactionError: action.payload.errorMessage,
      };

    case DELETE_TRANSACTION:
      return {
        ...state,
        deleteTransactionResult: action.payload.data,
        deleteTransactionLoading: action.payload.loading,
        deleteTransactionError: action.payload.errorMessage,
      };

    case DETAIL_TRANSACTION:
      return {
        ...state,
        detailTransactionResult: action.payload.data,
      };

    case UPDATE_TRANSACTION:
      return {
        ...state,
        updateTransactionResult: action.payload.data,
        updateTransactionLoading: action.payload.loading,
        updateTransactionError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default TransactionReducer;
