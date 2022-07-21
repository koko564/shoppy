import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ProductList from './components/ProductList';
import DetailsProduct from './components/DetailsProduct';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
      <Route path="/" exact component={ProductList}/>
      <Route path="/product/:productId" exact component={DetailsProduct}/>
      <Route>404 NOT FOUND</Route>
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
