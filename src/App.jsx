import React from 'react';
import {withStyles} from '@material-ui/core'
import './App.css';
import SideBar from './components/SideBar';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import OrdersList from "./components/OrdersList";
import CreateOrder from "./components/CreateOrder";
import AutoOrdersList from "./components/AutoOrdersList";


const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
});

class App extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Router>
                <div className={classes.root}>
                    <CssBaseline />
                    <SideBar />
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/orders-list" component={OrdersList} />
                        <Route path="/create-order" component={CreateOrder} />
                        <Route path="/auto-orders-list" component={AutoOrdersList} />
                    </main>
                </div>
            </Router>
        );
    }
}
export default withStyles(styles)(App);
