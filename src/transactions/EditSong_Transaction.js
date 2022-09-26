import jsTPS_Transaction from "../common/jsTPS";

export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index, tempSong, originSong) {
        super();
        this.app = initApp;
        this.index = index;
        this.tempSong = tempSong;
        this.originSong = originSong;
    }

    doTransaction() {
        this.app.handleEditSong(this.index, this.tempSong);
    }

    undoTransaction() {
        this.app.handleEditSong(this.index, this.originSong);
    }
}