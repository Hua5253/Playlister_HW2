import React, {Component} from "react";

export default class RemoveSongModal extends Component {
    render() {
        const { keyNamePair, onRemoveSong, onHideRemoveSongModal } = this.props;
        let name = "";
        if (keyNamePair) {
            name = keyNamePair.name;
        }
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
                                Are you sure you wish to permanently remove {name} from the playlist?
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button" 
                                id="remove-song-confirm-button" 
                                className="modal-button" 
                                onClick={() => onRemoveSong(keyNamePair.key)}
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

