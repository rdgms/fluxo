define(["actions/NoteActions","Stapes", "Dispatcher", "constants/NoteConstants"], function (NoteActions, Stapes, Dispatcher,Constants) {
	var CHANGE_EVENT = 'change';
	var _notes = [];
	var NoteStore;

	function create(text) {
		_notes.push({text: text})
	}

	var Store = Stapes.subclass({
		constructor : function(name) {
			Dispatcher.register(this.dispatcherIndex);
	    },
		/**
		* Get the entire collection of TODOs.
		* @return {object}
		*/
		getAll: function() {
			return _notes;
		},

		emitChange: function() {
			this.emit(CHANGE_EVENT);
		},

		/**
		* @param {function} callback
		*/
		addChangeListener: function(callback) {
			this.on(CHANGE_EVENT, callback);
		},

		/**
		* @param {function} callback
		*/
		removeChangeListener: function(callback) {
			this.off(CHANGE_EVENT);
		},
		dispatcherIndex: function(payload) {
			var action = payload.action;
			var text;

			switch(action.actionType) {
				case Constants.CREATE_NOTE:
				text = action.text.trim();
				if (text !== '') {
					create(text);
					NoteStore.emitChange();
				}
				break;

				case Constants.DESTROY_NOTE:
					destroy(action.id);
					NoteStore.emitChange();
				break;
			}
			return true; // No errors. Needed by promise in Dispatcher.
		}
	});

    NoteStore =  new Store();
    return NoteStore;
});