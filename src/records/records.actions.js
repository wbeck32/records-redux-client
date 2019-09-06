import recordsAPI from './recordsAPI';
import { GET_RECORDS } from './records.constants';

export function getRecords() {
  return function (dispatch) {
    return recordsAPI.getRecords()
      .then(results => {
        dispatch({ type: GET_RECORDS, payload: results });
      });
  };
}
