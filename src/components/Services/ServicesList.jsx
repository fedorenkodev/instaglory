import React from 'react';

import {Grid, Button, withStyles} from '@material-ui/core';
import {Link} from "react-router-dom";
import ServicesTable from "./ServicesTable";


const styles = () => ({
    button: {
        marginLeft: 'auto',
        float: 'right',
        marginBottom: 20
    },
});

class ServicesList extends React.Component {
    state = {
        serviceGroups: [
            {
                groupId: 1,
                groupLabel: 'Likes',
                groupValue: 'likes',
                serviceId: 11,
                serviceValue: 'likes1',
                serviceLabel: 'Likes fast | 1$ for 1000',
                min: 100,
                max: 1000,
                perOne: 0.45,
            },
            {
                groupId: 1,
                groupLabel: 'Likes',
                groupValue: 'likes',
                serviceId: 22,
                serviceValue: 'likes2',
                serviceLabel: 'Likes fast | 2$ for 1000',
                min: 100,
                max: 1000,
                perOne: 0.45,
            },
            {
                groupId: 2,
                groupLabel: 'Free likes',
                groupValue: 'free_likes',
                serviceId: 55,
                serviceValue: 'free_likes2',
                serviceLabel: 'Free fast | 1$ for 100',
                min: 100,
                max: 1000,
                perOne: 0.45,
            },
            {
                groupId: 3,
                groupLabel: 'Subscribers',
                groupValue: 'subscribers',
                serviceId: 77,
                serviceValue: 'subscribers1',
                serviceLabel: 'Subscribers very fast | 1$ for 1000',
                min: 100,
                max: 1000,
                perOne: 0.45,
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
                            component={(props) => <Link to="/create-order" {...props} />}
                            className={classes.button}>
                        Create order
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <ServicesTable services={this.state.serviceGroups} />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ServicesList);