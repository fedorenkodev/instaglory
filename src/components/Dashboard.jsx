import React from 'react';

import {Grid, Typography, Paper, Table, TableHead, TableBody, TableRow, TableCell, withStyles} from "@material-ui/core";

import CardItem from "./CardItem";
import NewsWidget from "./NewsWidget";

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
        marginBottom: 60
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

    table: {
        minWidth: 700,
    },
});

const rows = [
    {
        id: 1,
        service: 'Free fast likes',
        status: 'In progress',
        link: 'https://instagram.com/solvendofuit',
        date: '25.02.2018'
    },
    {
        id: 2,
        service: 'Free fast subscribers',
        status: 'Completed',
        link: 'https://instagram.com/solvendofuit',
        date: '23.02.2018'
    },
    {
        id: 3,
        service: 'Free fast likes',
        status: 'Completed',
        link: 'https://instagram.com/solvendofuit',
        date: '22.02.2018'
    },
    {
        id: 4,
        service: 'Free fast likes',
        status: 'Canceled',
        link: 'https://instagram.com/solvendofuit',
        date: '19.02.2018'
    },
    {
        id: 5,
        service: 'Free fast likes',
        status: 'Completed',
        link: 'https://instagram.com/solvendofuit',
        date: '18.02.2018'
    },
];

const CustomTableCell = withStyles(theme => ({
    body: {
        fontSize: 14,
        padding: 15
    },
}))(TableCell);

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
                <Grid container justify="flex-start" className={classes.totalsWrapper} spacing={16}>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <Typography variant="h5" gutterBottom={15}>
                            News
                        </Typography>
                        <Paper className={classes.root} elevation={2}>
                            <NewsWidget />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <Typography variant="h5" gutterBottom={15}>
                            Last orders
                        </Typography>
                        <Paper className={classes.root} elevation={2}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Service</TableCell>
                                        <TableCell align="left">Status</TableCell>
                                        <TableCell align="left">Link</TableCell>
                                        <TableCell align="left">Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => (
                                        <TableRow key={row.id}>
                                            <CustomTableCell align="left" scope="row">{row.service}</CustomTableCell>
                                            <CustomTableCell align="left">{row.status}</CustomTableCell>
                                            <CustomTableCell align="left">{row.link}</CustomTableCell>
                                            <CustomTableCell align="left">{row.date}</CustomTableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withStyles(styles)(Dashboard);