import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import classNames from 'classnames';

import {List, ListSubheader, ListItem, ListItemText, withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        width: '100%',
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'hidden',
        maxHeight: 300,
    },

    listSection: {
        backgroundColor: 'inherit',
    },

    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },

    newsList: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 55,

        '&:before': {
            position: 'absolute',
            left: 28,
            top: 10,
            content: "''",
            display: 'block',
            width: 11,
            height: 11,
            borderRadius: '50%',
            border: '2px solid #36a3f7'
        },

        '&:after': {
            position: 'absolute',
            left: 33,
            top: 27,
            bottom: -3,
            content: "''",
            display: 'block',
            width: 1,
            background: '#E7E9F5'
        },

        '&:last-of-type': {
            marginBottom: 10
        }
    },

    newsTitle: {
        paddingLeft: 0,
        color: '#7b7e8a',
    },

    newsDescription: {
        paddingLeft: 0
    },

    date: {
        paddingLeft: 15,
        lineHeight: '40px',
        fontWeight: 600,
        backgroundColor: '#efefef',
    },

    scrollbar: {
        zIndex: '10',
        background: '#cfc6c6',
        borderRadius: '5px'
    }
});


const NewsListItemText = withStyles(theme => ({
    primary: {
        color: '#6f727d',
        fontSize: 14,
        fontWeight: 400
    },
    secondary: {
        fontSize: 13
    }
}))(ListItemText);

class NewsWidget extends React.Component {
   state = {
       newsList: [
           {
               id: 1,
               date: '02.03.2019',
               newsItems: [
                   {
                       id: 1,
                       title: 'New functionality',
                       description: 'Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud',
                   },
                   {
                       id: 2,
                       title: 'Deleted features',
                       description: 'Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt',
                   },

               ]
           },
           {
               id: 2,
               date: '01.03.2019',
               newsItems: [
                   {
                       id: 1,
                       title: 'Banned users',
                       description: 'Lorem ipsum dolor sit amit, consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud',
                   },
                   {
                       id: 2,
                       title: 'API extended',
                       description: 'Lorem ipsum dolor sit amit ,consectetur eiusmdd tempor incididunt',
                   },
                   {
                       id: 3,
                       title: 'New Service',
                       description: 'Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt amit, consectetur eiusmdd tempor incididunt',
                   },
               ]
           },
           {
               id: 3,
               date: '28.02.2019',
               newsItems: [
                   {
                       id: 1,
                       title: 'Auto orders',
                       description: 'Lorem ipsum dolor sit amit, consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud',
                   },
                   {
                       id: 2,
                       title: 'Performance improvement',
                       description: 'Lorem ipsum dolor sit amit ,consectetur eiusmdd tempor incididunt',
                   },
                   {
                       id: 3,
                       title: 'Set your profile icon',
                       description: 'Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt amit, consectetur eiusmdd tempor incididunt',
                   },
                   {
                       id: 4,
                       title: 'New notifications',
                       description: 'Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt amit, consectetur eiusmdd tempor incididunt',
                   },
               ]
           },
        ]
   };

    render() {
        const {classes} = this.props;
        return (

                <List className={classes.root} subheader={<li/>}>
                    <Scrollbars autoHeight
                                autoHeightMin={300}
                                renderThumbVertical={props => <div {...props} className={classNames('thumb-vertical', classes.scrollbar)} />}
                    >
                    {
                        this.state.newsList.map(newsList => (
                            <li key={newsList.id} className={classes.listSection}>
                                <ul className={classes.ul}>
                                    <ListSubheader className={classes.date}>{newsList.date}</ListSubheader>
                                    {
                                        newsList.newsItems.map(item => (
                                            <ListItem key={newsList.id + '_' + item.id} className={classes.newsList} >
                                                <NewsListItemText primary={item.title} className={classes.newsTitle} />
                                                <NewsListItemText secondary={item.description} className={classes.newsDescription} />
                                            </ListItem>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }
                    </Scrollbars>
                </List>

        );
    }
}

NewsWidget.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsWidget);