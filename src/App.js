import logo from './logo.svg';
import './App.css';
import './components/VsjItem.css'
import './components/VsjCounter.css'
import VsjItem from './components/VsjItem';
import VsjCounter from './components/VsjCounter'
import Adder from './components/Adder'
import VsjForm from './components/VsjForm';
import SimpleIntrest from './components/SimpleIntrest';
import VsjMultipleObject from './components/VsjMultipleObject';
function App() {
  return (
    <div className="App">
      {/* <VsjItem name="Aman Smarty" age={16} address="SmartyNagar, Smartpura , UP"></VsjItem>
      <VsjForm/>
      <VsjMultipleObject></VsjMultipleObject> */}
      <SimpleIntrest></SimpleIntrest>
      <SimpleIntrest></SimpleIntrest>

      
    </div>
  );
}

export default App;
