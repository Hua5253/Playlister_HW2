import jsTPS_Transaction from "../common/jsTPS";

export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index) {
        super();
        this.app = initApp;
        this.index = index;
    }

    doTransaction() {
        this.app.handleRemoveSong(this.index);
    }

    undoTransaction() {
        this.app.redoRemoveSong(this.index);
    }
}