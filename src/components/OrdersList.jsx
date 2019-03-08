import React from 'react';

import {Button, Grid, withStyles} from '@material-ui/core';
import OrdersTable from './OrdersTable';
import {Link} from "react-router-dom";

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
            ["1", "Test Service 1", 500, "https://instagram.com/solvendofuit", 141.11, "21.02.2019", "pending"],
            ["2", "Test Service 2", 32, "https://instagram.com/solvendofuit", 113.12, "21.02.2019", "completed"],
            ["3", "Test Service 2", 111, "https://instagram.com/solvendofuit", 133.00, "21.02.2019", "in_progress"],
            ["4", "Test Service 4", 900, "https://instagram.com/solvendofuit", 132.01, "21.02.2019", "in_progress"],
            ["5", "Test Service 4", 600, "https://instagram.com/solvendofuit", 133.00, "21.02.2019", "in_progress"],
            ["6", "Test Service 6", 400, "https://instagram.com/solvendofuit", 123.00, "21.02.2019", "canceled"],
            ["7", "Test Service 8", 100, "https://instagram.com/solvendofuit", 122.00, "21.02.2019", "completed"],
            ["8", "Test Service 8", 100, "https://instagram.com/solvendofuit", 122.00, "22.01.2018", "completed"],
            ["9", "Test Service 6", 200, "https://instagram.com/solvendofuit", 87.00, "22.01.2018", "canceled"],
            ["10", "Test Service 8", 100, "https://instagram.com/solvendofuit", 122.00, "22.01.2018", "completed"],
            ["11", "Test Service 8", 100, "https://instagram.com/solvendofuit", 122.00, "22.01.2018", "pending"],
            ["12", "Test Service 6", 100, "https://instagram.com/solvendofuit", 122.00, "22.01.2018", "completed"],
            ["13", "Test Service 9", 100, "https://instagram.com/solvendofuit", 122.00, "22.01.2018", "completed"],
            ["14", "Test Service 8", 100, "https://instagram.com/solvendofuit", 122.00, "22.01.2018", "completed"],
            ["15", "Test Service 8", 100, "https://instagram.com/solvendofuit", 122.00, "22.01.2018", "completed"],
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
                            component={(props) => <Link to="/create-order" {...props} />}
                            className={classes.button}>
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