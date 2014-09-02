require.config({
    baseUrl: "js/",
    paths: {
        "react": "vendors/react",
        "JSXTransformer": "vendors/JSXTransformer-0.11.1",
        "Stapes" : "../bower_components/stapes/stapes",
        "jsx": "vendors/jsx",
        "text": "vendors/text"
    },
    jsx: {
        fileExtension: '.jsx'
    }
});


require(['react', 'jsx!components/noteComponent'], function(React, NoteComponent) {
	React.renderComponent(
	  NoteComponent(),
	  document.getElementById('container')
	);
});
