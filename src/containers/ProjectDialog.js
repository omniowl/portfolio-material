import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Chip from "@material-ui/core/es/Chip/Chip";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import YouTube from 'react-youtube';
import axios from 'axios';

// Constants
import ChipConstants from '../constants/ChipConstants';
import CreditConstants from '../constants/CreditConstants';
import projectData from '../data/project-data';

const styles = theme => ({
    root: {
        height: "100%"
    },
    project: {
        height: "100%"
    },
    right: {
        height: "100%"
    },
    bottom: {
        width: "91%"
    },
    media: {
        height: "70%",
        width: "auto",
    },
    desc: {
        height: "30%"
    },
    chip: {
        margin: theme.spacing.unit,
    },
});

class ProjectDialog extends Component {
    state = {
        fullWidth: true,
        maxWidth: 'lg',
    };

    getGridItems = (header, data, chips) => {
        let list = [];
        let fontSize = 11;
        list.push(
            <h5 key={"header_0"}>{ header }</h5>
        );
        if(data.length > 0 && data[0] !== '') {
            if(chips !== undefined && true) {
                data.forEach((value, index) => {
                    let chipData = ChipConstants[value];
                    list.push(
                        <Grid item xs key={header+"_"+index}>
                            <Chip
                                key={header+"_chip_"+index}
                                style={{ fontSize: fontSize}}
                                avatar={
                                    <Avatar
                                        key={header+"_avatar_"+index}
                                        style={{ width: 24, height: 24 }}
                                        alt={chipData["avatar"]["alt"]}
                                        src={require("../img/avatars/"+chipData["avatar"]["img"])}
                                    />}
                                label={chipData["avatar"]["alt"]}
                                className={styles.chip}
                            />
                        </Grid>
                    );
                });
            } else {
                data.forEach((value, index) => {
                    list.push(
                        <Grid item xs key={header+"_"+index} style={{ fontSize: fontSize}}>
                            { value }
                        </Grid>
                    );
                });
            }
        } else {

            list.push(
                <Grid item xs key={header+"_0"} style={{ fontSize: fontSize}}>
                    None
                </Grid>
            );
        }
        return list;
    };

    getMedia = data => {
        let video = data["youtubeId"];

        if(video !== '') {
            return (
                <Grid item>
                    <YouTube key={"carousel_video_0"} videoId={data["youtubeId"]} />
                </Grid>
            );
        } else {
            return (<h2>No Media here (yet!)</h2>)
        }
    };

    getCredits = data => {
        let list = [];
        let fontSize = 12;
        if(data.length > 0 && data[0] !== '') {
            list.push(
                <h5 key={"credits_header"}>Additional Credits: </h5>
            );
            data.forEach((value, index) => {
                if(CreditConstants[value] !== '')
                {
                    list.push(
                        <Grid key={"grid_credits_" + index} item style={{ fontSize: fontSize }}>
                            <a key={"credits_link_" + index}
                               target="_blank"
                               rel="noopener noreferrer"
                               href={CreditConstants[value]}
                            >
                                { value }
                            </a>
                        </Grid>
                    )
                } else {
                    list.push(
                        <Grid key={"grid_credits_" + index} item style={{ fontSize: fontSize }}>
                            { value }
                        </Grid>
                    )
                }
            });
            return list;
        } else {
            return <></>;
        }
    };
    getDownloadButton = data => {
        let elem = <></>;
        if(data["link"] !== "") {
            const label = data["label"];
            const link = data["link"];
            const external = data["external"];
            if(external === 'true') {
                elem = (
                    <Button variant="contained" onClick={() => this.openExternal(link)}
                            style={{ color: 'white', backgroundColor: 'Green' }}
                    >
                        { label }
                    </Button>
                );
            } else {
                elem = (
                    <Button variant="contained" onClick={() => this.startDownload(link, 'zinder.zip')}
                            style={{ color: 'white', backgroundColor: 'Green' }}
                    >
                        Download
                    </Button>
                );
            }
        }

        return elem;
    };

    openExternal = link => {
        window.open(link, "_blank");
    };

    startDownload = (link, fileName) => {
        axios({
            url: link,
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
        });
    };

    getProjectData = (open, handleClose, dialogId) => {
        if(dialogId !== undefined && dialogId !== '') {
            const data = projectData[dialogId];
            return(
                <Dialog
                    fullWidth={this.state.fullWidth}
                    maxWidth={this.state.maxWidth}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="project-dialog-title"
                >
                    <DialogTitle id="project-dialog-title">
                        { data["name"] + " (" + data["date"] + ")" }
                    </DialogTitle>
                    <DialogContent>
                        <Grid container className={this.props.classes.root}>
                            <Grid item xs={2} className={this.props.classes.project}>
                                <Grid item xs={1}>
                                    { this.getGridItems("Platforms", data["platforms"].split(','), true) }
                                </Grid>
                                <Grid item xs={1}>
                                    { this.getGridItems("Engines", data["engines"].split(','), true) }
                                </Grid>
                                <Grid item xs={1}>
                                    { this.getGridItems("Frameworks", data["frameworks"].split(','), true) }
                                </Grid>
                                <Grid item xs={1}>
                                    { this.getGridItems("Languages", data["languages"].split(','), true) }
                                </Grid>
                                <Grid item xs={8}>
                                    { this.getGridItems("Roles", data["roles"].split(',')) }
                                </Grid>
                            </Grid>
                            <Grid item xs={10}>
                                <Grid container alignItems={"center"} direction="column" className={this.props.classes.right}>
                                    <Grid item className={this.props.classes.media}>
                                        { this.getMedia(data["media"]) }
                                    </Grid>
                                    <Grid item className={this.props.classes.desc}>
                                        <h3>Description</h3>
                                        <p style={{ fontSize: 14 }}>{ data["description"] }</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Grid container spacing={8} alignItems={"center"} className={this.props.classes.bottom}>
                            { this.getCredits(data["credits"].split(',')) }
                        </Grid>
                            { this.getDownloadButton(data["media"]["download"]) }
                        <Button variant="contained" onClick={handleClose}
                                style={{ color: 'white', backgroundColor: 'Red' }}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            );
        } else {
            return (<></>);
        }
    };

    render() {
        const { open, handleClose, dialogId } = this.props;
        return (
            <React.Fragment>
                { this.getProjectData(open, handleClose, dialogId) }
            </React.Fragment>
        );
    }
}

ProjectDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    dialogId: PropTypes.string.isRequired
};

export default withStyles(styles)(ProjectDialog);