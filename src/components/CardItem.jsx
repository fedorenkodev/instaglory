import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {Card, CardContent, Typography, withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        display: 'flex',
        maxWidth: 300,
        height: 120
    },

    cardTitle: {
        fontWeight: 500,
        marginBottom: 7
    },

    cardIcon: {
        margin: 'auto 20px auto auto',
        fontSize: 80,
        color: '#b3b3b3'
    }
});

function CardItem (props) {
    const {classes, title, count, hex, cardIcon} = props;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography component="p" className={classes.cardTitle}>
                    {title}
                </Typography>
                <Typography variant="h4" component="h2" style={{color: hex}}>
                    {count}
                </Typography>
            </CardContent>
            <i className={classNames("material-icons", classes.cardIcon)} style={{color: hex}}>
                {cardIcon}
            </i>
        </Card>
    );
}

CardItem.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    cardIcon: PropTypes.string.isRequired
};

export default withStyles(styles)(CardItem);