import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PDF from 'react-pdf-js';
import Button from "@material-ui/core/es/Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resume from '../static/ResumeBase64';

// Import Icons
import { faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Typography from "@material-ui/core/es/Typography/Typography";


class About extends Component {
    state = {
        page: 0,
        pages: 0
    };

    onDocumentComplete = (pages) => {
        this.setState({ page: 1, pages });
    };

    handlePrevious = () => {
        this.setState({ page: this.state.page - 1 });
    };

    handleNext = () => {
        this.setState({ page: this.state.page + 1 });
    };

    renderPagination = () => {
        const { page, pages } = this.state;
        const arrowSize = {
            fontSize: 32
        }
        //let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
        let previousButton = (
            <Button style={arrowSize} className={'previous'} onClick={this.handlePrevious}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </Button>);
        if (page === 1) {
            previousButton = (
                <Button style={arrowSize} className={'previous'} onClick={this.handlePrevious} disabled>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Button>);
        }
        let nextButton = (
            <Button style={arrowSize} className={'next'} onClick={this.handleNext}>
                <FontAwesomeIcon icon={faArrowRight}/>
            </Button>);
        if (page === pages) {
            nextButton = (
                <Button style={arrowSize} className={'next'} onClick={this.handleNext} disabled>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </Button>);
        }
        return (
            [previousButton,nextButton]
        );
    };

    render() {
        let previous = null;
        let next = null;
        if (this.state.pages) {
            let buttons = this.renderPagination();
            previous = buttons[0];
            next = buttons[1];
        }
        return(
            <div>
                <Grid container direction={"row"}>
                    <Grid item xs={4} style={{ width: "100%", height: "100%"} }>
                        <img style={{ width: '85%', height: 'auto'}}
                             src={require("../img/what-you-get-light.png")}
                             alt={"What you get"}
                        />
                    </Grid>
                    <Grid item lg={8} style={{ width: '100%', height: '95%'}}>
                        <Typography style={{ fontWeight: 'bold', fontSize: 24}}>
                            You can download my resume <a href={Resume} download={'Resume.pdf'} target={'_blank'}>here</a>
                        </Typography>
                        <Grid container alignItems={'center'} spacing={0}>
                            <Grid item xs={2}>
                                {previous}
                            </Grid>
                            <Grid item xs={8}>
                                <PDF
                                    file={Resume}
                                    onDocumentComplete={this.onDocumentComplete}
                                    page={this.state.page}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                {next}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default About;