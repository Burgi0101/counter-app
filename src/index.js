import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { CounterReducer } from './app/store/reducers/todo/counter.reducer';
import { CounterComponent } from './app/components/counter/counter.component';

const store = createStore(CounterReducer);

let Counter = CounterComponent(React);

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();



