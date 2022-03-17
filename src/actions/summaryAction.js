import axios from "axios";

export const GET_LIST_SUMMARY = "GET_LIST_SUMMARY";

export const getListSummary = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_SUMMARY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "https://6229a392be12fc4538a38c09.mockapi.io/dashboard",
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: GET_LIST_SUMMARY,
          payload: {
            loading: false,
            data: response.data,
            eerrorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_SUMMARY,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
