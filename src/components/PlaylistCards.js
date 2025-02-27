import SongCard from './SongCard.js';
import React from "react";

export default class PlaylistCards extends React.Component {
    render() {
        const { currentList,
                onRemoveSong,
                moveSongCallback,
                onEditSong } = this.props;
        if (currentList === null) {
            return (
                <div id="playlist-cards"></div>
            )
        }
        else {
            return (
                <div id="playlist-cards">
                    {
                        currentList.songs.map((song, index) => (
                        <div key={'playlist-song-' + (index+1)} className='unselected-list-card'>
                            <SongCard
                                id={'playlist-song-' + (index+1)}
                                key={'playlist-song-' + (index+1)}
                                song={song}
                                moveCallback={moveSongCallback}
                                onRemoveSong={onRemoveSong}
                                onEditSong={onEditSong}
                            />
                        </div>
                        ))
                    }
                </div>
            )
        }
    }
}