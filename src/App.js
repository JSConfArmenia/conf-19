import React from 'react';
import './App.css';
import MainLayout from "./mainLayout";
import {Route, Switch} from "react-router-dom";
import NotFound from "./components/not_found";
import Home from "./components/home/home";
import ScrollButton from './components/scroll_to_top';


const App = () => {
    return (
        <>
            <MainLayout>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/not-found'} component={NotFound}/>
                </Switch>
            </MainLayout>
            <ScrollButton />
        </>
    );
};


export default App;
