import React from "react";

export default class SidebarHeading extends React.Component {
    handleClick = (event) => {
        const { createNewListCallback } = this.props;
        createNewListCallback();
    };
    render() {
        const {canAddList} = this.props;
        let addListClass = "toolbar-button ";
        if (!canAddList) addListClass += "disabled";

        return (
            <div id="sidebar-heading">
                <input 
                    type="button" 
                    id="add-list-button" 
                    disabled={!canAddList}
                    className={addListClass} 
                    onClick={this.handleClick}
                    value="+" />
                Your Playlists
            </div>
        );
    }
}