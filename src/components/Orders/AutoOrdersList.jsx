import React from 'react';

import {Button, Grid, withStyles} from '@material-ui/core';
import {Link} from "react-router-dom";
import AutoOrdersTable from "./AutoOrdersTable";

const styles = () => ({
    button: {
        marginLeft: 'auto',
        float: 'right',
        marginBottom: 20
    },
});

class AutoOrdersList extends React.Component {
    state = {
        orders: [
            ["1", "Test Service 1", "solvendofuit", 'Post', "27.02.2018", "pending"],
            ["2", "Test Service 2","solvendofuit", 'Video', "27.02.2018", "completed"],
            ["3", "Test Service 2", "solvendofuit", 'Video', "27.02.2018", "in_progress"],
            ["4", "Test Service 4", "solvendofuit", 'Post', "27.02.2018", "in_progress"],
            ["5", "Test Service 4", "solvendofuit", 'Post', "24.02.2018", "in_progress"],
            ["6", "Test Service 6", "solvendofuit", 'Post', "24.02.2018", "canceled"],
            ["7", "Test Service 8", "solvendofuit", 'Post', "21.02.2018", "completed"],
            ["8", "Test Service 8", "solvendofuit", 'Post', "21.02.2018", "completed"],
            ["9", "Test Service 6", "solvendofuit", 'Post', "25.02.2018", "canceled"],
            ["10", "Test Service 8", "solvendofuit", 'Story', "21.02.2018", "completed"],
            ["11", "Test Service 8", "solvendofuit", 'Story', "21.02.2018", "pending"],
            ["12", "Test Service 6", "solvendofuit", 'Story', "21.02.2018", "completed"],
            ["13", "Test Service 9", "solvendofuit", 'Story', "21.02.2018", "completed"],
            ["14", "Test Service 8", "solvendofuit", 'Story', "21.02.2018", "completed"],
            ["15", "Test Service 8", "solvendofuit", 'Story', "21.02.2018", "completed"],
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
                            component={(props) => <Link to="/create-auto-order" {...props} />}
                            className={classes.button}>
                        Create order
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <AutoOrdersTable orders={this.state.orders} />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(AutoOrdersList);