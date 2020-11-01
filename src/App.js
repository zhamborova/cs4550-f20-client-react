import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import CourseManager from "./containers/CourseManagerContainer/CourseMangerContainer";
import CourseEditor from "./components/CourseEditorComponent/CourseEditor";

function App() {
  return (
      <BrowserRouter>
        <Route exact path={["/:view", "/"]} component={CourseManager}/>
        <Route exact path={
            [ "/editor/courses/:courseId",
              "/editor/courses/:courseId/modules/:moduleId",
              "/editor/courses/:courseId/modules/:moduleId/lessons/:lessonId",
              "/editor/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
            ]} component={CourseEditor}/>
      </BrowserRouter>
  );
}

export default App;
