import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

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
                <Grid container lg={12} direction={"row"}>
                    <Grid item xs={4} style={{ width: "100%", height: "100%"} }>
                        <img style={{ width: '85%', height: 'auto'}}
                             src={require("../img/what-you-get-light.png")}
                             alt={"What you get"}
                        />
                    </Grid>
                    <Grid item md={8} style={{ width: "100%", height: "100%", backgroundColor: 'Green'}}>
                        <h1>RIGHT</h1>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default About;