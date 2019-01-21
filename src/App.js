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
                                otherwise, all projects that doesn't have an explicit lead listed, was led by me. This
                                section will also list commercial projects that failed.
                            </Typography>
                        </div>,
                        <ProjectContainer key={'commercial_container'} featured={false} category={"commercial"}/>
                    ];
                    break;
                case ViewConstants.GAMEJAM:
                    newView = [
                        <div key={'gamejam_div'}>
                            <h1>Game Jam Projects</h1>
                            <Typography paragraph style={{ fontSize: 20}}>
                                In this section I list the projects that I've managed to do in Game Jams. A Game Jam is
                                a short sprint (usually two to three days) where you or a group have to make a game given
                                a specific theme by those hosting the Game Jam. This puts severe restrictions on what you
                                can achieve and it also highly encourages experimentation.
                            </Typography>
                        </div>,
                        <ProjectContainer key={'gamejam_container'} featured={false} category={"game-jam"}/>
                    ];
                    break;
                case ViewConstants.UNIVERSITY:
                    newView = [
                        <div key={'home_div'}>
                            <h1>
                                University Projects
                            </h1>
                            <Typography paragraph style={{ fontSize: 20}}>
                                This section holds all of the projects I made during my time at the IT University of
                                Copenhagen. Every project will hold information about what class it was done in, the
                                context for doing it and other relevant information.
                            </Typography>
                        </div>,
                        <ProjectContainer key={'university_container'} featured={false} category={"university"} />];
                    break;
                case ViewConstants.PERSONAL:
                    newView = [
                        <div key={'home_div'}>
                            <h1>
                                Personal Projects
                            </h1>
                            <Typography paragraph style={{ fontSize: 20}}>
                                This section holds all of the projects I have worked on in my spare time or outside of
                                university/work. Most of these projects have been done solo and most of them have never been
                                finished but have dabbled in some concept or other to try and understand an underlying design,
                                concept, to just try something out or to understand a piece of technology/programming I haven't
                                used before.
                            </Typography>
                        </div>,
                        <ProjectContainer key={'personal_container'} featured={false} category={"personal"} />];
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