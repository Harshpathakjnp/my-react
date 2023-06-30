import logo from './logo.svg';
import './App.css';
import './components/VsjItem.css'
import './components/VsjCounter.css'
import VsjItem from './components/VsjItem';
import VsjCounter from './components/VsjCounter'
import Adder from './components/Adder'
function App() {
  return (
    <div className="App">
      <VsjItem name="Aman Smarty" age={16} address="SmartyNagar, Smartpura , UP"></VsjItem>
      {/* <VsjItem name="Shubham Smarty" age={14} address="Peelikothi, Smartpura , UP"></VsjItem>
      <VsjCounter></VsjCounter> */}
      <Adder></Adder>

      
    </div>
  );
}

export default App;
