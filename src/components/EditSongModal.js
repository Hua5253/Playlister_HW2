import React, { Component } from 'react';

export default class EditSongModal extends Component {
    constructor(props) {
        super(props)

        const {tempSong} = this.props;

        this.state = {
            song: tempSong
        }
    }

    render() {
        const {songKey, tempSong, currentList, onEditSong, onHideEditSongModal } = this.props;
        if (!currentList) return null;
        
        let index = songKey.key;
        let song = currentList.songs[index] === undefined ? {} : currentList.songs[index];
        let originSong = {title: song.title, artist: song.artist, youTubeId: song.youTubeId};

        return (
            <div 
                className="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div className="modal-root" id='verify-edit-song-root'>
                        <div className="modal-north">
                            Edit Song?
                        </div>
                        <div className="modal-center">
                            <div className="modal-center-content">
                                <div className="edit-song-content">
                                    Title: <span id="edit-title-span">
                                        <input type="text" name="title" id={"song-card-title-input-" + index} 
                                        value={tempSong.title} 
                                        onChange={this.props.onHandleChange}
                                         />
                                        </span>
                                </div>
                                <div className="edit-song-content">
                                    Artist: <span id="edit-artist-span">
                                        <input type="text" name="artist" id={"song-card-artist-input-" + index} 
                                        value={tempSong.artist}  
                                        onChange={this.props.onHandleChange}
                                         />
                                        </span>
                                </div>
                                <div className="edit-song-content">
                                    youTubeId: <span id="edit-ID-span">
                                        <input type="text" name="youTubeId" id={"song-card-title-input-" + index} 
                                        value={tempSong.youTubeId} 
                                        onChange={this.props.onHandleChange}
                                         />
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                className="modal-button" 
                                onClick={() => onEditSong(index, tempSong, originSong)}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                className="modal-button" 
                                onClick={onHideEditSongModal}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}