import React from 'react';

import {Button, Grid, withStyles} from '@material-ui/core';
import OrdersTable from './OrdersTable';

const styles = () => ({
    button: {
        marginLeft: 'auto',
        float: 'right',
        marginBottom: 20
    },
});

class OrdersList extends React.Component {
    state = {
        orders: [
            ["1", "Test Service 1", 500, "https://instagram.com/solvendofuit", 141.11, "pending", "27.02.2018"],
            ["2", "Test Service 2", 32, "https://instagram.com/solvendofuit", 113.12, "completed", "27.02.2018"],
            ["3", "Test Service 2", 111, "https://instagram.com/solvendofuit", 133.00, "in_progress", "27.02.2018"],
            ["4", "Test Service 4", 900, "https://instagram.com/solvendofuit", 132.01, "in_progress", "27.02.2018"],
            ["5", "Test Service 4", 600, "https://instagram.com/solvendofuit", 133.00, "in_progress", "24.02.2018"],
            ["6", "Test Service 6", 400, "https://instagram.com/solvendofuit", 123.00, "canceled", "24.02.2018"],
            ["7", "Test Service 8", 100, "https://instagram.com/solvendofuit", 122.00, "completed", "21.02.2018"],
            ["8", "Test Service 8", 100, "https://instagram.com/solvendofuit", 122.00, "completed", "21.02.2018"],
            ["9", "Test Service 6", 200, "https://instagram.com/solvendofuit", 87.00, "canceled", "25.02.2018"],
            ["10", "Test Service 8", 100, "https://instagram.com/solvendofuit", 122.00, "completed", "21.02.2018"],
            ["11", "Test Service 8", 100, "https://instagram.com/solvendofuit", 122.00, "pending", "21.02.2018"],
            ["12", "Test Service 6", 100, "https://instagram.com/solvendofuit", 122.00, "completed", "21.02.2018"],
            ["13", "Test Service 9", 100, "https://instagram.com/solvendofuit", 122.00, "completed", "21.02.2018"],
            ["14", "Test Service 8", 100, "https://instagram.com/solvendofuit", 122.00, "completed", "21.02.2018"],
            ["15", "Test Service 8", 100, "https://instagram.com/solvendofuit", 122.00, "completed", "21.02.2018"],
        ]
    };

    render() {
        const {classes} = this.props;

        return (
            <Grid container>
                <Grid item xs={12}>
                    <Button variant="contained" size="large" color="primary" href="#contained-buttons" className={classes.button}>
                        Create order
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <OrdersTable orders={this.state.orders} />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(OrdersList);