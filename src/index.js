import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import todos from '../src/app/components/todos';

const { TodosActions, TodosComponent, TodosReducer } = todos;

const store = createStore(TodosReducer);

const Todos = TodosComponent(React);

const render = () => {
    ReactDOM.render(
        <Todos todos={store.getState()} onAdd={() => store.dispatch(TodosActions.addTodo('test'))} />,
        document.getElementById('root')
    );
};
store.subscribe(render);
render();



