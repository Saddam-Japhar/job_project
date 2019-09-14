import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Login from './Login';
import Form from './Table';
import Table from './Table';
import store from './store/store';

class App extends Component {
    state = {  }
    render() {
        return (
            <Provider store={store}>

            <Router>
                <Route exact path="/" component={Login}/>
                <Route exact path="/table" component={Table}/>
            </Router>
            </Provider>
        );
    }
}

export default App;