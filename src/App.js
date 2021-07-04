import React from "react";
import Card from "./Component/Card";
import { Switch, Link, Route } from "react-router-dom";
import background from "./Component/single_product_card.png";
import background2 from "./Component/product_overview.png";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <h3>Products</h3>
          <Card background={background} />
          <Link exact to="/overview">View more Details</Link>
        </Route>
        <Route exact path="/overview">
          <h3>Products Overview</h3>
          <Card background={background2} />
          <Link exact to="/">Back to Product</Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
