const GET_RECORDS = 'GET_RECORDS';

export default function recordsReducer(state = [], { type, payload }) {

  switch (type) {
    case GET_RECORDS:
      return payload;
    default:
      // console.log('default: ', state, payload);
      return state;
  }
}
