import React, { Component } from 'react';

export default class EditSongModal extends Component {
    ignoreParentClick = (event) => {
        event.cancelBubble = true;
        if (event.stopPropagation) event.stopPropagation();
    }

    render() {
        const {songKey, currentList, onEditSong, onHideEditSongModal } = this.props;
        if (!currentList) return null;
        
        let index = songKey.key;
        let song = currentList.songs[index] === undefined ? {} : currentList.songs[index];
        let originSong = {title: song.title, artist: song.artist, youTubeId: song.youTubeId};
        let tempSong = {title: song.title, artist: song.artist, youTubeId: song.youTubeId};

        return (
            <div 
                className="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div className="modal-root" id='verify-remove-song-root'>
                        <div className="modal-north">
                            Edit Song?
                        </div>
                        <div className="modal-center">
                            <div className="modal-center-content">
                                <div className="edit-song-content">
                                    Title: <span id="edit-title-span">
                                        <input type="text" id={"song-card-title-input-" + index} 
                                        defaultValue={song.title} onDoubleClick={(event) => this.ignoreParentClick(event)}
                                        onKeyDown={(event) => {if (event.key === "Enter") tempSong.title = event.target.value}}
                                        onBlur={(event) => {tempSong.title = event.target.value}} />
                                        </span>
                                </div>
                                <div className="edit-song-content">
                                    Artist: <span id="edit-artist-span">
                                        <input type="text" id={"song-card-artist-input-" + index} 
                                        defaultValue={song.artist} onDoubleClick={(event) => this.ignoreParentClick(event)} 
                                        onKeyDown={(event) => {if (event.key === "Enter") tempSong.artist = event.target.value}}
                                        onBlur={(event) => {tempSong.artist = event.target.value}} />
                                        </span>
                                </div>
                                <div className="edit-song-content">
                                    youTubeId: <span id="edit-ID-span">
                                        <input type="text" id={"song-card-title-input-" + index} 
                                        defaultValue={song.youTubeId} onDoubleClick={(event) => this.ignoreParentClick(event)}
                                        onKeyDown={(event) => {if (event.key === "Enter") tempSong.youTubeId = event.target.value}}
                                        onBlur={(event) => {tempSong.youTubeId = event.target.value}} />
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