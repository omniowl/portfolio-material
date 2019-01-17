import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/es/Typography/Typography";

class About extends Component {

    getAge = () => {
        const birthday = new Date(1991, 3, 30);
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    render() {
        return(
            <div>
                <Grid container xl={12} direction={"row"}>
                    <Grid item xs={5} style={{ width: "100%", height: "100%"} }>
                        <h1 align='left'>About Me</h1>
                        <Typography align="left" style={{ fontSize: 15}}>
                            My name is Mads Falkenberg Sønderstrup, I'm { this.getAge() } years old and from Denmark!
                            <br/>
                            Since I was a little kid I've wanted to work with <b>IT</b> and when I became a teenager,
                            <b> programming</b> was the main draw as I taught myself at the age of 13 to work not just with
                            <b> Lua</b>, but also <b>SQL</b> and later <b>Java</b> before attending a formal class where
                            I primarily worked with <b>C#</b> to get my Professions Bachelor Degree in Computer Science.<br/>
                            Following since I've worked with more languages and various technologies, as I am attending the
                            IT University of Copenhagen to get my Master's Degree in <b>Games</b>, expected graduation by August 2019.
                            What isn't listed below can be found in the printable Resume on the right.<br/><br/>
                            I can always be reached by <a href={'mailto:xenon373@gmail.com'}>email</a> or LinkedIn/Twitter,
                            which can be seen on the left in the menu or at the top of all pages for further questions or interest.
                        </Typography>
                        <h2 align='left'>At a Glance</h2>
                        <h3 align='left'>Core Competences</h3>
                        <p align='left'>Backend, Project Management, Game Mechanics</p>
                        <h3 align='left'>Verbal Languages</h3>
                        <p align='left'>Danish, English</p>
                        <h3 align='left'>Game Engines</h3>
                        <p align='left'>Unity, Unreal Engine 4, RPG Maker MV</p>
                        <h3 align='left'>Programming Languages</h3>
                        <p align='left'>C#, C++, Java, JavaScript, Python, Lua, SQL</p>
                        <h3 align='left'>Frameworks</h3>
                        <p align='left'>ARCore, AIY Google Voice, ReactJS, PyTorch</p>
                        <h3 align='left'>Platforms</h3>
                        <p align='left'>HTC Vive, Android, Windows, Raspberry PI, Web, Microsoft Server, AWS</p>
                    </Grid>
                    <Grid item md={7} style={{ width: "100%", height: "100%", backgroundColor: 'Green'}}>
                        <h1>RIGHT</h1>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default About;