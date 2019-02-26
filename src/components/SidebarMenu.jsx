import React from 'react';

import {MenuList, List, ListItem, MenuItem, ListItemIcon, ListItemText} from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import {Link, withRouter} from "react-router-dom";

import AddIcon from '@material-ui/icons/Add';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import BorderColor from '@material-ui/icons/BorderColor';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import DvrIcon from '@material-ui/icons/Dvr';


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class SideBarMenu extends React.Component {
    state = {
        openOrder: false,
        openSupport: false
    };

    handleOrderClick = () => {
        this.setState(state => ({ openOrder: !state.openOrder }));
    };

    handleSupportClick = () => {
        this.setState(state => ({ openSupport: !state.openSupport }));
    };

    render() {
        const { classes, location } = this.props;
        return (
            <MenuList
                component="nav"
                className={classes.root}
            >
                <MenuItem component={Link} to='/' button selected={location.pathname === '/'}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Dashboard"/>
                </MenuItem>
                <MenuItem button onClick={this.handleOrderClick}>
                    <ListItemIcon>
                        <BorderColor/>
                    </ListItemIcon>
                    <ListItemText inset primary="Orders"/>
                    {this.state.openOrder ? <ExpandLess/> : <ExpandMore/>}
                </MenuItem>
                <Collapse in={this.state.openOrder} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <MenuItem component={Link} to='/create-order' button className={classes.nested} selected={location.pathname === '/create-order'}>
                            <ListItemIcon>
                                <AddIcon />
                            </ListItemIcon>
                            <ListItemText inset primary="New order"/>
                        </MenuItem>
                        <MenuItem button className={classes.nested}>
                            <ListItemIcon>
                                <FormatListNumberedIcon />
                            </ListItemIcon>
                            <ListItemText inset primary="Bulk order"/>
                        </MenuItem>
                        <MenuItem button className={classes.nested}>
                            <ListItemIcon>
                                <ListAltIcon />
                            </ListItemIcon>
                            <ListItemText inset primary="All orders"/>
                        </MenuItem>
                        <MenuItem button className={classes.nested}>
                            <ListItemIcon>
                                <AutorenewIcon />
                            </ListItemIcon>
                            <ListItemText inset primary="Auto orders"/>
                        </MenuItem>
                    </List>
                </Collapse>
                <MenuItem button>
                    <ListItemIcon>
                        <LibraryBooks/>
                    </ListItemIcon>
                    <ListItemText inset primary="Blog"/>
                </MenuItem>
                <MenuItem button>
                    <ListItemIcon>
                        <DvrIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="News"/>
                </MenuItem>
                <MenuItem button onClick={this.handleSupportClick}>
                    <ListItemIcon>
                        <ContactSupportIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Support"/>
                    {this.state.openSupport ? <ExpandLess/> : <ExpandMore/>}
                </MenuItem>
                <Collapse in={this.state.openSupport} timeout="auto" unmountOnExit>
                    <MenuList component="div" disablePadding>
                        <MenuItem button className={classes.nested}>
                            <ListItemIcon>
                                <AddIcon />
                            </ListItemIcon>
                            <ListItemText inset primary="New ticket"/>
                        </MenuItem>
                        <MenuItem button className={classes.nested}>
                            <ListItemIcon>
                                <ListAltIcon />
                            </ListItemIcon>
                            <ListItemText inset primary="Archive"/>
                        </MenuItem>
                    </MenuList>
                </Collapse>

            </MenuList>
        );
    };
}

export default withStyles(styles)(withRouter(SideBarMenu));
