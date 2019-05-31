import {combineReducers} from 'redux';
import CounterReducer from '../screens/Counter/CounterReducer';
export default combineReducers({
    Counter : CounterReducer
})