import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import CourseManager from "./containers/CourseManagerContainer/CourseMangerContainer";
import CourseEditorComponent from "./components/CourseEditor/CourseEditorComponent";

function App() {
  return (
      <BrowserRouter>
        <Route exact path={"/"} component={CourseManager}/>
        <Route exact path={"/editor/:courseId"} component={CourseEditorComponent}/>
      </BrowserRouter>
  );
}

export default App;
