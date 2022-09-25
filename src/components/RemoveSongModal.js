import React, {Component} from "react";

export default class RemoveSongModal extends Component {
    render() {
        const { songKey, currentList, onRemoveSong, onHideRemoveSongModal } = this.props;
        if (!currentList) return null;
        
        let index = songKey.key;
        return (
            <div 
                className="modal" 
                id="remove-song-modal" 
                data-animation="slideInOutLeft">
                    <div className="modal-root" id='verify-remove-song-root'>
                        <div className="modal-north">
                            Remove Song?
                        </div>
                        <div className="modal-center">
                            <div className="modal-center-content">
                                Are you sure you wish to permanently remove {currentList.songs[index] === undefined ? "" : currentList.songs[index].title} from the playlist?
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button" 
                                id="remove-song-confirm-button" 
                                className="modal-button" 
                                onClick={() => onRemoveSong(index)}
                                value='Confirm' />
                            <input type="button" 
                                id="remove-song-cancel-button" 
                                className="modal-button" 
                                onClick={onHideRemoveSongModal}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}

