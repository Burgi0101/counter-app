import * as TodosActions from './actions';

export const TodosComponent = React => {

    const createComponent = ({ todos, store }) => {

        let input;

        return (
            <div>
                <input ref={node => { input = node }} />
                <button onClick={
                    event => {
                        event.preventDefault();

                        if (!input.value.trim()) {
                            return;
                        }
                        store.dispatch(TodosActions.addTodo(input.value));
                    }
                }>Add Todo</button>
                <ul>
                    {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
                </ul>
            </div>
        );
    };

    return createComponent;
};