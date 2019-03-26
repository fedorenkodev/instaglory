import React from 'react';

import {Grid, Button, withStyles} from '@material-ui/core';
import {Link} from "react-router-dom";
import TicketsTable from "./TicketsTable";


const styles = () => ({
    button: {
        marginLeft: 'auto',
        float: 'right',
        marginBottom: 20
    },
});

class TicketsList extends React.Component {
    state = {
        tickets: [
            {
                id: 1,
                subject: 'Likes',
                department: 'Financial department',
                date: '11.02.2019',
                status: 'new',
            },
            {
                id: 2,
                subject: 'Likes 2',
                department: 'Orders',
                date: '7.02.2019',
                status: 'user',
            },
            {
                id: 3,
                subject: 'Likes 3',
                department: 'Financial department',
                date: '4.02.2019',
                status: 'support',
            },
            {
                id: 4,
                subject: 'Likes 4',
                department: 'Financial department',
                date: '1.02.2019',
                status: 'pending',
            },
            {
                id: 4,
                subject: 'Likes 4',
                department: 'Financial department',
                date: '1.02.2019',
                status: 'closed',
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
                            component={(props) => <Link to="/create-ticket" {...props} />}
                            className={classes.button}>
                        Create ticket
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <TicketsTable tickets={this.state.tickets} />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(TicketsList);