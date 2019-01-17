import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from "@material-ui/core/es/Button/Button";
import ProjectContainer from "../App";
import Typography from "@material-ui/core/es/Typography/Typography";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Constants
import ViewConstants from "../constants/ViewConstants";
import ExternalConstants from '../constants/ExternalConstants';

// Icon Imports
import Home from '@material-ui/icons/Home';
import AttachMoney from '@material-ui/icons/AttachMoney';
import School from '@material-ui/icons/School';
import Person from '@material-ui/icons/Person';
import HelpOutline from '@material-ui/icons/HelpOutline';
import {
    faGithub,
    faTwitter,
    faLinkedin,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: 'Purple'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    listButton: {
        width: "100%"
    }
});

class SideMenu extends Component {
    state = {
        open: true,
        view: <ProjectContainer category={"featured"} featured={true}/>
    };

    openExternal = url => {
        window.open(url, '_blank');
    };

    render() {
        const { classes, handleViewSwitch, content } = this.props;

        const buttonWidth = "100%";
        const iconSize = 24;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar >
                        <Typography style={{ width: "100%", alignItems: 'center' }}>
                            <Button onClick={() => this.openExternal(ExternalConstants.GITHUB)}
                                    style={{ color: 'white', fontSize: iconSize }}
                            >
                                <FontAwesomeIcon icon={faGithub}/>
                            </Button>
                            <Button onClick={() => this.openExternal(ExternalConstants.TWITTER)}
                                    style={{ color: 'white', fontSize: iconSize }}
                            >
                                <FontAwesomeIcon icon={faTwitter}/>
                            </Button>
                            <Button onClick={() => this.openExternal(ExternalConstants.YOUTUBE)}
                                    style={{ color: 'white', fontSize: iconSize }}
                            >
                                <FontAwesomeIcon icon={faYoutube}/>
                            </Button>
                            <Button onClick={() => this.openExternal(ExternalConstants.LINKEDIN)}
                                    style={{ color: 'white', fontSize: iconSize }}
                            >
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Button>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <List>
                        <Button onClick={() => handleViewSwitch(ViewConstants.HOME)} style={{ width: buttonWidth }}>
                            <ListItem>
                                <ListItemIcon><Home style={{color: 'Blue'}}/></ListItemIcon>
                                <ListItemText primary="Home"/>
                            </ListItem>
                        </Button>
                        <Button onClick={() => handleViewSwitch(ViewConstants.COMMERCIAL)}>
                            <ListItem>
                                <ListItemIcon><AttachMoney style={{color: 'LimeGreen'}}/></ListItemIcon>
                                <ListItemText primary="Commercial Projects"/>
                            </ListItem>
                        </Button>
                        <Button onClick={() => handleViewSwitch(ViewConstants.UNIVERSITY)} style={{ width: buttonWidth }}>
                            <ListItem>
                                <ListItemIcon><School style={{color: 'DarkOrange'}}/></ListItemIcon>
                                <ListItemText primary="University Projects"/>
                            </ListItem>
                        </Button>
                        <Button onClick={() => handleViewSwitch(ViewConstants.PERSONAL)} style={{ width: buttonWidth }}>
                            <ListItem>
                                <ListItemIcon><Person style={{color: 'MediumSlateBlue'}}/></ListItemIcon>
                                <ListItemText primary="Personal Projects"/>
                            </ListItem>
                        </Button>
                    </List>
                    <Divider />
                    <List>
                        <Button onClick={() => handleViewSwitch(ViewConstants.ABOUT)} style={{ width: buttonWidth }}>
                            <ListItem>
                                <ListItemIcon><HelpOutline style={{color: 'DarkGoldenrod'}}/></ListItemIcon>
                                <ListItemText primary="About Me"/>
                            </ListItem>
                        </Button>
                    </List>
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemText primary={<h3>External Links</h3>}/>
                        </ListItem>
                        <Button style={{ width: buttonWidth }} onClick={() =>
                            this.openExternal(ExternalConstants.GITHUB)}
                        >
                            <ListItem>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faGithub} style={{ fontSize: iconSize, color: "Purple"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Github"/>
                            </ListItem>
                        </Button>
                        <Button style={{ width: buttonWidth }} onClick={() =>
                            this.openExternal(ExternalConstants.TWITTER)}
                        >
                            <ListItem>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faTwitter} style={{ fontSize: iconSize, color: "DeepSkyBlue"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Twitter"/>
                            </ListItem>
                        </Button>
                        <Button style={{ width: buttonWidth }} onClick={() =>
                            this.openExternal(ExternalConstants.YOUTUBE)}
                        >
                            <ListItem>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faYoutube} style={{ fontSize: iconSize, color: "Red"}}/>
                                </ListItemIcon>
                                <ListItemText primary="YouTube"/>
                            </ListItem>
                        </Button>
                        <Button style={{ width: buttonWidth }} onClick={() =>
                            this.openExternal(ExternalConstants.LINKEDIN)}
                        >
                            <ListItem>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: iconSize, color: "DodgerBlue"}}/>
                                </ListItemIcon>
                                <ListItemText primary="LinkedIn"/>
                            </ListItem>
                        </Button>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    { content }
                </main>
            </div>
        );
    }
}

SideMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    handleViewSwitch: PropTypes.func.isRequired,
    content: PropTypes.array.isRequired
};

export default withStyles(styles)(SideMenu);