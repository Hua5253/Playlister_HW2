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
                class="modal" 
                id="remove-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-remove-song-root'>
                        <div class="modal-north">
                            Remove Song?
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                Are you sure you wish to permanently remove {name} from the playlist?
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="remove-song-confirm-button" 
                                class="modal-button" 
                                onClick={onRemoveSong}
                                value='Confirm' />
                            <input type="button" 
                                id="remove-song-cancel-button" 
                                class="modal-button" 
                                onClick={onHideRemoveSongModal}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}

