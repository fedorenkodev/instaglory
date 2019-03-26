import React from 'react';

import {
    Paper, Typography,
    Button, withStyles
} from '@material-ui/core';

const styles = (theme) => ({
    paper: {
        padding: '10px 20px 50px',
    },

    paperTitle: {
        marginBottom: 20,
        marginTop: 15,
    },

    payButton: {
        marginTop: 30
    }

});


class CreateTransaction extends React.Component {
    state = {
    };

    render() {
        const {classes} = this.props;

        return (
            <Paper className={classes.paper}>
                <Typography variant="h5" className={classes.paperTitle}>Forwarding for Yandex.Money payment</Typography>
                <Typography variant="p" className={classes.redirectText}>There is a redirect to the Yandex.Money site for payment.<br />
                    If automatic redirection did not occur - please click the "Pay" button.
                </Typography>
                <Button variant="contained" size="large" color="primary" className={classes.payButton}>
                    Pay
                </Button>
            </Paper>
        );
    }
}

export default withStyles(styles)(CreateTransaction);