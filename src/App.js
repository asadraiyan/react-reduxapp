
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from './actions';

function App() {

  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch()
  return (
    <div className="main-container">
      <div className="container">
        <h2>Increment/Decrement Counter</h2>
        <div className="counter">
          <button className='increment' onClick={() => dispatch(incNumber(5))}>+</button>
          <input type="text" className='text' value={myState} />
          <button className='decrement' onClick={() => dispatch(decNumber(3))}>-</button>
        </div>
        <h3>Using React and Redux</h3>

      </div>
    </div>
  );
}

export default App;
