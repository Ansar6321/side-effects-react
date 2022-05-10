export default class CustomEvent {
    _listeners = [];

    subscribe(listener) {
        const id = this._generateIdentifier();
        this._listeners = [...this._listeners, {id, listener}];
        return id;
    }

    unsubscribe(id) {
        this._listeners = this._listeners.filter(l => l.id !== id);
    }

    emit(data) {
        this._listeners.forEach(l => l.listener(data));
    }

    _generateIdentifier() {
        return this._listeners?.length ? [...this._listeners].sort((a, b) => b.id - a.id)[0].id + 1 : 1;
    }
}