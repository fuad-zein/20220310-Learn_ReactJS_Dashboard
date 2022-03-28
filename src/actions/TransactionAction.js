import axios from "axios";

export const GET_LIST_TRANSACTION = "GET_LIST_TRANSACTION";
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const DETAIL_TRANSACTION = "DETAIL_TRANSACTION";
export const UPDATE_TRANSACTION = "UPDATE_TRANSACTION";

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

export const addTransaction = (data) => {
  return (dispatch) => {
    // dispatch({
    //   type: ADD_TRANSACTION,
    //   payload: {
    //     loading: true,
    //     data: false,
    //     errorMessage: false,
    //   },
    // });

    axios({
      method: "POST",
      url: "http://localhost:4000/order",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        console.log("post sukses");
        dispatch({
          type: ADD_TRANSACTION,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_TRANSACTION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteTransaction = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "DELETE",
      url: "http://localhost:4000/order/" + id,
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: DELETE_TRANSACTION,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_TRANSACTION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailTransaction = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_TRANSACTION,
      payload: {
        data: data,
      },
    });
  };
};

export const updateTransaction = (data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_TRANSACTION,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "PUT",
      url: "http://localhost:4000/order/" + data.id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        dispatch({
          type: UPDATE_TRANSACTION,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_TRANSACTION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
