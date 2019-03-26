import React from 'react';

import {Grid, Typography, Paper, withStyles} from "@material-ui/core";

import CardItem from "./CardItem";
import NewsWidget from "./NewsWidget";
import OrdersTable from "./Orders/OrdersTable";

const styles = theme => ({
    ...theme.mixins.gutters(),
    root: {
        flexGrow: 1,
    },

    card: {
        maxWidth: 345,
    },

    cardTotal: {
        maxWidth: 300,
        height: 120
    },

    media: {
        height: 120,
    },

    totalsWrapper: {
        marginBottom: 30,
        marginTop: 15
    },

    totalOrdersCount: {
        color: "#716aca"
    },

    totalInProgressOrdersCount: {
        color: "#36a3f7"
    },

    totalBalanceCount: {
        color: "#34bfa3"
    },

    totalPartnerBalanceCount: {
        color: "#f4516c"
    },

    newsWrapper: {
        marginBottom: 30,
    },
});

class Dashboard extends React.Component {
    state = {
        totalCards: [
            {
                id: 1,
                title: 'Total orders',
                count: '21',
                hex: '#716aca',
                cardIcon: 'shopping_cart'
            },
            {
                id: 2,
                title: 'Orders in progress',
                count: '3',
                hex: '#36a3f7',
                cardIcon: 'query_builder'
            },
            {
                id: 3,
                title: 'Balance',
                count: '144.33$',
                hex: '#34bfa3',
                cardIcon: 'credit_card'
            },
            {
                id: 4,
                title: 'Partner balance',
                count: '44.31$',
                hex: '#f4516c',
                cardIcon: 'supervisor_account'
            },
        ],
        orders: [
            ["1", "Test Service 1", 500, "https://instagram.com/solvendofuit", 141.11, "27.02.2018", "pending"],
            ["2", "Test Service 2", 32, "https://instagram.com/solvendofuit", 113.12, "27.02.2018", "completed"],
            ["3", "Test Service 2", 111, "https://instagram.com/solvendofuit", 133.00, "27.02.2018", "in_progress"],
            ["4", "Test Service 4", 900, "https://instagram.com/solvendofuit", 132.01, "27.02.2018", "in_progress"],
            ["5", "Test Service 4", 600, "https://instagram.com/solvendofuit", 133.00, "24.02.2018", "in_progress"],
        ]
    };

    render() {
        const {classes} = this.props;
        return (
            <>
                <Grid container justify="center" className={classes.totalsWrapper} spacing={8}>
                    {
                        this.state.totalCards.map((card) =>
                            <Grid key={card.id} item xs={4} md={4} lg={3} xl={2}>
                                <CardItem
                                    title={card.title}
                                    count={card.count}
                                    hex={card.hex}
                                    cardIcon={card.cardIcon}
                                />
                            </Grid>)
                    }
                </Grid>
                <Grid container justify="flex-start" spacing={16}>
                    <Grid item className={classes.newsWrapper} xs={12}>
                        <Typography variant="h5" gutterBottom>
                            News
                        </Typography>
                        <Paper className={classes.root} elevation={2}>
                            <NewsWidget />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>
                            Last orders
                        </Typography>
                        <OrdersTable orders={this.state.orders}/>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withStyles(styles)(Dashboard);