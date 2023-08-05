import { Switch, Route } from "react-router-dom";
import DetailPage from "./components/Detail/DetailPage";
import FormPage from "./components/Form/FormPage";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <div className="route-container">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/pokedex" component={Home} />
          <Route exact path="/pokedex/detail/:id" component={DetailPage} />
          <Route exact path="/pokedex/create_pokemon" component={FormPage} />
        </div>

      </Switch>
    </div>
  );
}

export default App;
