import React from 'react';

import {Grid, Button, withStyles} from '@material-ui/core';
import {Link} from "react-router-dom";
import TransactionsTable from "./TransactionsTable";


const styles = () => ({
    button: {
        marginLeft: 'auto',
        float: 'right',
        marginBottom: 20
    },
});

class TransactionsList extends React.Component {
    state = {
        transactions: [
            {
                id: 1,
                amount: '30',
                type: 'Free kassa',
                date: '28.02.2018',
            },
            {
                id: 2,
                amount: '50',
                type: 'Free kassa',
                date: '27.02.2018',
            },
            {
                id: 3,
                amount: '40',
                type: 'Free kassa',
                date: '21.02.2018',
            },
            {
                id: 4,
                amount: '0.002',
                type: 'Bitcoin',
                date: '21.02.2018',
            },
        ]
    };


    render() {
        const {classes} = this.props;
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Button variant="contained"
                            size="large"
                            color="primary"
                            component={(props) => <Link to="/create-transaction" {...props} />}
                            className={classes.button}>
                        Refill
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <TransactionsTable transactions={this.state.transactions} />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(TransactionsList);