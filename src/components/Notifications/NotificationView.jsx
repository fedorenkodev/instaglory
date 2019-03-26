import React from 'react';

import {Paper, Typography, Grid, Button, withStyles} from '@material-ui/core';
import classNames from 'classnames';

const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginBottom: 25,
        borderTop: '2px solid #eee',
    },

    header: {
        borderBottom: '1px solid #eee',
        marginBottom: 20,
    },

    title: {
        fontSize: 16,
        paddingBottom: 7,
    },

    date: {
        display: 'block',
        textAlign: 'right',
        fontSize: 14,
    },

    notifyType1: {
        borderTopColor: 'rgb(113, 106, 202)',
    },

    notifyType2: {
        borderTopColor: 'rgb(54, 163, 247)',
    },

    notifyType3: {
        borderTopColor: 'rgb(52, 191, 163)',
    },

    notifyType4: {
        borderTopColor: 'rgb(244, 81, 108)',
    },

    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 5,
    },

    removeButton: {
        paddingLeft: 0,
        paddingRight: 0,
    }
});

const notifications = [
    {
        id: 1,
        title: 'Welcome',
        text: 'Welcome text',
        date: '15:56 11.02.2019',
        type: 1,
    },
    {
        id: 2,
        title: 'Some notify',
        text: 'Some text, Some text Some text, Some text Some text, Some text Some text, Some text Some text, Some text ',
        date: '19:37 10.02.2019',
        type: 2,
    },
    {
        id: 3,
        title: 'Some notify',
        text: 'Some text',
        date: '18:21 9.02.2019',
        type: 3
    },
    {
        id: 4,
        title: 'Some notify',
        text: 'Some text',
        date: '14:11 8.02.2019',
        type: 4,
    },
    {
        id: 5,
        title: 'Some notify',
        text: 'Some text',
        date: '14:22 7.02.2019',
        type: 3,
    },
    {
        id: 6,
        title: 'Some notify',
        text: 'Some text',
        date: '14:22 6.02.2019',
        type: 1,
    },
];

class NotificationView extends React.Component {
    state = {
        notificationsList: [],
        notificationId: null,
    };

    componentWillMount() {
        const {match} = this.props;

        if (match.params.id) {
            let notify = notifications.find((notification => notification.id === parseInt(match.params.id)));

            this.setState({
                notificationsList: [notify],
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (parseInt(this.props.match.params.id) !== parseInt(nextProps.match.params.id)) {
            let notify = notifications.find((notification => notification.id === parseInt(nextProps.match.params.id)));

            this.setState({
                notificationsList: [notify],
            });
        }
    }

    render() {
        const {classes} = this.props;
        const {notificationsList} = this.state;

        return (
            <Grid container>
                <Grid item xs={12}>
                    {
                        notificationsList.map((notification) => (
                            <Paper className={classNames(classes.paper, {
                                [classes.notifyType1]: notification.type === 1,
                                [classes.notifyType2]: notification.type === 2,
                                [classes.notifyType3]: notification.type === 3,
                                [classes.notifyType4]: notification.type === 4,
                            })} key={notification.id}>
                                <div className={classes.header}>
                                    <Grid container>
                                        <Grid item xs={10}>
                                            <Typography variant="h5" component="h3" className={classes.title}>
                                                {notification.title}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <span className={classes.date}>
                                                {notification.date}
                                            </span>
                                        </Grid>
                                    </Grid>
                                </div>

                                <Typography component="p" className={classes.text}>
                                    {notification.text}
                                </Typography>

                                <div className={classes.footer}>
                                    <Button size="small" color="secondary" className={classes.removeButton}>
                                        Remove
                                    </Button>
                                </div>
                            </Paper>
                        ))
                    }
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(NotificationView);