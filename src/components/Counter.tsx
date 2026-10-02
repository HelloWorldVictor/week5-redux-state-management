import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import type { AppDispatch } from "../store/store";
import { increment, decrement, reset } from "../store/actions/counterActions";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.counterContainer}>
      <h2>Counter: {count}</h2>
      <div className={styles.buttonRow}>
        <button type="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button type="button" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
