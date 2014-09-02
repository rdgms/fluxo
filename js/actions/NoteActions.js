define(['../Dispatcher', "constants/NoteConstants"], function (Dispatcher, Constants) {
    var action = {
        create: function(text) {
            Dispatcher.dispatch({
                source: 'VIEW_ACTION',
                action: {
                    actionType: Constants.CREATE_NOTE,
                    text: text
                }
            });
        }
    };

    return action;
});


