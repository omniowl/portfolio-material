import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonBase from "@material-ui/core/es/ButtonBase/ButtonBase";

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
            <ButtonBase onClick={() => handleClick(cardId)}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={require("../img/game-cards/"+cardData["image"])}
                        title={cardData["title"]}
                    />
                    <CardContent>
                        <h5>{cardData["title"]}</h5>
                        <Typography component="p">
                            { cardData["description"] }
                        </Typography>
                    </CardContent>
                    { badges }
                </CardActionArea>
            </ButtonBase>
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