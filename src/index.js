import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { rootReducer } from './app/rootReducer';

import counter from '../src/app/components/counter/index';
import todos from '../src/app/components/todos/index';

const { TodosActions, TodosComponent } = todos;
const { CounterActions, CounterComponent } = counter;

const store = createStore(rootReducer);

const onAdd = () => store.dispatch(TodosActions.addTodo('test'));
const onIncrement = () => store.dispatch(CounterActions.increment());
const onDecrement = () => store.dispatch(CounterActions.decrement());

const render = () => {

    const Todos = TodosComponent(React);
    const Counter = CounterComponent(React);

    ReactDOM.render(
        <div>
            <Counter value={store.getState().CounterReducer} 
                     onIncrement={onIncrement} 
                     onDecrement={onDecrement} />

            <Todos todos={store.getState().TodosReducer} 
                   onAdd={onAdd} />
        </div>,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();