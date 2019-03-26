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
        width: '100%',
        marginBottom: 25
    },

    createButton: {
        marginTop: 30,
    },

    additionalInfo: {
        listStyle: 'none',
        fontWeight: 300,
        paddingLeft: 0,
        lineHeight: '25px',
        marginBottom: 0,
        marginTop: 30,
    },

});

const departments = [
    {
        value: '1',
        label: 'Finance',
    },
    {
        value: '2',
        label: 'Orders',
    },
    {
        value: '3',
        label: 'Technical',
    },
];

class CreateTicket extends React.Component {
    state = {
        subject: '',
        message: '',
        selectedDepartment: '',
    };

    componentWillMount() {
        this.setState({
            selectedDepartment: departments[0].value,
        });
    }

    handleChangeDepartment = () => event => {
        this.setState({
            selectedDepartment: event.target.value,
        });
    };

    handleChangeSubject = (event) => {
        this.setState({
            subject: event.target.value,
        });
    };

    handleChangeMessage = (event) => {
        this.setState({
            message: event.target.value,
        });
    };

    handleSubmit() {

    };

    render() {
        const {classes} = this.props;
        const {subject, message} = this.state;

        return (
            <Paper className={classes.paper}>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.paperTitle}>Create new ticket</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextValidator
                                required
                                label={"Subject"}
                                className={classes.textField}
                                onChange={this.handleChangeSubject}
                                value={subject}
                                validators={['required']}
                                errorMessages={['This field is required']}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextValidator
                                required
                                multiline
                                rows={5}
                                rowsMax={10}
                                label={"Message"}
                                className={classes.textField}
                                onChange={this.handleChangeMessage}
                                value={message}
                                validators={['required']}
                                errorMessages={['This field is required']}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                required
                                select
                                label="Department"
                                className={classes.textField}
                                value={this.state.selectedDepartment}
                                onChange={this.handleChangeDepartment}
                            >
                                {departments.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" size="large" color="primary" className={classes.createButton}>
                                Send
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <ul className={classes.additionalInfo}>
                                <li>
                                    Before creating a ticket, we recommend that you familiarize yourself with the <a href="https://google.com">FAQ</a>.
                                    <br />
                                    Perhaps there you will find the answer to your question.
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </Paper>
        );
    }
}

export default withStyles(styles)(CreateTicket);