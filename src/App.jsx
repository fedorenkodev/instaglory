import React from 'react';
import {withStyles} from '@material-ui/core'
import './App.css';
import SideBar from './components/SideBar';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import OrdersList from "./components/Orders/OrdersList";
import CreateOrder from "./components/Orders/CreateOrder";
/*import CreateAutoOrder from "./components/CreateAutoOrder";
import AutoOrdersList from "./components/AutoOrdersList";*/
import ServicesList from "./components/Services/ServicesList";
import TransactionsList from "./components/Transactions/TransactionsList";
import CreateTransaction from "./components/Transactions/CreateTransaction";
import RedirectPage from "./components/RedirectPage";
import TicketsList from "./components/Tickets/TicketsList";
import CreateTicket from "./components/Tickets/CreateTicket";
import Faq from "./components/Pages/Faq";
import TicketView from "./components/Tickets/TicketView";
import Agreement from "./components/Pages/Agreement";
import NotificationsList from "./components/Notifications/NotificationsList";
import NotificationView from "./components/Notifications/NotificationView";


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

                        <Route path="/orders" component={OrdersList} />
                        <Route exact path="/create-order" component={CreateOrder} />
                        <Route path="/create-order/:groupId/:serviceId" component={CreateOrder} />

                        <Route path="/transactions" component={TransactionsList} />
                        <Route exact path="/create-transaction" component={CreateTransaction} />

                        <Route path="/services" component={ServicesList} />

                        <Route path="/tickets" component={TicketsList} />
                        <Route path="/create-ticket" component={CreateTicket} />
                        <Route path="/ticket-view" component={TicketView} />

                        <Route path="/notifications" component={NotificationsList} />
                        <Route path="/notification-view/:id" component={NotificationView} />

                        <Route exact path="/redirect" component={RedirectPage} />

                        <Route exact path="/faq" component={Faq} />
                        <Route exact path="/agreement" component={Agreement} />

                        {/*<Route path="/auto-orders-list" component={AutoOrdersList} />
                        <Route path="/create-auto-order" component={CreateAutoOrder} />*/}
                    </main>
                </div>
            </Router>
        );
    }
}
export default withStyles(styles)(App);
