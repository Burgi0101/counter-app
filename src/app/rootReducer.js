import { combineReducers } from 'redux';
import todos from './components/todos/index';

const { TodosReducer } = todos;

export const rootReducer = combineReducers({
    TodosReducer
});