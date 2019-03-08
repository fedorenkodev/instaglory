import React from 'react';
import classNames from 'classnames';

import {
    Paper, Grid, Typography,
    TextField, MenuItem, Tooltip,
    Button, Chip, FormControlLabel,
    Checkbox, withStyles
} from '@material-ui/core';

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

    serviceDescriptionList: {
        listStyle: 'none',
        paddingLeft: 0,

        '& li': {
            marginBottom: 15,
            padding: 0,
            display: 'flex',
            alignItems: 'center',

            '& > span': {
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(60deg, #66bb6a, #43a047)',
                //boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(76, 175, 80,.4)',
                width: 25,
                height: 25,
                borderRadius: 3,

                '&.speedBox': {
                    //boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 172, 193, 0.4)',
                    background: '#00acc1',
                },

                '&.infoBox': {
                    //boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(255, 152, 0,.4)',
                    background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
                },

                '& i': {
                    color: '#fff',
                    fontSize: 18
                }
            },

            '& p': {
                margin: '0 0 0 15px',
            },
        },
    },

    serviceAdditionalInfo: {
        marginTop: 15,
        marginBottom: 25,
    },

    serviceAdditionalInfoChip: {
        marginRight: 15,

        '&:last-child': {
            marginRight: 0
        },
    },

    serviceTotalPrice:{
        fontSize: 15,
        marginTop: 20
    },

    additionalInfo: {
        fontWeight: 300,
        paddingLeft: 15,
        lineHeight: '25px',
        marginBottom: 0,
        marginTop: 30,
    },

    checkbox: {
        paddingTop: 10
    },

    hidden: {
        display: 'none',
    },
});

const serviceGroups = [
    {
        value: 'likes',
        label: 'Likes',
        services: [
            {
                value: 'likes1',
                label: 'Likes fast | 1$ for 1000',
                options: {
                    start: '~5 hours',
                    speed: 'Very fast',
                    info: 'Promotional price',
                    min: 100,
                    max: 1000,
                    perOne: 0.45
                }
            },
            {
                value: 'likes2',
                label: 'Likes fast | 2$ for 1000',
                options: {
                    start: '4 hours',
                    speed: 'Very fast',
                    info: 'Promotional price',
                    min: 100,
                    max: 1000,
                    perOne: 0.45
                }
            },
            {
                value: 'likes3',
                label: 'Likes fast | 3$ for 1000',
                options: {
                    start: '1 hour',
                    speed: 'Slow',
                    info: 'Regular price',
                    min: 70,
                    max: 100,
                    perOne: 0.45
                }
            },
        ]
    },
    {
        value: 'free_likes',
        label: 'Free likes',
        services: [
            {
                value: 'free_likes1',
                label: 'Free fast | 1$ for 100',
                options: {
                    start: '10 minutes',
                    speed: 'Faster ever ',
                    info: 'Some information',
                    min: 10,
                    max: 1000,
                    perOne: 1
                }
            },
            {
                value: 'free_likes2',
                label: 'Free fast | 2$ for 200',
                options: {
                    start: '30 minutes',
                    speed: 'Faster ever ',
                    info: 'Some information',
                    min: 10,
                    max: 1000,
                    perOne: 12
                }
            },
            {
                value: 'free_likes3',
                label: 'Free fast | 3$ for 300',
                options: {
                    start: '40 minutes',
                    speed: 'Normal',
                    info: 'Some information',
                    min: 10,
                    max: 1000,
                    perOne: 1
                }
            },
        ]
    },
    {
        value: 'subscribers',
        label: 'Subscribers',
        services: [
            {
                value: 'subscribers1',
                label: 'Subscribers very fast | 1$ for 1000',
                options: {
                    start: '11 hour',
                    speed: 'Slow',
                    info: 'Regular price',
                    min: 70,
                    max: 100,
                    perOne: 0.45
                }
            },
            {
                value: 'subscribers2',
                label: 'Subscribers very fast | 2$ for 3000',
                options: {
                    start: '22 hour',
                    speed: 'Fast',
                    info: 'Regular price',
                    min: 70,
                    max: 100,
                    perOne: 0.45
                }
            },
            {
                value: 'subscribers3',
                label: 'Subscribers very fast | 3$ for 4000',
                options: {
                    start: '1 hour',
                    speed: 'Flesh speed!',
                    info: 'Regular price',
                    min: 70,
                    max: 100,
                    perOne: 0.15
                }
            },

        ],
    },
];

class CreateOrder extends React.Component {
    constructor(props) {
        super(props) ;

        this.handleChangeBulkOrder = this.handleChangeBulkOrder.bind(this);
    }

    state = {
        selectedServiceGroup: '',
        selectedService: '',
        serviceList: null,
        serviceInfo: null,
        serviceName: '',
        count: 0,
        totalPrice: 0,
        countError: false,
        countErrorText: '',
        isBulkOrder: false,
        multiline: false,
        rows: 1,
    };

    componentWillMount() {
        this.setState({
            selectedServiceGroup: serviceGroups[0].value,
            selectedService: serviceGroups[0].services[0].value,
            serviceList: serviceGroups[0].services,
            serviceInfo: serviceGroups[0].services[0].options,
            serviceName: serviceGroups[0].services[0].label
        });
    }

    handleChangeServiceGroup = () => event => {
        let serviceList = [];

        serviceGroups.forEach((item) => {
            if (item.value === event.target.value) {
                serviceList = item.services
            }
        });

        this.setState({
            selectedServiceGroup: event.target.value,
            serviceList: serviceList,
            selectedService: serviceList[0].value,
            serviceInfo: serviceList[0].options,
            serviceName: serviceList[0].label
        });
    };

    handleChangeService = () => event => {
        let options = [];
        let serviceName='';

        this.state.serviceList.forEach((item) => {
            if (item.value === event.target.value) {
                options = item.options;
                serviceName = item.label;
                return true;
            }
        });

        this.setState({
            selectedService: event.target.value,
            serviceInfo: options,
            serviceName: serviceName,
        });
    };

    handleChangeCount = () => event => {
        let isError = false;
        let errorText = '';

        event.target.value = event.target.value.replace(/[^0-9]/g, '');

        if (event.target.value > this.state.serviceInfo.max) {
            isError = true;
            errorText = 'Count must be less than or equal to ' + this.state.serviceInfo.max
        } else if (event.target.value < this.state.serviceInfo.min) {
            isError = true;
            errorText = 'Count must be greater than or equal to ' + this.state.serviceInfo.min
        }

        this.setState({
            count: event.target.value,
            totalPrice: Math.ceil(this.state.serviceInfo.perOne * event.target.value),
            countError: isError,
            countErrorText: errorText
        });
    };


    handleChangeBulkOrder() {
        this.setState({
            isBulkOrder: !this.state.isBulkOrder,
            multiline: !this.state.multiline,
            rows: 5,
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h5" className={classes.paperTitle}>Create new order</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            select
                            label="Service group"
                            className={classes.textField}
                            value={this.state.selectedServiceGroup}
                            onChange={this.handleChangeServiceGroup()}
                        >
                            {serviceGroups.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            required
                            select
                            label="Service"
                            className={classes.textField}
                            value={this.state.selectedService}
                            onChange={this.handleChangeService()}
                            disabled={!this.state.serviceList.length}
                        >
                            {this.state.serviceList.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            required
                            type={"email"}
                            label={this.state.multiline ? 'Links' : 'Link'}
                            className={classes.textField}
                            multiline={this.state.multiline}
                            placeholder={this.state.multiline ? 'https://www.instagram.com/hello/\nhttps://www.instagram.com/world/' : ''}
                            rows={this.state.rows}
                            rowsMax={10}
                        />
                        <Typography className={classNames({
                            [classes.hidden]: !this.state.multiline,
                        })}>
                            1 link - 1 line.
                        </Typography>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.isBulkOrder}
                                    onChange={this.handleChangeBulkOrder}
                                    value="bulkOrder"
                                    color="primary"
                                    className={classes.checkbox}
                                />
                            }
                            label="Bulk order"
                        />
                        <TextField
                            required
                            type={"number"}
                            error={this.state.countError}
                            helperText={this.state.countErrorText}
                            label="Count"
                            onChange={this.handleChangeCount()}
                            className={classes.textField}
                        />
                        <Button variant="contained" size="large" color="primary" className={classes.createButton}>
                            Submit
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5">{this.state.serviceName}</Typography>
                        <div className={classes.serviceAdditionalInfo}>
                            <Chip className={classes.serviceAdditionalInfoChip} label={"Minimum quantity: " + this.state.serviceInfo.min} />
                            <Chip className={classes.serviceAdditionalInfoChip} label={"Maximum quantity: " + this.state.serviceInfo.max} />
                            <Chip className={classes.serviceAdditionalInfoChip} label={"Per one: " + this.state.serviceInfo.perOne} />
                        </div>
                        <ul className={classes.serviceDescriptionList}>
                            {
                                this.state.serviceInfo && this.state.serviceInfo.start
                                ? (
                                    <li>
                                        <Tooltip title="Start" placement="left">
                                            <span><i className="material-icons">timer</i></span>
                                        </Tooltip>
                                        <p>{this.state.serviceInfo.start}</p>
                                    </li>
                                    )
                                : ''
                            }

                            {
                                this.state.serviceInfo && this.state.serviceInfo.speed
                                ? (
                                    <li>
                                        <Tooltip title="Speed" placement="left">
                                            <span className={"speedBox"}><i className="material-icons">flight_takeoff</i></span>
                                        </Tooltip>
                                        <p>{this.state.serviceInfo.speed}</p>
                                    </li>
                                    )
                                : ''
                            }

                            {
                                this.state.serviceInfo && this.state.serviceInfo.info
                                ? (
                                    <li>
                                        <Tooltip title="Info" placement="left">
                                            <span className={"infoBox"}><i className="material-icons">info_outline</i></span>
                                        </Tooltip>
                                        <p>{this.state.serviceInfo.info}</p>
                                    </li>
                                    )
                                : ''
                            }
                        </ul>

                        <hr/>

                        <Chip
                            color="primary"
                            className={classNames(classes.serviceAdditionalInfoChip, classes.serviceTotalPrice)}
                            label={"Total price: " + this.state.totalPrice + "$"} />
                    </Grid>
                    <Grid item xs={12}>
                        <ol className={classes.additionalInfo}>
                            <li>
                                Your Instagram account must be open.
                            </li>
                            <li>
                                Do not order several services, or the same service to the link, for which there is still an unfulfilled order.
                            </li>
                            <li>
                                If you have questions about work, please refer to the FAQ. If in the FAQ you did not find the answer to your question - <a
                                href="#">contact support</a>.
                            </li>
                        </ol>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(CreateOrder);