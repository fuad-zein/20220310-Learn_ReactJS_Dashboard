import { GET_LIST_SUMMARY } from "../../actions/SummaryAction";

const initialState = {
  getListSummaryResult: false,
  getListSummaryLoading: false,
  getListSummaryError: false,
};

const SummaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_SUMMARY:
      return {
        ...state,
        getListSummaryResult: action.payload.data,
        getListSummaryLoading: action.payload.loading,
        getListSummaryError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default SummaryReducer;
