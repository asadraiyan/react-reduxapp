
import './App.css';

function App() {
  return (
    <div className="main-container">
      <div className="container">
        <h2>Increment/Decrement Counter</h2>
        <div className="counter">
          <button className='increment'>+</button>
          <input type="text" className='text' value={0} />
          <button className='decrement'>-</button>
        </div>
        <h3>Using React and Redux</h3>

      </div>
    </div>
  );
}

export default App;
