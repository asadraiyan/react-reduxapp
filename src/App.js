import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, multNumber, divNumber } from './actions';

function App() {

  const myState = useSelector((state) => state.changeNumber)
  const myOtherState = useSelector((state) => state.multdivNumber)
  const dispatch = useDispatch()
  return (
    <div className="main-container">
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <div className="counter">
          <button className='increment' onClick={() => dispatch(incNumber(1))}>+</button>
          <input type="text" className='text' value={myState} />
          <button className='decrement' onClick={() => dispatch(decNumber(1))}>-</button>
        </div>
        <h2>Using React and Redux</h2>
        <h1>Multiplication/Division Counter</h1>
        <div className="counter">
          <button className='increment' onClick={() => dispatch(divNumber(5))}>/</button>
          <input type="text" className='text' value={myOtherState} />
          <button className='decrement' onClick={() => dispatch(multNumber(10))}>x</button>
        </div>
        <h2>Using React and Redux</h2>

      </div>
    </div>
  );
}

export default App;
