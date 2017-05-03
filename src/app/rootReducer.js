import { combineReducers } from 'redux';
import todos from './components/todos/index';
import counter from './components/counter/index';

const { TodosReducer } = todos;
const { CounterReducer } = counter;

export const rootReducer = combineReducers({
    TodosReducer,
    CounterReducer
});