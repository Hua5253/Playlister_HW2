import React from "react";

export default class EditToolbar extends React.Component {
    render() {
        const { canAddSong, canUndo, canRedo, canClose, 
                undoCallback, isModalOpen, currentList, redoCallback, closeCallback} = this.props;
        let addSongClass = "toolbar-button";
        let undoClass = "toolbar-button";
        let redoClass = "toolbar-button";
        let closeClass = "toolbar-button";

        if (!currentList) {
            addSongClass += " disabled";
            undoClass += " disabled";
            redoClass += " disabled";
            closeClass += " disabled";
        }

        if (!canAddSong || isModalOpen) addSongClass += " disabled";
        if (!canUndo || isModalOpen) undoClass += " disabled";
        if (!canRedo || isModalOpen) redoClass += " disabled";
        if (!canClose || isModalOpen) closeClass += " disabled";

        return (
            <div id="edit-toolbar">
            <input 
                type="button" 
                id='add-song-button' 
                disabled={!canAddSong || isModalOpen}
                value="+" 
                className={addSongClass}
                onClick={this.props.onAddSong}
            />
            <input 
                type="button" 
                id='undo-button' 
                disabled={!canUndo || isModalOpen || !currentList}
                value="⟲" 
                className={undoClass} 
                onClick={undoCallback}
            />
            <input 
                type="button" 
                id='redo-button' 
                disabled={!canRedo || isModalOpen || !currentList}
                value="⟳" 
                className={redoClass} 
                onClick={redoCallback}
            />
            <input 
                type="button" 
                id='close-button'
                disabled={!canClose || isModalOpen} 
                value="&#x2715;" 
                className={closeClass} 
                onClick={closeCallback}
            />
        </div>
        )
    }
}