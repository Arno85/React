import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import counter from './store/reducers/counter';
import results from './store/reducers/results';

const rootReducer = combineReducers({
    counter,
    results,
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={ store } ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
