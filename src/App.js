import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import EmailBuilderDemo from './Components/EmailBuilderDemo/EmailBuilderDemo';
import Home from './Components/Home/Home';

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/email-builder-demo">
                        <>
                            <EmailBuilderDemo/>
                        </>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>                
                </Switch>
            </BrowserRouter>
        </>
    );
}




export default App;
