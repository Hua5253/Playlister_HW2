import jsTPS_Transaction from "../common/jsTPS";

export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp) {
        super();
        this.app = initApp;
    }

    doTransaction() {
        this.app.handleAddSong();
    }

    undoTransaction() {
        this.app.redoAddSong();
    }
}