import React from 'react';
import {
    Switch,
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Home from './Pages/Home';
import Personagens from './Pages/Personagens';
import Personagem from './Pages/Personagem';

function Routes(){
    return(                                                                                                                                  
       <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/personagens" >
                    <Personagens />
                </Route>
                <Route path="/personagem/:id">
                    <Personagem />
                </Route> 
            </Switch>
        </Router>
    );
}
export default Routes;