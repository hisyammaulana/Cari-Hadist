import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/tailwind.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ListBooks } from "./components/ListBooks";
import { Search } from "./components/Search";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ListBooks} />
          <Route path="/search/:name" component={Search} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
