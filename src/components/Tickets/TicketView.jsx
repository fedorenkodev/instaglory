import React from 'react';

import {
    Paper, Grid, Typography,
    TextField, Fab,
    Button, withStyles
} from '@material-ui/core';
import Avatar from "@material-ui/core/Avatar";
import SendIcon from "@material-ui/icons/Send";

const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
    paper: {
        padding: 20,
        marginBottom: 20,
    },

    messageInfoContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: 20,
    },

    messageText: {
        flexBasis: '100%'
    },

    messageInfo: {
        '& p': {
            margin: 0,
        }
    },

    avatar: {
        marginRight: 20,
    },

    messageDate: {
        color: '#848484',
        fontSize: 13,
        marginTop: '3px !important',
    },

    subject: {
        marginBottom: 10
    },

    closeTicket: {
        marginLeft: 'auto',
        marginBottom: 20,
    },

    header: {
        display: 'flex',
    },

    messageField: {
        width: '100%',

        '& textarea': {
            borderRadius: 0,
        }
    },

    sendButton: {
        margin: theme.spacing.unit,
    },

    sendForm: {
        marginTop: 100
    }
});

const messages = [
    {
        id: '1',
        name: 'Dima Fedorenko',
        date: '19:43, 19.03.2019',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley'
    },
    {
        id: '2',
        name: 'Support',
        date: '19:43, 19.03.2019',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley'
    },
    {
        id: '3',
        name: 'Dima Fedorenko',
        date: '19:43, 19.03.2019',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley'
    },
    {
        id: '4',
        name: 'Support',
        date: '19:43, 19.03.2019',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley'
    },
    {
        id: '5',
        name: 'Dima Fedorenko',
        date: '19:43, 19.03.2019',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley'
    },
];


class TicketView extends React.Component {
    state = {
    };

    componentWillMount() {

    }

    handleSubmit() {

    };

    render() {
        const {classes} = this.props;

        return (
            <Grid container>
                <Grid item xs={12}>
                    <div className={classes.header}>
                        <Typography variant="h5" className={classes.subject}>Subject</Typography>
                        <Button variant="contained" color="secondary" className={classes.closeTicket}>
                            Close ticket
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    {
                        messages.map((message) => {
                            return (
                                <Paper className={classes.paper} key={message.id}>
                                    <div>
                                        <div className={classes.messageInfoContainer}>
                                            <Avatar className={classes.avatar}>
                                                {
                                                    message.name.match(/\b(\w)/g).join('')
                                                }
                                            </Avatar>
                                            <div className={classes.messageInfo}>
                                                <p>{message.name}</p>
                                                <p className={classes.messageDate}>{message.date}</p>
                                            </div>
                                        </div>
                                        <div className={classes.messageText}>
                                            <Typography>{message.text}</Typography>
                                        </div>
                                    </div>
                                </Paper>
                            );
                        })
                    }
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Button>
                            Load more
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.sendForm}>
                    <Grid container justify="center" alignItems={"center"}>
                        <Grid item xs={11}>
                            <TextField
                                label="Message"
                                multiline
                                rows={3}
                                rowsMax={10}
                                className={classes.messageField}
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Grid container justify="center">
                                {/*<Button variant="contained" color="primary" size={"large"} className={classes.sendButton}>
                                    Send
                                </Button>*/}
                                <Fab color="primary" aria-label="Send" className={classes.sendButton}>
                                    <SendIcon />
                                </Fab>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(TicketView);