import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectCardGrid from "../components/ProjectCardGrid";
import projectCardData from "../data/project-card-data";
import ProjectDialog from "./ProjectDialog";

class ProjectContainer extends Component {
    state = {
        dialogOpen: false,
        dialogId: ''
    };

    handleCardClick = id => {
        this.setState({
            dialogOpen: true,
            dialogId: id
        });
    };

    handleDialogClose = () => {
        this.setState({
            dialogOpen: false
        });
    };

    render() {
        const { category, featured, cardClick } = this.props;
        return(
            <div>
                <ProjectCardGrid
                    category={category}
                    featured={featured}
                    data={projectCardData}
                    cardClick={(cardClick === undefined ? this.handleCardClick : cardClick)}
                />
                <ProjectDialog
                dialogId={this.state.dialogId}
                open={this.state.dialogOpen}
                handleClose={() => this.handleDialogClose()}
                />
            </div>
        );
    }
}

ProjectContainer.propTypes = {
    category: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired,
    cardClick: PropTypes.func
};

export default ProjectContainer;