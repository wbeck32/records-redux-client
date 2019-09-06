import recordsReducer from './../records/records.reducer';
import {combineReducers} from 'redux';

export default combineReducers({records : recordsReducer});
