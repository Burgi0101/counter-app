export const TodosComponent = React => {

    const createComponent = ({ todos, onAdd }) => {
        return (
            <div>
                <button onClick={onAdd}>Add Todo</button>
                <ul>
                    {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
                </ul>
            </div>
        );
    };

    return createComponent;
};