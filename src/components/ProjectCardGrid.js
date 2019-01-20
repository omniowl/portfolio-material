import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import ProjectCard from "./ProjectCard";
import ChipConstants from "../constants/ChipConstants";

class ProjectCardGrid extends Component {

    getBadges = (data) => {
        let list = [];
        let platformTags = data["cardPlatforms"].split(',');
        let engineTags = data["cardEngines"].split(',');
        if(platformTags.length > 0  && platformTags[0] !== '') {
            platformTags.forEach((value, index) => {
                let platformChipData = ChipConstants[value];
                list.push(
                    <Badge key={"badge_" + platformChipData["avatar"]["alt"] + "_" + index} badgeContent={0} invisible={true} style={{ bottom: 4}}>
                        <Avatar
                            key={"avatar_" + platformChipData["avatar"]["alt"]+"_" + index}
                            style={{ height: "32px", width: "32px" }}
                            alt={platformChipData["avatar"]["alt"]}
                            src={require("../img/avatars/"+platformChipData["avatar"]["img"])}
                        />
                    </Badge>
                );
            });
        }
        if(engineTags.length > 0 && engineTags[0] !== '') {
            engineTags.forEach((value, index) => {
                let engineChipData = ChipConstants[value];
                list.push(
                    <Badge key={"badge_" + engineChipData["avatar"]["alt"] + "_" + index} badgeContent={0} invisible={true} style={{ bottom: 5}}>
                        <Avatar
                            key={"avatar_" + engineChipData["avatar"]["alt"] + "_" + index}
                            style={{ height: "32px", width: "32px" }}
                            alt={engineChipData["avatar"]["alt"]}
                            src={require("../img/avatars/"+engineChipData["avatar"]["img"])}
                        />
                    </Badge>
                );
            });
        }
        return list;
    };

    getFeaturedGridItems = (cardData, cardClick) => {
        let cards = [];
        const data = cardData["featured"];
        let counter = 0;
        for(let game in data) {
            let featuredGameData = data[game];
            let featuredGame = cardData[featuredGameData["category"]][featuredGameData["game"]];
            if(game !== 'empty')
            {
                let cardObj = {
                    "title": featuredGame["cardHeader"],
                    "description" : featuredGame["cardShortText"],
                    "image": featuredGame["imgName"]
                };
                cards.push(
                    <Grid item xs={3} key={"grid_item_" + counter}>
                        <ProjectCard
                            cardId={featuredGameData["game"]}
                            cardData={cardObj}
                            badges={this.getBadges(featuredGame)}
                            handleClick={cardClick}
                        />
                    </Grid>
                )
            }
            counter = counter + 1;
        }
        return cards;
    };

    getGridItems = (category, cardData, cardClick) => {
        let cards = [];
        const data = cardData[category];
        let counter = 0;
        for(let game in data) {
            if(game !== 'empty')
            {
                let cardObj = {
                    "title": data[game]["cardHeader"],
                    "description" : data[game]["cardShortText"],
                    "image": data[game]["imgName"]
                };
                cards.push(
                    <Grid item xs={3} key={"grid_item_" + counter}>
                        <ProjectCard
                            cardId={game}
                            cardData={cardObj}
                            badges={this.getBadges(data[game])}
                            handleClick={cardClick}
                        />
                    </Grid>
                )
            }
            counter = counter + 1;
        }
        return cards;
    };

    render() {
        const { category, data, featured, cardClick} = this.props;
        return(
            <div>
                <Grid container spacing={16} alignContent={"stretch"} alignItems={"center"}>
                    { (featured !== undefined && featured === true) ?
                        this.getFeaturedGridItems(data, cardClick) :
                        this.getGridItems(category, data, cardClick)
                    }
                </Grid>
            </div>
        );
    }
}

ProjectCardGrid.propTypes = {
    category: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    featured: PropTypes.bool,
    cardClick: PropTypes.func.isRequired
};

export default ProjectCardGrid;