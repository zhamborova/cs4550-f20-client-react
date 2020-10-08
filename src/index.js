import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import * as serviceWorker from './serviceWorker';
import CourseManager from "./containers/CourseManagerContainer/CourseMangerContainer";
import CourseEditorComponent from "./components/CourseEditor/CourseEditorComponent";

import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Route exact path={"/"} component={CourseManager}/>
        <Route exact path={"/editor/:courseId"} component={CourseEditorComponent}/>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
