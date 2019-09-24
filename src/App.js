import React from 'react';
import './App.css';
import MainLayout from "./mainLayout";
import {Route, Switch} from "react-router-dom";
import NotFound from "./components/not_found";
import Home from "./components/home/home";


const App = () => {
    return (
        <>
            <MainLayout>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/not-found'} component={NotFound}/>
                </Switch>
            </MainLayout>
        </>
    );
};


export default App;
