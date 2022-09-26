import React from "react";

export default class SidebarHeading extends React.Component {
    handleClick = (event) => {
        const { createNewListCallback } = this.props;
        createNewListCallback();
    };
    render() {
        return (
            <div id="sidebar-heading">
                <input 
                    type="button" 
                    id="add-list-button" 
                    disabled={!this.props.canAddList}
                    className="toolbar-button" 
                    onClick={this.handleClick}
                    value="+" />
                Your Playlists
            </div>
        );
    }
}