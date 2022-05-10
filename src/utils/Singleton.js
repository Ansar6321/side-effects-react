export default class Singleton {
    static _instance;

    static getInstance() {
        if (!this._instance) {
            this._instance = new this();
        }

        return this._instance;
    }
}