import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { rootReducer } from './app/rootReducer';
import todos from '../src/app/components/todos/index';

const { TodosActions, TodosComponent } = todos;
const store = createStore(rootReducer);

const onAdd = () => store.dispatch(TodosActions.addTodo('test'));

const render = () => {

    const Todos = TodosComponent(React);

    ReactDOM.render(
        <div>
            <Todos todos={store.getState()} onAdd={onAdd} />
        </div>,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();