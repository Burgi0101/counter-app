export const TodosComponent = React => {

    const createComponent = ({ todos, onAdd, textInput }) => {

        return (
            <div>
                <input />
                <button onClick={onAdd}>Add Todo</button>
                <ul>
                    {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
                </ul>
            </div>
        );
    };

    return createComponent;
};