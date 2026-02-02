import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { decrement, increaseByFive, increment, increaseByAmount } from "./redux/features/counterSlice";

const App = () => {

  const [num, setNum] = useState(5);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className='container'>
      <h1>{count}</h1>
      <div>
        <button onClick={() => {
          dispatch(increment())
        }}>Increase</button>
        <button onClick={() => {
          dispatch(decrement())
        }}>Decrease</button>
      </div>

      {/* Input */}
      <input type="tel" value={num} onChange={(e) => {
        setNum(e.target.value)
      }} />

      {/* Advanced */}
      <div>
        <button onClick={() => {
          dispatch(increaseByFive())
        }}>Increase by 5</button>
        <button onClick={() => {
          dispatch(increaseByAmount(Number(num)))
        }}>Increase by Amount</button>
      </div>
    </div>
  )
}

export default App