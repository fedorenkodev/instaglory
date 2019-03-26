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
    withStyles, ListItemText, Button,
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
import Fade from "@material-ui/core/Fade";

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
    },

    notificationIcon: {
        marginRight: 0
    },

    notificationPopup: {
        zIndex: 10,
    },

    notificationViewAll: {
        display: 'block',
        width: '100%',
        background: 'none',
        fontSize: 12,
        padding: '4px 0',
        textAlign: 'center',
    },

    arrow: {
        position: 'absolute',
        top: -7,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 9px 7px 9px',
        borderColor: 'transparent transparent #ffffff transparent',
    },

    notificationItem: {
        '&:hover': {
            backgroundColor: '#eee',
        }
    },

    dense: {
        paddingTop: 8,
    },

    notifyType1: {
        color: 'red !important',
    },

    notifyType2: {
        color: 'blue',
    },

    notifyType3: {
        color: 'green',
    }
});

const notifications = [
    {
        id: 1,
        title: 'Welcome',
        text: 'Welcome to the Instaglory!',
        type: 1,
    },
    {
        id: 2,
        title: 'Some notification',
        text: 'Read more text about it.',
        type: 2,
    },
    {
        id: 3,
        title: 'Some notification 2',
        text: 'Read more text about it 2.',
        type: 3,
    },
    {
        id: 4,
        title: 'Some notification 3',
        text: 'Read more text about it 3.',
        type: 4,
    },
    {
        id: 5,
        title: 'Some notification 4',
        text: 'Read more text about it 4.',
        type: 4,
    },
];

class SideBar extends React.Component {
    state = {
        open: true,
        profileAnchorEl: null,
        notificationsAnchorEl: null,
        profileOpen: false,
        arrowRef: null,
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

    handleNotificationsOpen = (event) => {
        this.setState({
            notificationsAnchorEl: event.currentTarget
        });
    };

    handleNotificationsPopoverClose = () => {
        this.setState({
            notificationsAnchorEl: null
        });
    };

    handleArrowRef = node => {
        this.setState({
            arrowRef: node,
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

                        <Link to={"/create-transaction"} className={classes.balance}>
                            <Typography color="inherit" className={classes.balanceValue}>
                                144.33
                            </Typography>
                            <AttachMoneyIcon />
                        </Link>

                        <IconButton color="inherit" onClick={this.handleNotificationsOpen}>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>

                        <Popper
                            open={Boolean(this.state.notificationsAnchorEl)}
                            anchorEl={this.state.notificationsAnchorEl}
                            className={classes.notificationPopup}
                            disablePortal
                            placement="bottom"
                            transition
                            modifiers={{
                                flip: {
                                    enabled: true,
                                },
                                preventOverflow: {
                                    enabled: true,
                                    boundariesElement: 'scrollParent',
                                },
                                arrow: {
                                    enabled: true,
                                    element: this.state.arrowRef,
                                },
                            }}
                        >
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Paper >
                                        <span className={classes.arrow} ref={this.handleArrowRef} />
                                        <ClickAwayListener onClickAway={this.handleNotificationsPopoverClose}>
                                            <List dense className={classes.dense}>
                                                {
                                                    notifications.map((notification) => (
                                                            <ListItem
                                                                component={Link}
                                                                to={`/notification-view/${notification.id}`}
                                                                key={notification.id}
                                                                className={classes.notificationItem}>
                                                                <ListItemIcon className={classes.notificationIcon}>
                                                                    <SettingsIcon
                                                                        style={{
                                                                            color: notification.type === 1
                                                                                ? 'rgb(113, 106, 202)'
                                                                                : notification.type === 2
                                                                                    ? 'rgb(54, 163, 247)'
                                                                                    : notification.type === 3
                                                                                        ? 'rgb(52, 191, 163)'
                                                                                        : notification.type === 4
                                                                                            ? 'rgb(244, 81, 108)'
                                                                                            : ''
                                                                        }}
                                                                    />
                                                                </ListItemIcon>
                                                                <ListItemText
                                                                    primary={notification.title}
                                                                    secondary={notification.text ? notification.text : null}
                                                                />
                                                            </ListItem>
                                                        )
                                                    )
                                                }
                                                <ListItem >
                                                    <Button
                                                        component={Link} to='/notifications'
                                                        className={classes.notificationViewAll}
                                                    >
                                                        View all
                                                    </Button>
                                                </ListItem>
                                            </List>
                                        </ClickAwayListener>
                                    </Paper>
                                </Fade>
                            )}
                        </Popper>

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
                            placement="bottom-end"
                            modifiers={{
                                flip: {
                                    enabled: true,
                                },
                                preventOverflow: {
                                    enabled: true,
                                    boundariesElement: 'scrollParent',
                                },
                                arrow: {
                                    enabled: true,
                                    element: this.state.arrowRef,
                                },
                            }}
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    id="profile-list-grow"
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <span className={classes.arrow} ref={this.handleArrowRef} />
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