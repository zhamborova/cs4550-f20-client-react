import React from 'react';
import "./CourseEditorComponent.style.css"
import ModuleContainer from "../../containers/ModuleContainer";
import LessonContainer from "../../containers/LessonContainer";
import TopicPillsContainer from "../../containers/TopicPillsContainer";

class CourseEditorComponent extends React.Component{

    render() {

        return (<div className="container-fluid p-0">
                <nav className="wbdv-nav navbar navbar-expand-md  navbar-dark">
                    <a className=" wbdv-course-title" href="#">WebDev 4550</a>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <LessonContainer className="mr-auto"/>

                </nav>


                <div className="row">
                    <nav className="wbdv-nav-module navbar navbar-expand-md navbar-dark col-sm-12 col-md-auto">
                        <button className="navbar-toggler wbdv-module-title " type="button" data-toggle="collapse"
                                data-target="#modules" aria-controls="modules"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span >Modules</span>
                        </button>
                        <ModuleContainer />

                    </nav>


                    <TopicPillsContainer className="col-8"/>
                </div>
            </div>


        )
    }

}

export default CourseEditorComponent;
