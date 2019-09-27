import React from 'react';
import routes from "./routes";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Pittsburgh from "./pages/pittsburgh/pittsburgh"; 


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.landing} component={Landing} />
          <Route exact path={routes.pittsburgh} component={Pittsburgh} />
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
