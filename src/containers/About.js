import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'react-pdfjs-multi/dist/react-pdfjs-multi.css';
import { Document, Page } from 'react-pdf';
import resume from '../data/resume.pdf'

class About extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    render() {
        const { pageNumber, numPages } = this.state;

        return(
            <div>
                <Grid container direction={"row"}>
                    <Grid item xs={4} style={{ width: "100%", height: "100%"} }>
                        <img style={{ width: '85%', height: 'auto'}}
                             src={require("../img/what-you-get-light.png")}
                             alt={"What you get"}
                        />
                    </Grid>
                    <Grid item md={8} style={{ width: "100%", height: "100%"}}>
                        <Document
                            file={resume}
                            onLoadSuccess={this.onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                        <p>Page {pageNumber} of {numPages}</p>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default About;