import recordsAPI from './recordsAPI';
const newLocal = 'GET_RECORDS';
const GET_RECORDS = newLocal;


export function getRecords() {
  return async function (dispatch) {
    const results = await recordsAPI.getRecords();
    dispatch({ type: GET_RECORDS, payload: results });
  };
}
