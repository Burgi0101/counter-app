export const CounterComponent = React => {

    const createComponent = ({ value, onIncrement, onDecrement }) => {
        return (
            <div>
                <h1>{value}</h1>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        );
    };

    return createComponent;
};