import React from 'react';

import {
    Paper, Grid, Typography,
    TextField, MenuItem,
    Button, withStyles
} from '@material-ui/core';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const styles = (theme) => ({
    paper: {
        padding: '10px 20px 50px',
    },

    paperTitle: {
        marginBottom: 20,
        marginTop: 15,
    },

    textField: {
        maxWidth: 550,
        width: '100%',
        marginBottom: 25
    },

    createButton: {
        marginTop: 30,
    },

    additionalInfo: {
        fontWeight: 300,
        paddingLeft: 15,
        lineHeight: '25px',
        marginBottom: 0,
        marginTop: 30,
    },

});

const paymentMethods = [
    {
        value: '1',
        label: 'Free kassa',
    },
    {
        value: '2',
        label: 'Yandex Money',
    },
    {
        value: '3',
        label: 'Kiwi',
    },
];

class CreateTransaction extends React.Component {
    state = {
        selectedPaymentMethod: '',
        amount: 0,
    };

    componentWillMount() {
        this.setState({
            selectedPaymentMethod: paymentMethods[0].value,
        });
    }

    handleChangePaymentMethod = () => event => {
        this.setState({
            selectedPaymentMethod: event.target.value,
        });
    };

    handleChangeCount = (event) => {
        this.setState({
            amount: event.target.value,
        });
    };

    handleSubmit() {

    };

    render() {
        const {classes} = this.props;
        const {amount} = this.state;

        return (
            <Paper className={classes.paper}>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.paperTitle}>Refill</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                select
                                label="Payment method"
                                className={classes.textField}
                                value={this.state.selectedPaymentMethod}
                                onChange={this.handleChangePaymentMethod()}
                            >
                                {paymentMethods.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextValidator
                                required
                                type={"text"}
                                label={"Amount"}
                                className={classes.textField}
                                onChange={this.handleChangeCount}
                                value={amount}
                                validators={['required', 'minNumber:3', 'matchRegexp:^(\\d+(\\.\\d+)?)$']}
                                errorMessages={['This field is required', 'Min amount is 3 dollars', 'Only digits allowed']}
                            />
                            <Button variant="contained" size="large" color="primary" className={classes.createButton}>
                                Submit
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <ol className={classes.additionalInfo}>
                                <li>
                                    The minimum amount to replenish: 3 dollars.
                                </li>
                                <li>
                                    When replenishing from 5 dollars - 5% bonus.
                                </li>
                            </ol>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </Paper>
        );
    }
}

export default withStyles(styles)(CreateTransaction);