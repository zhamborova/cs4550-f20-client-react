import React from 'react';
import ModuleList from "../../components/ModuleListComponent/ModuleListComponent";
import LessonTabs from "../../components/LessonTabsComponent/LessonTabs";
import TopicPills from "../../components/TopicPillsComponent/TopicPills";
import "./CourseEditor.style.css"

class CourseEditor extends React.Component{

    render() {

        return (<div className="container-fluid p-0">
                <nav className="wbdv-nav navbar navbar-expand-md  navbar-dark">
                    <a className=" wbdv-course-title" href="#">WebDev 4550</a>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <LessonTabs className="mr-auto"/>

                </nav>


                <div className="row">
                    <nav className="wbdv-nav-module navbar navbar-expand-md navbar-dark col-sm-12 col-md-auto">
                        <button className="navbar-toggler wbdv-module-title " type="button" data-toggle="collapse"
                                data-target="#modules" aria-controls="modules"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span >Modules</span>
                        </button>
                        <ModuleList />

                    </nav>


                    <TopicPills className="col-8"/>
                </div>
            </div>


        )
    }

}

export default CourseEditor;
