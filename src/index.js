import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import * as serviceWorker from './serviceWorker';
import App from "./App";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import moduleReducer from "./reducers/moduleReducer";
import lessonReducer from "./reducers/lessonReducer";
import topicReducer from "./reducers/topicReducer";
import courseReducer from "./reducers/courseReducer";
import widgetReducer from "./reducers/widgetReducer";


const rootReducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer:lessonReducer,
    topicReducer: topicReducer,
    courseReducer: courseReducer,
    widgetReducer: widgetReducer
})

const store = createStore(rootReducer)



ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
