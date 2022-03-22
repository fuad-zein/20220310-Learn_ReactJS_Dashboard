import axios from "axios";

export const GET_LIST_TRANSACTION = "GET_LIST_TRANSACTION";

export const getListTransaction = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_TRANSACTION,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "http://localhost:4000/order",
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: GET_LIST_TRANSACTION,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_TRANSACTION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
