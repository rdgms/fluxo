define(['react','stores/NoteStore', "actions/NoteActions"], function (React,NoteStore, NoteActions) {
    function getTodoState() {
        return {
            notes: NoteStore.getAll()
        };
    }

    var noteComponent = React.createClass({

        getInitialState: function() {
            return getTodoState();
        },

        componentDidMount: function() {
            NoteStore.addChangeListener(this._onChange);
        },

        componentWillUnmount: function() {
            NoteStore.removeChangeListener(this._onChange);
        },

        _onClick: function(){
            NoteActions.create(document.getElementById("note").value);
        },

        _onChange: function() {
            this.setState(getTodoState());
        },

        /**
        * @return {object}
        */
        render: function() {
            return (
                <div>
                    <input type="text" id="note" /> 
                    <input type="button" value="Test!" onClick={this._onClick}/>
                    
                    { 
                        this.state.notes.map(function(it){ 
                            return <div>Nota: {it}</div> 
                        }) 
                    }
                </div>
            )
        }
    });

    return noteComponent;
});