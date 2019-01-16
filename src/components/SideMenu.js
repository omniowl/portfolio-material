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
import ViewConstants from "../constants/ViewConstants";

// Icon Imports
import Home from '@material-ui/icons/Home';
import AttachMoney from '@material-ui/icons/AttachMoney';
import School from '@material-ui/icons/School';
import Person from '@material-ui/icons/Person';
import HelpOutline from '@material-ui/icons/HelpOutline';
import Button from "@material-ui/core/es/Button/Button";
import ProjectContainer from "../App";
import Typography from "@material-ui/core/es/Typography/Typography";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
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

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false })
    };

    render() {
        const { classes, handleViewSwitch, content } = this.props;
        const { open } = this.state;

        const buttonWidth = "100%";

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar></Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div className={classes.toolbar} />
                    <Divider />
                    <List>
                        <Button onClick={() => handleViewSwitch(ViewConstants.HOME)} style={{ width: buttonWidth }}>
                            <ListItem>
                                <ListItemIcon><Home /></ListItemIcon>
                                <ListItemText primary="Home"/>
                            </ListItem>
                        </Button>
                        <Button onClick={() => handleViewSwitch(ViewConstants.COMMERCIAL)}>
                            <ListItem>
                                <ListItemIcon><AttachMoney /></ListItemIcon>
                                <ListItemText primary="Commercial Projects"/>
                            </ListItem>
                        </Button>
                        <Button onClick={() => handleViewSwitch(ViewConstants.UNIVERSITY)} style={{ width: buttonWidth }}>
                            <ListItem>
                                <ListItemIcon><School /></ListItemIcon>
                                <ListItemText primary="University Projects"/>
                            </ListItem>
                        </Button>
                        <Button onClick={() => handleViewSwitch(ViewConstants.PERSONAL)} style={{ width: buttonWidth }}>
                            <ListItem>
                                <ListItemIcon><Person /></ListItemIcon>
                                <ListItemText primary="Personal Projects"/>
                            </ListItem>
                        </Button>
                    </List>
                    <Divider />
                    <List>
                        <Button onClick={() => handleViewSwitch(ViewConstants.ABOUT)} style={{ width: buttonWidth }}>
                            <ListItem>
                                <ListItemIcon><HelpOutline /></ListItemIcon>
                                <ListItemText primary="About Me"/>
                            </ListItem>
                        </Button>
                    </List>
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemText primary={<h3>External Links</h3>}/>
                        </ListItem>
                        <Button style={{ width: buttonWidth }}>
                            <ListItem>
                                <ListItemIcon><HelpOutline /></ListItemIcon>
                                <ListItemText primary="Github"/>
                            </ListItem>
                        </Button>
                        <Button style={{ width: buttonWidth }}>
                            <ListItem>
                                <ListItemIcon><HelpOutline /></ListItemIcon>
                                <ListItemText primary="Twitter"/>
                            </ListItem>
                        </Button>
                        <Button style={{ width: buttonWidth }}>
                            <ListItem>
                                <ListItemIcon><HelpOutline /></ListItemIcon>
                                <ListItemText primary="LinkedIn"/>
                            </ListItem>
                        </Button>
                        <Button style={{ width: buttonWidth }}>
                            <ListItem>
                                <ListItemIcon><HelpOutline /></ListItemIcon>
                                <ListItemText primary="YouTube"/>
                            </ListItem>
                        </Button>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Typography>{ content }</Typography>
                </main>
            </div>
        );
    }
}

SideMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    handleViewSwitch: PropTypes.func.isRequired,
    content: PropTypes.object.isRequired
};

export default withStyles(styles)(SideMenu);