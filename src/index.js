import React from 'react'
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';
import Header from  './components/common/header';
import Footer from './components/common/footer';
import Home from './components/home/home';
import './css/main.css';
import Law from './components/law/law';

// const createStoreWithMiddleware = compose(
//     applyMiddleware(reduxThunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
// )(createStore);
// const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
        <BrowserRouter>
            <div>
                <main>
                    <Header/>
                    <Switch>
                        <Route path="/law" component={Law}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                    <Footer/>
                </main>
            </div>
        </BrowserRouter>
    ,document.querySelector('.wrapper')
);

