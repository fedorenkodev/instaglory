import React from 'react';

import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Typography from "@material-ui/core/Typography/Typography";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import Card from "@material-ui/core/Card/Card";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";

const styles = theme => ({
    ...theme.mixins.gutters(),
    root: {
        flexGrow: 1,
    },

    card: {
        maxWidth: 345,
    },

    cardTotal: {
        maxWidth: 300,
        height: 120
    },

    media: {
        height: 120,
    },

    totalsWrapper: {
        marginBottom: 60
    }
});

class Dashboard extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid container justify="flex-start" className={classes.root} spacing={8}>
                <Grid item xs={12}>
                    <Grid container justify="center" className={classes.totalsWrapper} spacing={16}>
                        <Grid item xs={4} md={4} lg={2} xl={2}>
                            <Card className={classes.cardTotal}>
                                <CardContent>
                                    <Typography variant="h6" component="h2" gutterBottom>
                                        Total orders
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        21
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4} md={4} lg={2} xl={2}>
                            <Card className={classes.cardTotal}>
                                <CardContent>
                                    <Typography variant="h6" component="h2" gutterBottom>
                                        Orders in progress
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        3
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4} md={4} lg={2} xl={2}>
                            <Card className={classes.cardTotal}>
                                <CardContent>
                                    <Typography variant="h6" component="h2" gutterBottom>
                                        Balance
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        144.33&nbsp;$
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4} md={4} lg={2} xl={2}>
                            <Card className={classes.cardTotal}>
                                <CardContent>
                                    <Typography variant="h6" component="h2" gutterBottom>
                                        Partner balance
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        44.31&nbsp;$
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6}>
                    <Grid container justify="flex-start" className={classes.root} spacing={8}>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                Blog
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={8} lg={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Test article from blog
                                        </Typography>
                                        <Typography component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={8} lg={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Test article from blog
                                        </Typography>
                                        <Typography component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={8} lg={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Test article from blog
                                        </Typography>
                                        <Typography component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Dashboard);