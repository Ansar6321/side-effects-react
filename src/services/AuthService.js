import CustomEvent from "../utils/CustomEvent";
import Singleton from "../utils/Singleton";

export default class AuthService extends Singleton {
    _isLoggedIn;

    /** @private */
    constructor() {
        super();
        this.customEvent = new CustomEvent();
    }

    login() {
        this._isLoggedIn = true;
        this.customEvent.emit(true);
    }

    logOut() {
        this._isLoggedIn = false;
        this.customEvent.emit(false);
    }
}
