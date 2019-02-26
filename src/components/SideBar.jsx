import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Badge,
    Drawer,
    Divider,
    withStyles, ListItemText,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import classNames from 'classnames';

import MenuIcon from '@material-ui/icons/Menu';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

import SidebarMenu from "./SidebarMenu";
import Popper from "@material-ui/core/Popper/Popper";
import Grow from "@material-ui/core/Grow/Grow";
import Paper from "@material-ui/core/Paper/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import Avatar from "@material-ui/core/Avatar/Avatar";
import {Link} from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },

    balance: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: '10px',
        alignItems: 'center',
        color: '#fff',
        textDecoration: 'none'
    },

    balanceValue: {
        fontSize: '1rem',
    },

    notification: {
        marginLeft: 'auto',
    },

    title: {
        flexGrow: 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },

    avatar: {
        marginLeft: "20px",
        cursor: "pointer"
    },

    avatarShift: {
        marginRight: "24px",
    }
});

class SideBar extends React.Component {
    state = {
        open: true,
        profileAnchorEl: null,
        profileOpen: false
    };

    handleDrawerOpenClose = ()  => {
        this.setState(state => ({ open: !state.open }));
    };

    handleProfileOpen = (event) => {
        this.setState({
            profileAnchorEl: event.currentTarget
        });
    };

    handleProfilePopoverClose = () => {
        this.setState({
            profileAnchorEl: null
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <>
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                    })}
                >
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpenClose}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Link to={"/"} className={classes.balance}>
                            <Typography color="inherit" className={classes.balanceValue}>
                                144.33
                            </Typography>
                            <AttachMoneyIcon />
                        </Link>

                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Avatar
                            className={classNames(classes.avatar, {
                                [classes.avatarShift]: !this.state.open
                            })}
                            onClick={this.handleProfileOpen}>DF</Avatar>
                        <Popper
                            open={Boolean(this.state.profileAnchorEl)}
                            anchorEl={this.state.profileAnchorEl}
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    id="menu-list-grow"
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleProfilePopoverClose}>
                                            <List>
                                                <ListItem button>
                                                    <ListItemIcon>
                                                        <SettingsIcon />
                                                    </ListItemIcon>
                                                    <ListItemText inset primary="Settings"/>
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemIcon>
                                                        <ExitToAppIcon />
                                                    </ListItemIcon>
                                                    <ListItemText inset primary="Logout"/>
                                                </ListItem>
                                            </List>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>

                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open,
                        }),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        <Typography variant="h6" color="inherit" noWrap>
                            Instaglory
                        </Typography>
                    </div>
                    <Divider />
                    <SidebarMenu />
                </Drawer>
            </>
        );
    }
}

export default withStyles(styles, { withTheme: true })(SideBar);