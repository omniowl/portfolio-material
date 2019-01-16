import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 356
    },
    media: {
        height: 256
    }
};

function ProjectCard(props) {
    const { classes, cardId, cardData, badges, handleClick } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={require("../img/game-cards/"+cardData["image"])}
                    title={cardData["title"]}
                    onClick={() => handleClick(cardId)}
                />
                <CardContent onClick={() => handleClick(cardId)}>
                    <h5>{cardData["title"]}</h5>
                    <Typography component="p">
                        { cardData["description"] }
                    </Typography>
                </CardContent>
                { badges }
            </CardActionArea>
        </Card>
    );
}

ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
    cardId: PropTypes.string.isRequired,
    cardData: PropTypes.object.isRequired,
    badges: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default withStyles(styles)(ProjectCard);