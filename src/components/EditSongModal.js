import React, { Component } from 'react';

export default class EditSongModal extends Component {
    constructor(props) {
        super(props);
    
        this.state = {newTitle: "", newArtist: "", newYouTubeID: ""}
    }

    handleEditSong = (event) => {
        let newSong = {title: this.state.newTitle, artist: this.state.newArtist, youTubeId: this.state.newYouTubeID};

        event.stopPropagation();
        this.props.editSongCallback(this.props.songKeyPair.key, newSong);
    }


    handleTitleUpdate = (event) => {
        this.setState({newTitle: event.target.value})
    }

    handleArtistUpdate = (event) => {
        this.setState({newArtist: event.target.value})
    }

    handleIDUpdate = (event) => {
        this.setState({newYouTubeID: event.target.value})
    }

    render() {
        const {songKeyPair, onHideEditSongModal } = this.props;
        let song = {};
        if (songKeyPair) {
            song = songKeyPair.song;
        }

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
                                        <input type="text" 
                                        onChange={this.handleTitleUpdate}
                                        defaultValue={song.title}/>
                                        </span>
                                </div>
                                <div className="edit-song-content">
                                    Artist: <span id="edit-artist-span">
                                        <input type="text" defaultValue={song.artist} onChange={this.handleArtistUpdate}></input>
                                        </span>
                                </div>
                                <div className="edit-song-content">
                                    youTubeId: <span id="edit-ID-span">
                                        <input type="text" defaultValue={song.youTubeId} onChange={this.handleIDUpdate}></input>
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                className="modal-button" 
                                onClick={this.handleEditSong}
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