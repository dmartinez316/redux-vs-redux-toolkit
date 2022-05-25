import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented, incrementTwo } from "../actions";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incremented);
  const handleDecrement = () => dispatch(decremented);
  // const handleIncrementTwo = () => dispatch(incrementTwo);
  return (
    <div>
      <div className="countContainer">
        <h4>Count is: {count}</h4>
      </div>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
      {/* <button type="button" onClick={handleIncrementTwo}>
        Increment Two
      </button> */}
    </div>
  );
};
