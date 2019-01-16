import React, { Component } from 'react';
import './App.css';
import SideMenu from "./components/SideMenu";
import ViewConstants from "./constants/ViewConstants";
import ProjectContainer from "./containers/ProjectContainer";
import About from './containers/About';
import Typography from "@material-ui/core/es/Typography/Typography";

class App extends Component {

    state = {
        currentView: ViewConstants.NONE,
        view: [
            <div key={Math.random()}>
                <h1>
                    Featured
                </h1>
                <Typography paragraph style={{ fontSize: 20}}>
                    My name is <b>Mads F. Sønderstrup</b> and this is my portfolio of projects that I've done over the years.
                    My primary skills lay in <b>programming</b>, but I also have extensive experience with <b>project management</b>.
                    Please feel free to use the menu on the left to find all of my projects, since what you see here is what I consider
                    my best work, so far. You may also find more detailed information about me in the <b>About Me</b> section,
                    including <b>printable resume</b> and <b>contact information</b>. At the top of this site, and in the menu,
                    you'll find links to other relevant external platforms.
                </Typography>
            </div>,
            <ProjectContainer key={Math.random()} featured={true} category={"featured"} />
        ]
    };

    handleViewSwitch = id => {
        if(id !== this.state.currentView) {
            let newView;
            switch(id) {
                case ViewConstants.COMMERCIAL:
                    newView = [
                        <div key={'commercial_div'}>
                            <h1>Commercial Projects</h1>
                            <Typography paragraph style={{ fontSize: 20}}>
                                In this section you will find all the commercial projects that I'm allowed to list. The
                                description of each project will state if someone was lead of the project, other than me
                                otherwise, all projects that doesn't have an explicit lead listed, was led by me.
                            </Typography>
                        </div>,
                        <ProjectContainer key={'commercial_container'} featured={false} category={"commercial"}/>
                    ];
                    break;
                case ViewConstants.UNIVERSITY:
                    newView = [<ProjectContainer key={'university_container'} featured={false} category={"university"} />];
                    break;
                case ViewConstants.PERSONAL:
                    newView = [<ProjectContainer key={'personal_container'} featured={false} category={"personal"} />];
                    break;
                case ViewConstants.ABOUT:
                    newView = [<About key={'about_container'}/>];
                    break;
                case ViewConstants.HOME:
                case ViewConstants.NONE:
                default:
                    newView = [
                        <div key={'home_div'}>
                            <h1>
                                Featured
                            </h1>
                            <Typography paragraph style={{ fontSize: 20}}>
                                My name is <b>Mads F. Sønderstrup</b> and this is my portfolio of projects that I've done over the years.
                                My primary skills lay in <b>programming</b>, but I also have extensive experience with <b>project management</b>.
                                Please feel free to use the menu on the left to find all of my projects, since what you see here is what I consider
                                my best work, to date. You may also find more detailed information about me in the <b>About Me</b> section,
                                including a <b>printable resume</b> and <b>contact information</b>. At the top of this site, and in the menu,
                                you'll also find links to other relevant external platforms.
                            </Typography>
                        </div>,
                        <ProjectContainer key={'home_container'} featured={true} category={"featured"} />
                    ];
                    break;
            }

            this.setState({
                currentView: id,
                view: newView
            });

            return this.state.view;
        }
    };

    render() {
        return (
            <div className="App">
                <SideMenu
                    handleViewSwitch={this.handleViewSwitch}
                    content={this.state.view}
                />
            </div>
        );
    }
}

export default App;