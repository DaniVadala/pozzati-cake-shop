import './App.css';
import { NavBar } from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer title = {"Welcome to the best signature pastry"}/>
    </div>
  );
}

export default App;
    